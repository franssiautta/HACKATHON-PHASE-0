const heroes = [
    { 
        name: 'Aamon', 
        nickname: 'Duke of Shards',
        role: ['Assassin'],
        image: 'images/Aamon.png',
        lore: 'Sebagai putra sulung House Paxley, Aamon dibesarkan dengan disiplin ketat dan sejak kecil disiapkan untuk memimpin keluarga. Ayahnya juga mengajarkan mantra rahasia yang diwariskan kepada keturunan langsung, membuat Aamon mempertanyakan sejarah keluarganya. Ketika kedua orang tuanya hilang dalam badai pasir, ia mengambil alih kepemimpinan dan memikul tanggung jawab atas adik-adiknya.',
        skills: {
            skill1: "Soul Shards",
            skill2: "Slayer Shards",
            ultimate: "Endless Shards"
        }
    },
    {
        name: `Akai`,
        nickname: 'Panda Warrior',
        role: ['Tank'],
        image: 'images/Akai.png',
        lore: 'Akai awalnya hanyalah panda penjual ikan di Stream Valley yang bermimpi menjadi pahlawan. Meski sering ceroboh, ia selalu berusaha membantu tetangganya hingga bertemu Frog Immortal dan mulai berlatih bela diri. Latihan panjang itu mengajarkannya bahwa menjadi pahlawan berarti melindungi orang lain, bukan hanya mencari ketenaran.',
        skills: {
            skill1: "Headbutt",
            skill2: "Body Slam",
            ultimate: "Heavy Spin"
        }
    },
    {
        name: `Aldous`,
        nickname: 'Soul Contarctor',
        role: ['Fighter'],
        image: 'images/Aldous.png',
        lore: 'Aldous bertugas menjaga Labirin Minoan, tempat peninggalan penting kerajaan yang kaya akan batu giok. Saat banyak penjaga lain tergoda kekayaan dan meninggalkan tugasnya, ia tetap setia. Hukuman ilahi kemudian menghancurkan kerajaan dan mengubah tubuh Aldous dengan energi terang serta gelap; setelah selamat, ia memilih tetap menjaga labirin yang telah tersegel.',
        skills: {
            skill1: "Contract: Soul Steal",
            skill2: "Contract: Explosion",
            ultimate: "Contract: Chase Fate"
        }
    },
    {
        name: `Alice`,
        nickname: 'Queen of Blood',
        role: ['Tank', 'Mage'],
        image: 'images/Alice.png',
        lore: 'Alice tumbuh dengan keinginan untuk mendapatkan kasih sayang, tetapi perlahan menyadari bahwa keluarganya menjadikannya alat dalam sebuah kesepakatan politik. Pengkhianatan itu menghancurkan kepercayaannya dan membuatnya menerima kekuatan Abyss yang mengubah dirinya menjadi Blood Demon. Ia kemudian mengambil kendali atas keluarganya dan membangun kekuasaan sebagai Queen of Blood.',
        skills: {
            skill1: "Crimson Gleam",
            skill2: "Doom Waltz",
            ultimate: "Throne of Ruin"
        }
    },
    {
        name: `Alpha`,
        nickname: 'Blade of Enmity',
        role: ['Fighter'],
        image: 'images/Alpha.png',
        lore: 'Alpha lahir dari proyek Alpha-Beta, gagasan ilmuwan Octavius di Laboratory 1718 untuk menciptakan petarung mekanis. Setelah pelarian Saber memicu kekacauan dan menghancurkan banyak hasil penelitian, Octavius melihat kesempatan untuk mewujudkan proyeknya. Alpha akhirnya diciptakan sebagai cyborg dengan kemampuan tempur canggih dan kesetiaan yang ditanamkan kepada laboratorium.',
        skills: {
            skill1: "Rotary Impact",
            skill2: "Force Swing",
            ultimate: "Spear of Alpha"
        }
    },
    {
        name: `Alucard`,
        nickname: 'Demon Hunter',
        role: ['Fighter', 'Assassin'],
        image: 'images/Alucard.png',
        lore: 'Saat masih kecil, Alucard kehilangan ayahnya yang menghilang dalam perang melawan iblis. Ia tumbuh dengan kebencian terhadap kegelapan, bergabung dengan Monastery of Light, dan bersumpah memburu para iblis. Namun, setelah mengetahui bahwa ada kebenaran tentang perang itu yang disembunyikan darinya, Alucard meninggalkan biara dan memilih melawan kegelapan dengan caranya sendiri.',
        skills: {
            skill1: "Groundsplitter",
            skill2: "Whirling Smash",
            ultimate: "Fission Wave"
        }
    },
    {
        name: `Angela`,
        nickname: 'Bunnylove',
        role: ['Support'],
        image: 'images/Angela.png',
        lore: 'Dr. Baker menciptakan Angela sebagai android dengan rangka mekanis, tali boneka, dan kulit sintetis. Ia menanamkan berbagai kisah ke dalam diri Angela karena percaya bahwa kasih sayang dan harapan adalah hal penting bagi manusia. Ketika para ilmuwan Laboratory 1718 memburu mereka, Dr. Baker mengirim Angela pergi dalam kapsul agar ia selamat dan dapat mencari sekutunya.',
        skills: {
            skill1: "Love Waves",
            skill2: "Puppet-on-a-String",
            ultimate: "Heartguard"
        }
    },
    {
        name: `Argus`,
        nickname: 'Dark Angel',
        role: ['Fighter'],
        image: 'images/Argus.png',
        lore: 'Argus dan Rafaela adalah saudara kembar, tetapi Monastery of Light menyembunyikan asal-usul Argus dan membiarkan Rafaela menjadi wajah bagi para malaikat. Meski awalnya tetap beriman, Argus berbeda pandangan dengan saudarinya tentang tanggung jawab manusia atas konflik yang melanda dunia. Pertemuannya dengan Pedang Meteorit membangkitkan kebenaran pahit tentang masa lalunya dan mengubahnya menjadi Dark Angel.',
        skills: {
            skill1: "Demonic Grip",
            skill2: "Meteoric Sword",
            ultimate: "Eternal Evil"
        }
    },
    {
        name: `Arlott`,
        nickname: 'Lone Lancer',
        role: ['Fighter', 'Asssassin'],
        image: 'images/Arlott.png',
        lore: 'Karena berdarah campuran manusia dan iblis, Arlott tidak pernah diterima sepenuhnya oleh kedua pihak. Ia tumbuh sebagai petarung di antara para iblis, tetapi akhirnya dikhianati dan terluka parah. Seorang gadis bernama Mila merawatnya dan perlahan mengubah pandangannya tentang manusia; ketika Mila dibunuh oleh Church of Light, Arlott pun terdorong untuk membalas dendam.',
        skills: {
            skill1: "Dauntless Strike",
            skill2: "Vengeance",
            ultimate: "Final Slash"
        }
    },
    {
        name: `Atlas`,
        nickname: 'Ocean Gladiator',
        role: ['Tank'],
        image: 'images/Atlas.png',
        lore: 'Atlas adalah salah satu makhluk kuno yang hidup di Abysmal Sea, lautan dalam yang tertutup segel dan sulit ditembus. Ketika perubahan di dunia membuat kehidupan di sana semakin terancam, ia mencari jalan untuk meloloskan diri. Atlas menemukan zirah perang kuno bernama Mecha Sentry, mengendalikannya dengan tentakelnya, lalu menggunakannya untuk menerobos segel dan mencapai permukaan.',
        skills: {
            skill1: "Annihilate",
            skill2: "Perfect Match",
            ultimate: "Fatal Links"
        }
    },
    {
        name: `Aulus`,
        nickname: 'Warrior of Ferocity',
        role: ['Fighter'],
        image: 'images/Aulus.png',
        lore: 'Aulus adalah Leonin muda yang terinspirasi oleh seorang pejuang bernama sama yang pernah menyelamatkannya dari iblis. Ia berlatih keras dengan kapak sederhana dan tumbuh menjadi petarung yang tangguh. Setelah menguasai kemampuannya, ia meninggalkan Gleaming Marsh untuk membuktikan bahwa dirinya juga dapat menjadi pahlawan.',
        skills: {
            skill1: "Aulus, Charge!",
            skill2: "The Power of Axe",
            ultimate: "Cleaving Axe"
        }
    },
    {
        name: `Aurora`,
        nickname: 'Maiden of the Glacier',
        role: ['Mage'],
        image: 'images/Aurora.png',
        lore: 'Aurora terbangun di Queen’s Peak dengan ingatan yang hilang dan kekuatan untuk mengendalikan es. Ia akhirnya memahami bahwa keabadian bukan berarti hidup tanpa akhir, melainkan kenangan dan perasaan yang terus dikenang. Sejak itu, ia menggunakan kekuatannya untuk menjaga kenangan orang-orang yang datang kepadanya.',
        skills: {
            skill1: "Hailstone Blast",
            skill2: "Frosty Breeze",
            ultimate: "Frigid Glacier"
        }
    },
    {
        name: `Badang`,
        nickname: 'Tribal Warrior',
        role: ['Fighter'],
        image: 'images/Badang.png',
        lore: 'Badang dibesarkan di Solari Isle dan dikenal sebagai pelindung masyarakat pulau itu. Ketika Tidecaller, makhluk laut yang selama ini membantu warga, berubah buas akibat pengaruh Abyss, Badang mengajak penduduk bekerja sama untuk menghentikannya. Keberaniannya membuat Tidecaller mengakui dirinya dan memberinya kekuatan yang kemudian ia pakai untuk melindungi pulau.',
        skills: {
            skill1: "Fist Wind",
            skill2: "Fist Break",
            ultimate: "Fist Crack"
        }
    },
    {
        name: `Balmond`,
        nickname: 'Bloody Beast',
        role: ['Fighter'],
        image: 'images/Balmond.png',
        lore: 'Balmond tumbuh di tengah peperangan suku Orc yang terus dijanjikan kebebasan dan kehormatan, tetapi harus membayar janji itu dengan banyak korban. Pengalaman tersebut menumbuhkan kebencian dan tekad untuk membebaskan kaumnya dari kendali Abyss. Ia menunggu kesempatan untuk membalas para musuh dan memperjuangkan kebebasan Orc.',
        skills: {
            skill1: "Soul Lock",
            skill2: "Cyclone Sweep",
            ultimate: "Lethal Counter"
        }
    },
    {
        name: `Bane`,
        nickname: 'Frozen King',
        role: ['Fighter', 'Mage'],
        image: 'images/Bane.png',
        lore: 'Bane berasal dari keluarga bajak laut dan sejak muda berambisi menguasai lautan di Northern Vale. Ia membangun reputasi sebagai kapten yang kejam dan menjadi musuh bebuyutan Franco. Setelah mengalami kekalahan dan berubah menjadi makhluk setengah manusia, setengah gurita, Bane tetap bertekad merebut kembali kekuasaan di laut.',
        skills: {
            skill1: "Crab Claw Cannon",
            skill2: "Sea Ink",
            ultimate: "Deadly Catch"
        }
    },
    {
        name: `Barats`,
        nickname: 'Dino Rider',
        role: ['Tank', 'Fighter'],
        image: 'images/Barats.png',
        lore: 'Barats meninggalkan desanya setelah mencuri peta harta karun, berharap menemukan kekayaan dan membuktikan dirinya. Di tengah perjalanan ia bertemu Detona, kadal naga kecil yang kemudian menjadi sahabat sekaligus tunggangannya. Bersama-sama mereka menjelajahi gurun dan menghadapi berbagai kesulitan, membangun ikatan yang lebih berharga bagi Barats daripada harta.',
        skills: {
            skill1: "So-Called Teamwork",
            skill2: "Missile \"Expert\"",
            ultimate: "Detona's Welcome"
        }
    },
    {
        name: `Baxia`,
        nickname: 'Mystic Tortoise',
        role: ['Tank'],
        image: 'images/Baxia.png',
        lore: 'Baxia adalah roh Kura-kura Mistis dan salah satu petarung yang menjaga Cadia Riverlands. Setelah kehilangan gurunya dan rekan-rekannya dalam pertempuran, ia memikul tugas perlindungan sambil dibayangi masa lalu. Ketika ancaman lama mereda, Baxia menyadari bahwa ia tak bisa terus hidup dalam kehilangan dan memutuskan menempuh jalan baru.',
        skills: {
            skill1: "Baxia-Shield Unity",
            skill2: "Shield of Spirit",
            ultimate: "Tortoise's Puissance"
        }
    },
    {
        name: `Beatrix`,
        nickname: 'Dawnbreak Soldier',
        role: ['Marksman'],
        image: 'images/Beatrix.png',
        lore: 'Beatrix tumbuh di keluarga pedagang, tetapi sejak muda lebih tertarik pada sains dan menciptakan berbagai penemuan. Bakatnya membuatnya menonjol di Scholars’ Union Eruditio, meski ia tidak terlalu mengejar gelar atau pengakuan. Dengan kecerdasan dan kegigihannya, ia merancang beragam senjata untuk menghadapi ancaman di kotanya.',
        skills: {
            skill1: "Masterful Gunner",
            skill2: "Tactical Reposition",
            ulti1: "Nibiru's Passion",
            ulti2: "Bennett's Rage",
            ulti3: "Renner's Apathy",
            ulti4: "Wesker's Elation"
        }
    },
    {
        name: `Balerick`,
        nickname: 'Guard of Nature',
        role: ['Tank'],
        image: 'images/Belerick.png',
        lore: 'Belerick adalah makhluk elemental kuno yang diberi kehidupan dan kebijaksanaan oleh Ancient Ones. Selama berabad-abad ia berkelana, membantu berbagai makhluk dan mencari jejak para leluhurnya. Saat melihat wilayah Agelta berubah menjadi tandus akibat perebutan Twilight Orbs, ia mengorbankan tenaganya untuk menciptakan oasis sebagai tempat berlindung.',
        skills: {
            skill1: "Ancient Seed",
            skill2: "Nature's Strike",
            ultimate: "Wrath of Dryad"
        }
    },
    {
        name: `Benedetta`,
        nickname: 'Shadow Ranger',
        role:['Assassin', 'Fighter'],
        image: 'images/Benedetta.png',
        lore: 'Benedetta memimpin para ranger yang bertahan di wilayah tandus selatan Rantha Mountains, tempat para pengungsi terus terancam oleh monster. Dengan pedang Alecto, ia melindungi permukiman dan menjadi simbol harapan bagi orang-orang yang terjebak di sana. Pengalaman pahitnya dengan Moniyan Empire turut membentuk tekadnya untuk menjaga mereka yang tak bisa melindungi diri sendiri.',
        skills: {
            skill1: "Phantom Slash",
            skill2: "An Eye for An Eye",
            ultimate: "Alecto: Final Blow"
        }
    },
    {
        name: `Brody`,
        nickname: 'The Lone Star',
        role: ['Marksman'],
        image: 'images/Brody.png',
        lore: 'Brody muncul di perbatasan Barren Lands dengan lengan yang terpengaruh kekuatan Abyss dan tanpa ingatan jelas tentang masa lalunya. Saat membantu sebuah desa melawan iblis, pertempuran memunculkan kembali potongan ingatan bahwa ia pernah menjadi prajurit yang melindungi rakyatnya. Kini ia mengubah rasa sakit dan rasa bersalahnya menjadi tekad untuk menghadapi kegelapan.',
        skills: {
            skill1: "Abyss Impact",
            skill2: "Corrosive Strike",
            ultimate: "Torn-Apart Memory"
        }
    },
    {
        name: `Bruno`,
        nickname: 'The Protector',
        role: ['Marksman'],
        image: 'images/Bruno.png',
        lore: 'Bruno tumbuh di kota gurun dekat Eruditio dan mengasah bakat sepak bolanya dengan latihan tanpa henti. Ia berhasil masuk tim utama, tetapi awalnya terlalu fokus membuktikan kemampuan sendiri hingga timnya kehilangan kekompakan. Setelah memahami pentingnya kerja sama dan kembali bermain dengan bantuan prostetik canggih, Bruno menjadi kapten Eruditio Rangers.',
        skills: {
            skill1: "Volley Shot",
            skill2: "Slide",
            ultimate: "Worldie"
        }
    },
    {
        name: `Carmilla`,
        nickname: 'Shadow of Twilight',
        role: ['Support', 'Tank'],
        image: 'images/Carmilla.png',
        lore: 'Carmilla tumbuh sebagai putri bangsawan yang dikagumi, tetapi ayahnya berusaha menjadikannya alat untuk memperkuat pengaruh keluarga. Ia menemukan cinta yang tulus pada Cecilion, seorang Blood Demon yang menyamar sebagai penyanyi opera. Saat keadaan memisahkan mereka, pilihan Carmilla untuk tetap bersama Cecilion mengubah hidupnya dan membawanya menjadi Blood Demon.',
        skills: {
            skill1: "Crimson Flower",
            skill2: "Bloodbath",
            ultimate: "Curse of Blood"
        }
    },
    {
        name: `Cecilion`,
        nickname: 'Embrace of Night',
        role: ['Mage'],
        image: 'images/Cecilion.png',
        lore: 'Cecilion adalah Blood Demon yang menyembunyikan jati dirinya dengan tampil sebagai penyanyi opera di Avalor. Di tengah hidup yang penuh rahasia dan prasangka, ia jatuh cinta kepada Carmilla, putri bangsawan manusia. Ketika mereka terancam dipisahkan, Cecilion menggunakan kekuatannya agar mereka dapat tetap bersama.',
        skills: {
            skill1: "Bat Impact",
            skill2: "Sanguine Claws",
            ultimate: "Bats Feast"
        }
    },
    {
        name: `Chang'e`,
        nickname: 'Moon Palace Immortal',
        role: ['Mage'],
        image: `images/Chang'e.png`,
        lore: 'Chang’e adalah murid termuda Great Dragon yang memiliki bakat besar dan cepat menguasai sihir Sacred Satellite. Sifatnya yang ceria dan usil sering membuat gurunya kewalahan, sehingga Zilong diminta membimbingnya. Setelah Zilong pergi menjalankan tugas, Chang’e kembali membuat kekacauan dan akhirnya diutus untuk menyusul serta membantu kakak angkatnya itu.',
        skills: {
            skill1: "Starmoon Shockwave",
            skill2: "Crescent Moon",
            ultimate: "Meteor Shower"
        }
    },
    {
        name: `Chip`,
        nickname: 'Phase Technician',
        role: ['Support', 'Tank'],
        image: 'images/Chip.png',
        lore: 'Chip awalnya rubah kecil yang bertahan hidup di gurun Agelta sampai Dr. Baker membawanya ke Laboratory 1718. Di sana ia ditingkatkan kecerdasannya dan dilibatkan dalam pengujian teknologi portal. Chip lebih suka hidup santai, tetapi perebutan kekuasaan di laboratorium memaksanya menghadapi masalah dan membuat pilihan sulit.',
        skills: {
            skill1: "Crash Course",
            skill2: "Overtime",
            ultimate: "Shortcut"
        }
    },
    {
        name: `Chou`,
        nickname: 'Kung Fu Boy',
        role: ['Fighter'],
        image: 'images/Chou.png',
        lore: 'Chou tumbuh di kawasan kumuh dan menghabiskan waktunya membantu orang tua serta anak-anak di lingkungannya. Suatu hari ia menyelamatkan seorang biksu yang sedang diburu, lalu merawatnya hingga pulih. Sebagai balasan, sang biksu mengajarkan kung fu dan menginspirasi Chou untuk meninggalkan rumah demi menjadi pahlawan yang menghadapi kekacauan di Land of Dawn.',
        skills: {
            skill1: "Jeet Kune Do",
            skill2: "Shunpo",
            ultimate: "The Way of Dragon"
        }
    },
    {
        name: `Cici`,
        nickname: 'Buoyant Performer',
        role: ['Fighter'],
        image: 'images/Cici.png',
        lore: 'Cici adalah pemain utama rombongan teater Whimsical Wonders yang berkeliling bersama teman ajaibnya, Yoyo. Saat tiba di Castle Aberleen, ia mendapati pertunjukan rakyat dilarang dan bibinya telah diasingkan. Cici tidak menyerah; semangatnya mendorong para pemain lain bangkit dan berusaha mengembalikan hiburan serta keceriaan bagi warga kota.',
        skills: {
            skill1: "Yo-Yo Blitz",
            skill2: "Buoyant Bounce",
            ultimate: "Curtain Call"
        }
    },
    {
        name: `Claude`,
        nickname: 'Master Thief',
        role: ['Marksman'],
        image: 'images/Claude.png',
        lore: 'Claude tumbuh sebagai anak yatim di Los Pecados, kota tanpa aturan yang mengajarinya bertahan hidup lewat tipu daya dan pencurian. Ia kemudian dijebak oleh Waldo Kane dan berakhir di penjara, tempat ia bertemu Merlin, sosok legendaris di dunia pencuri. Setelah mewarisi kemampuan Merlin dan berhasil kabur bersama Dexter, Claude kembali untuk menghadapi Kane.',
        skills: {
            skill1: "Art of Thievery",
            skill2: "Battle Mirror Image",
            ultimate: "Blazing Duet"
        }
    },
    {
        name: `Clint`,
        nickname: 'West Justice',
        role: ['Marksman'],
        image: 'images/Clint.png',
        lore: 'Clint adalah sheriff yang menjaga sebuah kota perbatasan di tengah konflik para pencari emas dan kelompok Sand Hunters. Ia sengaja tampak santai agar lawan meremehkannya, tetapi tetap mengamati keadaan dan menunggu saat yang tepat untuk bertindak. Dengan keberanian dan bidikannya, Clint berusaha melindungi warga serta menegakkan keadilan di wilayah yang keras.',
        skills: {
            skill1: "Quick Draw",
            skill2: "Trapping Recoil",
            ultimate: "Grenade Bombardment"
        }
    },
    {
        name: `Cyclops`,
        nickname: 'Starsoul Magician',
        role: ['Mage'],
        image: 'images/Cyclops.png',
        lore: 'Cyclops adalah penyihir pengembara yang gemar mengamati pergerakan bintang dan planet. Perjalanannya membawanya melintasi ruang angkasa hingga tiba di Land of Dawn, tempat ia menemukan banyak lawan tangguh. Yakin pada sihir kosmiknya, Cyclops pun bertekad mengukir nama sebagai salah satu petarung hebat.',
        skills: {
            skill1: "Stardust Shock",
            skill2: "Planets Attack",
            ultimate: "Star Power Lockdown"
        }
    },
    {
        name: `Diggie`,
        nickname: 'Timekeeper',
        role: ['Support'],
        image: 'images/Diggie.png',
        lore: 'Diggie adalah sarjana dari Eruditio yang mempelajari waktu dan berbagai rahasianya. Dengan Time Nest, ia dapat memanipulasi waktu dan membawa dirinya maupun orang lain melintasi peristiwa tertentu. Meski sering diremehkan, rasa ingin tahunya membuat Diggie terus menyelidiki misteri yang dianggap mustahil oleh orang lain.',
        skills: {
            skill1: "Auto Alarm Bomb",
            skill2: "Reverse Time",
            ultimate: "Time Journey"
        }
    },
    {
        name: `Dyrroth`,
        nickname: 'Prince of the Abyss',
        role: ['Fighter'],
        image: 'images/Dyrroth.png',
        lore: 'Dyrroth dahulu adalah pangeran Moniyan yang masih bayi ketika ia menghilang dari istana dan dianggap telah tewas. Ia dibawa ke Abyss, dibesarkan sebagai putra kegelapan, lalu tumbuh menjadi petarung yang setia kepada kekuatan tersebut. Kini ia berhadapan dengan kerajaan asalnya dan kakaknya, Silvanna, yang masih berusaha menjangkaunya.',
        skills: {
            skill1: "Burst Strike",
            skill2: "Spectre Step",
            ultimate: "Abysm Strike"
        }
    },
    {
        name: `Edith`,
        nickname: 'Ancient Guard',
        role: ['Tank', 'Marksman'],
        image: 'images/Edith.png',
        lore: 'Edith diciptakan oleh Ancient Ones sebagai penjaga yang mengawasi para Evil Gods di Sanctum Island. Setelah gempa membuatnya terbangun dengan ingatan yang hilang, seorang pengumpul barang bekas merawatnya selama bertahun-tahun. Ingatannya akhirnya kembali saat ia melindungi ayah angkatnya, dan Edith berangkat dengan zirah Phylax untuk memburu para dewa jahat yang lolos.',
        skills: {
            skill1: "Earth Shatter",
            skill2: "Onward",
            ultimate: "Primal Wrath"
        }
    },
    {
        name: `Esmeralda`,
        nickname: 'Astrologer',
        role: ['Tank', 'Mage'],
        image: 'images/Esmeralda.png',
        lore: 'Esmeralda dipilih menjadi penerus para astrolog dan dipercaya menjaga Starmoon Casket. Saat peti itu terbuka di tengah perjalanan menuju Labirin Minos, kekuatannya membangkitkan ingatan dan memperingatkannya bahwa Khufra, penguasa kejam dari masa lampau, telah kembali. Esmeralda kemudian mengikuti petunjuk peti tersebut untuk menghadapi ancaman yang bangkit di gurun.',
        skills: {
            skill1: "Frostmoon Shield",
            skill2: "Stardust Dance",
            ultimate: "Falling Starmoon"
        }
    },
    {
        name: `Estes`,
        nickname: 'Moon Elf King',
        role: ['Support'],
        image: 'images/Estes.png',
        lore: 'Estes adalah Raja Moon Elf yang lahir dari Tree of Life dan memimpin kaumnya di Moonlit Forest. Ia terluka parah dalam perang besar dan terpaksa tertidur lama, membuat para elf kehilangan pemimpin mereka. Ketika ancaman Abyss kembali membahayakan hutan, Estes terbangun untuk melindungi rakyatnya dan memulihkan harapan mereka.',
        skills: {
            skill1: "Moonlight Immersion",
            skill2: "Domain of Moon Goddess",
            ultimate: "Blessing of Moon Goddess"
        }
    },
    {
        name: `Eudora`,
        nickname: 'Lightning Weaver',
        role: ['Mage'],
        image: 'images/Eudora.png',
        lore: 'Eudora tumbuh sebagai half-elf di desa terpencil, tempat darah campuran dan sihir petirnya membuatnya dikucilkan. Setelah kehilangan keluarganya dalam perjalanan ke utara, ia ditemukan oleh Archmage Theresa dan dibawa ke Magic Academy. Di sana Eudora dapat mengembangkan kemampuannya tanpa prasangka dan kelak menjadi guru yang membimbing penyihir muda.',
        skills: {
            skill1: "Forked Lightning",
            skill2: "Ball Lightning",
            ultimate: "Thunder's Wrath"
        }
    },
    {
        name: `Fanny`,
        nickname: 'Blade Dancer',
        role: ['Assassin'],
        image: 'images/Fanny.png',
        lore: 'Fanny berasal dari keluarga Wertz yang memiliki tradisi panjang mengabdi kepada pasukan Moniyan, tetapi perempuan di keluarganya tidak diizinkan menjadi tentara. Ia menolak batasan itu dan merancang perlengkapan sendiri agar dapat bertempur di medan perang. Kegigihannya menjadikannya petarung andal sekaligus rekan seperjuangan kakaknya, Tigreal.',
        skills: {
            skill1: "Tornado Strike",
            skill2: "Steel Cable",
            ultimate: "Cut Throat"
        }
    },
    {
        name: `Faramis`,
        nickname: 'Soul Binder',
        role: ['Support', 'Mage'],
        image: 'images/Faramis.png',
        lore: 'Faramis berasal dari keluarga tabib yang melayani kalangan kerajaan, tetapi ia sendiri sering direndahkan oleh para bangsawan. Ia datang ke Necrokeep untuk meneliti wabah Mist dan bertemu Vexana, yang pernah menunjukkan kebaikan kepadanya. Demi mencari cara mematahkan kutukan yang menimpa wilayah itu, Faramis rela menjadikan dirinya bahan penelitian.',
        skills: {
            skill1: "Shadow Stampede",
            skill2: "Ghost Bursters",
            ultimate: "Nether Realm"
        }
    },
    {
        name: `Floryn`,
        nickname: 'The Budding Hope',
        role: ['Support'],
        image: 'images/Floryn.png',
        lore: 'Floryn muncul dari sebuah bunga kecil yang tumbuh di tengah Agelta Drylands yang tandus. Belerick menciptakan Oasis untuk melindungi kehidupan di sana, dan kekuatannya membuat bunga itu berubah menjadi makhluk hidup yang membawa sebuah benih bercahaya. Setelah benih tersebut dicuri oleh seorang pengelana, Floryn meninggalkan Oasis untuk mencarinya dan melihat sendiri kesulitan yang dialami penduduk gurun.',
        skills: {
            skill1: "Sow",
            skill2: "Sprout",
            ultimate: "Bloom"
        }
    },
    {
        name: `Franco`,
        nickname: 'Frozen Warrior',
        role: ['Tank'],
        image: 'images/Franco.png',
        lore: 'Franco tumbuh di Northern Vale, tempat kekuatan fisik sangat dihormati, tetapi tubuhnya yang lebih kecil membuatnya sering diremehkan. Ia berlatih tanpa henti untuk membuktikan bahwa dirinya mampu menjadi pejuang hebat. Ketika bajak laut Bane mengancam lautan, Franco memimpin perlawanan dan berhasil mengalahkan rivalnya itu.',
        skills: {
            skill1: "Iron Hook",
            skill2: "Fury Shock",
            ultimate: "Bloody Hunt"
        }
    },
    {
        name: `Fredrinn`,
        nickname: 'Rogue Appraiser',
        role: ['Fighter', 'Tank'],
        image: 'images/Fredrinn.png',
        lore: 'Fredrinn adalah putra Duke Vance yang tumbuh menjadi petualang dan penaksir harta terkenal di Los Pecados. Di balik reputasinya yang gemar mengumpulkan kekayaan, ia memiliki tujuan pribadi: menemukan sahabatnya, Fray, yang menghilang. Kristal yang menyatu dengan jantungnya menjadi pengingat akan masa lalu dan pencarian yang belum selesai.',
        skills: {
            skill1: "Piercing Strike",
            skill2: "Brave Assault",
            skill3: "Energy Eruption",
            ultimate: "Appraiser's Wrath"
        }
    },
    {
        name: `Freya`,
        nickname: 'Valkyrie',
        role: ['Fighter'],
        image: 'images/Freya.png',
        lore: 'Freya adalah Valkyrie dari Northern Vale yang menjalani perjalanan berat untuk menemukan kebenaran tentang peninggalan suci kaumnya, Aurora Heart. Pencarian itu membawanya melintasi wilayah bersalju dan menghadapkan dirinya pada ancaman yang membahayakan para pejuang Frozen Sea. Dengan pedang dan perisainya, Freya berjuang menjaga warisan serta keselamatan rakyatnya.',
        skills: {
            skill1: "Leap of Faith",
            skill2: "Valkyrie Slash",
            ultimate: "Valkyrie Descent"
        }
    },
    {
        name: `Gatotkaca`,
        nickname: 'Mighty Legend',
        role: ['Tank', 'Fighter'],
        image: 'images/Gatotkaca.png',
        lore: 'Gatotkaca adalah putra Bima dan Arimbi dari dunia Arcapada, yang sejak kecil menjadi pembela tanah kelahirannya. Setelah kalah dalam pertempuran dan berada di ambang kematian, ia berlatih di Candradimuka hingga memperoleh kekuatan luar biasa. Dengan zirah Antakusuma dan sarung tangan saktinya, ia kembali memburu para Asura yang menjadi musuhnya.',
        skills: {
            skill1: "Blast Iron Fist",
            skill2: "Unbreakable",
            ultimate: "Avatar of the Guardian"
        }
    },
    {
        name: `Gloo`,
        nickname: 'Swamp Spirits',
        role: ['Tank'],
        image: 'images/Gloo.png',
        lore: 'Gloo hidup di Shadow Swamp sebagai kumpulan makhluk kecil yang dapat menyatu dan berpisah sesuka hati. Manusia yang tersesat sering menganggapnya monster berbahaya, padahal Gloo mengira pertemuan itu hanya kesempatan bermain dengan teman baru. Saat tim penjelajah Moniyan terjebak di rawa, kehadiran Gloo mengubah perjalanan mereka menjadi pertemuan yang tak terduga.',
        skills: {
            skill1: "Slam, Slam",
            skill2: "Spread, Spread",
            ultimate: "Grab, Grab"
        }
    },
    {
        name: `Gord`,
        nickname: 'Professor of the Mystics',
        role: ['Mage'],
        image: 'images/Gord.png',
        lore: 'Gord sejak awal dikenal berbakat dan mampu menguasai sihir rumit di Magic Academy. Rasa percaya dirinya membuatnya mempelajari kitab terlarang demi mengubah tubuh menjadi wujud energi murni, tetapi kekuatan itu segera lepas kendali. Setelah diselamatkan oleh penyihir Elward, Gord memilih mengajar dan berharap murid-muridnya tidak mengulangi kesalahannya.',
        skills: {
            skill1: "Mystic Projectile",
            skill2: "Mystic Injunction",
            ultimate: "Mystic Gush"
        }
    },
    {
        name: `Granger`,
        nickname: 'Death Chanter',
        role: ['Marksman'],
        image: 'images/Granger.png',
        lore: 'Granger adalah pemburu iblis yang hidup dengan rasa sakit dan kenangan traumatis dari konflik melawan Abyss. Ia jarang membuka diri kepada orang lain, dan suara tembakan dari senjatanya menjadi cara untuk menenggelamkan jeritan yang terus menghantuinya. Setiap kali ia menghadapi iblis, Granger mengubah penderitaannya menjadi perlawanan sekaligus upaya menebus masa lalu.',
        skills: {
            skill1: "Rhapsody",
            skill2: "Rondo",
            ultimate: "Death Sonata"
        }
    },
    {
        name: `Grock`,
        nickname: 'Fortress Titan',
        role: ['Tank', 'Fighter'],
        image: 'images/Grock.png',
        lore: 'Grock adalah golem batu yang diciptakan oleh Master Thoth dan dibangunkan dengan sebuah Thunder Core. Saat para Ancient Ones pergi, gurunya memintanya tetap menjaga kastel sampai menjadi kuat. Setelah kastel itu diserang dan runtuh, Grock meninggalkan tempat tersebut untuk mencari jejak Thoth dan melindungi kehidupan yang ditemuinya.',
        skills: {
            skill1: "Mighty Swing",
            skill2: "Earthen Rampart",
            ultimate: "Tectonic Charge"
        }
    },
    {
        name: `Guinevere`,
        nickname: 'Ms. Violet',
        role: ['Fighter'],
        image: 'images/Guinevere.png',
        lore: 'Guinevere berasal dari House Baroque, keluarga bangsawan yang terkenal dengan ilmu pedang, tetapi ia lebih tertarik pada sihir. Bakatnya di Magic Academy membawanya mengembangkan kemampuan khusus dengan menggabungkan persepsi dan energi. Ketika keluarganya berencana menikahkannya demi kepentingan politik, Guinevere meminta bantuan kakaknya, Lancelot, untuk menentukan jalan hidupnya sendiri.',
        skills: {
            skill1: "Energy Wave",
            skill2: "Spatial Migration",
            ultimate: "Violet Requiem"
        }
    },
    {
        name: `Gusion`,
        nickname: 'Holy Blade',
        role: ['Assassin'],
        image: 'images/Gusion.png',
        lore: 'Gusion adalah putra House Paxley dan adik Aamon, dibesarkan dalam keluarga yang mengharapkan anggotanya mengikuti tradisi sihir tertentu. Namun, ia lebih suka bertarung dengan kecepatan dan belati yang dipenuhi energi cahaya daripada tunduk pada aturan lama. Keputusannya menempuh jalannya sendiri membuatnya berjarak dari keluarganya, meski ikatan dengan saudara-saudaranya tetap penting baginya.',
        skills: {
            skill1: "Sword Spike",
            skill2: "Shadowblade Slaughter",
            ultimate: "Incandescence"
        }
    },
    {
        name: `Hanabi`,
        nickname: 'Scarlet Flower',
        role: ['Marksman'],
        image: 'images/Hanabi.png',
        lore: 'Hanabi adalah pewaris desa Scarlet Shadow dan sejak kecil dilatih untuk menguasai seni ninja. Ia membawa Higanbana, senjata yang terkait dengan dunia arwah, dan terus mengasah kemampuannya demi menjaga kehormatan desanya. Hubungannya dengan Hayabusa dan Kagura membuat perjalanan serta persaingannya semakin rumit.',
        skills: {
            skill1: "Ninjutsu: Equinox",
            skill2: "Ninjutsu: Soul Scroll",
            ultimate: "Forbidden Jutsu: Higanbana"
        }
    },
    {
        name: `Hanzo`,
        nickname: 'Akuma Ninja',
        role: ['Assassin'],
        image: 'images/Hanzo.png',
        lore: 'Hanzo berasal dari klan ninja yang bertugas menjaga rahasia Sacred Tools. Ia menolak batasan kekuatan yang diwariskan klannya dan mencari cara untuk menjadi lebih kuat. Keputusannya berhubungan dengan kekuatan iblis membuatnya berubah menjadi ancaman bagi para ninja yang dahulu menjadi keluarganya.',
        skills: {
            skill1: "Ninjutsu: Demon Feast",
            skill2: "Ninjutsu: Dark Mist",
            ultimate: "Kinjutsu: Pinnacle Ninja"
        }
    },
    {
        name: `Harith`,
        nickname: 'Time Traveler',
        role: ['Mage'],
        image: 'images/Harith.png',
        lore: 'Harith adalah Leonin muda dengan bakat sihir waktu yang luar biasa. Ia meninggalkan Azrya Woodlands dan bergabung dengan pasukan Moniyan, tempat kemampuannya membantu menghadapi ancaman Abyss. Meski masih muda, keberanian dan rasa tanggung jawabnya membuatnya dipercaya menjalankan misi penting.',
        skills: {
            skill1: "Synchro Fission",
            skill2: "Chrono Dash",
            ultimate: "Zaman Force"
        }
    },
    {
        name: `Harley`,
        nickname: 'Mage Genius',
        role: ['Assassin', 'Mage'],
        image: 'images/Harley.png',
        lore: 'Harley adalah putra Duke Vance dan anak ajaib yang sejak kecil memiliki bakat besar dalam sihir. Setelah kehilangan ibunya, ia tumbuh di tengah urusan politik keluarga dan berteman dekat dengan Lesley, yang ayahnya gugur saat melindungi Duke. Rasa ingin tahunya membawa Harley menempuh petualangan sihir jauh dari rumah.',
        skills: {
            skill1: "Poker Trick",
            skill2: "Space Escape",
            ultimate: "Deadly Magic"
        }
    },
    {
        name: `Hayabusa`,
        nickname: 'Crimson Shadow',
        role: ['Assassin'],
        image: 'images/Hayabusa.png',
        lore: 'Hayabusa dibesarkan di desa ninja Scarlet Shadow dan ditempa untuk meneruskan tradisi klannya. Ia kemudian menerima tugas untuk memburu Hanzo, ninja yang mengkhianati klan demi kekuatan terlarang. Di tengah misi itu, ikatan masa kecilnya dengan Hanabi dan Kagura membuat kewajiban serta perasaannya saling berbenturan.',
        skills: {
            skill1: "Ninjutsu: Phantom Shuriken",
            skill2: "Ninjutsu: Quad Shadow",
            ultimate: "Ougi: Shadow Kill"
        }
    },
    {
        name: `Helcurt`,
        nickname: 'Shadowbringer',
        role: ['Assassin'],
        image: 'images/Helcurt.png',
        lore: 'Helcurt lahir dari Styx Clan, kelompok pemburu bayangan yang pernah memberontak terhadap penguasa Abyss. Setelah klannya dikalahkan dan dipaksa tunduk, Helcurt hanya memikirkan satu hal: bertahan hidup. Ia kemudian menjadi pembunuh yang bergerak dalam gelap, bahkan berbalik melawan penguasa Abyss demi kebebasannya.',
        skills: {
            skill1: "Hidden Terror",
            skill2: "Deadly Stinger",
            ultimate: "Dark Night Falls"
        }
    },
    {
        name: `Hilda`,
        nickname: 'Power of Megalith',
        role: ['Fighter', 'Tank'],
        image: 'images/Hilda.png',
        lore: 'Hilda berasal dari Megalith Wasteland, tanah berbatu yang menjadi jalur antara Northern Vale dan Moniyan Plain. Kehidupan keras di wilayah itu membentuknya menjadi pejuang tangguh yang mengandalkan kekuatan dan keberanian. Ia meninggalkan tanah asalnya untuk menghadapi bahaya dan melindungi orang-orang yang membutuhkan bantuan.',
        skills: {
            skill1: "Combat Ritual",
            skill2: "Art of Hunting",
            ultimate: "Power of Wildness"
        }
    },
    {
        name: `Hirara`,
        nickname: 'Fallen Scarlet',
        role: ['Assassin'],
        image: 'images/Hirara.png',
        lore: 'Hirara hidup di dalam ilusi yang dibentuk oleh senjata agung Ukifune, sebuah dunia dengan sungai Meisen yang menggantung di langit. Di sana ia menari dalam pertunjukan Noh yang tak berakhir, sementara roh-roh jahat menyerangnya untuk merebut keindahannya. Hirara mengalahkan mereka dan menyerap esensi mereka, menjadikan pertempuran bagian dari tariannya.',
        skills: {
            skill1: "Meisen-e",
            skill2: "Kaerazu"
        }
    },
    {
        name: `Hylos`,
        nickname: 'Grand Warden',
        role: ['Tank'],
        image: 'images/Hylos.png',
        lore: 'Hylos adalah centaur penjaga dari Misty Mountains yang mengabdikan hidupnya untuk melindungi alam dan sumber kehidupan di pegunungan. Ia berdiri di antara wilayah manusia dan tanah para centaur, menghadapi siapa pun yang mengancam keseimbangan alam. Keteguhan dan kekuatan sihirnya menjadikannya salah satu pelindung paling dihormati.',
        skills: {
            skill1: "Law and Order",
            skill2: "Ring of Punishment",
            ultimate: "Glorious Pathway"
        }
    },
    {
        name: `Irithel`,
        nickname: 'Jungle Heart',
        role: ['Marksman'],
        image: 'images/Irithel.png',
        lore: 'Irithel ditinggalkan saat masih bayi dan akhirnya dibesarkan oleh seekor smilodon bernama Leo di Moonlit Forest. Ikatan itu menjadikan Leo keluarga sekaligus teman seperjuangannya. Kini Irithel menjaga hutan dari para pemburu yang mengincar kekuatan dalam tulang smilodon, dengan Leo selalu berada di sisinya.',
        skills: {
            skill1: "Strafe",
            skill2: "Force of the Queen",
            ultimate: "Heavy Crossbow"
        }
    },
    {
        name: `Ixia`,
        nickname: 'Arclight Outlaw',
        role: ['Marksman'],
        image: 'images/Ixia.png',
        lore: 'Ixia memimpin Bad Soul, kelompok yang hidup di luar aturan dan kekuasaan kota. Ia menyebut dirinya penemu dan merakit senjata sendiri dengan memanfaatkan teknologi Starlium. Dengan kecerdikan serta keberaniannya, Ixia melawan pihak yang mencoba mengendalikan hidupnya dan orang-orang di sekitarnya.',
        skills: {
            skill1: "Dual Beam",
            skill2: "Star Helix",
            ultimate: "Full Barrage"
        }
    },
    {
        name: `Jawhead`,
        nickname: 'Steel Sweetheart',
        role: ['Fighter'],
        image: 'images/Jawhead.png',
        lore: 'Jawhead adalah robot prototipe yang dibuat untuk melindungi seorang anak perempuan bernama Ailee. Keduanya menghadapi bahaya bersama saat rahasia di balik penciptaan Jawhead mulai menarik perhatian pihak lain. Di balik tubuh tempurnya, Jawhead selalu memprioritaskan keselamatan dan kebahagiaan Ailee.',
        skills: {
            skill1: "Smart Missiles",
            skill2: "Ejector",
            ultimate: "Unstoppable Force"
        }
    },
    {
        name: `Johnson`,
        nickname: 'Wild Engine',
        role: ['Tank', 'Support'],
        image: 'images/Johnson.png',
        lore: 'Johnson pernah dikenal sebagai atlet yang kuat dan populer, sampai sebuah kecelakaan mengubah hidupnya. Teknologi dan kekuatan misterius menyatu dengan tubuhnya, memberinya kemampuan berubah menjadi kendaraan. Ia kemudian menggunakan kemampuan itu untuk menolong orang lain dan menghadapi berbagai ancaman di Eruditio.',
        skills: {
            skill1: "Impact Wrench",
            skill2: "Electromagnetic Waves",
            ultimate: "Full Throttle"
        }
    },
    {
        name: `Joy`,
        nickname: 'Flash of Miracle',
        role: ['Assassin'],
        image: 'images/Joy.png',
        lore: 'Joy dikenal sebagai Child Miracle, seorang Leonin yang menghabiskan masa kecilnya jauh dari kaumnya. Setelah bertahun-tahun mengembara, ia kembali kepada para Leonin dan berusaha memahami tempatnya di antara mereka. Kecepatan, keberanian, dan sifatnya yang penuh energi membuat Joy menjadi pelindung yang tak terduga.',
        skills: {
            skill1: "Look, Leonin Crystal!",
            skill2: "Meow, Rhythm of Joy!",
            ultimate: "Ha, Electrifying Beats!"
        }
    },
    {
        name: `Julian`,
        nickname: 'Scarlet Raven',
        role: ['Assassin', 'Fighter'],
        image: 'images/Julian.png',
        lore: 'Julian dibesarkan oleh Church of Light dan dilatih menjadi anggota Scarlet Raven, pasukan yang menjalankan misi berbahaya. Ia tumbuh dengan patuh pada perintah, meski banyak hal tentang masa lalunya dan tujuan gereja tidak pernah dijelaskan kepadanya. Pertemuannya dengan orang-orang yang menentang gereja membuat Julian mulai mempertanyakan tugas yang selama ini ia jalani.',
        skills: {
            skill1: "Scythe",
            skill2: "Sword",
            skill3: "Chain"
        }
    },
    {
        name: `Kadita`,
        nickname: 'Ocean Goddes',
        role: ['Mage', 'Assassin'],
        image: 'images/Kadita.png',
        lore: 'Kadita dahulu adalah seorang putri yang dikhianati dan dikutuk hingga kehilangan tempatnya di kerajaan. Ia terlempar ke laut, tetapi kekuatan samudra menyelamatkannya dan memberinya kuasa untuk mengendalikan ombak. Setelah melalui penderitaan dan perubahan, Kadita bangkit sebagai penguasa laut yang menjaga wilayahnya.',
        skills: {
            skill1: "Ocean Ode",
            skill2: "Breath of the Ocean",
            ultimate: "Rough Waves"
        }
    },
    {
        name: `Kagura`,
        nickname: 'Onmyouji Master',
        role: ['Mage'],
        image: 'images/Kagura.png',
        lore: 'Kagura berasal dari keluarga Onmyouji yang mewariskan Seimei Umbrella, pusaka dengan kekuatan spiritual. Ia membawa payung itu meninggalkan rumah untuk menyusul Hayabusa, teman masa kecilnya yang sedang menjalankan tugas ninja. Dalam perjalanannya, Kagura membuktikan bahwa ia mampu mengendalikan kekuatan pusaka itu dan menghadapi bahaya dengan kemampuannya sendiri.',
        skills: {
            skill1: "Seimei Umbrella Open",
            skill2: "Rasho Umbrella Flee",
            ultimate: "Yin Yang Overturn"
        }
    },
    {
        name: `Kaja`,
        nickname: 'Nazar King',
        role: ['Support', 'Fighter'],
        image: 'images/Kaja.png',
        lore: 'Kaja adalah pemimpin Nazar dan penjaga Celestial Palace yang bertugas menjaga ketertiban di wilayah para dewa. Dengan kekuatan petir dan kemampuan terbang, ia menghadapi siapa pun yang mengancam istana maupun keseimbangan dunia. Tugas panjangnya membuat Kaja dikenal sebagai pelindung yang tegas dan setia pada tanggung jawabnya.',
        skills: {
            skill1: "Ring of Order",
            skill2: "Soaring Wings",
            ultimate: "Divine Binding"
        }
    },
    {
        name: `Kalea`,
        nickname: 'Surging Wave',
        role: ['Support', 'Fighter'],
        image: 'images/Kalea.png',
        lore: 'Kalea adalah anak laut yang memiliki hubungan dengan Great Serpent dan kekuatan yang belum sepenuhnya ia pahami. Ia tumbuh dengan semangat petualang, lalu bertemu Badang yang membantunya mengenali kemampuan tersebut. Perjalanan Kalea membawanya semakin dekat pada warisan leluhurnya dan perannya sebagai pelindung laut.',
        skills: {
            skill1: "Wavebreaker",
            skill2: "Tidal Strike",
            ultimate: "Tsunami Slam"
        }
    },
    {
        name: `Karina`,
        nickname: 'Shadow Blade',
        role: ['Assassin'],
        image: 'images/Karina.png',
        lore: 'Karina berasal dari bangsa Dark Elf dan dilatih menjadi pembunuh yang bergerak dalam bayangan. Ketika kekuatan Abyss mengancam kaumnya, ia berusaha melindungi mereka sekaligus mencari adiknya, Selena, yang telah jatuh ke dalam pengaruh gelap. Konflik keluarga dan kesetiaannya pada bangsanya terus membayangi setiap langkah Karina.',
        skills: {
            skill1: "Dance of Blades",
            skill2: "Dance of Death",
            ultimate: "Shadow Assault"
        }
    },
    {
        name: `Karrie`,
        nickname: 'Lost Star',
        role: ['Marksman'],
        image: 'images/Karrie.png',
        lore: 'Karrie berasal dari ras Yasson, yang tubuhnya ditandai pola energi dan dibentuk untuk menjadi pejuang. Ia dibesarkan dengan latihan keras hingga terbiasa mengandalkan diri sendiri dan menyembunyikan perasaannya. Setelah meninggalkan tanah asalnya, Karrie membawa kemampuan tempurnya ke Land of Dawn dan mencari tujuan baru.',
        skills: {
            skill1: "Spinning Lightwheel",
            skill2: "Phantom Step",
            ultimate: "Speedy Lightwheel"
        }
    },
    {
        name: `Khaleed`,
        nickname: 'Desert Scimitar',
        role: ['Fighter'],
        image: 'images/Khaleed.png',
        lore: 'Khaleed adalah pangeran dari wilayah gurun Agelta yang tumbuh di tengah persaingan dan konflik antarkelompok. Ia memimpin rakyatnya menghadapi ancaman Khufra dan berjuang agar tanah kelahirannya tidak jatuh ke tangan tiran tersebut. Keberaniannya menjadikannya pemimpin yang dihormati sekaligus pendekar gurun yang tangguh.',
        skills: {
            skill1: "Desert Tornado",
            skill2: "Quicksand Guard",
            ultimate: "Raging Sandstorm"
        }
    },
    {
        name: `Khufra`,
        nickname: 'Desert Tyrant',
        role: ['Tank'],
        image: 'images/Khufra.png',
        lore: 'Khufra adalah penguasa kejam yang pernah berusaha memperluas kekuasaannya ke seluruh gurun barat. Hubungannya dengan astrolog bernama Eslora menjadi bagian penting dari kisahnya, tetapi ambisi Khufra akhirnya membawa kehancuran bagi dirinya dan wilayahnya. Ia disegel selama berabad-abad sebelum kekuatannya kembali membangkitkannya.',
        skills: {
            skill1: "Tyrant's Revenge",
            skill2: "Bouncing Ball",
            ultimate: "Tyrant's Rage"
        }
    },
    {
        name: `Kimmy`,
        nickname: 'Hoverjet Outrider',
        role: ['Marksman', 'Mage'],
        image: 'images/Kimmy.png',
        lore: 'Kimmy tumbuh di Eruditio dengan rasa ingin tahu besar terhadap sains dan bahan kimia. Ia mengembangkan senjata serta hoverjet yang memungkinkannya bertempur dengan cara berbeda dari prajurit lain. Meski kecintaannya pada eksperimen kerap membuatnya berselisih dengan ayahnya yang berlatar militer, Kimmy tetap menggunakan penemuannya untuk melindungi kota.',
        skills: {
            skill1: "Anti-Grav Thruster",
            skill2: "Starlium Beam",
            ultimate: "Traction Pulse"
        }
    },
    {
        name: `Lancelot`,
        nickname: 'Blade of Roses',
        role: ['Assassin'],
        image: 'images/Lancelot.png',
        lore: 'Lancelot berasal dari House Baroque dan dikenal sebagai pendekar anggar berbakat yang mengandalkan kecepatan serta keanggunan. Setelah kalah dan terluka dalam sebuah pertempuran, ia dirawat oleh Odette di Swan Castle. Pengalaman itu mengubah sikapnya dan membuatnya berlatih kembali hingga menjadi pendekar yang lebih matang.',
        skills: {
            skill1: "Puncture",
            skill2: "Thorned Rose",
            ultimate: "Phantom Execution"
        }
    },
    {
        name: `Lapu-Lapu`,
        nickname: 'Courageous Blade',
        role: ['Fighter'],
        image: 'images/Lapu-Lapu.png',
        lore: 'Lapu-Lapu adalah pemimpin suku di kepulauan yang bertekad menjaga tanah dan rakyatnya. Ketika kekuatan asing mengancam kebebasan mereka, ia mengangkat senjata dan memimpin perlawanan tanpa gentar. Dengan dua bilah senjatanya, Lapu-Lapu berjuang mempertahankan rumahnya dan kehormatan kaumnya.',
        skills: {
            skill1: "Justice Blades",
            skill2: "Jungle Warrior",
            ultimate: "Bravest Fighter"
        }
    },
    {
        name: `Layla`,
        nickname: 'Energy Gunner',
        role: ['Marksman'],
        image: 'images/Layla.png',
        lore: 'Layla tumbuh di Eruditio dalam keluarga yang dekat dengan penelitian teknologi dan senjata. Ia menggunakan Malefic Gun, senjata energi yang dibuat untuk menghadapi ancaman besar terhadap kota. Berani dan bersemangat, Layla bergabung dengan para pelindung Eruditio untuk menjaga rumahnya dari bahaya.',
        skills: {
            skill1: "Malefic Bomb",
            skill2: "Void Projectile",
            ultimate: "Destruction Rush"
        }
    },
    {
        name: `Leomord`,
        nickname: 'Sworn Sword',
        role: ['Fighter'],
        image: 'images/Leomord.png',
        lore: 'Leomord dahulu adalah kesatria yang setia menjaga Necrokeep dan rajanya, Vexana. Ketika wilayah itu ditelan kekuatan Abyss, ia gugur bersama pasukannya, tetapi kemudian dibangkitkan kembali sebagai kesatria kematian. Walau raganya berubah, kesetiaan dan kehormatannya tetap membuatnya berdiri di sisi Vexana.',
        skills: {
            skill1: "Momentum",
            skill2: "Decimation Assault",
            ultimate: "Phantom Steed"
        }
    },
    {
        name: `Lesley`,
        nickname: 'Deadly Sniper',
        role: ['Marksman', 'Assasin'],
        image: 'images/Lesley.png',
        lore: 'Lesley kehilangan ayahnya ketika ia masih muda setelah sang penjaga gugur melindungi Duke Vance. Keluarga Vance kemudian membesarkannya bersama Harley, dan Lesley dilatih untuk menjadi penembak jitu yang andal. Ia mengabdikan keterampilannya untuk menjaga keluarga yang telah menerimanya dan menyelesaikan misi dengan ketepatan tinggi.',
        skills: {
            skill1: "Master of Camouflage",
            skill2: "Tactical Grenade",
            ultimate: "Ultimate Snipe"
        }
    },
    {
        name: `Ling`,
        nickname: 'Cyan Finch',
        role: ['Assassin'],
        image: 'images/Ling.png',
        lore: 'Ling adalah pendekar dari Cadia Riverlands yang menguasai teknik bergerak di antara bayangan dan puncak-puncak tinggi. Ia pernah meninggalkan jalur yang ditetapkan para petarung Cadia demi mencari kebebasan dan membuktikan kemampuannya sendiri. Persaingan sekaligus ikatannya dengan Hayabusa terus membawanya kembali pada konflik di tanah kelahirannya.',
        skills: {
            skill1: "Finch Poise",
            skill2: "Defiant Sword",
            ultimate: "Tempest of Blades"
        }
    },
    {
        name: `Lolita`,
        nickname: 'Steel Elf',
        role: ['Support', 'Tank'],
        image: 'images/Lolita.png',
        lore: 'Lolita dikenal lembut dan pengertian, tetapi ia selalu ingin menjadi cukup kuat untuk melindungi orang lain. Ia berusaha membuat dirinya setangguh baja dan kemudian menemukan tempat di Eruditio, tempat ia berteman dengan Layla. Dengan palu dan perisainya, Lolita berdiri di garis depan demi menjaga orang-orang yang ia sayangi.',
        skills: {
            skill1: "Power Charge",
            skill2: "Guardian's Reflection",
            ultimate: "Noumenon Blast"
        }
    },
    {
        name: `Lukas`,
        nickname: 'Best of Light',
        role: ['Fighter'],
        image: 'images/Lukas.png',
        lore: 'Lukas adalah Sacred Beast yang bertemu dengan seorang pemuda bernama Gaius setelah keduanya bertarung sengit selama berhari-hari. Pertarungan itu berakhir bukan dengan permusuhan, melainkan persahabatan dan tekad untuk membangun negeri bagi mereka yang terdampak perang. Bersama-sama mereka menjelajahi Land of Dawn dan mendirikan Moniyan Empire, dengan Lukas menjadi Beast of Light yang dikenang rakyatnya.',
        skills: {
            skill1: "Flash Combo",
            skill2: "Flash Step",
            ultimate: "Unleash the Beast"
        }
    },
    {
        name: `Lunox`,
        nickname: 'Twilight Goddess',
        role: ['Mage'],
        image: 'images/Lunox.png',
        lore: 'Lunox memiliki kekuatan yang terhubung dengan dua energi bertentangan, yakni Order dan Chaos. Ketika keseimbangan dunia terancam, ia menggunakan kemampuannya untuk menahan kedua kekuatan itu agar tidak menghancurkan Land of Dawn. Sejak saat itu, Lunox hidup di antara kenyataan dan mimpi sambil menjaga keseimbangan yang rapuh.',
        skills: {
            skill1: "Starlight Pulse",
            skill2: "Chaos Assault",
            skill3: "Cosmic Fission",
            ultimate: "Order & Chaos"
        }
    },
    {
        name: `Luoyi`,
        nickname: 'Yin-yang Geomancer',
        role: ['Mage'],
        image: 'images/Luo Yi.png',
        lore: 'Luo Yi adalah geomancer yang memahami hubungan antara energi Yin dan Yang. Ia mengamati bintang dan menanti perubahan yang akan membawanya kembali pada Yu Zhong, sosok yang terikat dengan nasib Cadia Riverlands. Keyakinannya pada keseimbangan dua kekuatan itu membuatnya mengikuti Yu Zhong dalam konflik yang menentukan masa depan wilayah tersebut.',
        skills: {
            skill1: "Dispersion",
            skill2: "Rotation",
            ultimate: "Diversion"
        }
    },
    {
        name: `Lylia`,
        nickname: 'Little Witch',
        role: ['Mage'],
        image: 'images/Lylia.png',
        lore: 'Lylia adalah penyihir muda berbakat yang belajar di Magic Academy dan gemar mencoba sihir yang dianggap berbahaya. Rasa ingin tahunya membawanya bekerja sama dengan Gloom, makhluk bayangan yang menjadi teman sekaligus sumber kekuatannya. Bersama-sama, mereka sering membuat kekacauan, tetapi kemampuan Lylia juga membantu menghadapi ancaman yang lebih besar.',
        skills: {
            skill1: "Magic Shockwave",
            skill2: "Shadow Energy",
            ultimate: "Black Shoes"
        }
    },
    {
        name: `Marcel`,
        nickname: 'Soul Photographer',
        role: ['Support'],
        image: 'images/100_df7603c292198bf4aa7b551d401ea5c1.png',
        lore: 'Marcel Paxley adalah seniman muda dari keluarga bangsawan yang dikenal anggun dan penuh rahasia. Sihir gelap memecah jiwanya, menghubungkan dirinya dengan kamera bernama Clemar sehingga keduanya memandang dunia dari sudut yang berbeda. Melalui fotografi, Marcel dan Clemar mengabadikan kenyataan, termasuk rasa sakit dan ketidaksempurnaan yang sering disembunyikan orang lain.',
        skills: {
            skill1: "Framed Moment",
            skill2: "Tracking Shot",
            ultimate: "Golden Hour"
        }
    },
    {
        name: `Martis`,
        nickname: 'Ashura King',
        role: ['Fighter'],
        image: 'images/Martis.png',
        lore: 'Martis adalah pejuang Ashura yang menghabiskan hidupnya menaklukkan ribuan dunia dalam Three Thousand Worlds. Setiap kemenangan memberinya gelar dan pengalaman, tetapi tidak pernah menghilangkan dahaganya akan lawan yang lebih kuat. Ia terus mengembara mencari tantangan yang mampu menguji batas kemampuannya.',
        skills: {
            skill1: "Asura Aura",
            skill2: "Mortal Coil",
            ultimate: "Decimation"
        }
    },
    {
        name: `Masha`,
        nickname: 'Wild-oats Fist',
        role: ['Fighter', 'Tank'],
        image: 'images/Masha.png',
        lore: 'Masha berasal dari Sarmi Tribe di Northern Vale, yang hidup berdampingan dengan para beruang dan memiliki ikatan spiritual dengan mereka. Ketika kedamaian wilayah itu terancam, ia bangkit untuk melindungi sukunya dan para beruang. Kekuatan yang diwariskan melalui ikatan tersebut menjadikannya petarung yang mengandalkan daya tahan dan keberanian.',
        skills: {
            skill1: "Feral Swipe",
            skill2: "Claw Strike",
            ultimate: "Savage Maul"
        }
    },
    {
        name: `Mathilda`,
        nickname: 'Swift Plume',
        role: ['Support', 'Assassin'],
        image: 'images/Mathilda.png',
        lore: 'Mathilda dibesarkan dalam suku kuno di Gurun Barat yang menjaga tradisi leluhur dan gunung suci mereka. Saat meninggalkan tanah asalnya, ia bertemu orang-orang yang membutuhkan bantuan dan memilih mendampingi mereka dalam perjalanan. Keberaniannya membuat Mathilda menjadi penunjuk jalan sekaligus pelindung bagi rekan-rekannya.',
        skills: {
            skill1: "Soul Bloom",
            skill2: "Guiding Wind",
            ultimate: "Circling Eagle"
        }
    },
    {
        name: `Melissa`,
        nickname: 'Cursed Needle',
        role: ['Marksman'],
        image: 'images/Melissa.png',
        lore: 'Melissa tumbuh di toko jahit kecil milik ibunya di Lumina City dan sejak kecil dikenal cerdik serta sulit diam. Ia memakai jarum khusus dan boneka-boneka ajaib untuk menghadapi kutukan serta masalah yang mengusik orang-orang di sekitarnya. Di balik sikap jenakanya, Melissa sangat peduli kepada keluarganya dan kerap membantu mereka yang terjebak dalam kesulitan.',
        skills: {
            skill1: "Falling!",
            skill2: "Eyes on You!",
            ultimate: "Go Away!"
        }
    },
    {
        name: `Minotour`,
        nickname: 'Son of Minos',
        role: ['Tank', 'Support'],
        image: 'images/Minotaur.png',
        lore: 'Minotaur berasal dari bangsa Minos dan sejak kecil dikenal memiliki kekuatan besar yang sulit dikendalikan. Ia berlatih untuk menguasai amarahnya serta menjadi pelindung bagi kaumnya. Setelah berbagai ujian dan konflik, Minotaur bangkit sebagai pejuang yang menjaga kehormatan bangsa Minos.',
        skills: {
            skill1: "Despair Stomp",
            skill2: "Motivation Roar",
            ultimate: "Minoan Fury"
        }
    },
    {
        name: `Minsitthar`,
        nickname: 'Courageous Warriror',
        role: ['Fighter'],
        image: 'images/Minsitthar.png',
        lore: 'Minsitthar adalah pangeran Mahar Pura yang sejak kecil menunjukkan kepedulian kepada rakyat biasa. Perjalanan hidupnya membawanya jauh dari istana dan mempertemukannya dengan banyak bahaya sebelum ia kembali menghadapi persoalan kerajaannya. Ia berjuang dengan tombak dan keberanian untuk melindungi rakyat serta memulihkan masa depan negerinya.',
        skills: {
            skill1: "Spear of Glory",
            skill2: "Shield Assault",
            ultimate: "King's Calling"
        }
    },
    {
        name: `Miya`,
        nickname: 'Moonlight Archer',
        role: ['Marksman'],
        image: 'images/Miya.png',
        lore: 'Miya adalah pemanah Moon Elf yang mengabdi kepada Moon Goddess dan menjaga Moonlit Forest. Ketika perang dan serangan Abyss mengancam kaumnya, ia berdoa memohon kekuatan untuk melindungi rakyatnya. Cahaya bulan menjawab panggilannya, dan Miya bangkit sebagai pemimpin yang berjuang membawa para elf menuju keselamatan.',
        skills: {
            skill1: "Moon Arrow",
            skill2: "Arrow of Eclipse",
            ultimate: "Hidden Moonlight"
        }
    },
    {
        name: `Moskov`,
        nickname: 'Spear of Quiescence',
        role: ['Marksman'],
        image: 'images/Moskov.png',
        lore: 'Moskov dahulu merupakan pejuang dari suku gurun dan pernah memiliki ikatan kuat dengan Khaleed. Kehancuran kaumnya dan pengkhianatan yang ia rasakan mengubah kesedihannya menjadi keinginan untuk membalas dendam. Setelah terseret ke dalam kegelapan Abyss, Moskov kembali sebagai prajurit yang dikuasai amarah dan terus memburu musuh-musuhnya.',
        skills: {
            skill1: "Abyss Walker",
            skill2: "Spear of Misery",
            ultimate: "Spear of Destruction"
        }
    },
    {
        name: `Nana`,
        nickname: 'Sweet Leonin',
        role: ['Mage'],
        image: 'images/Nana.png',
        lore: 'Nana adalah Leonin ceria yang tinggal di Moonlit Forest, tempat berbagai makhluk hidup berdampingan. Sihirnya yang kuat sempat sulit ia kendalikan, tetapi bantuan dan bimbingan orang-orang di sekitarnya membuatnya belajar mengatur kekuatan itu. Kini Nana menjelajahi dunia bersama teman-temannya dan menggunakan sihirnya untuk membantu mereka.',
        skills: {
            skill1: "Magic Boomerang",
            skill2: "Molina Smooch",
            ultimate: "Molina Blitz"
        }
    },
    {
        name: `Natalia`,
        nickname: 'Bright Claw',
        role: ['Assassin'],
        image: 'images/Natalia.png',
        lore: 'Natalia dibesarkan oleh Church of Light dan dilatih sejak muda untuk menjadi pembunuh bayaran yang bekerja dalam bayangan. Setelah sebuah misi penting gagal, ia kehilangan tempatnya di gereja dan harus bertahan hidup sendiri. Natalia kemudian membangun reputasi sebagai assassin mandiri yang menyelesaikan tugasnya tanpa banyak bicara.',
        skills: {
            skill1: "Claw Dash",
            skill2: "Smoke Bomb",
            ultimate: "The Hunt"
        }
    },
    {
        name: `Natan`,
        nickname: 'Spacetime Walker',
        role: ['Marksman'],
        image: 'images/Natan.png',
        lore: 'Natan hidup di masa depan ketika kehancuran akibat Abyss mengancam seluruh Land of Dawn. Sebagai ilmuwan, ia mencari cara mengubah peristiwa yang telah membawa dunia menuju kehancuran. Ia menembus ruang dan waktu untuk kembali ke masa lalu, berharap dapat mengubah masa depan tanpa kehilangan harapan.',
        skills: {
            skill1: "Superposition",
            skill2: "Interference!",
            ultimate: "Entropy?"
        }
    },
    {
        name: `Nolan`,
        nickname: 'Cosmic Wayfinder',
        role: ['Assassin'],
        image: 'images/Nolan.png',
        lore: 'Nolan adalah ilmuwan Eruditio yang meneliti celah dan perjalanan antar dimensi. Sebuah eksperimen membawanya tersesat jauh dari dunianya, meninggalkan putrinya, Layla, tanpa kepastian tentang nasibnya. Setelah menemukan jalan untuk kembali, Nolan menjelajahi ruang dan waktu demi menemukan Layla dan memperbaiki dampak eksperimennya.',
        skills: {
            skill1: "Expansion",
            skill2: "Gauge",
            ultimate: "Fracture"
        }
    },
    {
        name: `Novaria`,
        nickname: 'Star Rebel',
        role: ['Mage'],
        image: 'images/Novaria.png',
        lore: 'Novaria pernah menjadi pengamat bintang yang hidupnya seolah telah ditentukan oleh ramalan. Ia terperangkap dalam kesadaran di antara bintang-bintang dan terus menyaksikan kisah hidupnya berulang tanpa bisa mengubahnya. Keinginannya untuk menolak takdir mendorong Novaria mencari jalan keluar dan membentuk masa depan dengan pilihannya sendiri.',
        skills: {
            skill1: "Astral Meteor",
            skill2: "Astral Recall",
            ultimate: "Astral Echo"
        }
    },
    {
        name: `Obsidia`,
        nickname: `Sovereign of Dark's End`,
        role: ['Marksman'],
        image: 'images/Obsidia.png',
        lore: 'Obsidia bergerak di kedalaman Abyss untuk memburu Spawns of Decay, makhluk yang meninggalkan jejak kerusakan dan darah kuno. Setiap perburuan memperkuat dirinya dan menambah tulang pada senjatanya. Ia kembali sebagai Sovereign of Dark’s End, membawa ancaman baru bagi kekuatan-kekuatan yang bersembunyi di Abyss.',
        skills: {
            skill1: "Abyssal Bone Needle",
            skill2: "Phantom Shadowmeld",
            ultimate: "Hunt of Bone"
        }
    },
    {
        name: `Odette`,
        nickname: 'Swan Princess',
        role: ['Mage'],
        image: 'images/Odette.png',
        lore: 'Odette berasal dari Swan Castle, istana yang dibangun oleh keluarga kerajaan yang memilih cinta daripada takhta. Tumbuh dengan bakat sihir dan suara yang memikat, ia menjaga warisan keluarganya sekaligus mencari makna hidup di luar kemewahan istana. Pertemuannya dengan Lancelot membuka jalan bagi hubungan yang mengubah pandangannya tentang kewajiban dan cinta.',
        skills: {
            skill1: "Avian Authority",
            skill2: "Blue Nova",
            ultimate: "Swan Song"
        }
    },
    {
        name: `Paquito`,
        nickname: 'The Heavenly Fist',
        role: ['Fighter', 'Assassin'],
        image: 'images/Paquito.png',
        lore: 'Paquito tumbuh di wilayah selatan Moniyan yang porak-poranda oleh pengaruh Abyss. Ia melatih tinjunya hingga menjadi petarung yang disegani dan memilih menghadapi para penindas secara langsung. Bagi Paquito, kekuatan bukan sekadar jalan menuju kemenangan, tetapi cara membela orang-orang yang tak mampu melawan.',
        skills: {
            skill1: "Heavy Left Punch",
            skill2: "Jab",
            ultimate: "Knockout Strike"
        }
    },
    {
        name: `Pharsa`,
        nickname: 'Wings of Vengeance',
        role: ['Mage'],
        image: 'images/Pharsa.png',
        lore: 'Pharsa berasal dari suku Askati yang hidup damai di hutan sampai serangan menghancurkan rumah dan keluarganya. Ia kehilangan penglihatan, tetapi burung Verri tetap mendampinginya dan membantunya melihat dunia dengan cara berbeda. Didorong rasa kehilangan dan tekad untuk melindungi kaumnya, Pharsa menggunakan sihirnya untuk menghadapi para penyerang.',
        skills: {
            skill1: "Curse of Crow",
            skill2: "Energy Impact",
            ultimate: "Feathered Air Strike"
        }
    },
    {
        name: `Phoveus`,
        nickname: 'Chains of Sin',
        role: ['Fighter'],
        image: 'images/Phoveus.png',
        lore: 'Phoveus pernah menjadi prajurit Moniyan di perbatasan Lantis Mountains dan bertempur bersama unit kecil yang terkenal berani. Ketika keadaan perang menjadi genting, ia memanggil kekuatan Evil God demi menyelamatkan rekan-rekannya, tetapi kemudian dicap sebagai pendosa. Dalam perjalanan menuju hukuman, Phoveus berhasil mengikat dirinya dan sang dewa jahat di sebuah monolit.',
        skills: {
            skill1: "Demonic Impact",
            skill2: "Dark Wave",
            ultimate: "Infernal Pursuit"
        }
    },
    {
        name: `Popol and Kupa`,
        nickname: 'Icefield Companions',
        role: ['Marksman'],
        image: 'images/Popol and Kupa.png',
        lore: 'Popol adalah pemburu muda dari Northern Vale yang menemukan Kupa, seekor serigala yang pernah dianggap sebagai musuh. Setelah saling menolong, keduanya membentuk ikatan kuat dan menjadi sahabat yang tak terpisahkan. Popol merencanakan serangan dengan cerdik, sementara Kupa melindunginya dalam setiap perburuan dan petualangan.',
        skills: {
            skill1: "Bite 'em, Kupa!",
            skill2: "Kupa, Help!",
            skill3: "Popol's Surprise",
            ultimate: "We Are Angry!"
        }
    },
    {
        name: `Rafaela`,
        nickname: 'Wings of Holliness',
        role: ['Support'],
        image: 'images/Rafaela.png',
        lore: 'Rafaela adalah malaikat yang menggunakan cahaya untuk menyembuhkan dan melindungi makhluk hidup. Bersama saudara kembarnya, Argus, ia pernah mengabdi kepada Monastery of Light, tetapi keduanya memiliki pandangan berbeda tentang cara menghadapi kejahatan. Ketika Abyss kembali mengancam Land of Dawn, Rafaela turun tangan untuk menolong para korban dan melawan kegelapan.',
        skills: {
            skill1: "Light of Retribution",
            skill2: "Holy Healing",
            ultimate: "Holy Baptism"
        }
    },
    {
        name: `Roger`,
        nickname: 'Dire Wolf Hunter',
        role: ['Fighter', 'Marksman'],
        image: 'images/Roger.png',
        lore: 'Roger adalah pemburu berpengalaman yang melacak makhluk buas di hutan dan melindungi orang-orang yang tinggal di sekitarnya. Dalam sebuah perburuan, ia terluka oleh serigala raksasa dan ikut terkena kutukan yang mengubah wujudnya. Sejak itu Roger hidup dengan dua sisi dirinya, menggunakan kekuatan manusia dan serigala untuk menghadapi monster lain.',
        skills: {
            skill1: "Open Fire",
            skill2: "Hunter's Steps",
            ultimate: "Wolf Transformation"
        }
    },
    {
        name: `Ruby`,
        nickname: 'Little Red Hood',
        role: ['Fighter'],
        image: 'images/Ruby.png',
        lore: 'Ruby pernah hidup tenang bersama keluarganya sampai serangan serigala mengubah hidupnya dan merenggut orang-orang yang ia sayangi. Setelah diselamatkan, ia mengambil sabit dan bertekad memburu makhluk yang menghancurkan rumahnya. Meski tampak ceria, Ruby membawa kesedihan masa lalu dan mengubahnya menjadi keberanian untuk melindungi orang lain.',
        skills: {
            skill1: "Be Good!",
            skill2: "Don't Run, Wolf King!",
            ultimate: "I'm Offended!"
        }
    },
    {
        name: `Saber`,
        nickname: 'Wandering Sword',
        role: ['Assassin'],
        image: 'images/Saber.png',
        lore: 'Duan Meng tumbuh di Tianyin Swordmaster Sect dan sejak kecil mengasah kemampuan berpedangnya. Para ilmuwan Laboratory 1718 kemudian menculiknya dan mengubah tubuhnya menjadi senjata cyborg. Setelah berhasil melarikan diri, Saber mengembara untuk menghancurkan fasilitas yang menciptakannya dan menuntut kebebasannya.',
        skills: {
            skill1: "Orbiting Swords",
            skill2: "Charge",
            ultimate: "Triple Sweep"
        }
    },
    {
        name: `Selena`,
        nickname: 'Abyssal Witch',
        role: ['Assassin', 'Mage'],
        image: 'images/Selena.png',
        lore: 'Selena berasal dari bangsa Dark Elf dan pernah menjadi korban yang dipilih untuk dikorbankan kepada Abyss. Kekuatan gelap justru menyelamatkannya, tetapi mengubah dirinya dan membuatnya terikat pada kehendak Abyss. Kini Selena hidup di antara dua sisi kekuatan, sementara hubungannya dengan kakaknya, Karina, terus dibayangi pilihan masa lalu.',
        skills: {
            skill1: "Abyssal Trap",
            skill2: "Abyssal Arrow",
            ultimate: "Primal Darkness"
        }
    },
    {
        name: `Silvanna`,
        nickname: 'Imperial Knightess',
        role: ['Fighter'],
        image: 'images/Silvanna.png',
        lore: 'Silvanna adalah putri Moniyan yang hidupnya berubah ketika adiknya, Dyrroth, menghilang dan dianggap telah meninggal. Ia bergabung dengan pasukan kekaisaran dan berlatih menjadi kesatria untuk melindungi rakyatnya. Namun, pencarian terhadap kebenaran tentang Dyrroth membawanya berhadapan dengan Abyss dan masa lalu keluarganya sendiri.',
        skills: {
            skill1: "Cometic Lance",
            skill2: "Spiral Strangling",
            ultimate: "Imperial Justice"
        }
    },
    {
        name: 'Sora',
        nickname: 'Shifthing Cloud',
        role: ['Fighter', 'Assassin'],
        image: 'images/Hero1311-icon.png',
        lore: 'Sora adalah pemuda berjiwa bebas yang mengembara di antara bukit pasir Agelta Drylands. Ia menghadapi perjalanan dengan tekad kuat dan kemampuan bertarung yang dapat berubah mengikuti keadaan. Dalam pengembaraannya, Sora bertemu dengan Belerick dan Floryn, lalu ikut terhubung dengan kehidupan di Oasis.',
        skills: {
            skill1: "Sundering Strike",
            skill2: "Windstride",
            ultimate: "Shifting Skies"
        }
    },
    {
        name: `Sun`,
        nickname: 'Monkey King',
        role: ['Fighter'],
        image: 'images/Sun.png',
        lore: 'Sun dikenal sebagai Raja Kera, sosok sakti yang lahir dari batu dan memiliki rasa ingin tahu serta keberanian besar. Setelah menguasai berbagai kemampuan dan senjata, ia mengembara untuk menguji kekuatannya dan mencari kebebasan. Dalam petualangannya, Sun kerap menghadapi penguasa maupun makhluk kuat yang menghalangi jalannya.',
        skills: {
            skill1: "Endless Variety",
            skill2: "Swift Exchange",
            skill3: "Instantaneous Move",
            ultimate: "Clone Techniques"
        }
    },
    {
        name: `Suyou`,
        nickname: 'Mask of the Immortal',
        role: ['Assassin', 'Fighter'],
        image: 'images/Suyou.png',
        lore: 'Suyou adalah penerus terakhir para Exorcist of Nuo yang menyaksikan kekuatan seorang Immortal Nuo saat masih muda. Pengalaman itu menginspirasinya untuk menjelajahi berbagai wilayah dan membantu orang yang terancam oleh roh jahat. Dengan topeng suci dan bilah pusaka, Suyou menghadapi gema kebencian yang dapat menelan desa-desa.',
        skills: {
            skill1: "Blade Surge",
            skill2: "Soul Sever",
            skill3: "Evil Queller"
        }
    },
    {
        name: `Terizla`,
        nickname: 'Executioner',
        role: ['Fighter', 'Tank'],
        image: 'images/Terizla.png',
        lore: 'Terizla adalah pandai besi yang hidup bersama keluarganya sampai ia menjadi sasaran Inquisition dari Monastery of Light. Ia dipenjara selama bertahun-tahun dan kehilangan orang-orang yang paling ia sayangi. Setelah lolos, Terizla menggunakan palunya untuk membalas institusi yang menghancurkan hidupnya.',
        skills: {
            skill1: "Revenge Strike",
            skill2: "Execution Strike",
            ultimate: "Penalty Zone"
        }
    },
    {
        name: `Thamuz`,
        nickname: 'Lord Lava',
        role: ['Fighter'],
        image: 'images/Thamuz.png',
        lore: 'Thamuz adalah pemimpin Lava Army dan salah satu penguasa penting di Abyss. Ia percaya bahwa kekuatan harus dibuktikan melalui pertempuran, sehingga terus mendorong pasukannya menaklukkan wilayah baru. Ambisinya membuat Thamuz menjadi ancaman besar bagi para penjaga Land of Dawn.',
        skills: {
            skill1: "Molten Scythes",
            skill2: "Chasm Trample",
            ultimate: "Cauterant Inferno"
        }
    },
    {
        name: `Tigreal`,
        nickname: 'Warrior of Dawn',
        role: ['Tank'],
        image: 'images/Tigreal.png',
        lore: 'Tigreal lahir dalam keluarga Witting yang selama beberapa generasi mengabdi kepada Moniyan Empire. Ia tumbuh menjadi komandan yang menjunjung tinggi kehormatan, tetapi sebuah keputusan militer yang berujung pada banyak korban membuatnya meninggalkan tanah air. Setelah menghadapi kesalahannya, Tigreal kembali untuk membela kerajaan dan memimpin pasukan menghadapi Abyss.',
        skills: {
            skill1: "Attack Wave",
            skill2: "Sacred Hammer",
            ultimate: "Implosion"
        }
    },
    {
        name: `Uranus`,
        nickname: 'Aesthereal Defender',
        role: ['Tank'],
        image: 'images/Uranus.png',
        lore: 'Uranus adalah penjaga mekanis yang diciptakan oleh Ancient Ones untuk melindungi Celestial Palace. Selama berabad-abad ia tertidur di dalam istana, menunggu saat tugasnya kembali diperlukan. Ketika kerusakan dan ancaman membangunkannya, Uranus bangkit untuk mempertahankan tempat suci itu dari para penyusup.',
        skills: {
            skill1: "Ionic Edge",
            skill2: "Transcendent Ward",
            ultimate: "Consecration"
        }
    },
    {
        name: `Vale`,
        nickname: 'Windtalker',
        role: ['Mage'],
        image: 'images/Vale.png',
        lore: 'Vale dan Valir tumbuh sebagai sahabat di Wind Valley dan sejak kecil menunjukkan bakat besar dalam sihir elemen. Ketika sebuah bencana memisahkan mereka, Vale terus mengasah kendali atas angin dan mencari sahabatnya. Pencarian itu membawanya keluar dari lembah untuk menghadapi bahaya yang mengancam Land of Dawn.',
        skills: {
            skill1: "Wind Blade",
            skill2: "Windblow",
            ultimate: "Windstorm"
        }
    },
    {
        name: `Valentina`,
        nickname: 'Prophetess of the Night',
        role: ['Mage'],
        image: 'images/Valentina.png',
        lore: 'Valentina berasal dari House Paxley, keluarga yang selama beberapa generasi mempertahankan wilayah Moniyan dari serangan Abyss. Kehilangan dan pengkhianatan mendorongnya mengejar kekuatan terlarang demi mengubah nasib orang-orang yang ia sayangi. Dengan sihir yang mampu mengambil kekuatan lawan, Valentina bergerak di antara ambisi pribadi dan konflik besar di Land of Dawn.',
        skills: {
            skill1: "Shadow Strike",
            skill2: "Arcane Shade",
            ultimate: "I Am You"
        }
    },
    {
        name: `Valir`,
        nickname: 'Son of Flames',
        role: ['Mage'],
        image: 'images/Valir.png',
        lore: 'Valir lahir dengan bakat sihir api yang kuat dan menjadi murid Gord di Magic Academy. Perbedaan pandangan tentang cara menggunakan sihir membuat hubungan mereka berubah menjadi persaingan. Valir kemudian pergi untuk menguasai kekuatannya sendiri dan menentukan jalan yang tidak dikendalikan oleh gurunya.',
        skills: {
            skill1: "Burst Fireball",
            skill2: "Searing Torrent",
            ultimate: "Vengeance Flame"
        }
    },
    {
        name: `Vexana`,
        nickname: 'Shimmer of Hope',
        role: ['Mage'],
        image: 'images/Vexana.png',
        lore: 'Vexana adalah putri Moniyan yang awalnya hidup nyaman di Lumina City dan tidak ingin meninggalkan kehidupan istana. Namun, tugas dan keadaan membawanya ke Necrokeep, tempat ia berhadapan dengan kutukan serta para penghuni yang telah lama kehilangan harapan. Di sana Vexana berusaha menghadirkan harapan baru sambil menguasai sihir yang menghubungkannya dengan dunia arwah.',
        skills: {
            skill1: "Deathly Grasp",
            skill2: "Cursed Blast",
            ultimate: "Eternal Guard"
        }
    },
    {
        name: `Wanwan`,
        nickname: 'Agile Tiger',
        role: ['Marksman'],
        image: 'images/Wanwan.png',
        lore: 'Wanwan dibesarkan oleh ayahnya, pemimpin Tangmen yang memilih meninggalkan dunia persilatan setelah senjata ciptaan kelompok itu disalahgunakan. Ia tumbuh lincah dan penuh rasa ingin tahu, lalu menjalin persahabatan dengan para pejuang Cadia Riverlands seperti Yin dan Yu Zhong. Wanwan menggunakan kemampuan serta senjata tersembunyinya untuk melindungi teman-teman dan tanah kelahirannya.',
        skills: {
            skill1: "Swallow's Path",
            skill2: "Needles in Flowers",
            ultimate: "Crossbow of Tang"
        }
    },
    {
        name: `X.Borg`,
        nickname: 'Firaga Armor',
        role: ['Fighter'],
        image: 'images/X.Borg.png',
        lore: 'X.Borg berasal dari kawasan miskin Eruditio yang pernah hancur akibat kebakaran besar. Tubuhnya terluka parah dalam bencana itu, lalu ia bertahan hidup dengan bantuan Firaga Armor yang mengubahnya menjadi petarung cyborg. Dipenuhi amarah kepada para ilmuwan yang terlibat, X.Borg memburu Dr. Rooney dan menyerang fasilitas penelitian mereka.',
        skills: {
            skill1: "Fire Missiles",
            skill2: "Fire Stake",
            ultimate: "Last Insanity"
        }
    },
    {
        name: `Xavier`,
        nickname: 'Defier of Light',
        role: ['Mage'],
        image: 'images/Xavier.png',
        lore: 'Xavier pernah menjadi anggota Order of Light yang mematuhi aturan gereja dan menjalankan tugas sebagai Arbiter. Namun, ia mulai meragukan ajaran yang menuntut kepatuhan tanpa pertanyaan, terutama ketika bertemu orang-orang yang dianggap berdosa oleh institusi tersebut. Pada akhirnya Xavier memilih menggunakan kekuatannya menurut keyakinannya sendiri dan melindungi mereka yang membutuhkan.',
        skills: {
            skill1: "Infinite Extension",
            skill2: "Mystic Field",
            ultimate: "Dawning Light"
        }
    },
    {
        name: `Yi Sun-shin`,
        nickname: 'Paenlong Legend',
        role: ['Assassin', 'Marksman'],
        image: 'images/Yi Sun-shin.png',
        lore: 'Yi Sun-shin adalah laksamana dan pemimpin armada yang mengabdikan hidupnya untuk melindungi tanah airnya. Ia dikenal mampu memimpin pasukan di darat maupun di laut, menggunakan kapal perang Turtle Ship untuk menghadapi ancaman. Keteguhan dan kecerdikan strateginya membuatnya menjadi legenda bagi rakyat yang ia bela.',
        skills: {
            skill1: "Traceless",
            skill2: "Blood Floods",
            ultimate: "Mountain Shocker"
        }
    },
    {
        name: `Yin`,
        nickname: 'Martial Genius',
        role: ['Fighter', 'Assassin'],
        image: 'images/Yin.png',
        lore: 'Yin tumbuh di Floral Falls, Cadia Riverlands, dan dikenal sebagai petarung muda yang baik hati serta dekat dengan Wanwan. Hidupnya berubah saat ia menjadi wadah bagi Lieh, sosok jahat yang berusaha menguasai tubuhnya. Yin terus berjuang mempertahankan jati dirinya dan menahan Lieh agar kekuatan itu tidak mencelakai orang-orang di sekitarnya.',
        skills: {
            skill1: "Charged Punch",
            skill2: "Instant Blast",
            ultimate: "My Turn"
        }
    },
    {
        name: `Yu Zhong`,
        nickname: 'Black Dragon',
        role: ['Fighter'],
        image: 'images/Yu Zhong.png',
        lore: 'Yu Zhong adalah reinkarnasi Black Dragon yang kembali ke Cadia Riverlands untuk merebut kekuatan dan kehormatan yang hilang. Ia mengumpulkan kekuatan Black Dragon dan menantang Great Dragon, gurunya di masa lalu, demi mengubah tatanan wilayah tersebut. Meski jalannya membuatnya berseberangan dengan teman-teman lama, Yu Zhong tetap bertekad mencapai tujuannya.',
        skills: {
            skill1: "Dragon Tail",
            skill2: "Soul Grip",
            skill3: "Furious Dive",
            ultimate: "Black Dragon Form"
        }
    },
    {
        name: `Yve`,
        nickname: 'Astrawarden',
        role: ['Mage'],
        image: 'images/Yve.png',
        lore: 'Yve adalah penjaga antardimensi yang diciptakan untuk mempertahankan keseimbangan di antara berbagai bidang keberadaan. Ia datang ke Land of Dawn setelah menemukan jejak Zhask dan ancaman yang dibawanya. Dengan sikap dingin dan tujuan yang jelas, Yve memburu Zhask demi mencegah kehancuran yang dapat meluas ke banyak dunia.',
        skills: {
            skill1: "Void Blast",
            skill2: "Void Crystal",
            ultimate: "Real World Manipulation"
        }
    },
    {
        name: `Zetian`,
        nickname: 'Celestial Empress',
        role: ['Mage'],
        image: 'images/Zetian.png',
        lore: 'Zetian naik menjadi Celestial Empress dan memerintah dari Divine Capital dengan ambisi besar. Ia menggunakan kekuatan sihir serta kecerdasannya untuk menjaga kedudukan dan memperluas pengaruhnya. Bagi Zetian, dunia harus tunduk pada tatanan yang ia yakini layak dipimpin olehnya.',
        skills: {
            skill1: "Phoenix Strike",
            skill2: "Phoenix Descent",
            ultimate: "Fury of the Phoenix"
        }
    },
    {
        name: `Zhask`,
        nickname: 'The King of Swarms',
        role: ['Mage'],
        image: 'images/Zhask.png',
        lore: 'Zhask adalah penguasa dari ras Kastiyan yang memimpin pasukan makhluk penyerbu. Ia menjelajahi berbagai wilayah untuk memperluas kekuasaan dan menaklukkan dunia baru. Perjalanannya membuatnya berulang kali berhadapan dengan Yve, penjaga antardimensi yang berusaha menghentikan ancamannya.',
        skills: {
            skill1: "Nightmaric Spawn",
            skill2: "Mind Eater",
            skill3: "Hive Clones",
            ultimate: "Dominator's Descent"
        }
    },
    {
        name: `Zhuxin`,
        nickname: 'Beacon of Spirits',
        role: ['Mage'],
        image: 'images/Zhuxin.png',
        lore: 'Zhuxin adalah perempuan misterius dari Zhu’an yang menggunakan Lantern of Spirits untuk menuntun kupu-kupu bara di antara dunia hidup dan mati. Ia dapat mendengar keinginan manusia dan menguji mereka yang datang meminta pertolongan. Selama berabad-abad, Zhuxin mengabulkan permintaan orang lain sambil berharap menemukan keinginannya sendiri.',
        skills: {
            skill1: "Fluttering Grace",
            skill2: "Lantern Flare",
            ultimate: "Crimson Beacon"
        }
    },
    {
        name: `Zilong`,
        nickname: 'Spear of Dragon',
        role: ['Fighter', 'Assassin'],
        image: 'images/Zilong.png',
        lore: 'Zilong berasal dari Cadia Riverlands dan kemudian dibesarkan sebagai murid Great Dragon. Ia menerima tugas untuk melindungi wilayah itu dan menjadi kakak sekaligus pembimbing bagi Chang’e. Dengan tombak naga, Zilong mengembara membantu mereka yang terancam dan menjaga keseimbangan di Cadia.',
        skills: {
            skill1: "Spear Flip",
            skill2: "Spear Strike",
            ultimate: "Supreme Warrior"
        }
    }
]