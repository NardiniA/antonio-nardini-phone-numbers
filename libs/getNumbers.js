import axios from "axios";

const urlStructure = "https://cors-proxy-application.herokuapp.com/https://www.thephonebook.bt.com/Person/PersonSearch/";

const fetchNumbers = async (letter, data) => {
    const newNumbers = [];
    const { town, street } = data;
    const url = `${urlStructure}?Surname=${letter},&Location=${town}&Street=${street}`;

    try {
        const res = await axios.get(url);

        if (res.status === 200) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(res.data, "text/html");
            const container = doc.querySelectorAll(".mb-3.border.border-dark.px-3");

            if (container) {
                container.forEach((element) => {
                    const row = {
                        name: element
                            .querySelector("span.black.medium")
                            .textContent.trim(),
                        address: element
                            .querySelector("div.row.my-auto.align-self-center")
                            .textContent.trim(),
                        tel: element
                            .querySelector("div.ml-3.d-inline.light-blue.my-auto.no-wrap > a.no-hover")
                            .getAttribute("href").replace("tel:", ""),
                    };

                    newNumbers.push(row);
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
    return newNumbers.flat();
}

export const getNumbers = async (data) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return new Promise((resolve) => {
        const numbers = alphabet.map(async (letter) => fetchNumbers(letter, data));
        resolve(numbers);
    })
}