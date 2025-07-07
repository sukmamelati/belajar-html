const books = [
    { title: "Dasar-Dasar .NET", author: "John Doe", publisher: "Gramedia", year: 2018, image: "images/buku 1.jpg" },
    { title: "Menguasai Python", author: "Jane Smith", publisher: "Elex Media", year: 2019, image: "images/buku 2.jpg" },
    { title: "Sistem Informasi", author: "Michael Brown", publisher: "Andi Offset", year: 2020, image: "images/buku 3.jpg" },
    { title: "Pemrograman Java", author: "Sarah Lee", publisher: "Gramedia", year: 2018, image: "images/buku 5.jpeg" },
    { title: "Struktur Data", author: "Alex Kim", publisher: "Rineka Cipta", year: 2018, image: "images/buku 4.png" },
    { title: "Sistem Operasi", author: "Chris Evans", publisher: "Elex Media", year: 2018, image: "images/buku 6.jpg" }
];

function searchBooks() {
    const keyword = document.getElementById("keyword").value.toLowerCase();
    const year = document.getElementById("year").value;
    const searchBy = document.querySelector('input[name="searchBy"]:checked').value;

    let result = books.filter(book => {
        switch (searchBy) {
            case "title":
                return book.title.toLowerCase().includes(keyword);
            case "author":
                return book.author.toLowerCase().includes(keyword);
            case "publisher":
                return book.publisher.toLowerCase().includes(keyword);
            case "titleYear":
                return book.title.toLowerCase().includes(keyword) && book.year == year;
            default:
                return false;
        }
    });

    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (result.length === 0) {
        resultDiv.innerHTML = "<p>No matching books found.</p>";
        return;
    }

    result.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <p>Year: ${book.year}</p>
        `;
        resultDiv.appendChild(bookCard);
    });
}
