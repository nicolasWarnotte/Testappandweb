import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '../../../node_modules/@angular/forms';
import { controlNameBinding } from '../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name';
import { FileUploader } from '../../../node_modules/ng2-file-upload';


const URL = 'http://localhost:4200';

@Component({
  selector: 'app-infos-generale',
  templateUrl: './infos-generale.component.html',
  styleUrls: ['./infos-generale.component.css']
})
export class InfosGeneraleComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  days = new Array('lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche');

    step = 0;
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
  
  private _myForm: FormGroup;
  get myForm(): FormGroup{
    return this._myForm;
  }
  set myForm(value : FormGroup){
    this._myForm = value;
  }
  private _output : {
    nomCommercial : string,
    adresseCommerciale: string,
    codePostal: number,
    ville:string,
    telephone:number,
    portable:number,
    fax:number,
    email:string,
    siteWeb:string,
    nom:string,
    secteur:string,
    sousSecteur:string,
    description:string,
    centreVille:boolean,
    pmr:boolean,
    typeHeure:string,
    lundiDeMatin: string,
    lundiAMatin: string,
    lundiDeSoir: string,
    lundiASoir: string,
    lundiRdv:boolean,
    lundiMidi:boolean,
    mardiDeMatin: string,
    mardiAMatin: string,
    mardiDeSoir: string,
    mardiASoir: string,
    mardiRdv:boolean,
    mardiMidi:boolean,
    mercrediDeMatin: string,
    mercrediAMatin: string,
    mercrediDeSoir: string,
    mercrediASoir: string,
    mercrediRdv:boolean,
    mercrediMidi:boolean,
    jeudiDeMatin: string,
    jeudiAMatin: string,
    jeudiDeSoir: string,
    jeudiASoir: string,
    jeudiRdv:boolean,
    jeudiMidi:boolean,
    vendrediDeMatin: string,
    vendrediAMatin: string,
    vendrediDeSoir: string,
    vendrediASoir: string,
    vendrediRdv:boolean,
    vendrediMidi:boolean,
    samediDeMatin: string,
    samediAMatin: string,
    samediDeSoir: string,
    samediASoir: string,
    samediRdv:boolean,
    samediMidi:boolean,
    dimancheDeMatin: string,
    dimancheAMatin: string,
    dimancheDeSoir: string,
    dimancheASoir: string,
    dimancheRdv:boolean,
    dimancheMidi:boolean,
    congeDu:string,
    congeAu:string,
    congeCom:string,
    dimancheOuNon:boolean,
    cta:string,
    motCommercant:string,
    logo:ImageData,
    photoCommercant:ImageData,
    entiteLegale:string,
    bceTva:number,
    nomPrenom:string,
    telephoneRepresentant:number,
    emailReprésentant:string,
  };
  get output(): {nomCommercial: string; adresseCommerciale:string; codePostal:number; ville:string; telephone:number;
     portable:number; fax:number; email:string; siteWeb:string; nom:string ;secteur:string; sousSecteur:string;
      description:string; centreVille:boolean; pmr:boolean; typeHeure:string;lundiDeMatin: string; lundiAMatin: string; 
      lundiDeSoir: string; lundiASoir: string; lundiRdv:boolean; lundiMidi:boolean;mardiDeMatin: string; mardiAMatin: string; 
      mardiDeSoir: string; mardiASoir: string; mardiRdv:boolean; mardiMidi:boolean; mercrediDeMatin: string; mercrediAMatin: string; 
      mercrediDeSoir: string; mercrediASoir: string; mercrediRdv:boolean; mercrediMidi:boolean; jeudiDeMatin: string; jeudiAMatin: string; 
      jeudiDeSoir: string; jeudiASoir: string; jeudiRdv:boolean; jeudiMidi:boolean; vendrediDeMatin: string; vendrediAMatin: string; 
      vendrediDeSoir: string; vendrediASoir: string; vendrediRdv:boolean; vendrediMidi:boolean; samediDeMatin: string; samediAMatin: string; 
      samediDeSoir: string; samediASoir: string; samediRdv:boolean; samediMidi:boolean; dimancheDeMatin: string; dimancheAMatin: string; 
      dimancheDeSoir: string; dimancheASoir: string; dimancheRdv:boolean; dimancheMidi:boolean; congeDu:string; congeAu:string; 
      congeCom:string; dimancheOuNon:boolean; cta:string; motCommercant:string; logo:ImageData; entiteLegale:string; bceTva:number;
      nomPrenom:string; telephoneRepresentant:number; emailReprésentant:string; photoCommercant:ImageData;}{
   return this._output;
 }
 set output(value:{nomCommercial: string; adresseCommerciale:string; codePostal:number; ville:string; telephone:number;
   portable:number; fax:number; email:string;siteWeb:string;nom:string;secteur:string;sousSecteur:string;
   description:string;centreVille:boolean;pmr:boolean; typeHeure:string; lundiDeMatin: string; lundiAMatin: string; 
   lundiDeSoir: string; lundiASoir: string; lundiRdv:boolean; lundiMidi:boolean;mardiDeMatin: string; mardiAMatin: string; 
   mardiDeSoir: string; mardiASoir: string; mardiRdv:boolean; mardiMidi:boolean; mercrediDeMatin: string; mercrediAMatin: string; 
   mercrediDeSoir: string; mercrediASoir: string; mercrediRdv:boolean; mercrediMidi:boolean; jeudiDeMatin: string; jeudiAMatin: string; 
   jeudiDeSoir: string; jeudiASoir: string; jeudiRdv:boolean; jeudiMidi:boolean; vendrediDeMatin: string; vendrediAMatin: string; 
   vendrediDeSoir: string; vendrediASoir: string; vendrediRdv:boolean; vendrediMidi:boolean; samediDeMatin: string; samediAMatin: string; 
   samediDeSoir: string; samediASoir: string; samediRdv:boolean; samediMidi:boolean; dimancheDeMatin: string; dimancheAMatin: string; 
   dimancheDeSoir: string; dimancheASoir: string; dimancheRdv:boolean; dimancheMidi:boolean; congeDu:string; congeAu:string; 
   congeCom:string; dimancheOuNon:boolean; cta:string; motCommercant:string; logo:ImageData; entiteLegale:string; bceTva:number;
   nomPrenom:string; telephoneRepresentant:number; emailReprésentant:string; photoCommercant:ImageData;}){
   this._output = value;
 }
 constructor(private builder: FormBuilder) {
   this.myForm = this.builder.group({
     'nomCommercial': ['', [
       Validators.required,
       ]
     ],
     'adresseCommerciale': ['',[
       Validators.required
     ]],
     'codePostal':['',[
       Validators.required,
       Validators.min(1000),
       Validators.max(10000),
     ]],
     'ville':['',[
       Validators.required
     ]],
     'telephone':['',[
       Validators.required
     ]],
     'portable':[''],
     'fax':[''],
     'email':['',[
       Validators.email,
     ]],
     'siteWeb':[''],
     'nom':['',[
       Validators.required
     ]],
     'secteur':['',[
       Validators.required
     ]],
     'sousSecteur':['',[
       Validators.required
     ]],
     'description':[''],
     'centreVille':[''],
     'pmr':[''],
     "typeHeure":[''],
     "lundiDeMatin":[''],
     "lundiAMatin": [''],
     "lundiDeSoir": [''],
     "lundiASoir": [''],
     "lundiRdv":[''],
     "lundiMidi":[''],
     "mardiDeMatin":[''],
     "mardiAMatin": [''],
     "mardiDeSoir": [''],
     "mardiASoir": [''],
     "mardiRdv":[''],
     "mardiMidi":[''],
     "mercrediDeMatin":[''],
     "mercrediAMatin": [''],
     "mercrediDeSoir": [''],
     "mercrediASoir": [''],
     "mercrediRdv":[''],
     "mercrediMidi":[''],
     "jeudiDeMatin":[''],
     "jeudiAMatin": [''],
     "jeudiDeSoir": [''],
     "jeudiASoir": [''],
     "jeudiRdv":[''],
     "jeudiMidi":[''],
     "vendrediDeMatin":[''],
     "vendrediAMatin": [''],
     "vendrediDeSoir": [''],
     "vendrediASoir": [''],
     "vendrediRdv":[''],
     "vendrediMidi":[''],
     "samediDeMatin":[''],
     "samediAMatin": [''],
     "samediDeSoir": [''],
     "samediASoir": [''],
     "samediRdv":[''],
     "samediMidi":[''],
     "dimancheDeMatin":[''],
     "dimancheAMatin": [''],
     "dimancheDeSoir": [''],
     "dimancheASoir": [''],
     "dimancheRdv":[''],
     "dimancheMidi":[''],
     "congeDu":[''],
     "congeAu":[''],
     "congeCom":['',
      [ 
        Validators.maxLength(50)
      ]
    ],
     "dimancheOuNon":[''],
     "cta":['',[
      Validators.maxLength(20)
     ]],
     "motCommercant":[''],
     "logo":[''],
     "photoCommercant":[''],
     "entiteLegale":['',
     [
     Validators.required
    ]],
     "bceTva":['',
     [Validators.required]
    ],
     "nomPrenom":['',
     [Validators.required],
    ],
     "telephoneRepresentant":['',
     [Validators.required]
    ],
     "emailReprésentant":['',
     [Validators.required]
    ],
   })
  }
  name = 'Angular 4';
  logourl:string = '';
  photoCommercanturl:string='';
  onSelectLogo(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.logourl = reader.result as string;
      }
    }
  }
  onSelectphotoCommercant(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.photoCommercanturl = reader.result as string;
      }
    }
  }
 ngOnInit() {
  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       alert('File uploaded successfully');
 }
}
 soumettre():void{
   this.output = this.myForm.value;
 }

}