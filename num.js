
const form = document.querySelector("form");

form.addEventListener('submit', async function (e) {

    e.preventDefault();
    const facttype = document.querySelector('input[name="type"]:checked').value;
    const input = form.elements.number;


    const res = await axios.get(`http://numbersapi.com/${input.value}/${facttype}`);

    const resline = document.querySelector("#res");
    resline.textContent = res.data;
    input.value = '';

});
