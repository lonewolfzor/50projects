const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if(e.key ==='Enter') {
        setTimeout(()=> {
            e.target.value = ''
        }, 10)


        randomSelect()
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
   
    console.log(tags)

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    });
};


function randomSelect(){
    //number of times to highlight before pick
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlighter(randomTag)
        setTimeout(()=> {
            unhighlighter(randomTag)
        }, 100)
    }, 100)

    setTimeout(()=> {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlighter(randomTag)
        }, 100);
    }, 100* times)


}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlighter(tag) {
    tag.classList.add('highlight')
}

function unhighlighter(tag) {
    tag.classList.remove('highlight')
}