//contoh function objek.
const manusia = {
    name: 'Julia',
    lastName: 'Veronica',

    //cara 1 menggunakan function.
    // getFullName: function(){

    // }

    //cara 2 menggunkan function.
    getFullName(){
        // manusia.name jarnag dipakai karena nama function akan berubah-ubah
        return `${this.name} ${this.lastName}`
    },
    changeName(namaYangDiubah){
        this.name = namaYangDiubah;
    },
    setAnak(...args){
        let anakArray = [];
        for (let anak of args){
            anakArray.push(anak);
        }
        this.anak = anakArray;
    },
    getAnak(){
        return this.anak;
    }
}
console.log(manusia.getFullName());//untuk ambil nama lengkap.

let namaLengkap = manusia.getFullName();//nama lengkap dari function manusia.
console.log(namaLengkap);//console.log akan menampilkan hasil dari function nama lengkap.

manusia.changeName('test');//ubah nama misal 'test'.
namaLengkap = manusia.getFullName();//ambil nama yang baru dibuat.
console.log(namaLengkap);//menampilkan hasil dari nama yang baru diubah.

//date function.
const date = new Date();
const tanggal = `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()}`
console.log(`tanggal hari ini adalah: ${tanggal}`);

//destructure.

//cara 1.
// const name= manusia.name;
// const lastName = manusia.lastName;

//cara 2 terefisien.
const {name, lastName} = manusia;
console.log(`${name} ${lastName}`);

//learn dom event listener (button).
document.querySelector('#click').addEventListener('click', (event) =>{//untuk button 1.
    const stringHTML = '<button class = "btn btn-danger">Awas</button>';//button kedua (dalam button 1).
    // document.getElementById('content'). innerHTML= stringHTML //cara 1.
    document.getElementById('content'). innerHTML += stringHTML //cara 2.
    // window.alert('saya tekan klik')
});