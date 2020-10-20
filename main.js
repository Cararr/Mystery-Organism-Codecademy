// Returns a random DNA base
const returnRandBase = () => {
	const dnaBases = ['A', 'T', 'C', 'G'];
	return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
	const newStrand = [];
	for (let i = 0; i < 15; i++) {
		newStrand.push(returnRandBase());
	}
	return newStrand;
};

///////////////////////////////STARTING HERE//////////////////////////////////////////
const pAequorFactory = (specimenNum) => {
	//FACTORY FUNCTION FOR NEW SPECIES
	return {
		specimenNum,
		dna: mockUpStrand(),
		mutate() {
			const random = Math.floor(Math.random() * 15);
			const copy = [...this.dna];
			while (this.dna[random] === copy[random]) {
				this.dna[random] = returnRandBase();
			} // CREATE pAequor INSTANCE WITH RANDOM DNA BASE
		},
		compareDNA(pAequor) {
			// COMPARE RELATIONSHIP OF 2 SPECIES
			let mutual = 0;
			for (let i = 0; i < this.dna.length; i++) {
				if (this.dna[i] === pAequor.dna[i]) mutual++;
			}
			console.log(
				`Comparing species #${this.specimenNum} and #${
					pAequor.specimenNum
				}. Their DNA match in ${mutual * 6.666}%.`
			);
		},
		willLikelySurvive() {
			//CHECK IS THIS EXAMPLE WOULD SURVIVE
			let chances = 0;
			for (let i = 0; i < this.dna.length; i++) {
				if (this.dna[i] === 'G' || this.dna[i] === 'C') chances++;
			}
			return chances >= 9 ? true : false;
		},
		complementStrand() {
			//CREATE A COMPLEMENTARY STRAND
			const compStrand = [];
			for (let i = 0; i < this.dna.length; i++) {
				switch (this.dna[i]) {
					case 'A':
						compStrand.push('T');
						break;
					case 'T':
						compStrand.push('A');
						break;
					case 'G':
						compStrand.push('C');
						break;
					case 'C':
						compStrand.push('G');
						break;
				}
			}
			return compStrand;
		},
	};
};

const examples30 = [];
let speciesCounter = 1;
while (examples30.length < 30) {
	const newOne = pAequorFactory(speciesCounter);
	newOne.willLikelySurvive()
		? (examples30.push(newOne), speciesCounter++)
		: null; //CREATE A GROUP OF 30 EXAMPLES WITH HIGH CHANCES TO SURVIVE
}
/* console.log(examples30); */

console.log(examples30[1].dna);
console.log(examples30[1].complementStrand());
