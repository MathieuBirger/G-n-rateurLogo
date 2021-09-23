import {animationsCode,listAnimation} from "./ressources/animation.js"
const getBaseURL = () => {
    return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
    style = `
    @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&display=swap');

    #logo {
        font-family: 'Grey Qo', cursive;
    }
    .flex-container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        }
    .flex-item-center {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        }
         `+animationsCode.replaceAll('#infinite#', '');
    html = `
    <div id="logo" class="flex-container">
    <div class="flex-item-center" id="textLogo">​dddd</div>
    <!-- <img src="./images/flammes.jpg" width=200> -->
    </div>
    <br>
    <h1>Logo</h1>
    Hauteur : 30 <input type="range" value=300 min=30 max=600 id="selecteurHauteur"> 600
        <br>
        Largeur : 30 <input type="range" value=300 min=30 max=1200 id="selecteurLargeur"> 1200
        <br>
        URL de l'image de fond : <input type="urlImage"id="urlImage">
         <br>
        Taille de l'image de fond : 30 <input type="range" value=300 min=30 max=1200 id="selecteurTailleImageFond"> 1200
                <br>
        Animation : <select name="animations" id="selecteurAnimationImage">
    <option value="">Choisir une animation</option>
                </select>
    <h1>Bordure du logo</h1>
    
        Largeur : 0 <input type="range" value=0 min=0 max=20 id="selecteurLargeurBordure"> 20
        <br>
        Couleur : <input type="color" id="selecteurCouleurBordure">
        <br>
        Radius : 0 <input type="range" value=0 min=0 max=20 id="selecteurRadiusBordure"> 20
        <br>
    <h1>Text du logo</h1>
        Couleur : <input type="color" id="selecteurCouleur">
        <br>
        Taille : 5 <input type="range" value=40 min=5 max=100 id="selecteurTaille"> 100
        <br>
        Text : <input type="textBox"id="inputTextLogo">
        <br>
        Animation : <select name="animations" id="selecteurAnimationText">
    <option value="">Choisir une animation</option>
                </select>
        <br>
             Animation infinie : <input type="checkbox" name="Infini" id="selecteurAnimationTextInfini">
  
                </input>
        <br>
    <button id="sauvegarder"> Sauvegarder </button>
    <button id="charger"> Charger </button>
    `;

    constructor() {

        super();
        // On crée le "shadow DOM"
        this.attachShadow({mode: "open"});

        // récupérer les propriétés/attributs HTML
        this.couleur = this.getAttribute("couleur");
        if (!this.couleur) this.couleur = "black";

        if (!this.couleurBordure) this.couleurBordure = "black";

        console.log("couleur récupérée = " + this.couleur);

        this.text = this.getAttribute("text");
      //  this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        this.size = this.getAttribute("size");



    }

    tryToValorise() {
        let parametres = new URLSearchParams(window.location.search);
         console.log(parametres.entries())
             for (let p of parametres.entries()) {
                 console.log(p);
                 if(p[0]=="1") {
                     this.changeCouleur(this.utf8_to_str(decodeURI(p[1])));
                     this.shadowRoot.querySelector("#selecteurCouleur").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="2") {
                    this.setUrlImage(this.utf8_to_str(decodeURI(p[1])));
                     this.shadowRoot.querySelector("#urlImage").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                }
                if(p[0]=="3") {
                    this.changeSize(p[1]);
                    this.shadowRoot.querySelector("#selecteurTaille").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                }
                 if(p[0]=="4") {
                     this.changeHauteur(p[1]);
                     this.shadowRoot.querySelector("#selecteurHauteur").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="5") {
                     this.changeLargeurBordure(p[1]);
                     this.shadowRoot.querySelector("#selecteurLargeurBordure").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="6") {
                     this.changeCouleurBordure(this.utf8_to_str(decodeURI(p[1])));
                     this.shadowRoot.querySelector("#selecteurCouleurBordure").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="7") {
                     this.selecteurRadiusBordure(p[1]);
                     this.shadowRoot.querySelector("#selecteurRadiusBordure").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="8") {
                     this.changerTextLogo(p[1]);
                     this.shadowRoot.querySelector("#inputTextLogo").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="9") {
                     this.changeLargeur(p[1]);
                     this.shadowRoot.querySelector("#selecteurLargeur").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
                 if(p[0]=="10") {
                     this.selecteurTailleImageFond(p[1]);
                     this.shadowRoot.querySelector("#selecteurTailleImageFond").setAttribute("value",this.utf8_to_str(decodeURI(p[1])))
                 }
          
     }
     
    }

    utf8_to_str(a) {

        return decodeURIComponent(a)
    }
     sauvegarder(){

        var searchParams = new URLSearchParams("");
        if(this.changeCouleurvalue ) {
            searchParams.append("1", this.changeCouleurvalue);
        }
        if(this.urlImageValue ) {
            searchParams.append("2", this.urlImageValue)
        }
        if(this.changeSizeValue ) {
            searchParams.append("3", this.changeSizeValue)
        }
         if(this.changeHauteurValue ) {
             searchParams.append("4", this.changeHauteurValue)
         }
         if(this.changeLargeurBordureValue ) {
             searchParams.append("5", this.changeLargeurBordureValue)
         }
         if(this.changeCouleurBordureValue ) {
             searchParams.append("6", this.changeCouleurBordureValue)
         }
         if(this.radiusValue ) {
             searchParams.append("7", this.radiusValue)
         }
         if(this.textLogoValue ) {
             searchParams.append("8", this.textLogoValue)
         }
         if(this.changeLargeurValue ) {
             searchParams.append("9", this.changeLargeurValue)
         }
         if(this.selecteurTailleImageFondValue ) {
             searchParams.append("10", this.selecteurTailleImageFondValue)
         }
        this.savedURL = window.location.href.split('?')[0]+"?"+encodeURI(searchParams);
        
       /* var copyText = document.getElementById("savedURL");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");*/
       
        console.log(encodeURI(this.savedURL));
        this.active = true;
    }

    connectedCallback() {
        // ici on instancie l'interface graphique etc.
        this.shadowRoot.innerHTML = `<style>${this.style}</style>`
            + this.html;

        this.textLogo = this.shadowRoot.querySelector("#textLogo");
        this.logo = this.shadowRoot.querySelector("#logo");
        // affecter les valeurs des attributs à la création
        this.logo.style.color = this.couleur;

        this.declareEcouteurs();

        // On modifie les URLs relatifs
        this.fixRelativeURLs();
        this.tryToValorise();

        let selectAnimationText = this.shadowRoot.querySelector("#selecteurAnimationText");
        let selectAnimationImage = this.shadowRoot.querySelector("#selecteurAnimationImage");
        for (let animation  in listAnimation){
            var opt =document.createElement('option');
            opt.value = listAnimation[animation];
            opt.innerHTML = listAnimation[animation];
            let opt2 = opt.cloneNode(true)
            selectAnimationText.appendChild(opt);
            selectAnimationImage.appendChild(opt2);
        }

    }

    fixRelativeURLs() {
        let images = this.shadowRoot.querySelectorAll('img');
        images.forEach((e) => {
            console.log("dans le foreach")
            let imagePath = e.getAttribute('src');
            e.src = getBaseURL() + '/' + imagePath;
        });

        //console.log(getBaseURL() +  "images/flammes.jpg")
        this.logo.style.background = "url(" + getBaseURL() + "images/flammes.jpg)";
    }

    declareEcouteurs() {
        this.shadowRoot.querySelector("#selecteurCouleur")
            .addEventListener("input", (event) => {
                this.changeCouleur(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurTaille")
            .addEventListener("input", (event) => {
                this.changeSize(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurHauteur")
            .addEventListener("input", (event) => {
                this.changeHauteur(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurLargeur")
            .addEventListener("input", (event) => {
                this.changeLargeur(event.target.value);
            });

        this.shadowRoot.querySelector("#selecteurLargeurBordure")
            .addEventListener("input", (event) => {
                this.changeLargeurBordure(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurCouleurBordure")
            .addEventListener("input", (event) => {
                this.changeCouleurBordure(event.target.value);
            });
        this.shadowRoot.querySelector("#inputTextLogo")
            .addEventListener("input", (event) => {
                this.changerTextLogo(event.target.value);
            });
        this.shadowRoot.querySelector("#selecteurRadiusBordure")
            .addEventListener("input", (event) => {
                this.selecteurRadiusBordure(event.target.value);
            });
        this.shadowRoot.querySelector("#urlImage")
            .addEventListener("input", (event) => {
                this.setUrlImage(event.target.value);
            });
        this.shadowRoot.querySelector("#sauvegarder")
            .addEventListener("click", () => {
                this.sauvegarder();
            });
        this.shadowRoot.querySelector("#charger")
            .addEventListener("click", () => {
                    this.tryToValorise()
            });
        this.shadowRoot.querySelector("#selecteurTailleImageFond")
            .addEventListener("input", (event) => {
                this.selecteurTailleImageFond(event.target.value)
            });
        this.shadowRoot.querySelector("#selecteurAnimationText")
            .addEventListener("input", (event) => {
                this.selecteurAnimationText(event.target.value)
            });
        this.shadowRoot.querySelector("#selecteurAnimationTextInfini")
            .addEventListener("input", (event) => {
                this.selecteurAnimationTextInfini(event.target.value)
            });



    }


    // Fonction
    changeCouleur(val) {
        this.logo.style.color = val;
        this.changeCouleurvalue = val;
    }

    changeSize(val) {
        this.logo.style.fontSize = val + "px";
        this.changeSizeValue = val;
    }

    changeLargeur(val) {
        this.logo.style.width = val + "px";
        this.changeLargeurValue = val;
    }

    changeHauteur(val) {
        this.logo.style.height = val + "px";
        this.changeHauteurValue = val;
    }

    changeLargeurBordure(val) {
        this.largeurBordure = val + "px ";
        // this.logo.style.border = val+"px ";
        this.construireBordure();
        this.changeLargeurBordureValue = val;
    }

    changeCouleurBordure(val) {
        this.couleurBordure = val;
        this.construireBordure();
        this.changeCouleurBordureValue =  val;
    }

    changerTextLogo(val) {
        if (val == "") {
            console.log("vide")
            val = "​"
        }
        this.textLogo.innerText = val;
        this.textLogoValue = val;

    }

    construireBordure() {
        this.logo.style.border = this.largeurBordure + this.couleurBordure + " solid";
    }
    selecteurRadiusBordure(val) {

        this.logo.style.borderRadius = val + "px";
        console.log("radius")
        this.radiusValue = val;
    }
    setUrlImage(val){
    try{
        console.log(val)
        this.logo.style.background = "url("+val+")";
        this.urlImageValue = encodeURI(val);
    }
    catch (e) {
    console.log(e)
    }
    }

    selecteurTailleImageFond(val){
        this.logo.style.backgroundSize  = val+ "px"
       this.selecteurTailleImageFondValue = val;
    }
    selecteurAnimationText(val){
        console.log("HELP"+val);
        this.logo.classList.remove(this.logo.classList.item(1))
        console.log(this.logo.classList)
        this.logo.classList.add(val)
        this.animationClass  = val;
        this.textLogo.classList.add(val)
        this.selecteurTailleImageFondValue = val;

    }
    selecteurAnimationTextInfini(val){
        this.style = `
    @import url('https://fonts.googleapis.com/css2?family=Grey+Qo&display=swap');

    #logo {
        font-family: 'Grey Qo', cursive;
    }
    .flex-container {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: stretch;
        -ms-flex-line-pack: stretch;
        align-content: stretch;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        }
    .flex-item-center {
        -webkit-order: 0;
        -ms-flex-order: 0;
        order: 0;
        -webkit-flex: 0 1 auto;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        -webkit-align-self: auto;
        -ms-flex-item-align: auto;
        align-self: auto;
        }
         `+animationsCode.replaceAll('#infinite#', 'infinite');
        console.log("uesh")
        this.shadowRoot.innerHTML = `<style>${this.style}</style>`
    }

}

customElements.define("my-logo", MyLogo);
