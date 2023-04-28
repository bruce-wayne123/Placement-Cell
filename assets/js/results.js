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
                Toastify({
                    text: "Results updated successfully",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            }, error: function (error) {
                console.log(error.responseText);
            }
        });
    } catch (error) {
        console.log("*********Error*********", error);
    }
}