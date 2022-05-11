var body = 
{
    SetColor:function(color)
    {
        document.querySelector('body').style.color = color;
    },
    SetBGColor:function(color)
    {
        document.querySelector('body').style.backgroundColor = color;
    }
};
var links =
{
    SetColor:function(color)
    {
        var alinks = document.querySelectorAll('a');
        for(var i = 0; i < alinks.length; i++)
        {
            alinks[i].style.color = color;
        }
    }
};
var borders =
{
    SetBorderColor:function(color)
    {
        document.querySelector('h1').style.borderBottomColor = color;
        document.querySelector('#index').style.borderRightColor = color;
    }
};

function NightDayHandler(self)
{
    if(self.value === 'Go Night Mode')
    {
        body.SetBGColor('black');
        body.SetColor('white');
        links.SetColor('white');
        borders.SetBorderColor('white');
        self.value = 'Go Day Mode';
    }
    else
    {
        body.SetBGColor('white');
        body.SetColor('black');
        links.SetColor('black');
        borders.SetBorderColor('black');
        self.value = 'Go Night Mode';
    }
}