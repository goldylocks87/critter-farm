
export class DnaService {

  critter1 = {
    eyeGene: 'Aa'
  };

  critter2 = {
    eyeGene: 'aa'
  };

  outcomes;

  createPunnet( mom: string, dad: string ) {

    this.outcomes = [];

    this.critter1.eyeGene = mom;
    this.critter2.eyeGene = dad;

    this.outcomes.push( this.critter1.eyeGene.substring(0, 1) + this.critter2.eyeGene.substring(0, 1) );
    this.outcomes.push( this.critter2.eyeGene.substring(0, 1) + this.critter1.eyeGene.substring(1, 2) );
    this.outcomes.push( this.critter2.eyeGene.substring(1, 2) + this.critter1.eyeGene.substring(1, 2) );
    this.outcomes.push( this.critter1.eyeGene.substring(0, 1) + this.critter2.eyeGene.substring(1, 2) );

    console.log( 'punnett square :', this.outcomes);

    const upperCase = this.critter1.eyeGene.substring(0, 1).toUpperCase();
    let babes = [];

    for( let i = 1; i <= 100000; i++ ) {

      let babe = {
        dna: this.outcomes[ Math.floor(Math.random() * this.outcomes.length) ],
        eyes: null
      };

      babes.push(babe);

      if( babe.dna.indexOf(upperCase) !== -1 ) { babe.eyes = 'Indigo'; }
      else { babe.eyes = 'MediumBlue'; }

    }

    let blueEyes = 0;
    let indigoEyes = 0;

    for( let babe of babes ) {
      if( babe.eyes === 'MediumBlue' ) {
        blueEyes++;
      } else indigoEyes++;
    }

    console.log( 'blue eyes :', blueEyes, blueEyes / babes.length * 100 + '%' );
    console.log( 'indigo eyes :', indigoEyes, indigoEyes / babes.length * 100 + '%' );

    console.log( 'YOUR BABE :', babes[0] );
    console.log( '' );
    console.log( '~~~~~' );
    console.log( '' );

    return babes[0];
  }

}
