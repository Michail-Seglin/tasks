// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false
const url = prompt('URL').trim();
if (url.slice(0,4) =='http' && url.lastIndexOf('.ru')>0|| url.lastIndexOf('.com')>0 && url.indexOf('/')>0 ) {
    console.log(true);
}
else {
    console.log(false);
}

