const fetchPokemonName = () => {
    const pokeNameInput = document.getElementById("pokemonName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);

        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let img=data.sprites.front_default;
            let generalData=[data.types[0].type.name,data.height,data.weight];
            let stats=data.stats;
            let moves=data.moves;
            pokeImage(img);
            pokeBaseData(data.name, data.id);
            pokeBase(generalData);
            pokeStats(stats);
            pokeMoves(moves,moves.length);
        }
    });
}
const fetchPokemonNo = () => {
    const pokeNoInput = document.getElementById("pokemonNo");
    let pokeNo = pokeNoInput.value;
    pokeNo = pokeNo.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeNo}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let img=data.sprites.front_default;
            let generalData=[data.types[0].type.name,data.height,data.weight];
            let stats=data.stats;
            let moves=data.moves;
            pokeImage(img);
            pokeBaseData(data.name, data.id);
            pokeBase(generalData);
            pokeStats(stats);
            pokeMoves(moves,moves.length);
        }
    });
}
const pokeBaseData = (name, no)=>{
    let pkName=document.getElementById("pokemonName");
    let pkNo=document.getElementById("pokemonNo");
    pkName.value=name;
    pkNo.value=no;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokemonImg");
    pokePhoto.src = url;
    pokePhoto.style.backgroundColor='#E4AEC5';
    pokePhoto.style.borderRadius='100px';

}
const pokeBase = (baseData) => {
    const pkData = document.getElementById("pokeGData");
    pkData.innerHTML='';
    for(var i=0;i<=2;i++) {
        let dat = document.createElement("li");
        dat.appendChild(document.createTextNode(baseData[i]));
        pkData.appendChild(dat);
    }
}
const pokeStats=(sts)=>{
    const pksts = document.getElementById("stats");
    pksts.innerHTML='';
    for(let i=0; i<=5; i++) {
        let dat = document.createElement("li");
        dat.appendChild(document.createTextNode(sts[i].base_stat));
        pksts.appendChild(dat);
    }
}
const pokeMoves=(moves,totalMoves)=>{
    const pkmoves = document.getElementById("moves");
    pkmoves.innerHTML='';
    let dat = document.createElement("li");
    dat.className='totalMoves';
    dat.appendChild(document.createTextNode('Total moves: '+totalMoves));
    pkmoves.appendChild(dat);
    for(let i=0; i<=totalMoves-1; i++) {
        let dat = document.createElement("li");
        dat.appendChild(document.createTextNode(moves[i].move.name));
        pkmoves.appendChild(dat);
    }
}