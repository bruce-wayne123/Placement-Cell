var interviewData = [];

async function UpdateDetails() {
    $("select").each(function () {
        interviewData.push({ studentId: this.id, interviewStatus: this.value });
    });
    let interviewJSON = JSON.stringify(interviewData);
    const rawResponse = await fetch('/students/updateInterviewData', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: interviewJSON
  });
  // const content = await rawResponse.json();

  // console.log(content);
    // $.ajax({
    //     type: 'post',
    //     contentType: "application/json",
    //     url: '/students/updateInterviewData',
    //     data: interviewJSON,
    //     success: function (data) {
    //         console.log("Success", data);
    //     }, error: function (error) {
    //         console.log(error.responseText);
    //     }
    // });
}