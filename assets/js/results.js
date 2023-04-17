async function SubmitData() {
    try {
        let resultsForm = $('#resultsForm');
        let apiUrl = `/results/submitResult`;
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