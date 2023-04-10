async function Login() {
    try {
        let newPostForm = $('#loginForm');
        $.ajax({
            type: 'post',
            url: '/users/createSession',
            data: newPostForm.serialize(),
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