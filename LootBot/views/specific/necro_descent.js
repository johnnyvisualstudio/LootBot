// Questo è il modulo che cerca di racchiudere tutte le stringhe di necro_descent

const query_util = require("../../utility/utils").query_structure
const sub_tree = query_util.query_tree.necro_descent;


module.exports = {
    title: "Discesa agli Inferi 👹",
    beta_tester: {
        user_message: "Ma l'era dei sacrifici è finita da tempo…\nDicono…\n",
        insert_success: " account abilitato a: `Discesa agli Inferi`",
        empty_list: "Nessun betatester per questa sessione",
        show_list: "*Lista dei betatester*\n_per questa sessione_\n\n",
        query_user_not_listed: "La tua sessione di testing è terminata…",
    },
    altar: {
        title: "Altare Sacrificale ⛩️",
        introduction: "L'antico sacrario svetta nel cuore della magione tra volute di fumo d'incenso…",
        gate_is_open: "Al centro un terrificante squarcio nella pietra sembra condurre direttamente giù… nelle viscere dell'inferno…"

    },
    maze: {
        rooms_icons: ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"],
        player: {
            already_in_maze: "🌬",
            current_room: {
                single_player: "Sei in",
                multy_player: "Siete in",
                facing: { front: "Davanti a te:", left: "Alla tua sinistra", right: "Alla tua destra", back: "Dietro di te" },
                no_gates: ["Il nulla", "Solo silenzio", "Il buio", "Nero"]
            },
            firs_jump_impressions: ["Buio.", "Solo buio.", "Brividi.", "Abisso.", "Oscurità", "Soltanto oscurità.", "Nel nulla.", "Silenzio.", "Non un rumore.", "Coraggio?", "Nel Vuoto…", "Sconsideratezza…", "Senza percepire la caduta…", "Il corpo non ha peso…"]
        },
        nodes: {
            types: { final: 0, tunnel: 1, passage: 2, way: 3, room: 4, blind: 5, special: 6 },
            dimensions_types: { micro: 0, small: 1, medium: 2, large: 3 },
            gate_types: { narrow: 0, standard: 1, large: 2 },
            gate_direction: { nord: 0, sud: 1, est: 2, ovest: 3 },
            node_description: {
                types: ["cunicolo", "passaggio", "corridoio", "salaone",],
                dimensions: ["un", "un piccolo", "un angusto", "un intricato", "un grande", "un meraviglioso", "uno strano", "un curioso"],
                walls: [ // dalle pareti 
                    "ruvide",
                    "lisce",
                    "taglienti",
                    "porose",
                    "irregolari",
                    "marmoree",
                    "punteggiate di minerali",
                ],
                ceeling: {
                    types: [ // con un 
                        "basso",
                        "ampio",
                        "irregolare",
                    ],
                    ornaments: [ // soffitto ...
                        "",
                        "costellato di piccole stalattiti",
                        "da dove scendono colonne di sedimenti",
                        "di rocce affioranti",
                        "coperto da fitte trame di ragnatele",
                        "ricoperto da una folta vegetazione",
                        "scuro, costellato di minuscoli cristalli"
                    ]
                },
                light: {
                    sources: [
                        "Fioche torce incastonate nella pietra muovono ombre di qua e di là",
                        "Il tenue blu-verde di minuscoli funghi bioluminescenti si diffonde opaco",
                        "Impalpabili globi luminosi fluttuano pigramente",
                        "Misteriose fiamme impalpabili si accendono e spengono",
                        "Una serie di pozzi di fuoco, lingue degli inferi, illuminano l'ambiente",
                        "Qua e la, maestosi cristalli brillano",
                        "Alghe luminose si attaccano avide alle crepe illuminando l'aria"
                    ],
                    colors: [
                        "con un bagliore giallastro…",
                        "con un bagliore caldo e mutevole…",
                        "con una luce intensa…",
                        "con una luce calda e rossastra…",
                        "con una luce fredda…",
                        "con una luce multicolore, allucinante…",
                        "di una luce delicata…",
                        "di una luce abbagliante…",
                        "di una luce inquietante, tetra…",
                    ]
                }
            },
            gate_descriptions: {
                surrounding: [
                    "",
                    "nel terreno",
                    "tra i rovi",
                    "tra spesse radici",
                    "tra umidi massi",
                    "tra le rocce",
                    "tra rocce spoglie",
                    "nella nuda roccia",
                ],
                dimensions: ["un", "uno stretto", "un agevole", "uno scomodo", "uno strano", "un intricato", "un curioso"],
                types: ["cunicolo", "passaggio", "continua il",],
                ornament: [
                    "",
                    "avvolto in una fitta nebbia",
                    "avvolto in una fitta vegetazione",
                    "circondato di funghi rossi",
                    "circondato di funghi gialli e viola",
                    "vicino ad un piccolo corso d'acqua",
                ]
            },



        },


        room_noises: [
            {
                main_noise: "\nAl centro:\nUn meraviglioso cenote incastonata nel cuore della roccia, l'acqua cristallina e trasparente riflette colori innaturali…",
                closed_rooms: "\nPlof! Plof!",
                further_rooms: "\nIl suono di piccole gocce che cadono riempie l'aria "
            },
            {
                main_noise: "\nUn forte sibilo rimbalza tra le pietre echeggiando…",
                closed_rooms: "\nUn sibilo echeggia tra le pietre…",
                further_rooms: "\nAppena percettibile, un leggero sibilo echeggia nell'aria…"
            },
            {
                main_noise: "\nIncessante, assordante, un battito ritmico e cupo, simile a quello di un cuore, batte.\nPulsa.",
                closed_rooms: "\n\"Tum. Tum. Tum!\"",
                further_rooms: "\nUn cupo battito si diffonde tra le rocce del suolo…"
            },


        ],
        room_smells: [
            {
                smell_source: "\nAl centro:\nUn grosso cumulo di scheletri ed ossa, ricoperto da un basso alone verde…",
                strong_smell: "\nNell'aria un aroma aspro e pungente…",
                light_smell: "\nNell'aria un odore acre…"
            },
            {
                smell_source: "\nAl centro:\ni resti di un antico tempio…",
                strong_smell: "\nNell'aria un aroma pesante, ancestrale…",
                light_smell: "\nC'è odore di bruciato…"
            },
        ],
        room_findings: [
            {
                finding_source: "\nCRAAAK!\n(nrc says: «mi serve aiuto pe ste cose!»)",
                finding: "\nOvunque:\nnere piume…",
            }
        ],

        // DA qui si elimina...
        room_dimension_types: { micro: 0, small: 1, medium: 2, large: 3 },
        room_types: { tunnel: 0, passage: 1, way: 2, special: 3, blind: 4, final: 5 }, // cunicolo, passaggio, corridoio, 
        gate_types: { narrow: 0, standard: 1, large: "2" },

        global_directions: ['nord', 'sud', 'est', 'ovest'],
        relative_direction: {
            nord: ['ovest', 'sud', 'est'],
            sud: ['est', 'nord', 'ovest'],
            est: ['nord', 'ovest', 'sud'],
            ovest: ['sud', 'est', 'nord'],
        },


        gate_descriptions: {
            door: {
                name: "portone",
                attribute: ["un piccolo", "un imponente", "un massiccio", "un inquietante", "uno strano"],
                optional_attribute: ["in pietra ", "in legno ", "di ferro battuto ", ""], // condizionale
                material: ["corroso dal tempo", "nascosto tra una fenditura nella roccia", "lavorato con intagli intricati", "con strane incisioni", "decorato con motivi geometrici"]
            },
            passage: {
                name: "passaggio",
                downhill: "in discesa", // in base al gate_type
                uphill: "in salita", // in base al gate_type
                optional_condition: ["", "nascosto tra le rocce ", "tra una fitta nebbia ", "tra una fitta vegetazione ", "tra rocce spoglie ", "nella nuda roccia ", "vicino ad una piccola sorgente "],
                condition: ["un", "un ampio", "un agevole", "uno strano", "un labirintico", "un intricato", "un misterioso"],
                optional_inside: ["dalle", "con", "avvolto da piante rampicanti e con", "ricoperto da vegetazione rigogliosa e con"],
                inside: ["pareti liscissime", "pareti ruvide", "pareti umide, viscide", "pareti irregolari e scagliose"]
            },
            tunnel: {
                name: "cunicolo",
                attribute: ["un", "uno stretto", "un buio", "un angusto", "un intricato"],
                optional_attribute: ["infestato di rovi e radici", "tra umidi massi", "fangoso", "nel terreno", ""],
                optional_smell: ["avvolto nella penombra ", "immerso nell'oscurità ", "avvolto dal silenzio ", "coperto da ragnatele ", "", ""]
            }
        },
    },
    keyboard_buttons: {
        start_descent: { text: "(?) Salta…", callback_data: query_util.generate_callback_rute(sub_tree.altar.descent.stmp, sub_tree) },
        face_left: { text: "◀️", callback_data: query_util.generate_callback_rute(sub_tree.maze.change_facing.stmp, sub_tree) },
        face_right: { text: "▶️", callback_data: query_util.generate_callback_rute(sub_tree.maze.change_facing.stmp, sub_tree) },
        face_back: { text: "🔽", callback_data: query_util.generate_callback_rute(sub_tree.maze.change_facing.stmp, sub_tree) },
        gate_x: { text: "x", callback_data: query_util.generate_callback_rute(sub_tree.maze.goto_gate.stmp, sub_tree) }

    },
    errors: {
        title: "Woops!",
        cant_load_instance: "Errore accedendo all'istanza…\nSe possibile contattare @nrc382",
        instance_locked: "␖\n\n(…)",
        cant_update_instance: "Errore aggiornando l'istanza…\nSe possibile contattare @nrc382",
        corrupted_instance: "La persistenza dell'istanza sembra sia corrotta…\nSe possibile contattare @nrc382",
        corrupted_segment: {
            nd_player: "ndplayer",
            nd_room: "ndroom",
            nd_gates: "ndgates",
        },
        beta_wrong_input: "Sintassi: `/altarebeta` _?id\\\_utente ?id\\\_utente …_\n\nEsempio:\n> `/altarebeta 354140824 153738969`"
    }
}
