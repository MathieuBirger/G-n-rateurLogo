import {animationsCode,listAnimation} from "./ressources/animation.js"
import {listFonts} from "./ressources/fonts.js"
const getBaseURL = () => {
    return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
    style = `
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
         `+animationsCode;
    html = `
<link href='https://fonts.googleapis.com/css2?family=Dancing+Script' rel='stylesheet' type='text/css'>
<table>
<thead>
  <tr>
    <td> 
    
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
                 <br>
             Animation infinie : <input type="checkbox" name="Infini" id="selecteurAnimationLogoInfini">
  
                </input>
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
        Taille : 5 <input type="range" value=40 min=5 max=400 id="selecteurTaille"> 400
        <br>
        Police : <select name="police" id="selecteurPoliceText">
    <option value="">Choisir une police</option>
                </select>
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
        <br>
        <br>
    <button id="sauvegarder">Sauvegarder le lien</button>
    <br>
     <button id="generer">Générer la balise</button>
    <br>
  <input style="visibility: hidden" type="textBox"id="savedURL">

    </td>
    <td style="width:200px ">
    
</td>
    <td> 
     <div id="logo" class="flex-container">
     <div class="flex-item-center" id="textLogo">​</div>
     </td>
     
  </tr>
</thead>
</table>
  
   
    `;

    constructor() {

        super();
        // On crée le "shadow DOM"
        this.attachShadow({mode: "open"});

        // récupérer les propriétés/attributs HTML

        if (!this.couleur) this.couleur = "black";


        if (!this.couleurBordure) this.couleurBordure = "black";

        console.log("couleur récupérée = " + this.couleur);

        this.text = this.getAttribute("text");
      //  this.animationClass = this.getAttribute("animation");
        this.controls = this.getAttribute("controls");
        this.size = this.getAttribute("size");

    }
    addStylesheetURL(url) {
        console.log("ajout")
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
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
                     this.changerTextLogo(this.utf8_to_str(decodeURI(p[1])));
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
                 if(p[0]=="11") {
                     if(p[1] == "true")
                         p[1] = true
                     this.selecteurAnimationLogoInfini(p[1]);
                     this.shadowRoot.querySelector("#selecteurAnimationLogoInfini").setAttribute("checked",p[1])
                 }
                 if(p[0]=="12") {
                     this.selecteurAnimationText(p[1]);
                     this.shadowRoot.querySelector("#selecteurAnimationText").value = this.utf8_to_str(decodeURI(p[1]))

                 }
                 if(p[0]=="13") {
                     if(p[1] == "true")
                         p[1] = true
                     this.selecteurAnimationTextInfini(p[1]);
                     this.shadowRoot.querySelector("#selecteurAnimationTextInfini").setAttribute("checked", p[1])
                 }
                 if(p[0]=="14") {
                     this.selecteurAnimationImage(p[1]);
                     this.shadowRoot.querySelector("#selecteurAnimationImage").value = this.utf8_to_str(decodeURI(p[1]))
                 }
                 if(p[0]=="15") {
                     this.selecteurPoliceText(p[1]);
                     this.shadowRoot.querySelector("#selecteurPoliceText").value = this.utf8_to_str(decodeURI(p[1]))
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
         if(this.selecteurAnimationLogoInfiniValue ) {
             searchParams.append("11", this.selecteurAnimationLogoInfiniValue)
         }
         if(this.selecteurAnimationTextValue ) {
             searchParams.append("12", this.selecteurAnimationTextValue)
         }
         if(this.selecteurAnimationTextInfiniValue ) {
             searchParams.append("13", this.selecteurAnimationTextInfiniValue)
         }
         if(this.selecteurAnimationImageValue ) {
             searchParams.append("14", this.selecteurAnimationImageValue)
         }
         if(this.selecteurPoliceTextValue ) {
             searchParams.append("15", this.selecteurPoliceTextValue)
         }
        this.savedURL = window.location.href.split('?')[0]+"?"+encodeURI(searchParams);


        
        var copyText =  this.shadowRoot.querySelector("#savedURL");
         copyText.style.visibility="visible"
        copyText.value=encodeURI(this.savedURL)
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
         copyText.style.visibility="hidden"
         alert("lien sauvegardé dans le presse papier");
        this.active = true;
    }
  generer(){

        let balise = "<my-logo "
        if(this.changeCouleurvalue ) {
            balise = balise +'Couleur="' + this.changeCouleurvalue+'" '
        }
        if(this.urlImageValue ) {
            balise = balise +'UrlImage="' + this.urlImageValue+'" '
        }
        if(this.changeSizeValue ) {
            balise = balise +'Taille="' + this.changeSizeValue+'" '
        }
         if(this.changeHauteurValue ) {
             balise = balise +'Hauteur="' + this.changeHauteurValue+'" '
         }
         if(this.changeLargeurBordureValue ) {
             balise = balise +'LargeurBordure="' + this.changeLargeurBordureValue+'" '
         }
         if(this.changeCouleurBordureValue ) {
             balise = balise +'CouleurBordure="' + this.changeCouleurBordureValue+'" '
         }
         if(this.radiusValue ) {
             balise = balise +'RadiusBordure="' + this.radiusValue+'" '
         }
         if(this.textLogoValue ) {
             balise = balise +'TextLogo="' + this.textLogoValue+'" '
         }
         if(this.changeLargeurValue ) {
             balise = balise +'Largeur="' + this.changeLargeurValue+'" '
         }
         if(this.selecteurTailleImageFondValue ) {
             balise = balise +'TailleImageFond="' + this.selecteurTailleImageFondValue+'" '
         }
         if(this.selecteurAnimationLogoInfiniValue ) {
             balise = balise +'AnimationLogoInfini="' + this.selecteurAnimationLogoInfiniValue+'" '
         }
         if(this.selecteurAnimationTextValue ) {
             balise = balise +'AnimationText="' + this.selecteurAnimationTextValue+'" '
         }
         if(this.selecteurAnimationTextInfiniValue ) {
             balise = balise +'AnimationTextInfini="' + this.selecteurAnimationTextInfiniValue+'" '
         }
         if(this.selecteurAnimationImageValue ) {
             balise = balise +'AnimationImage="' + this.selecteurAnimationImageValue+'" '
         }
         if(this.selecteurPoliceTextValue ) {
             balise = balise +'PoliceText="' + this.selecteurPoliceTextValue+'" '
         }
         balise = balise +"> \n </my-logo>"
      var copyText =  this.shadowRoot.querySelector("#savedURL");
      copyText.style.visibility="visible"
      copyText.value=balise
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
      copyText.style.visibility="hidden"
      alert("La balise a été copiée dans le presse papier");
    }

    connectedCallback() {
        if(this.getAttribute("creation") == "true") {
            // ici on instancie l'interface graphique etc.
         //   let logoNode = this.logo.cloneNode(true).outerHTML
           // console.log("<style>" + this.style + "</style>" + logoNode);
            this.shadowRoot.innerHTML = `<style>${this.style}</style>`
                + this.html;

            this.textLogo = this.shadowRoot.querySelector("#textLogo");
            this.logo = this.shadowRoot.querySelector("#logo");
            // affecter les valeurs des attributs à la création
            this.logo.style.color = this.couleur;

            this.declareEcouteurs();

            // On modifie les URLs relatifs
            this.fixRelativeURLs();


            let selectAnimationText = this.shadowRoot.querySelector("#selecteurAnimationText");
            let selectAnimationImage = this.shadowRoot.querySelector("#selecteurAnimationImage");
            let selectPoliceText = this.shadowRoot.querySelector("#selecteurPoliceText");
            for (let animation in listAnimation) {
                var opt = document.createElement('option');
                opt.value = listAnimation[animation];
                opt.innerHTML = listAnimation[animation];
                let opt2 = opt.cloneNode(true)
                selectAnimationText.appendChild(opt);
                selectAnimationImage.appendChild(opt2);
            }
            for (let font in listFonts) {
                var opt = document.createElement('option');
                opt.value = listFonts[font];
                opt.innerHTML = listFonts[font];
                selectPoliceText.appendChild(opt)
            }
            this.setUrlImage("https://cdn.radiofrance.fr/s3/cruiser-production/2020/09/f6f29b37-6952-40f6-829a-701b8db7fdea/1200x680_gettyimages-947552842_1.jpg");
            this.changeLargeur(300);
            this.changeHauteur(300);
            this.tryToValorise();
        }
        else {
            this.shadowRoot.innerHTML = `<style>${this.style}</style>`
            + this.html;
            this.textLogo = this.shadowRoot.querySelector("#textLogo");
            this.logo = this.shadowRoot.querySelector("#logo");
            // affecter les valeurs des attributs à la création
            this.logo.style.color = this.couleur;

            this.declareEcouteurs();

            // On modifie les URLs relatifs
            this.fixRelativeURLs();

            if (this.getAttribute("Couleur") != null)
                this.changeCouleur(this.getAttribute("Couleur"));
            if (this.getAttribute("UrlImage") != null)
                this.setUrlImage(this.getAttribute("UrlImage"));
            if (this.getAttribute("Taille") != null)
                this.changeSize(this.getAttribute("Taille"));
            if (this.getAttribute("Hauteur") != null)
                this.changeHauteur(this.getAttribute("Hauteur"));
            if (this.getAttribute("LargeurBordure") != null)
                this.changeLargeurBordure(this.getAttribute("LargeurBordure"));
            if (this.getAttribute("CouleurBordure") != null)
                this.changeCouleurBordure(this.getAttribute("CouleurBordure"));
            if (this.getAttribute("RadiusBordure") != null)
                this.selecteurRadiusBordure(this.getAttribute("RadiusBordure"));
            if (this.getAttribute("TextLogo") != null)
                this.changerTextLogo(this.getAttribute("TextLogo"));
            if (this.getAttribute("Largeur") != null)
                this.changeLargeur(this.getAttribute("Largeur"));
            if (this.getAttribute("TailleImageFond") != null)
                this.selecteurTailleImageFond(this.getAttribute("TailleImageFond"));
            if (this.getAttribute("AnimationLogoInfini") != null)
                this.selecteurAnimationLogoInfini(this.getAttribute("AnimationLogoInfini"));
            if (this.getAttribute("AnimationText") != null)
                this.selecteurAnimationText(this.getAttribute("AnimationText"));
            if (this.getAttribute("AnimationTextInfini") != null)
                this.selecteurAnimationTextInfini(this.getAttribute("AnimationTextInfini"));
            if (this.getAttribute("AnimationImage") != null)
                this.selecteurAnimationImage(this.getAttribute("AnimationImage"));
            if (this.getAttribute("PoliceText") != null)
                this.selecteurPoliceText(this.getAttribute("PoliceText"));
            this.shadowRoot.innerHTML = `<style>${this.style}</style>`
                + this.logo.outerHTML;

        }
    }

    fixRelativeURLs() {
        let images = this.shadowRoot.querySelectorAll('img');
        images.forEach((e) => {
            console.log("dans le foreach")
            let imagePath = e.getAttribute('src');
            e.src = getBaseURL() + '/' + imagePath;
        });
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
                this.selecteurAnimationTextInfini(event.target.checked)
            });
        this.shadowRoot.querySelector("#selecteurAnimationImage")
            .addEventListener("input", (event) => {
                this.selecteurAnimationImage(event.target.value)
            });

        this.shadowRoot.querySelector("#selecteurAnimationLogoInfini")
            .addEventListener("input", (event) => {
                this.selecteurAnimationLogoInfini(event.target.checked)
            });
        this.shadowRoot.querySelector("#selecteurPoliceText")
            .addEventListener("input", (event) => {
                this.selecteurPoliceText(event.target.value)
            });
        this.shadowRoot.querySelector("#generer")
            .addEventListener("click", () => {
                this.generer()
            });



    }


    // Fonction
    changeCouleur(val) {
        console.log(val)
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

        this.animationClass  = val;
        this.textLogo.classList.remove(this.textLogo.classList.item(1))
        this.textLogo.classList.add(val)
        this.selecteurAnimationTextValue = val;
    }
    selecteurAnimationTextInfini(val){
        if(val == "true")
            val = true
        if (val == true) {
            this.textLogo.style.animationIterationCount = "infinite";
        }
        else
            this.textLogo.style.animationIterationCount = "";
        this.selecteurAnimationTextInfiniValue = val;
    }
    selecteurAnimationLogoInfini(val){
        if(val == "true")
            val = true
        if (val == true) {
            this.logo.style.animationIterationCount = "infinite";
        }
        else
            this.logo.style.animationIterationCount = "";
        this.selecteurAnimationLogoInfiniValue = val;
    }
    selecteurAnimationImage(val){
        this.logo.classList.remove(this.logo.classList.item(1))
        console.log(this.logo.classList)
        this.logo.classList.add(val)
        this.selecteurAnimationImageValue = val;
    }
    charger(){
        this.textLogo.style.fontFamily = "Dancing Script, serif";
    }
    selecteurPoliceText(val){
        console.log(val)
        this.addStylesheetURL("https://fonts.googleapis.com/css2?family="+val+"&display=swap");
        this.textLogo.style.fontFamily = val;
        this.selecteurPoliceTextValue = val;
    }
}

customElements.define("my-logo", MyLogo);
