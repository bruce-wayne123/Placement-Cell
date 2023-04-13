async function SubmitData() {
    try {
        let resultsForm = $('#resultsForm');
        var studentLabel=$('#studentIdLabel');
        let studentId =studentLabel.text();
        let apiUrl = `/results/submitResult/?id=${studentId}`;
        console.log(apiUrl);
        let formData = resultsForm.serialize();
        $.ajax({
            type: 'post',
            url: apiUrl,
            data: formData,
            success: function (data) {
                console.log("Post API successfull")
            }, error: function (error) {
                console.log(error.responseText);
            }
        });
    } catch (error) {
        console.log("*********Error*********", error);
    }
}