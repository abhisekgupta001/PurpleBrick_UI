const ratingInput = document.querySelectorAll(".rating-input");

ratingInput.forEach((item,id) => {
    item.addEventListener("change", () => checkUncheckStars(id));
});

function checkUncheckStars(idp)
{
    if(ratingInput[idp].checked)
    {
        for(let i=idp-1; i >= 0; i--)
        {
            ratingInput[i].checked = true;
        }
    }
    else
    {
        for(let j=idp+1; j<ratingInput.length; j++)
        {
            ratingInput[j].checked = false;
        }
    }
}


