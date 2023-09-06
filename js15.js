var sampleArrayData = [
    'item1',
    'item2',
    'item3',
    'item4'
]

var arrayObject = [
    {
        "name":"farzad",
        "age":"40",
        "image":"https://picsum.photos/200/200?random=1"
    },
    {
        "name":"rahim",
        "age":"40",
        "image":"https://picsum.photos/200/200?random=2"
    },
    {
        "name":"mobin",
        "age":"16",
        "image":"https://picsum.photos/200/200?random=3"
    },
    {
        "name":"melorin",
        "age":"3",
        "image":"https://picsum.photos/200/200?random=4"
    },
]

function createList(){
    var root = document.getElementById('root');
    var far = 'farzad'
    var listHtml = '';

    for(var item of sampleArrayData)
    {
        listHtml += `
                    <li>
                        ${item}
                    </li>
        `;
    }
    var ul = document.createElement('ul')
    ul.innerHTML = listHtml
    root.appendChild(ul)

}

function createGallery()
{
    var root = document.getElementById('root')

    var gallery = '';
    
    for(var obj of arrayObject)
    {
        gallery += `
            <div>
                <img src="${obj.image}" />
                <h4>
                    Photo By : ${obj.name}
                </h4>
                <small>
                    Age : ${obj.age}
                </small>
            </div>
        `;
    }

    root.style.display = 'flex'
    root.style.flexDirection = 'row'
    root.innerHTML = gallery

}
// createGallery()

function createGalleryApi()
{
    var countryList = [];
    var root = document.getElementById('root')
    fetch('http://universities.hipolabs.com/search?country=United+States').
    then(response=> response.json()).
    then(result => {
        var resultList = '<ul>';
        for(var item of result)
        {
            resultList += `
                <li>
                    <h6>
                    ${item.name}
                    </h6>
                    <small>
                        ${item.web_pages}
                    </small>
                </li>
            `;
        }
        resultList += '</ul>'

        root.innerHTML = resultList
    })
}


createGalleryApi()