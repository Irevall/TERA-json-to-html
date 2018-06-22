function checkChanges() {
    document.querySelectorAll('input[type=checkbox]').forEach((element, index) => {
        element.addEventListener('change', (e) => {
            console.log('index: ' + index);
            console.log('event: ');
            console.log(e);
            // if(this.checked) {
            //     // Checkbox is checked..
            // } else {
            //     // Checkbox is not checked..
            // }
        });
    });
}

function hideElements() {
    document.querySelector('.row').querySelectorAll('div').forEach((element, index) => {
        if (index >= 5 && index <= 11) {
            element.addEventListener('click', () => {
                console.log(index);
                document.querySelectorAll('.row').forEach((element2, index2) => {
                    if (index2 === 0) {
                        return false;
                    } else {
                        element2.querySelector('div:nth-child(' + (index + 1) + ')').classList.remove('hidden');
                        element2.querySelector('div:nth-child(' + (index + 1) + ')').classList.add('visible');
                    }
                });
            })
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    checkChanges();
    hideElements();
});


const daikatana = {
    'Mazin.Kaiser': ['Fatooma', 'Kingrai', 'Meiko.Shirakii', 'Miss.Kaiser', 'Akuma.kaiser', 'Count.Kaiser', 'Grendizer.kaiser', 'Kaiser.Exo'],
    'Mini.Setesh': ['Khonsu', 'Mini.Osiris'],
    'Kawaii.grill': ['Kawaii.Bulbo', 'Yko'],
    'Nikki.Arkest': ['Lina.Arkest', 'Merrick.Arkest', 'Ruby.Arkest'],
    'Mereida': ['Lucky.Charm', 'Meneidä', 'Mirä-chän', 'Tulina'],
    'Raikira': ['Raikina', 'Roaronoa', 'Raikillua', 'Raiichuu', 'Raiki', 'Raikita'],
    'Skormy': ['Skorbe', 'Skorbulancer', 'Skorcerer', 'Skorcher', 'Skorkyrie', 'Skorlynne', 'Skornja', 'Skorpri', 'Skorpurr', 'Skorrawline', 'Skorrior', 'Skory', 'Skoryer', 'Skorynne'],
    'Suzi': ['suzyi', 'dilisorc', 'takemaballs', 'andiko', 'dilia'],
    'Prav': ['W.Prav', 'Pravler', 'G.Prav'],
    'Tiltlyn': ['Achu', 'Blanko', 'Zenyte', 'Spectral', 'Lyniph'],
    'Ällaya': ['Ariadn.e', 'Fällïna', 'Miny.a', 'Aërith'],
    'The.Blanker': ['Blanko'],
    'King.sslayer': ['Coldfiresy', 'Deadlyfiresy', 'Fireskullsy'],
    'omg.brunette': ['Exoluis_W'],
    'Morrandai': ['Faldorn', 'Allandras'],
    'Gam_Den': [],
    'Cataleä': ['Kataleïa', 'Catameia', 'Cataluïa'],
    'Lyria-chan': ['Lyirix', 'Yuraiyka', 'Tarik.Farrah', 'Lyirai', 'Lyira', 'Kan.U'],
    'Kebu': ['minikebu', 'Kebudos', 'Shawarma'],
    'A.dox': ['Molgron', 'T.Adox'],
    'Thelight': ['Ninga', 'Mr.Gazawe'],
    'Ninji': ['Ninjii.Sorc', 'Ninjiikun'],
    'No.Escape': ['Princess.Julia'],
    'Smyrnaa': ['Smyrna', 'Puntta'],
    'Csillagocska': ['Pink.Csillag', 'Hullo.Csillag', 'Csillagfeny', 'Morci.Csillag'],
    'play.doll': ['play-toy'],
    'Santa': ['Ratpatrol'],
    'Adälyn': ['Shiriaki', 'Daianoia', 'Shieraki'],
    'Rooooocket': ['Sklver'],
    'Inter.Stellar': ['Tessla'],
    'Valeryiah': ['Valandiel'],
    'Torcy': ['Yullissa', 'Skyilla', 'Paxslx', 'Deonna'],
    'Namastre': ['Name.Crush', 'Enryo', 'Namecut', 'Naslash'],
    'Emlyn': ['Eleora'],
    'Dammu': ['Sausage'],
    //'narianna': ['Serrenna'],
    'Adraeel': ['Arkaeel', 'Asod', 'Darkflame.iq']
};