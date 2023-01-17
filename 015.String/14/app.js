// На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// заканчивается подстрокой .com или .ru, то вывести true, в противном случае false
const url = prompt('URL').trim();
if (url.slice(0,4) ==='http' && url.lastIndexOf()) {
    console.log(true);
}
else {
    console.log(false);
}

