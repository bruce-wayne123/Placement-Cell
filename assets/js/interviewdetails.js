var interviewData = [];

async function UpdateDetails() {
  $("select").each(function () {
    interviewData.push({ studentId: this.id, interviewStatus: this.value });
  });
  let interviewJSON = JSON.stringify(interviewData);
  const request = new Request('/students/updateInterviewData', {
    method: 'POST',
    body: JSON.stringify(interviewData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await fetch(request);
}