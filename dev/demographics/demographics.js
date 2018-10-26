Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

window.survey = new Survey.Model({
        questions: [
                { type: "radiogroup", name: "gender", isRequired: true, title: "What is your gender?", choices: ["Male", "Female", "Other", "Perfer not to say"]},
                
                { type: "radiogroup", name: "native", isRequired: true, title: "Are you a native English speaker", choices: ["Yes", "No"]},
                { type: "text", name: "native language", visibleIf: "{native}='No'", title: "Please indicate your native language or languages:"},                { type: "text", name: "languages", title: "What other languages do you speak?"},
                { type: "text", name: "age", title: "What is your age?", width: "auto"},
                { type: "radiogroup", name: "degree", isRequired: true, title: "What is the highest degree or level of education you have completed? If currently in school, please indicate your highest degree attained to date.", choices:["1|Less than high school", "2|High school diploma", "3|Some college, no degree", "4|Associate's degree", "5|Bachelor's degree", "6|Master's degree", "7|PhD, law, or medical degree", "NA|Prefer not to say"]},
            ]});


let demographicsCompleted = false;
function demographicsIsCompleted() {
    return demographicsCompleted;
}
let demographicsResponses = {};
function getDemographicsResponses() {
    return demographicsResponses;
}
survey.onComplete.add(function(result) {
    demographicsCompleted = true;
    demographicsResponses = result.data;
    // document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({ 
    model: survey 
});

$(document).ready(function(){
    survey.showCompletedPage = false;
    $('#surveyElement').find('.sv_complete_btn').attr('id', 'demographics-cmplt');
});
