const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buatPola(baris, kolom, nomorPola) {
    const pola = [];

    // init spasi
    // for (let i = 0; i < baris; i++) {
    //     pola.push(Array(kolom).fill(' '));
    // }

    switch (nomorPola) {
        case 1:
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][i] = '*';
            }
            break;
        case 2:
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][kolom - i - 1] = '*';
            }
            break;
        case 3:
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][i] = '*';
                pola[i][kolom - i - 1] = '*';
            }
            break;
        case 4:
            const barisTengah = Math.floor(baris / 2);
            const kolomTengah = Math.floor(kolom / 2);
            for (let i = 0; i < baris; i++) {
                pola[i][kolomTengah] = '*';
            }
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][kolom - i - 1] = '*';
            }
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][i] = '*';
            }
            for (let i = 0; i < kolom; i++) {
                pola[barisTengah][i] = '*';
            }
            break;
        case 5:
            for (let i = 0; i < Math.min(baris, kolom); i++) {
                pola[i][i] = '*';
                pola[i][kolom - i - 1] = '*';
            }
            for (let i = 0; i < baris; i++) {
                pola[i][0] = '*';
                pola[i][kolom - 1] = '*';
            }
            for (let i = 0; i < kolom; i++) {
                pola[0][i] = '*';
                pola[baris - 1][i] = '*';
            }
            break;
        case 6:
            for (let i = 0; i < baris; i++) {
                for (let j = 0; j <= i; j++) {
                    pola[i][j] = '*';
                }
            }
            break;
        case 7:
            for (let i = 0; i < baris; i++) {
                for (let j = kolom - i - 1; j < kolom; j++) {
                    pola[i][j] = '*';
                }
            }
            break;
        case 8:
            let n = Math.min(baris, kolom);
            for (let i = 0; i < n * 2 - 1; i++) {
                let row = '';
                if (i < n) {
                    for (let j = 0; j < i; j++) {
                        row += ' ';
                    }
                    for (let j = 0; j < n - i; j++) {
                        row += '* ';
                    }
                } else {
                    for (let j = 0; j < n * 2 - i - 2; j++) {
                        row += ' ';
                    }
                    for (let j = 0; j < i - n + 2; j++) {
                        row += '* ';
                    }
                }
                console.log(row);
            }
            break;
        case 9:
            let n2 = baris;
            let string = "";
            // Kiri
            for (let i = 1; i <= n2; i++) {
                for (let j = 0; j < i; j++) {
                    string += "*";
                }
                string += "\n";
            }
            for (let i = 1; i <= n2 - 1; i++) {
                for (let j = 0; j < n2 - i; j++) {
                    string += "*";
                }
                string += "\n";
            }
            // Kanan
            for (let i = 1; i <= n2; i++) {
                for (let j = 0; j < n2 - i; j++) {
                  string += " ";
                }
                for (let k = 0; k < i; k++) {
                  string += "*";
                }
                string += "\n";
              }
            for (let i = 1; i <= n2 - 1; i++) {
                for (let j = 0; j < i; j++) {
                  string += " ";
                }
                for (let k = 0; k < n2 - i; k++) {
                  string += "*";
                }
                string += "\n";
              }
            console.log(string);
            break;
        case 10:
            let n3 = baris;
            let string1 = "";

            for (let i = 1; i <= n3; i++) {
                if (i <= 4) {
                    string1 += "*".repeat(i) + "\n";
                } else {
                    string1 += " ".repeat(i - 5) + "*".repeat(n3 - i + 1) + "\n";
                }
            }
            console.log(string1);

        default:
            break;
    }

    // jadiin string
    const polaString = pola.map(row => row.join(' ')).join('\n');
    return polaString;
}

function inputPola() {
    rl.question('Masukkan jumlah baris: ', (baris) => {
        rl.question('Masukkan jumlah kolom: ', (kolom) => {
            rl.question('Masukkan nomor pola (1-10): ', (nomorPola) => {
                const barisInt = parseInt(baris);
                const kolomInt = parseInt(kolom);
                const nomorPolaInt = parseInt(nomorPola);

                if (!isNaN(barisInt) && !isNaN(kolomInt) && !isNaN(nomorPolaInt) && nomorPolaInt >= 1 && nomorPolaInt <= 10) {
                    const pola = buatPola(barisInt, kolomInt, nomorPolaInt);
                    console.log(pola);
                } else {
                    console.log('Masukan tidak valid. Pastikan jumlah baris, kolom, dan nomor pola valid.');
                }

                rl.question('Apakah Anda ingin membuat pola lagi? (ya/tidak): ', (jawaban) => {
                    if (jawaban.toLowerCase() === 'ya') {
                        inputPola();
                    } else {
                        rl.close();
                    }
                });
            });
        });
    });
}

inputPola();
