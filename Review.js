const review = [
    {    id: 1,
        author:`Stephen Olabode`,
        job: `Web Developer`,
        img:`img-004.jpg`,
        content:`A web developer is a programmer or a coder who specializes in 
        or is specifically engaged in,the development of World Wide Web
         applications using a client–server model.
        The applications typically use HTML, CSS and JavaScript in the client, PHP,
         ASP.NET (C#), Python, Node.`

    },
    {
        id:2,
        author: `Cmayor`,
        job: `Accountant`,
        img: `img-001.jpg`,
        content:`An accountant is a person who records business transactions on behalf of an organization,
         reports on company performance to management, and issues financial statements.
          Here are several examples of the types of transactions in which an accountant may become involved:
        Issuing an invoice to a customer, which involves recording a sale and account receivable.`
    },
    {
        id:3,
        author:`Dev Oladayo`,
        job: `Full Stack Developer`,
        img: `img-002.JPG`,
        content: `A full stack web developer is a person who can develop both client and server software.
        In addition to mastering HTML and CSS, he/she also knows how to:
        Program a browser (like using JavaScript, jQuery, Angular, or Vue)
        Program a server (like using PHP, ASP, Python, or Node)
        Program a database (like using SQL, SQLite, or MongoDB)`
    },
    {
        id:4,
        author: `Dev GodSent`,
        job: `Dev Crypto Ethusiast`,
        img: `img-003.jpg`,
        content: `A person who is a proponent of cryptocurrencies and decentralized finance (DeFi).
         Crypto enthusiasts strongly believe in the decentralized blockchain architecture
         and feel that it solves many problems both financially and politically. See DeFi and crypto glossary.`
    }
]
const main = document.querySelector('.main')
const img = document.querySelector('.img');
const author = document.querySelector('.author');
const job = document.querySelector('.job');
const content = document.querySelector('.content');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const randomBtn = document.querySelector('.change')


randomBtn.addEventListener('click',() => {
 let rev = Math.trunc( Math.random() * 4)  ;
console.log(rev)
 img.src = review[rev].img;
 author.innerHTML = review[rev].author;
 job.innerHTML = review[rev].job;
 content.innerHTML = review[rev].content
})

btnPrev.addEventListener('click',)

