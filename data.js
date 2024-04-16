const ICONS = [
   {
      name: "flow cascade",
      keywords: "flow cascade process sequence chain stream series waterfall downward fall",
      icon: "eb2b",
      color: false,
   },
   {
      name: "flow line",
      keywords: "flow line process path route connection sequence chart direction track",
      icon: "eb2c",
      color: false,
   },
   {
      name: "flow parallel",
      keywords: "flow parallel process sequence side by side simultaneous coexisting together aligned parallelism",
      icon: "eb2d",
      color: false,
   },
   {
      name: "flow tree",
      keywords: "flow tree process diagram hierarchy structure branch sequence chart organization",
      icon: "eb2e",
      color: false,
   },
   {
      name: "install",
      keywords: "install setup download add configure setup arrange deploy initiate implement",
      icon: "eb2f",
      color: false,
   },
   {
      name: "layers",
      keywords: "layers stack levels arrangement overlay hierarchy organization depth strata tier",
      icon: "eb30",
      color: false,
   },
   {
      name: "open book",
      keywords: "open book read literature education knowledge learning text pages library",
      icon: "eb31",
      color: false,
   },
   {
      name: "resize 100",
      keywords: "resize 100% scale adjust enlarge expand shrink reduce zoom full size",
      icon: "eb32",
      color: false,
   },
   {
      name: "resize full screen",
      keywords: "resize full screen scale adjust expand enlarge maximize fit fullscreen view",
      icon: "eb33",
      color: false,
   },
   {
      name: "save1",
      keywords: "save download store preserve record keep retain cache backup archive",
      icon: "eb34",
      color: false,
   },
   {
      name: "select arrows",
      keywords: "select arrows choose pick pointer indicator navigation movement direction navigate",
      icon: "eb35",
      color: false,
   },
   {
      name: "sound mute",
      keywords: "sound mute volume quiet silent off mute button no sound turn off audio",
      icon: "eb36",
      color: false,
   },
   {
      name: "home",
      keywords: "home home house residence dwelling homepage home icon house icon residential",
      icon: "e900",
      color: false,
   },
   {
      name: "sound",
      keywords: "sound volume audio noise music noise mute loudness listen listen",
      icon: "eb37",
      color: false,
   },
   {
      name: "trash1",
      keywords: "trash delete remove discard dispose waste bin garbage recycle rubbish",
      icon: "eb38",
      color: false,
   },
   {
      name: "triangle down",
      keywords: "triangle down arrow direction pointer indicator navigation movement descend lower",
      icon: "eb39",
      color: false,
   },
   {
      name: "triangle left",
      keywords: "triangle left arrow direction pointer indicator navigation movement turn west",
      icon: "eb3a",
      color: false,
   },
   {
      name: "triangle right",
      keywords: "triangle right arrow direction pointer indicator navigation movement turn east",
      icon: "eb3b",
      color: false,
   },
   {
      name: "triangle up",
      keywords: "triangle up arrow direction pointer indicator navigation movement ascend raise",
      icon: "eb3c",
      color: false,
   },
   {
      name: "uninstall",
      keywords: "uninstall remove delete erase uninstall erase eliminate remove purge clean",
      icon: "eb3d",
      color: false,
   },
   {
      name: "upload to cloud",
      keywords: "upload cloud transfer data save backup sync store internet online",
      icon: "eb3e",
      color: false,
   },
   {
      name: "upload4",
      keywords: "upload transfer send data uploading forward share move sync post",
      icon: "eb3f",
      color: false,
   },
   {
      name: "add user",
      keywords: "add user register include append create membership invite join new",
      icon: "eb40",
      color: false,
   },
   {
      name: "address",
      keywords: "address location place residence home office destination position site venue",
      icon: "eb41",
      color: false,
   },
   {
      name: "adjust1",
      keywords: "adjust modify change adapt alter edit arrange customize fine tune calibrate",
      icon: "eb42",
      color: false,
   },
   {
      name: "air",
      keywords: "air gas atmosphere oxygen breathe wind sky fresh ventilation aerate",
      icon: "eb43",
      color: false,
   },
   {
      name: "aircraft landing",
      keywords: "aircraft landing plane flight airport touchdown arrive arrival airplane land",
      icon: "eb44",
      color: false,
   },
   {
      name: "aircraft take off",
      keywords: "aircraft take off plane flight airport departure depart leave airplane lift off",
      icon: "eb45",
      color: false,
   },
   {
      name: "aircraft",
      keywords: "aircraft plane flight aviation airplane jet aerospace pilot fly travel",
      icon: "eb46",
      color: false,
   },
   {
      name: "align bottom",
      keywords: "align bottom position arrange align layout adjust baseline lower base",
      icon: "eb47",
      color: false,
   },
   {
      name: "align horizontal middle",
      keywords: "align horizontal middle center position arrange balance align layout middle",
      icon: "eb48",
      color: false,
   },
   {
      name: "align left1",
      keywords: "align left position arrange leftmost layout align left align align left text",
      icon: "eb49",
      color: false,
   },
   {
      name: "align right1",
      keywords: "align right position arrange rightmost layout align right align align right text",
      icon: "eb4a",
      color: false,
   },
   {
      name: "align top",
      keywords: "align top position arrange align layout upper highest peak ceiling",
      icon: "eb4b",
      color: false,
   },
   {
      name: "align vertical middle",
      keywords: "align vertical middle center position arrange balance align layout middle",
      icon: "eb4c",
      color: false,
   },
   {
      name: "archive1",
      keywords: "archive save store backup file folder compress container library collection",
      icon: "eb4d",
      color: false,
   },
   {
      name: "area graph",
      keywords: "area graph chart graph plot data statistics trend analysis visualize diagram",
      icon: "eb4e",
      color: false,
   },
   {
      name: "attachment1",
      keywords: "attachment file paperclip clip document send email message link connect",
      icon: "eb4f",
      color: false,
   },
   {
      name: "awareness ribbon",
      keywords: "awareness ribbon ribbon support cause charity symbol awareness solidarity unity campaign",
      icon: "eb50",
      color: false,
   },
   {
      name: "back in time",
      keywords: "back in time time travel past history retro nostalgia retreat reverse rewind regress",
      icon: "eb51",
      color: false,
   },
   {
      name: "back",
      keywords: "back return previous backward reverse undo retreat go back backtrack backwards",
      icon: "eb52",
      color: false,
   },
   {
      name: "bar graph",
      keywords: "bar graph chart graph plot data statistics trend analysis visualize diagram",
      icon: "eb53",
      color: false,
   },
   {
      name: "battery1",
      keywords: "battery power charge energy level indicator electricity cell juice status",
      icon: "eb54",
      color: false,
   },
   {
      name: "beamed note",
      keywords: "beamed note music note sound audio melody tune song musical composition",
      icon: "eb55",
      color: false,
   },
   {
      name: "bell2",
      keywords: "bell notification alert ring alarm chime sound reminder ding signal",
      icon: "eb56",
      color: false,
   },
   {
      name: "blackboard",
      keywords: "blackboard chalkboard school education teaching learning classroom writing chalk board",
      icon: "eb57",
      color: false,
   },
   {
      name: "block",
      keywords: "block square cube obstacle barrier obstruct hinder impede prevent stop",
      icon: "eb58",
      color: false,
   },
   {
      name: "book2",
      keywords: "book read literature education knowledge learning text pages library study",
      icon: "eb59",
      color: false,
   },
   {
      name: "bowl",
      keywords: "bowl dish container vessel plate pot cup food soup serve",
      icon: "eb5a",
      color: false,
   },
   {
      name: "box",
      keywords: "box container package parcel carton crate storage chest package bin",
      icon: "eb5b",
      color: false,
   },
   {
      name: "briefcase2",
      keywords: "briefcase business work professional job career portfolio document carry luggage",
      icon: "eb5c",
      color: false,
   },
   {
      name: "browser",
      keywords: "browser internet web search online surf navigate chrome firefox safari",
      icon: "eb5d",
      color: false,
   },
   {
      name: "add to list",
      keywords: "add list append include inventory register addition catalog insert update",
      icon: "ea07",
      color: false,
   },
   {
      name: "classic computer",
      keywords: "computer retro vintage old fashioned antique classic desktop pc technology nostalgia",
      icon: "ea08",
      color: false,
   },
   {
      name: "controller fast backward",
      keywords: "controller fast backward rewind skip previous reverse backtrack return prior",
      icon: "eaeb",
      color: false,
   },
   {
      name: "creative commons attribution",
      keywords: "creative commons attribution license rights credit copyright permission usage acknowledgment",
      icon: "eaec",
      color: false,
   },
   {
      name: "creative commons noderivs",
      keywords: "creative commons noderivs license rights no derivatives prohibit modifications unaltered unmodified preserve",
      icon: "eaed",
      color: false,
   },
   {
      name: "creative commons noncommercial eu",
      keywords: "creative commons noncommercial eu license rights europe not for profit personal use non business",
      icon: "eaee",
      color: false,
   },
   {
      name: "creative commons noncommercial us",
      keywords: "creative commons noncommercial us license rights united states not for profit personal use non business",
      icon: "eaef",
      color: false,
   },
   {
      name: "creative commons public domain",
      keywords: "creative commons public domain license rights open free unrestricted no copyright common property",
      icon: "eaf0",
      color: false,
   },
   {
      name: "creative commons remix",
      keywords: "creative commons remix license rights adaptation mix modify alter rework",
      icon: "eaf1",
      color: false,
   },
   {
      name: "creative commons share",
      keywords: "creative commons share license rights distribution spread disseminate allocate divide",
      icon: "eaf2",
      color: false,
   },
   {
      name: "creative commons sharealike",
      keywords: "creative commons sharealike license rights derivative works adaptations remix modify share alike",
      icon: "eaf3",
      color: false,
   },
   {
      name: "creative commons1",
      keywords: "creative commons license rights open freedom sharing creative work legal copyleft",
      icon: "eaf4",
      color: false,
   },
   {
      name: "document landscape",
      keywords: "document landscape paper horizontal wide orientation page sheet file report",
      icon: "eaf5",
      color: false,
   },
   {
      name: "remove user",
      keywords: "remove user delete exclude eliminate dismiss expel erase subtract withdraw",
      icon: "eaf6",
      color: false,
   },
   {
      name: "warning2",
      keywords: "warning alert caution notification danger attention hazard advisory alarm threat",
      icon: "eaf7",
      color: false,
   },
   {
      name: "arrow bold down",
      keywords: "arrow bold down direction pointer indicator navigation movement descend lower",
      icon: "eaf8",
      color: false,
   },
   {
      name: "arrow bold left",
      keywords: "arrow bold left direction pointer indicator navigation movement turn west",
      icon: "eaf9",
      color: false,
   },
   {
      name: "arrow bold right",
      keywords: "arrow bold right direction pointer indicator navigation movement turn east",
      icon: "eafa",
      color: false,
   },
   {
      name: "arrow bold up",
      keywords: "arrow bold up direction pointer indicator navigation movement ascend raise",
      icon: "eafb",
      color: false,
   },
   {
      name: "arrow down3",
      keywords: "arrow down 3 direction pointer indicator navigation movement descend lower",
      icon: "eafc",
      color: false,
   },
   {
      name: "arrow left3",
      keywords: "arrow left 3 direction pointer indicator navigation movement turn west",
      icon: "eafd",
      color: false,
   },
   {
      name: "arrow long down",
      keywords: "arrow long down direction pointer indicator navigation movement descend lower",
      icon: "eafe",
      color: false,
   },
   {
      name: "arrow long left",
      keywords: "arrow long left direction pointer indicator navigation movement turn west",
      icon: "eaff",
      color: false,
   },
   {
      name: "arrow long right",
      keywords: "arrow long right direction pointer indicator navigation movement turn east",
      icon: "eb00",
      color: false,
   },
   {
      name: "arrow long up",
      keywords: "arrow long up direction pointer indicator navigation movement ascend raise",
      icon: "eb01",
      color: false,
   },
   {
      name: "arrow right3",
      keywords: "arrow right 3 direction pointer indicator navigation movement turn east",
      icon: "eb02",
      color: false,
   },
   {
      name: "arrow up3",
      keywords: "arrow up 3 direction pointer indicator navigation movement ascend raise",
      icon: "eb03",
      color: false,
   },
   {
      name: "arrow with circle down",
      keywords: "arrow circle down direction pointer indicator navigation movement descend lower",
      icon: "eb04",
      color: false,
   },
   {
      name: "arrow with circle left",
      keywords: "arrow circle left direction pointer indicator navigation movement turn west",
      icon: "eb05",
      color: false,
   },
   {
      name: "arrow with circle right",
      keywords: "arrow circle right direction pointer indicator navigation movement turn east",
      icon: "eb06",
      color: false,
   },
   {
      name: "arrow with circle up",
      keywords: "arrow circle up direction pointer indicator navigation movement ascend raise",
      icon: "eb07",
      color: false,
   },
   {
      name: "bookmark2",
      keywords: "bookmark favorite save mark tag flag reference reminder label archive",
      icon: "eb08",
      color: false,
   },
   {
      name: "bookmarks1",
      keywords: "bookmarks favorites save mark tag flag reference reminder label archive",
      icon: "eb09",
      color: false,
   },
   {
      name: "chevron down1",
      keywords: "chevron down arrow direction pointer indicator navigation movement descend lower",
      icon: "eb0a",
      color: false,
   },
   {
      name: "chevron left1",
      keywords: "chevron left arrow direction pointer indicator navigation movement turn west",
      icon: "eb0b",
      color: false,
   },
   {
      name: "chevron right1",
      keywords: "chevron right arrow direction pointer indicator navigation movement turn east",
      icon: "eb0c",
      color: false,
   },
   {
      name: "chevron small down",
      keywords: "chevron small down arrow direction pointer indicator navigation movement descend lower",
      icon: "eb0d",
      color: false,
   },
   {
      name: "chevron small left",
      keywords: "chevron small left arrow direction pointer indicator navigation movement turn west",
      icon: "eb0e",
      color: false,
   },
   {
      name: "chevron small right",
      keywords: "chevron small right arrow direction pointer indicator navigation movement turn east",
      icon: "eb0f",
      color: false,
   },
   {
      name: "chevron small up",
      keywords: "chevron small up arrow direction pointer indicator navigation movement ascend raise",
      icon: "eb10",
      color: false,
   },
   {
      name: "brush",
      keywords: "brush paint paintbrush art painting draw artistic stroke artist create",
      icon: "eb5e",
      color: false,
   },
   {
      name: "bucket",
      keywords: "bucket pail container vessel water handle carry bucketful store transport",
      icon: "eb5f",
      color: false,
   },
   {
      name: "cake",
      keywords: "cake dessert sweet pastry bake celebration party wedding birthday treat",
      icon: "eb60",
      color: false,
   },
   {
      name: "calculator2",
      keywords: "calculator math numbers calculate compute count arithmetic finance add subtract",
      icon: "eb61",
      color: false,
   },
   {
      name: "calendar2",
      keywords: "calendar date schedule planner time agenda appointment event month year",
      icon: "eb62",
      color: false,
   },
   {
      name: "camera2",
      keywords: "camera photography photo picture image capture shoot snapshot lens focus",
      icon: "eb63",
      color: false,
   },
   {
      name: "ccw",
      keywords: "ccw counterclockwise rotate anti clockwise counter clockwise turn reverse spin opposite inverse",
      icon: "eb64",
      color: false,
   },
   {
      name: "chat",
      keywords: "chat conversation talk message communicate dialogue discussion text conversation speech",
      icon: "eb65",
      color: false,
   },
   {
      name: "check1",
      keywords: "check tick mark approve confirm select done complete verified correct",
      icon: "eb66",
      color: false,
   },
   {
      name: "circle with cross",
      keywords: "circle with cross cancel close remove delete x cross stop terminate end",
      icon: "eb67",
      color: false,
   },
   {
      name: "circle with minus",
      keywords: "circle with minus remove delete subtract minus exclude eliminate deduct take away withdraw",
      icon: "eb68",
      color: false,
   },
   {
      name: "circle with plus",
      keywords: "circle with plus add include attach increase sum plus expand enlarge grow",
      icon: "eb69",
      color: false,
   },
   {
      name: "circle1",
      keywords: "circle round ring shape curve loop cycle orbit sphere circular",
      icon: "eb6a",
      color: false,
   },
   {
      name: "circular graph",
      keywords: "circular graph chart graph plot data statistics trend analysis visualize diagram",
      icon: "eb6b",
      color: false,
   },
   {
      name: "clapperboard",
      keywords: "clapperboard movie film cinema action director slate board clapper shoot",
      icon: "eb6c",
      color: false,
   },
   {
      name: "clipboard2",
      keywords: "clipboard copy paste document write notepad list record note paper",
      icon: "eb6d",
      color: false,
   },
   {
      name: "clock1",
      keywords: "clock time watch hour minute second alarm schedule reminder tick",
      icon: "eb6e",
      color: false,
   },
   {
      name: "code1",
      keywords: "code programming script develop software developer programmer computer language html",
      icon: "eb6f",
      color: false,
   },
   {
      name: "cog2",
      keywords: "cog gear settings options preferences configuration mechanism adjust control machine",
      icon: "eb70",
      color: false,
   },
   {
      name: "colours",
      keywords: "colours color palette hue shade tint tone dye pigment spectrum",
      icon: "eb71",
      color: false,
   },
   {
      name: "compass3",
      keywords: "compass direction navigate orientation travel north south east west guide",
      icon: "eb72",
      color: false,
   },
   {
      name: "copy2",
      keywords: "copy duplicate clone replicate reproduce imitate mirror imitation copying echo",
      icon: "eb73",
      color: false,
   },
   {
      name: "credit card2",
      keywords: "credit card payment credit debit finance money transaction bank shopping purchase",
      icon: "eb74",
      color: false,
   },
   {
      name: "credit",
      keywords: "credit payment finance money bank transaction shopping purchase card debit",
      icon: "eb75",
      color: false,
   },
   {
      name: "cross1",
      keywords: "cross x close remove delete cancel terminate end mark stop",
      icon: "eb76",
      color: false,
   },
   {
      name: "cup",
      keywords: "cup mug drink beverage tea coffee liquid handle container brew",
      icon: "eb77",
      color: false,
   },
   {
      name: "cw",
      keywords: "cw clockwise rotate turn spin right forward clockwise rotation movement direction",
      icon: "eb78",
      color: false,
   },
   {
      name: "cycle",
      keywords: "cycle loop recycle circle round renew repeat pattern circular revolve",
      icon: "eb79",
      color: false,
   },
   {
      name: "database2",
      keywords: "database data storage server information record file database management sql query",
      icon: "eb7a",
      color: false,
   },
   {
      name: "dial pad",
      keywords: "dial pad phone telephone keypad dialer call number digits mobile cellphone",
      icon: "eb7b",
      color: false,
   },
   {
      name: "direction",
      keywords: "direction arrow pointer indicator navigation movement pointing way route path",
      icon: "eb7c",
      color: false,
   },
   {
      name: "document",
      keywords: "document file paper sheet record data text write note paperwork",
      icon: "eb7d",
      color: false,
   },
   {
      name: "documents",
      keywords: "documents files papers records data texts notes paperwork information archive",
      icon: "eb7e",
      color: false,
   },
   {
      name: "drink",
      keywords: "drink beverage liquid thirst hydrate refreshment water juice tea coffee",
      icon: "eb7f",
      color: false,
   },
   {
      name: "drive1",
      keywords: "drive storage hard drive disk computer file data store memory save",
      icon: "eb80",
      color: false,
   },
   {
      name: "drop",
      keywords: "drop water liquid fall drip rain tear dew splash spill",
      icon: "eb81",
      color: false,
   },
   {
      name: "edit1",
      keywords: "edit modify change adjust alter revise correct revamp amend adapt",
      icon: "eb82",
      color: false,
   },
   {
      name: "email",
      keywords: "email mail message inbox send communicate correspondence electronic letter communication",
      icon: "eb83",
      color: false,
   },
   {
      name: "emoji happy",
      keywords: "emoji happy smile happy emoticon face joy pleased content grinning delighted",
      icon: "eb84",
      color: false,
   },
   {
      name: "emoji neutral",
      keywords: "emoji neutral neutral indifferent expressionless face emotionless unperturbed impassive blank deadpan",
      icon: "eb85",
      color: false,
   },
   {
      name: "emoji sad",
      keywords: "emoji sad sad cry unhappy emoticon face tearful upset melancholy disappointed",
      icon: "eb86",
      color: false,
   },
   {
      name: "erase",
      keywords: "erase delete remove rub out wipe out clear eliminate obliterate scrub clean",
      icon: "eb87",
      color: false,
   },
   {
      name: "eraser1",
      keywords: "eraser rubber delete remove edit correct correction clean clear wipe",
      icon: "eb88",
      color: false,
   },
   {
      name: "export",
      keywords: "export save download transfer exporting send extract convert output shipment",
      icon: "eb89",
      color: false,
   },
   {
      name: "eye2",
      keywords: "eye view look see watch observe sight vision gaze stare",
      icon: "eb8a",
      color: false,
   },
   {
      name: "feather",
      keywords: "feather bird plume quill down wing soft light delicate float",
      icon: "eb8b",
      color: false,
   },
   {
      name: "flag2",
      keywords: "flag country nation patriotism banner symbol emblem state sovereignty national",
      icon: "eb8c",
      color: false,
   },
   {
      name: "flash1",
      keywords: "flash lightning bolt electric energy camera photography spark quick fast",
      icon: "eb8d",
      color: false,
   },
   {
      name: "flashlight",
      keywords: "flashlight torch light lamp beam illuminate dark night flash search",
      icon: "eb8e",
      color: false,
   },
   {
      name: "flat brush",
      keywords: "flat brush paint art brush painting draw artistic stroke artist create",
      icon: "eb8f",
      color: false,
   },
   {
      name: "folder images",
      keywords: "folder images folder directory files photos pictures gallery images photographs graphics",
      icon: "eb90",
      color: false,
   },
   {
      name: "folder music",
      keywords: "folder music folder directory files songs audio tracks playlist mp3 sound",
      icon: "eb91",
      color: false,
   },
   {
      name: "folder video",
      keywords: "folder video folder directory files videos movies films clips media stream",
      icon: "eb92",
      color: false,
   },
   {
      name: "folder2",
      keywords: "folder directory files documents archive storage organize store catalog container",
      icon: "eb93",
      color: false,
   },
   {
      name: "forward4",
      keywords: "forward forward arrow next advance move forward progress go ahead future forward movement onward",
      icon: "eb94",
      color: false,
   },
   {
      name: "funnel",
      keywords: "funnel filter narrow concentrate channel direct passage select screen separate",
      icon: "eb95",
      color: false,
   },
   {
      name: "game controller",
      keywords: "game controller gamepad console gaming video games controller joystick play gamer console",
      icon: "eb96",
      color: false,
   },
   {
      name: "gauge",
      keywords: "gauge measure meter scale indicator level instrument dial control evaluate",
      icon: "eb97",
      color: false,
   },
   {
      name: "globe1",
      keywords: "globe world earth global planet international map geography sphere round",
      icon: "eb98",
      color: false,
   },
   {
      name: "graduation cap1",
      keywords: "graduation cap graduation education school college university diploma degree academic graduate",
      icon: "eb99",
      color: false,
   },
   {
      name: "grid",
      keywords: "grid graph chart table pattern matrix array network gridlines layout",
      icon: "eb9a",
      color: false,
   },
   {
      name: "hair cross",
      keywords: "hair cross target aim crosshair sight shoot bullseye aiming sniper focus",
      icon: "eb9b",
      color: false,
   },
   {
      name: "hand",
      keywords: "hand point finger gesture palm grab hold touch sign handshake",
      icon: "eb9c",
      color: false,
   },
   {
      name: "heart outlined",
      keywords: "heart outlined heart love like romance valentine affection emotion passion symbol",
      icon: "eb9d",
      color: false,
   },
   {
      name: "heart2",
      keywords: "heart love like romance valentine affection emotion passion symbol cardiology",
      icon: "eb9e",
      color: false,
   },
   {
      name: "help with circle",
      keywords: "help with circle help support information assistance question faq enquiry doubt problem",
      icon: "eb9f",
      color: false,
   },
   {
      name: "help",
      keywords: "help support information assistance question faq enquiry doubt problem aid",
      icon: "eba0",
      color: false,
   },
   {
      name: "home4",
      keywords: "home house building residence dwelling habitat shelter accommodation family living",
      icon: "eba1",
      color: false,
   },
   {
      name: "hour glass1",
      keywords: "hourglass time clock hour minute sand countdown timer wait deadline",
      icon: "eba2",
      color: false,
   },
   {
      name: "image inverted",
      keywords: "image inverted image picture photo photograph view invert negative opposite reversed",
      icon: "eba3",
      color: false,
   },
   {
      name: "image2",
      keywords: "image picture photo photograph view art graphic visual digital canvas",
      icon: "eba4",
      color: false,
   },
   {
      name: "images1",
      keywords: "images pictures photos photographs gallery album collection visual view picture",
      icon: "eba5",
      color: false,
   },
   {
      name: "inbox1",
      keywords: "inbox message mail email receive mailbox messages communication correspondence letters",
      icon: "eba6",
      color: false,
   },
   {
      name: "infinity",
      keywords: "infinity eternity endless limitless boundless forever perpetual infinite timeless limitless",
      icon: "eba7",
      color: false,
   },
   {
      name: "info with circle",
      keywords: "info with circle info information i details help support faq enquiry question",
      icon: "eba8",
      color: false,
   },
   {
      name: "info2",
      keywords: "info information details i help support faq enquiry question assistance",
      icon: "eba9",
      color: false,
   },
   {
      name: "key3",
      keywords: "key lock security password access entry secure code encrypt unlock",
      icon: "ebaa",
      color: false,
   },
   {
      name: "keyboard1",
      keywords: "keyboard type keys input typing computer write text letter alphabet",
      icon: "ebab",
      color: false,
   },
   {
      name: "lab flask",
      keywords: "lab flask flask laboratory experiment chemistry science beaker chemical test research",
      icon: "ebac",
      color: false,
   },
   {
      name: "landline",
      keywords: "landline telephone phone call communication old traditional line receiver dial",
      icon: "ebad",
      color: false,
   },
   {
      name: "language1",
      keywords: "language translate communication speak linguistics foreign english french spanish german",
      icon: "ebae",
      color: false,
   },
   {
      name: "laptop2",
      keywords: "laptop computer pc notebook portable device technology screen keyboard mouse",
      icon: "ebaf",
      color: false,
   },
   {
      name: "leaf2",
      keywords: "leaf green nature plant tree foliage environment botany ecology organic",
      icon: "ebb0",
      color: false,
   },
   {
      name: "level down1",
      keywords: "level down decrease reduce lower descend diminish drop minimize downturn decrement",
      icon: "ebb1",
      color: false,
   },
   {
      name: "level up1",
      keywords: "level up increase raise ascend boost improve grow advance upgrade escalate",
      icon: "ebb2",
      color: false,
   },
   {
      name: "lifebuoy1",
      keywords: "lifebuoy life buoy rescue help support emergency safety security aid",
      icon: "ebb3",
      color: false,
   },
   {
      name: "light bulb",
      keywords: "light bulb light bulb idea innovation inspiration illumination concept electric lamp",
      icon: "ebb4",
      color: false,
   },
   {
      name: "light down",
      keywords: "light down dim reduce lower darken diminish dull fade shade shadow",
      icon: "ebb5",
      color: false,
   },
   {
      name: "chevron thin down",
      keywords: "chevron thin down arrow direction pointer indicator navigation movement descend lower",
      icon: "eb11",
      color: false,
   },
   {
      name: "chevron thin left",
      keywords: "chevron thin left arrow direction pointer indicator navigation movement turn west",
      icon: "eb12",
      color: false,
   },
   {
      name: "chevron thin right",
      keywords: "chevron thin right arrow direction pointer indicator navigation movement turn east",
      icon: "eb13",
      color: false,
   },
   {
      name: "chevron thin up",
      keywords: "chevron thin up arrow direction pointer indicator navigation movement ascend raise",
      icon: "eb14",
      color: false,
   },
   {
      name: "chevron up1",
      keywords: "chevron up arrow direction pointer indicator navigation movement ascend raise",
      icon: "eb15",
      color: false,
   },
   {
      name: "chevron with circle down",
      keywords: "chevron circle down arrow direction pointer indicator navigation movement descend lower",
      icon: "eb16",
      color: false,
   },
   {
      name: "chevron with circle left",
      keywords: "chevron circle left arrow direction pointer indicator navigation movement turn west",
      icon: "eb17",
      color: false,
   },
   {
      name: "chevron with circle right",
      keywords: "chevron circle right arrow direction pointer indicator navigation movement turn east",
      icon: "eb18",
      color: false,
   },
   {
      name: "chevron with circle up",
      keywords: "chevron circle up arrow direction pointer indicator navigation movement ascend raise",
      icon: "eb19",
      color: false,
   },
   {
      name: "cloud2",
      keywords: "cloud weather storage data internet sky upload download transfer network",
      icon: "eb1a",
      color: false,
   },
   {
      name: "controller fast forward",
      keywords: "controller fast forward skip advance next accelerate move ahead progress speed",
      icon: "eb1b",
      color: false,
   },
   {
      name: "controller jump to start",
      keywords: "controller jump start beginning restart initial first commence launch jumpstart",
      icon: "eb1c",
      color: false,
   },
   {
      name: "controller next",
      keywords: "controller next forward skip advance move ahead progress proceed continue following",
      icon: "eb1d",
      color: false,
   },
   {
      name: "controller paus",
      keywords: "controller pause suspend halt stop intermission break pause button hold freeze",
      icon: "eb1e",
      color: false,
   },
   {
      name: "controller play",
      keywords: "controller play start begin commence initiate activate engage launch execute",
      icon: "eb1f",
      color: false,
   },
   {
      name: "controller record",
      keywords: "controller record capture save store document memorize archive document log",
      icon: "eb20",
      color: false,
   },
   {
      name: "controller stop",
      keywords: "controller stop halt pause end terminate cease quit suspend finish",
      icon: "eb21",
      color: false,
   },
   {
      name: "controller volume",
      keywords: "controller volume sound audio loudness mute adjust control level amplify",
      icon: "eb22",
      color: false,
   },
   {
      name: "dot single",
      keywords: "dot single point period spot mark speck pixel circle tiny",
      icon: "eb23",
      color: false,
   },
   {
      name: "dots three horizontal",
      keywords: "dots three horizontal ellipsis menu more options nav interface navigation",
      icon: "eb24",
      color: false,
   },
   {
      name: "dots three vertical",
      keywords: "dots three vertical ellipsis menu more options nav interface navigation",
      icon: "eb25",
      color: false,
   },
   {
      name: "dots two horizontal",
      keywords: "dots two horizontal menu more options nav interface navigation",
      icon: "eb26",
      color: false,
   },
   {
      name: "dots two vertical",
      keywords: "dots two vertical menu more options nav interface navigation",
      icon: "eb27",
      color: false,
   },
   {
      name: "download4",
      keywords: "download save get fetch retrieve transfer store acquire downloading downward",
      icon: "eb28",
      color: false,
   },
   {
      name: "emoji flirt",
      keywords: "emoji flirt emoticon chat expression fun gesture interaction romance communication",
      icon: "eb29",
      color: false,
   },
   {
      name: "flow branch",
      keywords: "flow branch process tree diagram structure sequence chart diverge direction",
      icon: "eb2a",
      color: false,
   },
   {
      name: "light up",
      keywords: "light up brighten illuminate shine glow radiate lighten enhance bright luminous",
      icon: "ebb6",
      color: false,
   },
   {
      name: "line graph",
      keywords: "line graph chart graph plot data statistics trend analysis visualize diagram",
      icon: "ebb7",
      color: false,
   },
   {
      name: "link2",
      keywords: "link connect join tie bind attach relationship association network bridge",
      icon: "ebb8",
      color: false,
   },
   {
      name: "list3",
      keywords: "list items menu catalog record schedule index inventory checklist table",
      icon: "ebb9",
      color: false,
   },
   {
      name: "location pin",
      keywords: "location pin location pin map marker destination navigation location icon map pin pinpoint",
      icon: "ebba",
      color: false,
   },
   {
      name: "location1",
      keywords: "location map place position destination site venue area region spot",
      icon: "ebbb",
      color: false,
   },
   {
      name: "lock open",
      keywords: "lock open lock open unlock access lock open icon unlock icon open lock lock symbol access symbol",
      icon: "ebbc",
      color: false,
   },
   {
      name: "lock2",
      keywords: "lock secure closed locked security protect safe key privacy padlock",
      icon: "ebbd",
      color: false,
   },
   {
      name: "log out",
      keywords: "log out sign out logout exit leave disconnect end session close bye quit",
      icon: "ebbe",
      color: false,
   },
   {
      name: "login",
      keywords: "login sign in log in access authenticate enter connect portal account username",
      icon: "ebbf",
      color: false,
   },
   {
      name: "loop1",
      keywords: "loop cycle repeat revolve circulate round circuit recurrence repetition ring",
      icon: "ebc0",
      color: false,
   },
   {
      name: "magnet2",
      keywords: "magnet attract pull metal magnetic force magnetism magnetic field magnetic force attraction",
      icon: "ebc1",
      color: false,
   },
   {
      name: "magnifying glass",
      keywords: "magnifying glass magnify search find zoom enlarge inspect explore discover examine",
      icon: "ebc2",
      color: false,
   },
   {
      name: "mail1",
      keywords: "mail email message inbox send communicate correspondence electronic letter communication",
      icon: "ebc3",
      color: false,
   },
   {
      name: "man1",
      keywords: "man male person guy human individual people character gentleman boy",
      icon: "ebc4",
      color: false,
   },
   {
      name: "map3",
      keywords: "map world globe cartography atlas geography earth navigation directions territory",
      icon: "ebc5",
      color: false,
   },
   {
      name: "mask",
      keywords: "mask protective face cover protection medical shield safety health respirator",
      icon: "ebc6",
      color: false,
   },
   {
      name: "medal",
      keywords: "medal award trophy prize honor achievement commendation ribbon winner victory",
      icon: "ebc7",
      color: false,
   },
   {
      name: "megaphone",
      keywords: "megaphone loudspeaker amplify speaker announcement communication broadcast loud noise shout",
      icon: "ebc8",
      color: false,
   },
   {
      name: "menu1",
      keywords: "menu navigation list options toolbar dropdown select choose select restaurant",
      icon: "ebc9",
      color: false,
   },
   {
      name: "message",
      keywords: "message communication email inbox send text conversation chat dialogue talk",
      icon: "ebca",
      color: false,
   },
   {
      name: "mic1",
      keywords: "microphone mic record sound audio speak voice broadcast studio speaker",
      icon: "ebcb",
      color: false,
   },
   {
      name: "minus2",
      keywords: "minus subtract remove take away reduce decrease minus sign negative subtraction deduct",
      icon: "ebcc",
      color: false,
   },
   {
      name: "mobile3",
      keywords: "mobile cell phone smartphone device phone communication portable wireless handheld cellular",
      icon: "ebcd",
      color: false,
   },
   {
      name: "modern mic",
      keywords: "modern mic microphone mic record sound audio speak voice broadcast studio",
      icon: "ebce",
      color: false,
   },
   {
      name: "moon",
      keywords: "moon night lunar space celestial orbit satellite planet astronomy sky",
      icon: "ebcf",
      color: false,
   },
   {
      name: "mouse",
      keywords: "mouse computer device click input point cursor rodent scroll wireless",
      icon: "ebd0",
      color: false,
   },
   {
      name: "music2",
      keywords: "music note melody song sound audio tune instrument musical playlist",
      icon: "ebd1",
      color: false,
   },
   {
      name: "network",
      keywords: "network connect internet communication link web online technology connection digital",
      icon: "ebd2",
      color: false,
   },
   {
      name: "new message",
      keywords: "new message message email inbox send communicate correspondence electronic letter communication",
      icon: "ebd3",
      color: false,
   },
   {
      name: "new",
      keywords: "new add fresh latest recent update brand new innovative novel modern",
      icon: "ebd4",
      color: false,
   },
   {
      name: "news",
      keywords: "news update information report current events headline broadcast media announcement journalism",
      icon: "ebd5",
      color: false,
   },
   {
      name: "note",
      keywords: "note memo message reminder paper writing stick post sheet jot",
      icon: "ebd6",
      color: false,
   },
   {
      name: "notification1",
      keywords: "notification alert message reminder alarm notify signal inform warning announce",
      icon: "ebd7",
      color: false,
   },
   {
      name: "old mobile",
      keywords: "old mobile cell phone smartphone device phone communication portable wireless handheld cellular",
      icon: "ebd8",
      color: false,
   },
   {
      name: "old phone",
      keywords: "old phone telephone landline communication vintage retro call receiver dial rotary",
      icon: "ebd9",
      color: false,
   },
   {
      name: "palette",
      keywords: "palette colors painting art paint colors color scheme mix spectrum hue",
      icon: "ebda",
      color: false,
   },
   {
      name: "paper plane1",
      keywords: "paper plane airplane fly send message mail communication flight travel delivery",
      icon: "ebdb",
      color: false,
   },
   {
      name: "pencil3",
      keywords: "pencil write draw sketch art stationery graphite lead eraser school",
      icon: "ebdc",
      color: false,
   },
   {
      name: "phone2",
      keywords: "phone telephone call communication mobile cellular device dial receiver talk",
      icon: "ebdd",
      color: false,
   },
   {
      name: "pie chart2",
      keywords: "pie chart chart graph statistics data analysis visualize diagram segments circle",
      icon: "ebde",
      color: false,
   },
   {
      name: "pin",
      keywords: "pin needle attach fix point secure fasten peg position needle",
      icon: "ebdf",
      color: false,
   },
   {
      name: "plus2",
      keywords: "plus add increase positive more sum addition positive sign increment positive",
      icon: "ebe0",
      color: false,
   },
   {
      name: "popup",
      keywords: "popup window message alert dialog box notice advertisement prompt display",
      icon: "ebe1",
      color: false,
   },
   {
      name: "power plug",
      keywords: "power plug plug electricity socket power energy electric cord cable adapter",
      icon: "ebe2",
      color: false,
   },
   {
      name: "price ribbon",
      keywords: "price ribbon ribbon award badge prize medal trophy honor distinction winner",
      icon: "ebe3",
      color: false,
   },
   {
      name: "price tag1",
      keywords: "price tag tag label price sale cost value sticker shopping barcode",
      icon: "ebe4",
      color: false,
   },
   {
      name: "print1",
      keywords: "print printer output copy paper document page publish scan machine",
      icon: "ebe5",
      color: false,
   },
   {
      name: "progress empty",
      keywords: "progress empty progress bar loading status incomplete unfilled empty blank await",
      icon: "ebe6",
      color: false,
   },
   {
      name: "progress full",
      keywords: "progress full progress bar loading status complete filled full done finished",
      icon: "ebe7",
      color: false,
   },
   {
      name: "progress one",
      keywords: "progress one progress bar loading status one 1 first initial start",
      icon: "ebe8",
      color: false,
   },
   {
      name: "progress two",
      keywords: "progress two progress bar loading status two 2 second halfway middle",
      icon: "ebe9",
      color: false,
   },
   {
      name: "publish",
      keywords: "publish post release share upload broadcast announce publicize issue print",
      icon: "ebea",
      color: false,
   },
   {
      name: "quote",
      keywords: "quote quotation citation remark saying statement citation reference extract passage",
      icon: "ebeb",
      color: false,
   },
   {
      name: "radio",
      keywords: "radio broadcast music frequency transmission station receiver tune wave listen",
      icon: "ebec",
      color: false,
   },
   {
      name: "reply all1",
      keywords: "reply all reply respond answer communication message email mail correspondence chat",
      icon: "ebed",
      color: false,
   },
   {
      name: "reply2",
      keywords: "reply respond answer communication message email mail correspondence chat text",
      icon: "ebee",
      color: false,
   },
   {
      name: "retweet1",
      keywords: "retweet tweet twitter message communication share forward reply post broadcast",
      icon: "ebef",
      color: false,
   },
   {
      name: "rocket2",
      keywords: "rocket space ship launch fly spacecraft exploration astronaut cosmos vehicle",
      icon: "ebf0",
      color: false,
   },
   {
      name: "round brush",
      keywords: "round brush brush paint painting art draw artistic stroke artist create",
      icon: "ebf1",
      color: false,
   },
   {
      name: "rss3",
      keywords: "rss feed subscribe news blog update syndication podcast web information",
      icon: "ebf2",
      color: false,
   },
   {
      name: "ruler",
      keywords: "ruler measure scale straight edge line length tool instrument geometry metric",
      icon: "ebf3",
      color: false,
   },
   {
      name: "scissors2",
      keywords: "scissors cut shear clip trim snip blade tool sharp edge",
      icon: "ebf4",
      color: false,
   },
   {
      name: "share alternitive",
      keywords: "share alternative share spread distribute communicate connect network exchange relay propagate",
      icon: "ebf5",
      color: false,
   },
   {
      name: "share3",
      keywords: "share spread distribute communicate connect network exchange relay propagate shareable",
      icon: "ebf6",
      color: false,
   },
   {
      name: "shareable",
      keywords: "shareable share spread distribute communicate connect network exchange relay propagate",
      icon: "ebf7",
      color: false,
   },
   {
      name: "shield2",
      keywords: "shield protect security safety defense guard armour protection barrier defend",
      icon: "ebf8",
      color: false,
   },
   {
      name: "shop",
      keywords: "shop store retail buy purchase commerce market mall boutique shopper",
      icon: "ebf9",
      color: false,
   },
   {
      name: "shopping bag1",
      keywords: "shopping bag bag shop purchase retail carry grocery tote package handbag",
      icon: "ebfa",
      color: false,
   },
   {
      name: "shopping basket1",
      keywords: "shopping basket basket shop purchase retail carry grocery cart trolley store",
      icon: "ebfb",
      color: false,
   },
   {
      name: "shopping cart1",
      keywords: "shopping cart cart shop purchase retail carry grocery trolley store browsing",
      icon: "ebfc",
      color: false,
   },
   {
      name: "shuffle1",
      keywords: "shuffle mix random order change shift reshuffle rearrange jumble switch",
      icon: "ebfd",
      color: false,
   },
   {
      name: "signal1",
      keywords: "signal network connection communication wifi radio transmission reception antenna bar",
      icon: "ebfe",
      color: false,
   },
   {
      name: "sound mix",
      keywords: "sound mix sound mix audio music blend combine merge edit studio",
      icon: "ebff",
      color: false,
   },
   {
      name: "sports club",
      keywords: "sports club club sports team athletic association group activity recreation leisure",
      icon: "ec00",
      color: false,
   },
   {
      name: "spreadsheet",
      keywords: "spreadsheet excel data table document calculation numbers chart business finance",
      icon: "ec01",
      color: false,
   },
   {
      name: "squared cross",
      keywords: "squared cross cross x remove delete terminate end mark stop close",
      icon: "ec02",
      color: false,
   },
   {
      name: "squared minus",
      keywords: "squared minus minus subtract remove delete take away reduce decrease negative subtraction",
      icon: "ec03",
      color: false,
   },
   {
      name: "squared plus",
      keywords: "squared plus plus add increase positive more sum addition increment positive",
      icon: "ec04",
      color: false,
   },
   {
      name: "star outlined",
      keywords: "star outlined star rating review favorite like celebrity famous success praise",
      icon: "ec05",
      color: false,
   },
   {
      name: "star1",
      keywords: "star rating review favorite like celebrity famous success praise award",
      icon: "ec06",
      color: false,
   },
   {
      name: "stopwatch1",
      keywords: "stopwatch timer clock time watch measure countdown timepiece chronometer speed",
      icon: "ec07",
      color: false,
   },
   {
      name: "suitcase1",
      keywords: "suitcase travel bag luggage case carry trip journey packing airport",
      icon: "ec08",
      color: false,
   },
   {
      name: "swap",
      keywords: "swap exchange switch trade replace interchange alternate change shift transfer",
      icon: "ec09",
      color: false,
   },
   {
      name: "sweden",
      keywords: "sweden flag country nation scandinavia europe swedish stockholm nordic european",
      icon: "ec0a",
      color: false,
   },
   {
      name: "switch1",
      keywords: "switch on off toggle change shift transition control power lever",
      icon: "ec0b",
      color: false,
   },
   {
      name: "tablet2",
      keywords: "tablet device computer pad screen mobile technology touch portable handheld",
      icon: "ec0c",
      color: false,
   },
   {
      name: "tag1",
      keywords: "tag label price category identification mark classification metadata brand sticker",
      icon: "ec0d",
      color: false,
   },
   {
      name: "text document inverted",
      keywords: "text document inverted document file paper sheet record data text write note",
      icon: "ec0e",
      color: false,
   },
   {
      name: "text document",
      keywords: "text document document text file paper writing edit word document icon text file",
      icon: "ec0f",
      color: false,
   },
   {
      name: "text",
      keywords: "text write document type font word message language communication copy",
      icon: "ec10",
      color: false,
   },
   {
      name: "thermometer1",
      keywords: "thermometer temperature heat cold weather measure gauge indicator degree climate",
      icon: "ec11",
      color: false,
   },
   {
      name: "thumbs down1",
      keywords: "thumbs down dislike disapprove thumbs down negative vote hand gesture reject",
      icon: "ec12",
      color: false,
   },
   {
      name: "thumbs up1",
      keywords: "thumbs up like approve thumbs up positive vote hand gesture accept",
      icon: "ec13",
      color: false,
   },
   {
      name: "thunder cloud",
      keywords: "thunder cloud cloud storm weather thunderstorm rain lightning dark ominous bad weather",
      icon: "ec14",
      color: false,
   },
   {
      name: "ticket2",
      keywords: "ticket pass admission entry event show coupon booking entry pass journey",
      icon: "ec15",
      color: false,
   },
   {
      name: "time slot",
      keywords: "time slot schedule appointment time period booking availability calendar reservation timeframe",
      icon: "ec16",
      color: false,
   },
   {
      name: "tools",
      keywords: "tools equipment utensils instruments gear hardware implements devices kit toolkit",
      icon: "ec17",
      color: false,
   },
   {
      name: "traffic cone",
      keywords: "traffic cone cone road safety warning construction caution hazard barrier sign",
      icon: "ec18",
      color: false,
   },
   {
      name: "tree2",
      keywords: "tree forest nature plant wood flora green ecology environment growth",
      icon: "ec19",
      color: false,
   },
   {
      name: "trophy2",
      keywords: "trophy award prize honor achievement cup medal victory success champion",
      icon: "ec1a",
      color: false,
   },
   {
      name: "tv2",
      keywords: "tv television screen watch show program broadcast channel entertainment media",
      icon: "ec1b",
      color: false,
   },
   {
      name: "typing",
      keywords: "typing type keyboard write text input compose message communication word",
      icon: "ec1c",
      color: false,
   },
   {
      name: "unread",
      keywords: "unread new message email inbox notification unread message unopened notification alert",
      icon: "ec1d",
      color: false,
   },
   {
      name: "untag",
      keywords: "untag remove tag delete unmark unlabel uncheck deselect exclude unselect",
      icon: "ec1e",
      color: false,
   },
   {
      name: "user2",
      keywords: "user person profile account member individual avatar human identity character",
      icon: "ec1f",
      color: false,
   },
   {
      name: "users2",
      keywords: "users people group community members crowd team audience population social",
      icon: "ec20",
      color: false,
   },
   {
      name: "v card",
      keywords: "v card card contact business card vcard contact information digital card name card personal card electronic card",
      icon: "ec21",
      color: false,
   },
   {
      name: "video",
      keywords: "video movie film clip media play watch record cinema motion picture",
      icon: "ec22",
      color: false,
   },
   {
      name: "vinyl",
      keywords: "vinyl record music album sound audio disc lp phonograph vinyl record",
      icon: "ec23",
      color: false,
   },
   {
      name: "voicemail",
      keywords: "voicemail message phone call recorded message mailbox answerphone voice telephone inbox",
      icon: "ec24",
      color: false,
   },
   {
      name: "wallet",
      keywords: "wallet purse money cash credit cards payment currency finance bank pocket",
      icon: "ec25",
      color: false,
   },
   {
      name: "water",
      keywords: "water drop liquid aquatic fluid hydrate clear refresh thirst h2o",
      icon: "ec26",
      color: false,
   },
   {
      name: "500px with circle",
      keywords: "500px with circle 500px photography photo picture gallery portfolio image social media circle",
      icon: "ec27",
      color: false,
   },
   {
      name: "500px2",
      keywords: "500px photography photo picture gallery portfolio image social media 500px online",
      icon: "ec28",
      color: false,
   },
   {
      name: "basecamp1",
      keywords: "basecamp camp tent outdoors adventure explore nature hiking travel wilderness",
      icon: "ec29",
      color: false,
   },
   {
      name: "behance3",
      keywords: "behance portfolio design art creative showcase work project network online",
      icon: "ec2a",
      color: false,
   },
   {
      name: "creative cloud",
      keywords: "creative cloud cloud adobe design creative art tool software digital storage",
      icon: "ec2b",
      color: false,
   },
   {
      name: "dropbox2",
      keywords: "dropbox cloud storage file document data upload download backup sync",
      icon: "ec2c",
      color: false,
   },
   {
      name: "evernote",
      keywords: "evernote note notes writing memo organize remember document record list",
      icon: "ec2d",
      color: false,
   },
   {
      name: "flattr1",
      keywords: "flattr donate support contribute give charity fund payment tip money",
      icon: "ec2e",
      color: false,
   },
   {
      name: "foursquare2",
      keywords: "foursquare location check in place check map city venue geo social media",
      icon: "ec2f",
      color: false,
   },
   {
      name: "google drive1",
      keywords: "google drive drive cloud storage google file document data upload download",
      icon: "ec30",
      color: false,
   },
   {
      name: "google hangouts",
      keywords: "google hangouts hangouts google chat video call communication talk messaging conference call",
      icon: "ec31",
      color: false,
   },
   {
      name: "grooveshark",
      keywords: "grooveshark music stream listen audio songs playlist tunes melody groove",
      icon: "ec32",
      color: false,
   },
   {
      name: "icloud",
      keywords: "icloud cloud apple storage file data backup sync apple ios",
      icon: "ec33",
      color: false,
   },
   {
      name: "mixi",
      keywords: "mixi social media japan network connect communication friends community online website",
      icon: "ec34",
      color: false,
   },
   {
      name: "onedrive1",
      keywords: "onedrive drive cloud storage microsoft file document data upload download",
      icon: "ec35",
      color: false,
   },
   {
      name: "paypal2",
      keywords: "paypal payment money transaction secure online purchase account business send",
      icon: "ec36",
      color: false,
   },
   {
      name: "picasa",
      keywords: "picasa photo picture image gallery google album photography online storage",
      icon: "ec37",
      color: false,
   },
   {
      name: "qq1",
      keywords: "qq chat messaging communication china social media network chinese tencent instant messaging",
      icon: "ec38",
      color: false,
   },
   {
      name: "rdio with circle",
      keywords: "rdio with circle rdio music stream listen audio songs playlist tunes melody",
      icon: "ec39",
      color: false,
   },
   {
      name: "renren2",
      keywords: "renren social media china network connect communication friends community online website",
      icon: "ec3a",
      color: false,
   },
   {
      name: "scribd1",
      keywords: "scribd document pdf read upload share writing book digital library",
      icon: "ec3b",
      color: false,
   },
   {
      name: "sina weibo1",
      keywords: "sina weibo weibo china microblogging social media network communication posts chinese share",
      icon: "ec3c",
      color: false,
   },
   {
      name: "skype with circle",
      keywords: "skype with circle skype chat messaging communication talk video call conference call online",
      icon: "ec3d",
      color: false,
   },
   {
      name: "skype2",
      keywords: "skype chat messaging communication talk video call conference call online software",
      icon: "ec3e",
      color: false,
   },
   {
      name: "slideshare1",
      keywords: "slideshare presentation slide powerpoint upload share document lecture knowledge presentation",
      icon: "ec3f",
      color: false,
   },
   {
      name: "smashing",
      keywords: "smashing smash break destroy hit impact damage crash shatter wreck",
      icon: "ec40",
      color: false,
   },
   {
      name: "soundcloud3",
      keywords: "soundcloud music audio listen stream songs playlist tunes melody track",
      icon: "ec41",
      color: false,
   },
   {
      name: "spotify with circle",
      keywords: "spotify with circle spotify music audio listen stream songs playlist tunes melody",
      icon: "ec42",
      color: false,
   },
   {
      name: "spotify2",
      keywords: "spotify music audio listen stream songs playlist tunes melody track",
      icon: "ec43",
      color: false,
   },
   {
      name: "swarm",
      keywords: "swarm flock group crowd collection community gathering herd mass congregation",
      icon: "ec44",
      color: false,
   },
   {
      name: "vine with circle",
      keywords: "vine with circle vine video short video loop social media online entertainment app circle",
      icon: "ec45",
      color: false,
   },
   {
      name: "vine2",
      keywords: "vine video short video loop social media online entertainment app platform video sharing",
      icon: "ec46",
      color: false,
   },
   {
      name: "vk alternitive",
      keywords: "vk alternative vk vkontakte russia social media network communication friends community online",
      icon: "ec47",
      color: false,
   },
   {
      name: "vk with circle",
      keywords: "vk with circle vk vkontakte russia social media network communication friends community online",
      icon: "ec48",
      color: false,
   },
   {
      name: "vk2",
      keywords: "vk vkontakte russia social media network communication friends community online website",
      icon: "ec49",
      color: false,
   },
   {
      name: "xing with circle",
      keywords: "xing with circle xing business network professional communication profile resume linkedin social",
      icon: "ec4a",
      color: false,
   },
   {
      name: "xing3",
      keywords: "xing business network professional communication profile resume linkedin social website",
      icon: "ec4b",
      color: false,
   },
   {
      name: "yelp2",
      keywords: "yelp review rating restaurant local business feedback recommendation community opinion",
      icon: "ec4c",
      color: false,
   },
   {
      name: "dribbble with circle",
      keywords: "dribbble with circle dribbble design creative portfolio art graphic community circle online",
      icon: "ec4d",
      color: false,
   },
   {
      name: "dribbble2",
      keywords: "dribbble design creative portfolio art graphic community online platform showcase",
      icon: "ec4e",
      color: false,
   },
   {
      name: "facebook with circle",
      keywords: "facebook with circle facebook social media network communication friends community online circle platform",
      icon: "ec4f",
      color: false,
   },
   {
      name: "facebook3",
      keywords: "facebook social media network communication friends community online platform website app",
      icon: "ec50",
      color: false,
   },
   {
      name: "flickr with circle",
      keywords: "flickr with circle flickr photo picture image photography gallery social media circle online",
      icon: "ec51",
      color: false,
   },
   {
      name: "flickr5",
      keywords: "flickr photo picture image photography gallery social media online platform share",
      icon: "ec52",
      color: false,
   },
   {
      name: "github with circle",
      keywords: "github with circle github code repository development version control community circle online platform",
      icon: "ec53",
      color: false,
   },
   {
      name: "github2",
      keywords: "github code repository development version control community online platform share collaborate",
      icon: "ec54",
      color: false,
   },
   {
      name: "google with circle",
      keywords: "google with circle google search engine browser internet web online circle platform",
      icon: "ec55",
      color: false,
   },
   {
      name: "google4",
      keywords: "google search engine browser internet web online platform company technology",
      icon: "ec56",
      color: false,
   },
   {
      name: "instagram with circle",
      keywords: "instagram with circle instagram photo picture image photography gallery social media circle online",
      icon: "ec57",
      color: false,
   },
   {
      name: "instagram2",
      keywords: "instagram photo picture image photography gallery social media online app share",
      icon: "ec58",
      color: false,
   },
   {
      name: "lastfm with circle",
      keywords: "lastfm with circle lastfm music audio listen stream songs playlist tunes circle",
      icon: "ec59",
      color: false,
   },
   {
      name: "lastfm3",
      keywords: "lastfm music audio listen stream songs playlist tunes online radio",
      icon: "ec5a",
      color: false,
   },
   {
      name: "linkedin with circle",
      keywords: "linkedin with circle linkedin business network professional communication profile resume circle online",
      icon: "ec5b",
      color: false,
   },
   {
      name: "linkedin3",
      keywords: "linkedin business network professional communication profile resume online platform website",
      icon: "ec5c",
      color: false,
   },
   {
      name: "pinterest with circle",
      keywords: "pinterest with circle pinterest pin board image photography gallery social media circle online",
      icon: "ec5d",
      color: false,
   },
   {
      name: "pinterest3",
      keywords: "pinterest pin board image photography gallery social media online platform share",
      icon: "ec5e",
      color: false,
   },
   {
      name: "rdio",
      keywords: "rdio music stream listen audio songs playlist tunes melody online",
      icon: "ec5f",
      color: false,
   },
   {
      name: "stumbleupon with circle",
      keywords: "stumbleupon with circle stumbleupon explore discover random internet search circle online platform",
      icon: "ec60",
      color: false,
   },
   {
      name: "stumbleupon3",
      keywords: "stumbleupon explore discover random internet search online platform website app",
      icon: "ec61",
      color: false,
   },
   {
      name: "tumblr with circle",
      keywords: "tumblr with circle tumblr blog post social media network circle online platform share",
      icon: "ec62",
      color: false,
   },
   {
      name: "tumblr3",
      keywords: "tumblr blog post social media network online platform website app share",
      icon: "ec63",
      color: false,
   },
   {
      name: "twitter with circle",
      keywords: "twitter with circle twitter tweet social media network communication circle online platform share",
      icon: "ec64",
      color: false,
   },
   {
      name: "twitter2",
      keywords: "twitter tweet social media network communication online platform website app share",
      icon: "ec65",
      color: false,
   },
   {
      name: "vimeo with circle",
      keywords: "vimeo with circle vimeo video clip media gallery social media circle online platform",
      icon: "ec66",
      color: false,
   },
   {
      name: "vimeo3",
      keywords: "vimeo video clip media gallery social media online platform website app",
      icon: "ec67",
      color: false,
   },
   {
      name: "youtube with circle",
      keywords: "youtube with circle youtube video clip media gallery social media circle online platform",
      icon: "ec68",
      color: false,
   },
   {
      name: "youtube3",
      keywords: "youtube video clip media gallery social media online platform website app",
      icon: "ec69",
      color: false,
   },
   {
      name: "error",
      keywords: "error problem warning issue mistake fault bug glitch failure error message",
      icon: "ec6a",
      color: false,
   },
   {
      name: "error outline",
      keywords: "error outline problem warning issue mistake fault bug glitch failure error message",
      icon: "ec6b",
      color: false,
   },
   {
      name: "warning3",
      keywords: "warning alert caution danger attention hazard risk be careful alert message warning sign",
      icon: "ec6c",
      color: false,
   },
   {
      name: "add alert",
      keywords: "add alert warning alert notification message reminder attention caution announcement warning sign",
      icon: "ec6d",
      color: false,
   },
   {
      name: "notification important",
      keywords: "notification important notification important alert warning message reminder attention caution announcement",
      icon: "ec6e",
      color: false,
   },
   {
      name: "album",
      keywords: "album music collection record compilation tracklist singles playlist album art music album",
      icon: "ec6f",
      color: false,
   },
   {
      name: "av timer",
      keywords: "av timer timer clock countdown time alarm stopwatch measure timing timepiece",
      icon: "ec70",
      color: false,
   },
   {
      name: "closed caption",
      keywords: "closed caption caption subtitles subtitle text language translation video audio accessibility",
      icon: "ec71",
      color: false,
   },
   {
      name: "equalizer1",
      keywords: "equalizer audio music sound wave frequency level volume graphic equalization",
      icon: "ec72",
      color: false,
   },
   {
      name: "explicit",
      keywords: "explicit warning mature content 18+ adult language censorship parental advisory rating",
      icon: "ec73",
      color: false,
   },
   {
      name: "fast forward",
      keywords: "fast forward forward next advance fast forward icon forward icon next icon advance icon fast forward button",
      icon: "ec74",
      color: false,
   },
   {
      name: "fast rewind",
      keywords: "fast rewind rewind reverse backward go back backtrack retreat revert undo reverse gear",
      icon: "ec75",
      color: false,
   },
   {
      name: "games",
      keywords: "games video games play fun entertainment gaming console online platform arcade",
      icon: "ec76",
      color: false,
   },
   {
      name: "hearing",
      keywords: "hearing ear listen sound audio perception senses auditory noise hearing aid",
      icon: "ec77",
      color: false,
   },
   {
      name: "high quality",
      keywords: "high quality quality hd hq definition high definition clear sharp crisp top notch",
      icon: "ec78",
      color: false,
   },
   {
      name: "loop3",
      keywords: "loop repeat circular cycle circle repetition recurrence rotation cycling revolve",
      icon: "ec79",
      color: false,
   },
   {
      name: "mic2",
      keywords: "mic microphone audio sound recording voice speak talk communication speaking",
      icon: "ec7a",
      color: false,
   },
   {
      name: "mic none",
      keywords: "mic none no mic microphone audio sound recording voice speak talk communication",
      icon: "ec7b",
      color: false,
   },
   {
      name: "mic off",
      keywords: "mic off mute silence microphone audio sound recording voice speak talk",
      icon: "ec7c",
      color: false,
   },
   {
      name: "movie",
      keywords: "movie film cinema video motion picture show flick theater screen filmstrip",
      icon: "ec7d",
      color: false,
   },
   {
      name: "library add",
      keywords: "library add add to library library collection catalog archive books media store shelf",
      icon: "ec7e",
      color: false,
   },
   {
      name: "library books",
      keywords: "library books books library collection catalog archive media store shelf literature",
      icon: "ec7f",
      color: false,
   },
   {
      name: "library music",
      keywords: "library music music library collection catalog archive media store shelf songs",
      icon: "ec80",
      color: false,
   },
   {
      name: "new releases",
      keywords: "new releases new latest fresh release arrival update recent trending hot",
      icon: "ec81",
      color: false,
   },
   {
      name: "not interested",
      keywords: "not interested disinterest dislike ignore uninterested apathetic unconcerned uninvolved unimpressed dismissive",
      icon: "ec82",
      color: false,
   },
   {
      name: "pause3",
      keywords: "pause stop break hold wait freeze halt intermission suspend pause button",
      icon: "ec83",
      color: false,
   },
   {
      name: "pause circle filled",
      keywords: "pause circle filled pause stop break hold wait freeze halt intermission suspend",
      icon: "ec84",
      color: false,
   },
   {
      name: "pause circle outline",
      keywords: "pause circle outline pause stop break hold wait freeze halt intermission suspend",
      icon: "ec85",
      color: false,
   },
   {
      name: "play arrow",
      keywords: "play arrow play start begin resume playback go forward launch play button",
      icon: "ec86",
      color: false,
   },
   {
      name: "play circle filled",
      keywords: "play circle filled play start begin resume playback go forward launch play button",
      icon: "ec87",
      color: false,
   },
   {
      name: "play circle outline",
      keywords: "play circle outline play start begin resume playback go forward launch play button",
      icon: "ec88",
      color: false,
   },
   {
      name: "playlist add",
      keywords: "playlist add add to playlist playlist list music songs tracklist collection queue mix",
      icon: "ec89",
      color: false,
   },
   {
      name: "queue music",
      keywords: "queue music queue music playlist list songs tracklist collection lineup order",
      icon: "ec8a",
      color: false,
   },
   {
      name: "radio1",
      keywords: "radio music broadcast station frequency transmission tune channel wireless receiver",
      icon: "ec8b",
      color: false,
   },
   {
      name: "recent actors",
      keywords: "recent actors recent actors history past viewed visited accessed users profiles",
      icon: "ec8c",
      color: false,
   },
   {
      name: "repeat1",
      keywords: "repeat cycle recurrence loop repetition revolve restart replay refresh reload",
      icon: "ec8d",
      color: false,
   },
   {
      name: "repeat one",
      keywords: "repeat one repeat cycle recurrence loop repetition revolve restart replay refresh",
      icon: "ec8e",
      color: false,
   },
   {
      name: "replay",
      keywords: "replay repeat refresh restart reload cycle recurrence loop repetition revolve",
      icon: "ec8f",
      color: false,
   },
   {
      name: "shuffle2",
      keywords: "shuffle random mix unpredictable varied assortment diverse disorder jumble mess",
      icon: "ec90",
      color: false,
   },
   {
      name: "skip next",
      keywords: "skip next next forward move ahead advance progress skip go to next next track next button",
      icon: "ec91",
      color: false,
   },
   {
      name: "skip previous",
      keywords: "skip previous previous back backward go back reverse move back rewind go to previous previous track",
      icon: "ec92",
      color: false,
   },
   {
      name: "snooze",
      keywords: "snooze sleep nap rest slumber doze siesta delay pause postpone",
      icon: "ec93",
      color: false,
   },
   {
      name: "stop3",
      keywords: "stop halt end terminate cease pause break finish close stop button",
      icon: "ec94",
      color: false,
   },
   {
      name: "subtitles",
      keywords: "subtitles caption translation text language subtitle closed caption foreign translate transcription",
      icon: "ec95",
      color: false,
   },
   {
      name: "surround sound",
      keywords: "surround sound sound audio surround speakers theater music surrounding stereo immersive",
      icon: "ec96",
      color: false,
   },
   {
      name: "video library",
      keywords: "video library video movies films cinema collection archive media store gallery",
      icon: "ec97",
      color: false,
   },
   {
      name: "videocam",
      keywords: "videocam video camera recording film cinema record shoot capture videography",
      icon: "ec98",
      color: false,
   },
   {
      name: "videocam off",
      keywords: "videocam off no video camera recording film cinema record shoot capture videography",
      icon: "ec99",
      color: false,
   },
   {
      name: "volume down",
      keywords: "volume down sound decrease decrease volume reduce sound volume decrease volume down icon sound decrease icon reduce volume lower volume",
      icon: "ec9a",
      color: false,
   },
   {
      name: "volume mute",
      keywords: "volume mute volume mute silence sound off mute volume volume off mute icon volume mute icon silent",
      icon: "ec9b",
      color: false,
   },
   {
      name: "volume off",
      keywords: "volume off mute sound off silence no sound mute icon volume off icon sound off icon no sound icon",
      icon: "ec9c",
      color: false,
   },
   {
      name: "volume up",
      keywords: "volume up sound increase increase volume raise sound volume increase volume up icon sound increase icon increase volume icon raise volume",
      icon: "ec9d",
      color: false,
   },
   {
      name: "web",
      keywords: "web internet online site website world wide web browse surf network connection",
      icon: "ec9e",
      color: false,
   },
   {
      name: "hd",
      keywords: "hd high definition quality high quality clear sharp crisp high resolution high def hi def",
      icon: "ec9f",
      color: false,
   },
   {
      name: "sort by alpha",
      keywords: "sort by alpha sort alphabetical order arrange organize alpha alphabetic abc sort alphabetically",
      icon: "eca0",
      color: false,
   },
   {
      name: "airplay",
      keywords: "airplay stream cast mirror wireless display air send share screen",
      icon: "eca1",
      color: false,
   },
   {
      name: "forward 10",
      keywords: "forward 10 skip forward advance progress move ahead jump fast forward 10 seconds go ahead skip",
      icon: "eca2",
      color: false,
   },
   {
      name: "forward 30",
      keywords: "forward 30 skip forward advance progress move ahead jump fast forward 30 seconds go ahead skip",
      icon: "eca3",
      color: false,
   },
   {
      name: "forward 5",
      keywords: "forward 5 skip forward advance progress move ahead jump fast forward 5 seconds go ahead skip",
      icon: "eca4",
      color: false,
   },
   {
      name: "replay 10",
      keywords: "replay 10 skip back rewind go back backward reverse replay 10 seconds repeat restart",
      icon: "eca5",
      color: false,
   },
   {
      name: "replay 30",
      keywords: "replay 30 skip back rewind go back backward reverse replay 30 seconds repeat restart",
      icon: "eca6",
      color: false,
   },
   {
      name: "replay 5",
      keywords: "replay 5 skip back rewind go back backward reverse replay 5 seconds repeat restart",
      icon: "eca7",
      color: false,
   },
   {
      name: "add to queue",
      keywords: "add to queue queue add lineup playlist list append insert queue up enqueue",
      icon: "eca8",
      color: false,
   },
   {
      name: "fiber dvr",
      keywords: "fiber dvr fiber dvr digital video recorder record tv television watch recording program",
      icon: "eca9",
      color: false,
   },
   {
      name: "fiber new",
      keywords: "fiber new fiber new fresh latest update recent trending hot fiber optic",
      icon: "ecaa",
      color: false,
   },
   {
      name: "playlist play",
      keywords: "playlist play playlist list music songs tracklist collection play start begin",
      icon: "ecab",
      color: false,
   },
   {
      name: "art track",
      keywords: "art track art track album music songs cover art artwork music track song",
      icon: "ecac",
      color: false,
   },
   {
      name: "fiber manual record",
      keywords: "fiber manual record fiber manual record record button video capture film start begin",
      icon: "ecad",
      color: false,
   },
   {
      name: "fiber smart record",
      keywords: "fiber smart record fiber smart record record button video capture film start begin",
      icon: "ecae",
      color: false,
   },
   {
      name: "music video",
      keywords: "music video music video clip media music clip music video clip visual audiovisual music performance",
      icon: "ecaf",
      color: false,
   },
   {
      name: "subscriptions",
      keywords: "subscriptions subscribe follow membership services channels newsletters updates subscription paid",
      icon: "ecb0",
      color: false,
   },
   {
      name: "playlist add check",
      keywords: "playlist add check playlist add check list music songs tracklist collection confirm",
      icon: "ecb1",
      color: false,
   },
   {
      name: "queue play next",
      keywords: "queue play next queue play next playlist list music songs tracklist collection next",
      icon: "ecb2",
      color: false,
   },
   {
      name: "remove from queue",
      keywords: "remove from queue queue remove delete exclude playlist list music songs tracklist",
      icon: "ecb3",
      color: false,
   },
   {
      name: "slow motion video",
      keywords: "slow motion video slow motion video slow motion visual slowmo reduced speed video effect slow down",
      icon: "ecb4",
      color: false,
   },
   {
      name: "web asset",
      keywords: "web asset web asset internet online site website world wide web resource digital",
      icon: "ecb5",
      color: false,
   },
   {
      name: "fiber pin",
      keywords: "fiber pin fiber pin attach fix fasten hold pin down secure fiber optic",
      icon: "ecb6",
      color: false,
   },
   {
      name: "branding watermark",
      keywords: "branding watermark branding watermark logo mark identity copyright trademark stamp signature",
      icon: "ecb7",
      color: false,
   },
   {
      name: "call to action",
      keywords: "call to action call action engage prompt motivate inspire encourage initiate response",
      icon: "ecb8",
      color: false,
   },
   {
      name: "featured play list",
      keywords: "featured play list featured playlist list music songs tracklist collection highlighted prominent",
      icon: "ecb9",
      color: false,
   },
   {
      name: "featured video",
      keywords: "featured video featured video highlighted prominent trending popular featured content main top",
      icon: "ecba",
      color: false,
   },
   {
      name: "note1",
      keywords: "note memo document message write text reminder comment notation sheet",
      icon: "ecbb",
      color: false,
   },
   {
      name: "video call",
      keywords: "video call video call chat communication face to face videocall talk conference online",
      icon: "ecbc",
      color: false,
   },
   {
      name: "video label",
      keywords: "video label video label tag identify categorize classification name video name video category",
      icon: "ecbd",
      color: false,
   },
   {
      name: "4k",
      keywords: "4k ultra hd resolution high definition quality high quality clear sharp crisp 4k resolution",
      icon: "ecbe",
      color: false,
   },
   {
      name: "missed video call",
      keywords: "missed video call missed call video call chat communication face to face videocall talk conference",
      icon: "ecbf",
      color: false,
   },
   {
      name: "control camera",
      keywords: "control camera control camera adjust manipulate operate navigate direct manage camera control",
      icon: "ecc0",
      color: false,
   },
   {
      name: "business",
      keywords: "business work commerce industry enterprise company firm organization trade commercial",
      icon: "ecc1",
      color: false,
   },
   {
      name: "call",
      keywords: "call phone telephone contact dial ring communicate conversation connect answer",
      icon: "ecc2",
      color: false,
   },
   {
      name: "call end",
      keywords: "call end end call hang up terminate finish close end conversation disconnect call button phone",
      icon: "ecc3",
      color: false,
   },
   {
      name: "call made",
      keywords: "call made call made phone telephone outgoing dial ring communicate conversation",
      icon: "ecc4",
      color: false,
   },
   {
      name: "call merge",
      keywords: "call merge merge combine join unite merge call merge conversation connect merge button phone",
      icon: "ecc5",
      color: false,
   },
   {
      name: "call missed",
      keywords: "call missed missed call miss missed phone telephone dial ring communicate conversation",
      icon: "ecc6",
      color: false,
   },
   {
      name: "call received",
      keywords: "call received received call incoming call phone telephone answer pick up dial ring communicate",
      icon: "ecc7",
      color: false,
   },
   {
      name: "call split",
      keywords: "call split split separate divide break call conversation disconnect split call split conversation",
      icon: "ecc8",
      color: false,
   },
   {
      name: "chat1",
      keywords: "chat conversation talk communicate message dialogue discuss text online chat instant messaging",
      icon: "ecc9",
      color: false,
   },
   {
      name: "clear all",
      keywords: "clear all clear delete remove erase clean empty purge reset clear everything",
      icon: "ecca",
      color: false,
   },
   {
      name: "comment1",
      keywords: "comment reply feedback discussion opinion remark response commentary note observation",
      icon: "eccb",
      color: false,
   },
   {
      name: "contacts",
      keywords: "contacts address book directory contact list address phone numbers emails people connections friends",
      icon: "eccc",
      color: false,
   },
   {
      name: "dialer sip",
      keywords: "dialer sip dialer sip phone telephone call dial communication voip sip protocol",
      icon: "eccd",
      color: false,
   },
   {
      name: "dialpad",
      keywords: "dialpad phone telephone dialer keypad numbers keypad dial call telephone keypad",
      icon: "ecce",
      color: false,
   },
   {
      name: "email1",
      keywords: "email message mail electronic mail correspondence inbox communication send receive email icon",
      icon: "eccf",
      color: false,
   },
   {
      name: "forum",
      keywords: "forum discussion community conversation board message board chat talk platform discussion forum",
      icon: "ecd0",
      color: false,
   },
   {
      name: "import export",
      keywords: "import export import export transfer move send receive exchange data importing exporting",
      icon: "ecd1",
      color: false,
   },
   {
      name: "invert colors off",
      keywords: "invert colors off invert colors off disable turn off no switch off color inversion negative",
      icon: "ecd2",
      color: false,
   },
   {
      name: "live help",
      keywords: "live help help support assistance aid customer service faq online help technical support live chat",
      icon: "ecd3",
      color: false,
   },
   {
      name: "location off",
      keywords: "location off location off disable location no location not found not available gps off geolocation off position off",
      icon: "ecd4",
      color: false,
   },
   {
      name: "location on",
      keywords: "location on location on enable location found available gps on geolocation on position on pinpoint",
      icon: "ecd5",
      color: false,
   },
   {
      name: "message1",
      keywords: "message chat conversation talk communicate dialogue discuss text email notification",
      icon: "ecd6",
      color: false,
   },
   {
      name: "chat bubble",
      keywords: "chat bubble chat conversation talk communicate message dialogue discuss text online chat",
      icon: "ecd7",
      color: false,
   },
   {
      name: "chat bubble outline",
      keywords: "chat bubble outline chat conversation talk communicate message dialogue discuss text online chat",
      icon: "ecd8",
      color: false,
   },
   {
      name: "no sim",
      keywords: "no sim no sim card no no service unavailable missing not detected no signal no network no connection",
      icon: "ecd9",
      color: false,
   },
   {
      name: "phone3",
      keywords: "phone telephone call contact mobile cellphone smartphone device communication dialer",
      icon: "ecda",
      color: false,
   },
   {
      name: "portable wifi off",
      keywords: "portable wifi off wifi off disable turn off no switch off no wifi no wireless no connection",
      icon: "ecdb",
      color: false,
   },
   {
      name: "contact phone",
      keywords: "contact phone phone telephone contact mobile cellphone smartphone device communication dialer",
      icon: "ecdc",
      color: false,
   },
   {
      name: "contact mail",
      keywords: "contact mail contact mail email message correspondence communication inbox send receive",
      icon: "ecdd",
      color: false,
   },
   {
      name: "ring volume",
      keywords: "ring volume ring volume sound audio phone call ringer ringtone loudness",
      icon: "ecde",
      color: false,
   },
   {
      name: "speaker phone",
      keywords: "speaker phone speaker phone audio sound phone call call hands free speaker mode loudspeaker",
      icon: "ecdf",
      color: false,
   },
   {
      name: "stay current landscape",
      keywords: "stay current landscape stay current landscape orientation screen view display horizontal wide",
      icon: "ece0",
      color: false,
   },
   {
      name: "stay current portrait",
      keywords: "stay current portrait stay current portrait orientation screen view display vertical tall",
      icon: "ece1",
      color: false,
   },
   {
      name: "swap calls",
      keywords: "swap calls swap switch exchange call phone change toggle alternate switch calls",
      icon: "ece2",
      color: false,
   },
   {
      name: "textsms",
      keywords: "textsms text sms message chat communication mobile text message cellphone send",
      icon: "ece3",
      color: false,
   },
   {
      name: "voicemail1",
      keywords: "voicemail voice mail message inbox communication phone telephone recorded message answering machine",
      icon: "ece4",
      color: false,
   },
   {
      name: "vpn key",
      keywords: "vpn key vpn key secure connection virtual private network encryption private network security",
      icon: "ece5",
      color: false,
   },
   {
      name: "phonelink erase",
      keywords: "phonelink erase phonelink erase clear delete remove unlink disconnect delete phone link wipe",
      icon: "ece6",
      color: false,
   },
   {
      name: "phonelink lock",
      keywords: "phonelink lock phonelink lock secure protect lock phone link secure link locked locked phone link safe",
      icon: "ece7",
      color: false,
   },
   {
      name: "phonelink ring",
      keywords: "phonelink ring phonelink ring phone call phone link ringing notify alert ring phone link",
      icon: "ece8",
      color: false,
   },
   {
      name: "phonelink setup",
      keywords: "phonelink setup phonelink setup configure install phone link setup phone link phone setup link setup arrange",
      icon: "ece9",
      color: false,
   },
   {
      name: "present to all",
      keywords: "present to all present show share demonstrate display broadcast presenting everyone audience",
      icon: "ecea",
      color: false,
   },
   {
      name: "import contacts",
      keywords: "import contacts import contacts importing address book directory data migrate bring in transfer",
      icon: "eceb",
      color: false,
   },
   {
      name: "mail outline",
      keywords: "mail outline mail email message envelope correspondence communication inbox send receive",
      icon: "ecec",
      color: false,
   },
   {
      name: "screen share",
      keywords: "screen share screen share display broadcast show present collaboration sharing screencast",
      icon: "eced",
      color: false,
   },
   {
      name: "stop screen share",
      keywords: "stop screen share stop end screen share display broadcast show present collaboration",
      icon: "ecee",
      color: false,
   },
   {
      name: "call missed outgoing",
      keywords: "call missed outgoing missed call miss missed phone telephone outgoing call call dial ring",
      icon: "ecef",
      color: false,
   },
   {
      name: "rss feed",
      keywords: "rss feed rss feed news syndication subscribe update feed reader news feed news aggregator",
      icon: "ecf0",
      color: false,
   },
   {
      name: "alternate email",
      keywords: "alternate email alternate alternative secondary email mail second additional other backup",
      icon: "ecf1",
      color: false,
   },
   {
      name: "mobile screen share",
      keywords: "mobile screen share mobile screen share display broadcast show present collaboration sharing",
      icon: "ecf2",
      color: false,
   },
   {
      name: "add call",
      keywords: "add call add call phone telephone contact dial ring communicate conversation",
      icon: "ecf3",
      color: false,
   },
   {
      name: "cancel presentation",
      keywords: "cancel presentation cancel end terminate stop abort dismiss canceling presentation show",
      icon: "ecf4",
      color: false,
   },
   {
      name: "pause presentation",
      keywords: "pause presentation pause stop break hold wait freeze halt intermission suspend",
      icon: "ecf5",
      color: false,
   },
   {
      name: "unsubscribe",
      keywords: "unsubscribe unsubscribe remove cancel opt out quit stop withdraw drop unsubscribe button",
      icon: "ecf6",
      color: false,
   },
   {
      name: "cell wifi",
      keywords: "cell wifi cell wifi wireless network cellular cellphone mobile phone data",
      icon: "ecf7",
      color: false,
   },
   {
      name: "sentiment satisfied alt",
      keywords: "sentiment satisfied alt satisfied happy positive content joyful pleased cheerful smiley smile",
      icon: "ecf8",
      color: false,
   },
   {
      name: "list alt",
      keywords: "list alt list bullets items points index listing list alt icon list icon bullet list",
      icon: "ecf9",
      color: false,
   },
   {
      name: "domain disabled",
      keywords: "domain disabled domain disabled blocked banned prohibited restricted offline unavailable inaccessible",
      icon: "ecfa",
      color: false,
   },
   {
      name: "lightbulb",
      keywords: "lightbulb light bulb idea bright innovation electricity illumination lamp concept",
      icon: "ecfb",
      color: false,
   },
   {
      name: "add",
      keywords: "add plus create new include append insert addition additional increase",
      icon: "ecfc",
      color: false,
   },
   {
      name: "add box",
      keywords: "add box add box plus create new include append insert addition",
      icon: "ecfd",
      color: false,
   },
   {
      name: "add circle",
      keywords: "add circle add circle plus create new include append insert addition",
      icon: "ecfe",
      color: false,
   },
   {
      name: "add circle outline",
      keywords: "add circle outline add circle outline plus create new include append insert",
      icon: "ecff",
      color: false,
   },
   {
      name: "archive2",
      keywords: "archive store save container keep record backup compress file archiving",
      icon: "ed00",
      color: false,
   },
   {
      name: "backspace",
      keywords: "backspace delete erase remove clear back undo correction mistake keyboard",
      icon: "ed01",
      color: false,
   },
   {
      name: "block1",
      keywords: "block ban stop forbid restrict bar prohibit obstruct prevent denied",
      icon: "ed02",
      color: false,
   },
   {
      name: "clear",
      keywords: "clear erase delete remove clean empty purge reset clear all clear everything",
      icon: "ed03",
      color: false,
   },
   {
      name: "content copy",
      keywords: "content copy copy duplicate clone reproduce imitate replicate mimic c reproduce c duplicate",
      icon: "ed04",
      color: false,
   },
   {
      name: "content cut",
      keywords: "content cut cut slice sever divide chop trim clip snip c cut",
      icon: "ed05",
      color: false,
   },
   {
      name: "content paste",
      keywords: "content paste paste insert add attach stick put c paste c insert c add",
      icon: "ed06",
      color: false,
   },
   {
      name: "create",
      keywords: "create make generate build produce form develop design construct compose",
      icon: "ed07",
      color: false,
   },
   {
      name: "drafts",
      keywords: "drafts draft note sketch outline rough plan scribble manuscript work in progress",
      icon: "ed08",
      color: false,
   },
   {
      name: "filter list",
      keywords: "filter list filter list sort arrange organize group categorize classify arrangement",
      icon: "ed09",
      color: false,
   },
   {
      name: "flag3",
      keywords: "flag mark indicator symbol emblem banner pennant standard ensign c flag",
      icon: "ed0a",
      color: false,
   },
   {
      name: "forward5",
      keywords: "forward ahead progress advance onward forth onward move forward send forward button",
      icon: "ed0b",
      color: false,
   },
   {
      name: "gesture",
      keywords: "gesture motion movement signal action body language sign expression gesture icon hand gesture",
      icon: "ed0c",
      color: false,
   },
   {
      name: "inbox2",
      keywords: "inbox mail message receive communication correspondence incoming email envelope inbox icon",
      icon: "ed0d",
      color: false,
   },
   {
      name: "link3",
      keywords: "link connect attach tie join bond bridge associate relationship hyperlink",
      icon: "ed0e",
      color: false,
   },
   {
      name: "redo1",
      keywords: "redo repeat replay do again restore renew retake replenish resume redo button",
      icon: "ed0f",
      color: false,
   },
   {
      name: "remove1",
      keywords: "remove delete eliminate clear discard dispose erase extract withdraw remove button",
      icon: "ed10",
      color: false,
   },
   {
      name: "remove circle",
      keywords: "remove circle remove delete eliminate clear discard dispose erase extract withdraw",
      icon: "ed11",
      color: false,
   },
   {
      name: "remove circle outline",
      keywords: "remove circle outline remove delete eliminate clear discard dispose erase extract withdraw",
      icon: "ed12",
      color: false,
   },
   {
      name: "reply3",
      keywords: "reply respond answer react retort counter return reply button reply all reply arrow",
      icon: "ed13",
      color: false,
   },
   {
      name: "reply all",
      keywords: "reply all respond answer react retort counter return reply button reply all reply arrow",
      icon: "ed14",
      color: false,
   },
   {
      name: "report",
      keywords: "report document record analyze investigate examine review assess audit reporting",
      icon: "ed15",
      color: false,
   },
   {
      name: "save2",
      keywords: "save store preserve keep record backup download save button save icon save file",
      icon: "ed16",
      color: false,
   },
   {
      name: "select all",
      keywords: "select all select choose pick mark highlight opt opt for choose all select everything",
      icon: "ed17",
      color: false,
   },
   {
      name: "send1",
      keywords: "send transmit dispatch mail forward deliver transfer convey pass on send button",
      icon: "ed18",
      color: false,
   },
   {
      name: "sort1",
      keywords: "sort arrange organize group categorize classify arrangement sort by sort alphabetically sort ascending",
      icon: "ed19",
      color: false,
   },
   {
      name: "text format",
      keywords: "text format text format style appearance font text style text appearance typography c text",
      icon: "ed1a",
      color: false,
   },
   {
      name: "undo3",
      keywords: "undo reverse cancel revert backtrack recall revoke reset undo button undo arrow",
      icon: "ed1b",
      color: false,
   },
   {
      name: "font download",
      keywords: "font download font download typeface lettering font style font family text c font",
      icon: "ed1c",
      color: false,
   },
   {
      name: "move to inbox",
      keywords: "move to inbox move inbox mail message receive communication correspondence incoming email",
      icon: "ed1d",
      color: false,
   },
   {
      name: "unarchive",
      keywords: "unarchive unpack unzip extract retrieve release open restore uncompress unarchive icon",
      icon: "ed1e",
      color: false,
   },
   {
      name: "next week",
      keywords: "next week next upcoming future following subsequent forthcoming coming week next seven days next week icon",
      icon: "ed1f",
      color: false,
   },
   {
      name: "weekend",
      keywords: "weekend saturday sunday time off break relax weekend icon days off leisure rest",
      icon: "ed20",
      color: false,
   },
   {
      name: "delete sweep",
      keywords: "delete sweep delete remove clear sweep clean discard dispose erase delete button",
      icon: "ed21",
      color: false,
   },
   {
      name: "low priority",
      keywords: "low priority low priority importance rank level priority level low importance priority icon low rank",
      icon: "ed22",
      color: false,
   },
   {
      name: "outlined flag",
      keywords: "outlined flag outlined flag mark indicator symbol emblem banner pennant standard",
      icon: "ed23",
      color: false,
   },
   {
      name: "link off",
      keywords: "link off link off disable unlink disconnect cut off broken link no link broken",
      icon: "ed24",
      color: false,
   },
   {
      name: "report off",
      keywords: "report off report off disable turn off no switch off reporting off reporting disabled reporting turned off",
      icon: "ed25",
      color: false,
   },
   {
      name: "save alt",
      keywords: "save alt save store preserve keep record backup download save button save icon",
      icon: "ed26",
      color: false,
   },
   {
      name: "ballot",
      keywords: "ballot vote election poll ballot paper voting choice survey democracy ballot icon",
      icon: "ed27",
      color: false,
   },
   {
      name: "file copy",
      keywords: "file copy file copy duplicate clone reproduce imitate replicate mimic c reproduce",
      icon: "ed28",
      color: false,
   },
   {
      name: "how to reg",
      keywords: "how to reg how register registration sign up join enroll log in create account registration icon",
      icon: "ed29",
      color: false,
   },
   {
      name: "how to vote",
      keywords: "how to vote how vote voting election poll ballot choice democracy voting icon",
      icon: "ed2a",
      color: false,
   },
   {
      name: "waves",
      keywords: "waves wave water ocean sea ripple flow current wave icon moving water",
      icon: "ed2b",
      color: false,
   },
   {
      name: "where to vote",
      keywords: "where to vote where vote voting election poll location ballot choice voting location",
      icon: "ed2c",
      color: false,
   },
   {
      name: "add link",
      keywords: "add link add link attach connect join tie add hyperlink linking add link icon",
      icon: "ed2d",
      color: false,
   },
   {
      name: "inventory",
      keywords: "inventory stock stockpile assets supplies goods items merchandise inventory icon stock icon",
      icon: "ed2e",
      color: false,
   },
   {
      name: "access alarm",
      keywords: "access alarm access alarm notification alert warning reminder time clock access alarm icon",
      icon: "ed2f",
      color: false,
   },
   {
      name: "access alarms",
      keywords: "access alarms access alarms notifications alerts warnings reminders time clock access alarms icon",
      icon: "ed30",
      color: false,
   },
   {
      name: "access time",
      keywords: "access time access time clock hour minute second access time icon time access time management",
      icon: "ed31",
      color: false,
   },
   {
      name: "add alarm",
      keywords: "add alarm add alarm create alarm set alarm notification alert warning reminder time",
      icon: "ed32",
      color: false,
   },
   {
      name: "airplanemode off",
      keywords: "airplanemode off airplanemode off disable turn off no switch off no wifi no wireless no connection",
      icon: "ed33",
      color: false,
   },
   {
      name: "airplanemode on",
      keywords: "airplanemode on airplanemode on enable activate turn on flight mode airplane mode wireless off no connection",
      icon: "ed34",
      color: false,
   },
   {
      name: "battery alert",
      keywords: "battery alert battery alert low battery warning power energy charge battery level battery icon",
      icon: "ed35",
      color: false,
   },
   {
      name: "battery charging full",
      keywords: "battery charging full battery charging full complete charged energy power battery level battery icon",
      icon: "ed36",
      color: false,
   },
   {
      name: "battery full",
      keywords: "battery full battery full battery 100% battery fully charged battery level battery status battery icon full charge battery filled",
      icon: "ed37",
      color: false,
   },
   {
      name: "battery unknown",
      keywords: "battery unknown battery unknown uncertain unidentified ambiguous undetermined battery level battery icon unidentified battery",
      icon: "ed38",
      color: false,
   },
   {
      name: "bluetooth1",
      keywords: "bluetooth wireless connection bluetooth icon bluetooth logo bluetooth symbol bluetooth technology bluetooth device bluetooth sign bluetooth button",
      icon: "ed39",
      color: false,
   },
   {
      name: "bluetooth connected",
      keywords: "bluetooth connected bluetooth connected wireless connection bluetooth icon bluetooth logo bluetooth symbol bluetooth technology bluetooth device",
      icon: "ed3a",
      color: false,
   },
   {
      name: "bluetooth disabled",
      keywords: "bluetooth disabled bluetooth disabled wireless connection bluetooth icon bluetooth logo bluetooth symbol bluetooth technology bluetooth device",
      icon: "ed3b",
      color: false,
   },
   {
      name: "bluetooth searching",
      keywords: "bluetooth searching bluetooth searching finding looking for wireless connection bluetooth icon bluetooth logo bluetooth symbol",
      icon: "ed3c",
      color: false,
   },
   {
      name: "brightness auto",
      keywords: "brightness auto brightness auto automatic light illumination brightness level brightness icon brightness adjustment automatic brightness",
      icon: "ed3d",
      color: false,
   },
   {
      name: "brightness high",
      keywords: "brightness high brightness high bright light illumination brightness level brightness icon high brightness bright light",
      icon: "ed3e",
      color: false,
   },
   {
      name: "brightness low",
      keywords: "brightness low brightness low dim light illumination brightness level brightness icon low brightness dim light",
      icon: "ed3f",
      color: false,
   },
   {
      name: "brightness medium",
      keywords: "brightness medium brightness medium moderate light illumination brightness level brightness icon medium brightness moderate light",
      icon: "ed40",
      color: false,
   },
   {
      name: "data usage",
      keywords: "data usage data usage data management internet bandwidth network traffic data monitor usage statistics",
      icon: "ed41",
      color: false,
   },
   {
      name: "developer mode",
      keywords: "developer mode developer mode debugging development coding programmer software app development developer options",
      icon: "ed42",
      color: false,
   },
   {
      name: "devices",
      keywords: "devices device gadgets hardware electronics tech tools instruments equipment devices icon",
      icon: "ed43",
      color: false,
   },
   {
      name: "dvr",
      keywords: "dvr digital video recorder record video streaming watching television recording dvr icon playback",
      icon: "ed44",
      color: false,
   },
   {
      name: "gps fixed",
      keywords: "gps fixed gps fixed location navigation positioning satellite map gps icon stable",
      icon: "ed45",
      color: false,
   },
   {
      name: "gps not fixed",
      keywords: "gps not fixed gps not fixed location navigation positioning satellite map unstable gps icon",
      icon: "ed46",
      color: false,
   },
   {
      name: "gps off",
      keywords: "gps off gps off location navigation positioning satellite map no signal gps icon",
      icon: "ed47",
      color: false,
   },
   {
      name: "graphic eq",
      keywords: "graphic eq graphic eq equalizer sound audio music volume graphic equalizer sound waves",
      icon: "ed48",
      color: false,
   },
   {
      name: "network cell",
      keywords: "network cell network cell signal wireless communication mobile connection network icon cell tower",
      icon: "ed49",
      color: false,
   },
   {
      name: "network wifi",
      keywords: "network wifi network wifi wireless internet connection wi fi signal network icon wi fi signal",
      icon: "ed4a",
      color: false,
   },
   {
      name: "nfc",
      keywords: "nfc near field communication wireless technology communication nfc tag nfc icon contactless mobile transfer",
      icon: "ed4b",
      color: false,
   },
   {
      name: "now wallpaper",
      keywords: "now wallpaper now wallpaper current background screen display home screen wallpaper icon now icon",
      icon: "ed4c",
      color: false,
   },
   {
      name: "now widgets",
      keywords: "now widgets now widgets current screen display home screen widgets icon now icon widget",
      icon: "ed4d",
      color: false,
   },
   {
      name: "screen lock landscape",
      keywords: "screen lock landscape screen lock landscape screen lock rotation orientation horizontal landscape mode lock icon",
      icon: "ed4e",
      color: false,
   },
   {
      name: "screen lock portrait",
      keywords: "screen lock portrait screen lock portrait screen lock rotation orientation vertical portrait mode lock icon",
      icon: "ed4f",
      color: false,
   },
   {
      name: "screen lock rotation",
      keywords: "screen lock rotation screen lock rotation orientation rotate lock auto rotate screen orientation screen lock icon rotation lock",
      icon: "ed50",
      color: false,
   },
   {
      name: "screen rotation",
      keywords: "screen rotation screen rotation orientation rotate auto rotate screen orientation rotate screen rotation icon orientation icon",
      icon: "ed51",
      color: false,
   },
   {
      name: "sd storage",
      keywords: "sd storage sd storage memory card memory external storage sd card data sd card icon storage icon",
      icon: "ed52",
      color: false,
   },
   {
      name: "settings system daydream",
      keywords: "settings system daydream settings system daydream settings icon system settings daydream mode daydream settings settings gear settings menu",
      icon: "ed53",
      color: false,
   },
   {
      name: "signal cellular 4 bar",
      keywords: "signal cellular 4 bar signal cellular 4 bar cell bars wireless connection network signal strength",
      icon: "ed54",
      color: false,
   },
   {
      name: "signal cellular connected no internet 4 bar",
      keywords: "signal cellular connected no internet 4 bar signal cellular connected no internet 4 bar cell bars network no connection",
      icon: "ed55",
      color: false,
   },
   {
      name: "signal cellular null",
      keywords: "signal cellular null signal cellular no signal no connection no service wireless disconnected no network no bars",
      icon: "ed56",
      color: false,
   },
   {
      name: "signal cellular off",
      keywords: "signal cellular off signal cellular off no signal no connection no service wireless disconnected no network",
      icon: "ed57",
      color: false,
   },
   {
      name: "signal wifi 4 bar",
      keywords: "signal wifi 4 bar signal wifi 4 bar bars wireless connection network wi fi signal strength",
      icon: "ed58",
      color: false,
   },
   {
      name: "signal wifi 4 bar lock",
      keywords: "signal wifi 4 bar lock signal wifi 4 bar bars wireless connection network wi fi lock icon",
      icon: "ed59",
      color: false,
   },
   {
      name: "signal wifi off",
      keywords: "signal wifi off signal wifi off no signal no connection no service wireless disconnected no network",
      icon: "ed5a",
      color: false,
   },
   {
      name: "storage",
      keywords: "storage store memory data capacity space disk drive storage icon storage capacity",
      icon: "ed5b",
      color: false,
   },
   {
      name: "usb1",
      keywords: "usb usb drive flash drive storage memory data transfer usb port usb cable usb icon external storage",
      icon: "ed5c",
      color: false,
   },
   {
      name: "wifi lock",
      keywords: "wifi lock wifi lock secure protected network wi fi connection lock icon wifi security",
      icon: "ed5d",
      color: false,
   },
   {
      name: "wifi tethering",
      keywords: "wifi tethering wifi tethering hotspot network wi fi connection share internet tethering icon",
      icon: "ed5e",
      color: false,
   },
   {
      name: "add to home screen",
      keywords: "add to home screen add home screen screen display addition add to screen customize personalize add to home",
      icon: "ed5f",
      color: false,
   },
   {
      name: "device thermostat",
      keywords: "device thermostat device thermostat temperature control climate heating cooling device control thermostat icon",
      icon: "ed60",
      color: false,
   },
   {
      name: "mobile friendly",
      keywords: "mobile friendly mobile friendly smartphone compatible optimized mobile device responsive mobile icon mobile optimization",
      icon: "ed61",
      color: false,
   },
   {
      name: "mobile off",
      keywords: "mobile off mobile off disabled turn off no switch off no service no signal mobile icon",
      icon: "ed62",
      color: false,
   },
   {
      name: "signal cellular alt",
      keywords: "signal cellular alt signal cellular alternative cell bars wireless connection network signal strength",
      icon: "ed63",
      color: false,
   },
   {
      name: "attach file",
      keywords: "attach file attach file document paperclip clip attachment send attach document file attachment",
      icon: "ed64",
      color: false,
   },
   {
      name: "attach money",
      keywords: "attach money attach money payment cash currency financial transaction money icon money attachment",
      icon: "ed65",
      color: false,
   },
   {
      name: "border all",
      keywords: "border all border all outline frame bordered edges boundary border icon bordered box",
      icon: "ed66",
      color: false,
   },
   {
      name: "border bottom",
      keywords: "border bottom border bottom edge outline frame bordered boundary border icon bottom border",
      icon: "ed67",
      color: false,
   },
   {
      name: "border clear",
      keywords: "border clear border clear remove erase delete outline frame bordered border icon",
      icon: "ed68",
      color: false,
   },
   {
      name: "border color",
      keywords: "border color border color outline frame bordered hue shade border icon colorful border",
      icon: "ed69",
      color: false,
   },
   {
      name: "border horizontal",
      keywords: "border horizontal border horizontal edge outline frame bordered boundary horizontal border border icon",
      icon: "ed6a",
      color: false,
   },
   {
      name: "border inner",
      keywords: "border inner border inner inside interior frame bordered inner border border icon internal border",
      icon: "ed6b",
      color: false,
   },
   {
      name: "border left",
      keywords: "border left border left edge outline frame bordered boundary left border border icon",
      icon: "ed6c",
      color: false,
   },
   {
      name: "border outer",
      keywords: "border outer border outer outside exterior frame bordered outer border border icon external border",
      icon: "ed6d",
      color: false,
   },
   {
      name: "border right",
      keywords: "border right border right edge outline frame bordered boundary right border border icon",
      icon: "ed6e",
      color: false,
   },
   {
      name: "border style",
      keywords: "border style border style outline frame bordered appearance design border icon style options",
      icon: "ed6f",
      color: false,
   },
   {
      name: "border top",
      keywords: "border top border top edge outline frame bordered boundary top border border icon",
      icon: "ed70",
      color: false,
   },
   {
      name: "border vertical",
      keywords: "border vertical border vertical edge outline frame bordered boundary vertical border border icon",
      icon: "ed71",
      color: false,
   },
   {
      name: "format align center",
      keywords: "format align center format align center text alignment centered formatting center alignment center text",
      icon: "ed72",
      color: false,
   },
   {
      name: "format align justify",
      keywords: "format align justify format align justify text alignment justified formatting justify alignment justify text",
      icon: "ed73",
      color: false,
   },
   {
      name: "format align left",
      keywords: "format align left format align left text alignment left aligned formatting left alignment left text",
      icon: "ed74",
      color: false,
   },
   {
      name: "format align right",
      keywords: "format align right format align right text alignment right aligned formatting right alignment right text",
      icon: "ed75",
      color: false,
   },
   {
      name: "format bold",
      keywords: "format bold format bold text style emphasis bold text font formatting make bold",
      icon: "ed76",
      color: false,
   },
   {
      name: "format clear",
      keywords: "format clear format clear remove erase delete formatting reset clear formatting clean format",
      icon: "ed77",
      color: false,
   },
   {
      name: "format color fill",
      keywords: "format color fill format color fill paint paint bucket background formatting fill color color fill",
      icon: "ed78",
      color: false,
   },
   {
      name: "format color reset",
      keywords: "format color reset format color reset undo revert restore formatting reset color color reset",
      icon: "ed79",
      color: false,
   },
   {
      name: "format color text",
      keywords: "format color text format color text font formatting text color color text change text color font color",
      icon: "ed7a",
      color: false,
   },
   {
      name: "format indent decrease",
      keywords: "format indent decrease format indent decrease text alignment formatting decrease indent outdent reduce indent",
      icon: "ed7b",
      color: false,
   },
   {
      name: "format indent increase",
      keywords: "format indent increase format indent increase text alignment formatting increase indent indentation add indent",
      icon: "ed7c",
      color: false,
   },
   {
      name: "format italic",
      keywords: "format italic format italic text style emphasis italic text font formatting make italic",
      icon: "ed7d",
      color: false,
   },
   {
      name: "format line spacing",
      keywords: "format line spacing format line spacing text alignment formatting line height line spacing options text spacing",
      icon: "ed7e",
      color: false,
   },
   {
      name: "format list bulleted",
      keywords: "format list bulleted format list bulleted unordered text formatting bullet points list items bulleted list",
      icon: "ed7f",
      color: false,
   },
   {
      name: "format list numbered",
      keywords: "format list numbered format list numbered ordered text formatting numbered list list items numbered points",
      icon: "ed80",
      color: false,
   },
   {
      name: "format paint",
      keywords: "format paint format paint paintbrush color fill text formatting paint format apply format",
      icon: "ed81",
      color: false,
   },
   {
      name: "format quote",
      keywords: "format quote format quote quotation text style emphasis quote text font formatting",
      icon: "ed82",
      color: false,
   },
   {
      name: "format size",
      keywords: "format size format size text font formatting text size font size resize text text scale",
      icon: "ed83",
      color: false,
   },
   {
      name: "format strikethrough",
      keywords: "format strikethrough format strikethrough strike text style emphasis strikethrough text font formatting",
      icon: "ed84",
      color: false,
   },
   {
      name: "format textdirection l to r",
      keywords: "format textdirection l to r format textdirection left to right text direction writing reading formatting left to right text",
      icon: "ed85",
      color: false,
   },
   {
      name: "format textdirection r to l",
      keywords: "format textdirection r to l format textdirection right to left text direction writing reading formatting right to left text",
      icon: "ed86",
      color: false,
   },
   {
      name: "format underlined",
      keywords: "format underlined format underlined underline text style emphasis underlined text font formatting",
      icon: "ed87",
      color: false,
   },
   {
      name: "functions",
      keywords: "functions function operations tasks operations math calculator algorithms code functions icon",
      icon: "ed88",
      color: false,
   },
   {
      name: "insert chart",
      keywords: "insert chart insert chart graph diagram data visual analytics insertion insert chart icon",
      icon: "ed89",
      color: false,
   },
   {
      name: "insert comment",
      keywords: "insert comment insert comment note add note annotate write insertion comment icon add comment",
      icon: "ed8a",
      color: false,
   },
   {
      name: "insert drive file",
      keywords: "insert drive file insert drive file document add create insertion drive file icon add file",
      icon: "ed8b",
      color: false,
   },
   {
      name: "insert emoticon",
      keywords: "insert emoticon insert emoticon emoji smiley expression mood insertion emoticon icon add emoji",
      icon: "ed8c",
      color: false,
   },
   {
      name: "insert invitation",
      keywords: "insert invitation insert invitation invite event calendar schedule insertion invitation icon add invite",
      icon: "ed8d",
      color: false,
   },
   {
      name: "insert photo",
      keywords: "insert photo insert photo image picture add image add photo insertion photo icon add picture",
      icon: "ed8e",
      color: false,
   },
   {
      name: "mode comment",
      keywords: "mode comment mode comment commenting discussion conversation mode icon comment mode commenting mode talk mode",
      icon: "ed8f",
      color: false,
   },
   {
      name: "publish1",
      keywords: "publish share release post broadcast distribute publish icon share content publication make public",
      icon: "ed90",
      color: false,
   },
   {
      name: "space bar",
      keywords: "space bar space bar key keyboard typing input spacebar typing icon keyboard space",
      icon: "ed91",
      color: false,
   },
   {
      name: "strikethrough s",
      keywords: "strikethrough s strikethrough s strike text style emphasis strikethrough text font formatting",
      icon: "ed92",
      color: false,
   },
   {
      name: "vertical align bottom",
      keywords: "vertical align bottom vertical align bottom text alignment formatting bottom alignment align bottom bottom text",
      icon: "ed93",
      color: false,
   },
   {
      name: "vertical align center",
      keywords: "vertical align center vertical align center text alignment formatting center alignment align center center text",
      icon: "ed94",
      color: false,
   },
   {
      name: "vertical align top",
      keywords: "vertical align top vertical align top text alignment formatting top alignment align top top text",
      icon: "ed95",
      color: false,
   },
   {
      name: "wrap text",
      keywords: "wrap text wrap text line break word wrap text wrap formatting wrap lines wrap text icon line wrap",
      icon: "ed96",
      color: false,
   },
   {
      name: "money off",
      keywords: "money off money off discount sale save price reduction discounted money icon money discount",
      icon: "ed97",
      color: false,
   },
   {
      name: "drag handle",
      keywords: "drag handle drag handle move resize control manipulate drag icon handle icon move handle",
      icon: "ed98",
      color: false,
   },
   {
      name: "format shapes",
      keywords: "format shapes format shapes shapes objects geometry drawing formatting shape tool shape format",
      icon: "ed99",
      color: false,
   },
   {
      name: "highlight",
      keywords: "highlight highlighter highlighting mark select emphasis highlight text highlight icon mark text text highlight",
      icon: "ed9a",
      color: false,
   },
   {
      name: "linear scale",
      keywords: "linear scale linear scale scale icon measurement ruler meter progress progress bar linear measurement",
      icon: "ed9b",
      color: false,
   },
   {
      name: "short text",
      keywords: "short text short text brief summary paragraph shorten text icon shorten text brief text",
      icon: "ed9c",
      color: false,
   },
   {
      name: "text fields",
      keywords: "text fields text fields input entry form text boxes text entry text input field icon",
      icon: "ed9d",
      color: false,
   },
   {
      name: "monetization on",
      keywords: "monetization on monetization on money earnings revenue profit income monetize money icon",
      icon: "ed9e",
      color: false,
   },
   {
      name: "title",
      keywords: "title heading header label caption name title text header text heading text label text",
      icon: "ed9f",
      color: false,
   },
   {
      name: "table chart",
      keywords: "table chart table chart data spreadsheet statistics table icon chart icon data table data visualization",
      icon: "eda0",
      color: false,
   },
   {
      name: "add comment",
      keywords: "add comment add comment note annotate write add note add comment icon comment icon write comment",
      icon: "eda1",
      color: false,
   },
   {
      name: "format list numbered rtl",
      keywords: "format list numbered rtl format list numbered right to left rtl text formatting numbered list right to left list",
      icon: "eda2",
      color: false,
   },
   {
      name: "scatter plot",
      keywords: "scatter plot scatter plot graph data points chart scatter plot icon scatter graph scatter chart",
      icon: "eda3",
      color: false,
   },
   {
      name: "score",
      keywords: "score grade rating points marks assessment scoreboard points tally score icon points icon",
      icon: "eda4",
      color: false,
   },
   {
      name: "insert chart outlined",
      keywords: "insert chart outlined chart outlined insert chart outlined chart chart graph outline outlined insertion insert chart icon",
      icon: "eda5",
      color: false,
   },
   {
      name: "bar chart",
      keywords: "bar chart bar graph column chart bar chart icon bar graph icon column chart icon bar graph symbol bar chart symbol column chart symbol vertical bar chart",
      icon: "eda6",
      color: false,
   },
   {
      name: "notes",
      keywords: "notes note memo reminder jotting document text paper notes icon write notes",
      icon: "eda7",
      color: false,
   },
   {
      name: "attachment2",
      keywords: "attachment attached attach file attachment file document paperclip attach file attachment icon file attached",
      icon: "eda8",
      color: false,
   },
   {
      name: "cloud3",
      keywords: "cloud cloud icon cloud storage cloud computing internet data storage cloud computing icon cloud service cloud app data cloud",
      icon: "eda9",
      color: false,
   },
   {
      name: "cloud circle",
      keywords: "cloud circle cloud circle cloud icon cloud storage internet data storage cloud computing cloud circle icon cloud app",
      icon: "edaa",
      color: false,
   },
   {
      name: "cloud done",
      keywords: "cloud done cloud done success completed cloud icon finished cloud storage completed cloud finished cloud",
      icon: "edab",
      color: false,
   },
   {
      name: "cloud download",
      keywords: "cloud download download from cloud retrieve get fetch save cloud download icon downloading download button save from cloud",
      icon: "edac",
      color: false,
   },
   {
      name: "cloud off",
      keywords: "cloud off cloud off disable cloud icon cloud storage internet data storage cloud turned off cloud app",
      icon: "edad",
      color: false,
   },
   {
      name: "cloud queue",
      keywords: "cloud queue cloud queue waiting pending cloud icon cloud storage internet data storage queued cloud",
      icon: "edae",
      color: false,
   },
   {
      name: "cloud upload",
      keywords: "cloud upload upload to cloud store send uploading cloud upload icon upload button share cloud storage",
      icon: "edaf",
      color: false,
   },
   {
      name: "file download",
      keywords: "file download file download arrow file icon document download file download document save file saved",
      icon: "edb0",
      color: false,
   },
   {
      name: "file upload",
      keywords: "file upload file upload arrow file icon document upload file upload document send file sent",
      icon: "edb1",
      color: false,
   },
   {
      name: "folder3",
      keywords: "folder directory folder icon open folder file storage document storage folder directory folder opened folder app folder icon",
      icon: "edb2",
      color: false,
   },
   {
      name: "folder open",
      keywords: "folder open folder open directory file storage folder open icon directory icon file icon",
      icon: "edb3",
      color: false,
   },
   {
      name: "folder shared",
      keywords: "folder shared folder shared folder directory folder icon file storage document storage folder directory folder app folder shared icon",
      icon: "edb4",
      color: false,
   },
   {
      name: "create new folder",
      keywords: "create new folder create folder folder new folder directory folder icon file storage document storage folder directory folder app",
      icon: "edb5",
      color: false,
   },
   {
      name: "cast",
      keywords: "cast cast icon streaming broadcasting send project display chromecast tv cast device",
      icon: "edb6",
      color: false,
   },
   {
      name: "cast connected",
      keywords: "cast connected connected cast streaming broadcasting send project display chromecast tv",
      icon: "edb7",
      color: false,
   },
   {
      name: "computer",
      keywords: "computer pc desktop laptop device computer icon technology electronics workstation personal computer",
      icon: "edb8",
      color: false,
   },
   {
      name: "desktop mac",
      keywords: "desktop mac mac desktop apple computer desktop mac icon macintosh mac computer apple computer mac desktop",
      icon: "edb9",
      color: false,
   },
   {
      name: "desktop windows",
      keywords: "desktop windows windows desktop microsoft computer desktop windows icon windows computer pc microsoft desktop windows desktop",
      icon: "edba",
      color: false,
   },
   {
      name: "developer board",
      keywords: "developer board developer board electronics technology circuit microcontroller developer tool development prototyping",
      icon: "edbb",
      color: false,
   },
   {
      name: "dock",
      keywords: "dock docking station dock icon connection port dock station dock device docking device dock hub dock port",
      icon: "edbc",
      color: false,
   },
   {
      name: "headset",
      keywords: "headset headphones earphones audio sound headset icon music listen earbuds headset device",
      icon: "edbd",
      color: false,
   },
   {
      name: "headset mic",
      keywords: "headset mic headset headphones earphones mic microphone audio sound headset icon music",
      icon: "edbe",
      color: false,
   },
   {
      name: "keyboard2",
      keywords: "keyboard typing computer input keyboard icon type keys computer keyboard keyboard device text input",
      icon: "edbf",
      color: false,
   },
   {
      name: "keyboard arrow down",
      keywords: "keyboard arrow down keyboard arrow down downward keyboard icon arrow icon keyboard navigation scroll down down arrow",
      icon: "edc0",
      color: false,
   },
   {
      name: "keyboard arrow left",
      keywords: "keyboard arrow left keyboard arrow left keyboard icon arrow icon keyboard navigation left arrow back go back",
      icon: "edc1",
      color: false,
   },
   {
      name: "keyboard arrow right",
      keywords: "keyboard arrow right keyboard arrow right keyboard icon arrow icon keyboard navigation right arrow forward go forward",
      icon: "edc2",
      color: false,
   },
   {
      name: "keyboard arrow up",
      keywords: "keyboard arrow up keyboard arrow up upward keyboard icon arrow icon keyboard navigation scroll up up arrow",
      icon: "edc3",
      color: false,
   },
   {
      name: "keyboard backspace",
      keywords: "keyboard backspace keyboard backspace erase delete keyboard icon back arrow keyboard navigation back button go back",
      icon: "edc4",
      color: false,
   },
   {
      name: "keyboard capslock",
      keywords: "keyboard capslock keyboard capslock caps lock keyboard icon keyboard lock keyboard navigation uppercase capital letters",
      icon: "edc5",
      color: false,
   },
   {
      name: "keyboard hide",
      keywords: "keyboard hide keyboard hide minimize keyboard icon hide keyboard keyboard navigation keyboard toggle show keyboard hide button",
      icon: "edc6",
      color: false,
   },
   {
      name: "keyboard return",
      keywords: "keyboard return keyboard return enter submit keyboard icon keyboard navigation return key submit button enter key",
      icon: "edc7",
      color: false,
   },
   {
      name: "keyboard tab",
      keywords: "keyboard tab keyboard tab shift keyboard icon keyboard navigation tab key tab button shift key shift tab",
      icon: "edc8",
      color: false,
   },
   {
      name: "keyboard voice",
      keywords: "keyboard voice keyboard voice mic microphone speak keyboard icon keyboard navigation voice input voice recognition",
      icon: "edc9",
      color: false,
   },
   {
      name: "laptop chromebook",
      keywords: "laptop chromebook laptop chromebook computer portable laptop icon chromebook laptop chromebook computer chromebook icon chrome laptop",
      icon: "edca",
      color: false,
   },
   {
      name: "laptop mac",
      keywords: "laptop mac laptop mac apple computer laptop icon mac laptop apple laptop macbook mac computer",
      icon: "edcb",
      color: false,
   },
   {
      name: "laptop windows",
      keywords: "laptop windows laptop windows microsoft computer laptop icon windows laptop pc microsoft laptop windows computer",
      icon: "edcc",
      color: false,
   },
   {
      name: "memory",
      keywords: "memory ram memory icon computer memory storage computer technology electronic memory computer ram memory device",
      icon: "edcd",
      color: false,
   },
   {
      name: "mouse1",
      keywords: "mouse computer mouse mouse icon computer input device pointing device mouse pointer click mouse device cursor",
      icon: "edce",
      color: false,
   },
   {
      name: "phone android",
      keywords: "phone android phone android smartphone mobile cellphone phone icon android phone android device android smartphone",
      icon: "edcf",
      color: false,
   },
   {
      name: "phone iphone",
      keywords: "phone iphone phone iphone apple smartphone mobile cellphone iphone icon apple phone apple device",
      icon: "edd0",
      color: false,
   },
   {
      name: "phonelink off",
      keywords: "phonelink off phonelink off disable link phone disconnect link off link disconnected phone off",
      icon: "edd1",
      color: false,
   },
   {
      name: "router",
      keywords: "router wifi internet network router icon network device wireless networking internet device router hub",
      icon: "edd2",
      color: false,
   },
   {
      name: "scanner",
      keywords: "scanner scan scanner icon document image scanning copy printer office scan device",
      icon: "edd3",
      color: false,
   },
   {
      name: "security",
      keywords: "security lock security icon safe protection secure lock icon security lock padlock security system",
      icon: "edd4",
      color: false,
   },
   {
      name: "sim card",
      keywords: "sim card sim card phone mobile sim card icon mobile card phone card phone sim cellular card",
      icon: "edd5",
      color: false,
   },
   {
      name: "speaker",
      keywords: "speaker sound audio music speaker icon volume loudspeaker speaker device music icon speaker sound",
      icon: "edd6",
      color: false,
   },
   {
      name: "speaker group",
      keywords: "speaker group speakers sound audio music speaker icon volume loudspeakers speaker device music icon group speaker",
      icon: "edd7",
      color: false,
   },
   {
      name: "tablet3",
      keywords: "tablet tablet icon device computer portable tablet device touch screen electronic device tablet pc tablet computer",
      icon: "edd8",
      color: false,
   },
   {
      name: "tablet android",
      keywords: "tablet android tablet android device computer portable tablet device touch screen android tablet tablet pc",
      icon: "edd9",
      color: false,
   },
   {
      name: "tablet mac",
      keywords: "tablet mac tablet mac apple device computer portable tablet device touch screen mac tablet apple tablet",
      icon: "edda",
      color: false,
   },
   {
      name: "toys",
      keywords: "toys toy play fun children kids toy icon playtime childhood entertainment",
      icon: "eddb",
      color: false,
   },
   {
      name: "tv3",
      keywords: "tv television tv icon screen entertainment watching tv device tv screen tv set television icon",
      icon: "eddc",
      color: false,
   },
   {
      name: "watch",
      keywords: "watch wristwatch timepiece watch icon time wearable accessory watch device wristwatch icon wristwatch device",
      icon: "eddd",
      color: false,
   },
   {
      name: "device hub",
      keywords: "device hub hub device connection link device icon network devices hub icon connect",
      icon: "edde",
      color: false,
   },
   {
      name: "power input",
      keywords: "power input power plug electricity input power icon power supply power source energy electric power",
      icon: "eddf",
      color: false,
   },
   {
      name: "devices other",
      keywords: "devices other devices other miscellaneous device electronics technology device icon miscellaneous devices other devices",
      icon: "ede0",
      color: false,
   },
   {
      name: "videogame asset",
      keywords: "videogame asset video game game asset videogame controller videogame icon game icon gaming video game device",
      icon: "ede1",
      color: false,
   },
   {
      name: "device unknown",
      keywords: "device unknown device unknown undetected unidentified device icon mystery device unidentified device unknown device question mark",
      icon: "ede2",
      color: false,
   },
   {
      name: "headset off",
      keywords: "headset off headset headphones earphones audio sound headset icon music listen earbuds headset device",
      icon: "ede3",
      color: false,
   },
   {
      name: "adjust2",
      keywords: "adjust adjustment settings customize config tweak calibrate fine tune adjust icon settings icon",
      icon: "ede4",
      color: false,
   },
   {
      name: "assistant",
      keywords: "assistant helper aid assistant icon assistant tool support guide assistant device assistant app personal assistant",
      icon: "ede5",
      color: false,
   },
   {
      name: "audiotrack",
      keywords: "audiotrack audio track sound music audiotrack icon music track audio track sound track music icon",
      icon: "ede6",
      color: false,
   },
   {
      name: "blur circular",
      keywords: "blur circular blur circular effect blurred blurry focus circular blur blur effect blur circle",
      icon: "ede7",
      color: false,
   },
   {
      name: "blur linear",
      keywords: "blur linear blur linear effect blurred blurry focus linear blur blur effect linear effect",
      icon: "ede8",
      color: false,
   },
   {
      name: "blur off",
      keywords: "blur off blur off disable clear focus blurry blur off icon blur removed no blur",
      icon: "ede9",
      color: false,
   },
   {
      name: "blur on",
      keywords: "blur on blur on enable focus blurred blurry blur on icon apply blur turn on blur",
      icon: "edea",
      color: false,
   },
   {
      name: "brightness 1",
      keywords: "brightness 1 brightness level brightness icon light dim dark brightness level light level brightness setting",
      icon: "edeb",
      color: false,
   },
   {
      name: "brightness 2",
      keywords: "brightness 2 brightness level brightness icon light dim dark brightness level light level brightness setting",
      icon: "edec",
      color: false,
   },
   {
      name: "brightness 3",
      keywords: "brightness 3 brightness level brightness icon light dim dark brightness level light level brightness setting",
      icon: "eded",
      color: false,
   },
   {
      name: "brightness 4",
      keywords: "brightness 4 brightness level brightness icon light dim dark brightness level light level brightness setting",
      icon: "edee",
      color: false,
   },
   {
      name: "broken image",
      keywords: "broken image image photo picture photograph broken error missing corrupted image icon",
      icon: "edef",
      color: false,
   },
   {
      name: "brush1",
      keywords: "brush1 brush paint painting art drawing design tool brush icon paintbrush",
      icon: "edf0",
      color: false,
   },
   {
      name: "camera3",
      keywords: "camera3 camera photography photo picture capture shoot snapshot camera icon photograph",
      icon: "edf1",
      color: false,
   },
   {
      name: "camera alt",
      keywords: "camera alt camera alternative photography photo picture capture shoot snapshot alternative camera",
      icon: "edf2",
      color: false,
   },
   {
      name: "camera front",
      keywords: "camera front camera front photography photo picture capture shoot snapshot front camera",
      icon: "edf3",
      color: false,
   },
   {
      name: "camera rear",
      keywords: "camera rear camera rear photography photo picture capture shoot snapshot rear camera",
      icon: "edf4",
      color: false,
   },
   {
      name: "camera roll",
      keywords: "camera roll camera roll photography photo picture capture shoot snapshot camera reel",
      icon: "edf5",
      color: false,
   },
   {
      name: "center focus strong",
      keywords: "center focus strong center focus focus centered strong photography photo picture camera focus point",
      icon: "edf6",
      color: false,
   },
   {
      name: "center focus weak",
      keywords: "center focus weak center focus focus centered weak photography photo picture camera focus point",
      icon: "edf7",
      color: false,
   },
   {
      name: "collections",
      keywords: "collections collection group set gather aggregate assortment accumulation collection icon collectibles",
      icon: "edf8",
      color: false,
   },
   {
      name: "color lens",
      keywords: "color lens color lens photography photo picture capture shoot snapshot colorful lens",
      icon: "edf9",
      color: false,
   },
   {
      name: "colorize",
      keywords: "colorize color add color hue tint shade paint edit colorize icon color adjustment",
      icon: "edfa",
      color: false,
   },
   {
      name: "compare",
      keywords: "compare comparison contrast analyze evaluate difference similarities comparison icon evaluate compare icon",
      icon: "edfb",
      color: false,
   },
   {
      name: "control point duplicate",
      keywords: "control point duplicate control point duplicate copy clone repeat replicate control point icon duplicate control point copy point",
      icon: "edfc",
      color: false,
   },
   {
      name: "crop 16 9",
      keywords: "crop 16 9 crop 16:9 aspect ratio resize edit crop tool crop 16:9 16:9 crop widescreen crop",
      icon: "edfd",
      color: false,
   },
   {
      name: "crop 3 2",
      keywords: "crop 3 2 crop 3:2 aspect ratio resize edit crop tool crop 3:2 3:2 crop photo crop",
      icon: "edfe",
      color: false,
   },
   {
      name: "crop2",
      keywords: "crop2 crop resize edit cut adjust crop tool crop image crop icon crop option",
      icon: "edff",
      color: false,
   },
   {
      name: "crop 5 4",
      keywords: "crop 5 4 crop 5:4 aspect ratio resize edit crop tool crop 5:4 5:4 crop portrait crop",
      icon: "ee00",
      color: false,
   },
   {
      name: "crop 7 5",
      keywords: "crop 7 5 crop 7:5 aspect ratio resize edit crop tool crop 7:5 7:5 crop photo crop",
      icon: "ee01",
      color: false,
   },
   {
      name: "crop din",
      keywords: "crop din crop din resize edit crop tool din crop standard crop crop icon din size",
      icon: "ee02",
      color: false,
   },
   {
      name: "crop free",
      keywords: "crop free crop free resize edit crop tool freeform crop adjustable crop crop icon free crop",
      icon: "ee03",
      color: false,
   },
   {
      name: "crop original",
      keywords: "crop original crop original resize edit crop tool original crop actual size crop crop icon unchanged crop",
      icon: "ee04",
      color: false,
   },
   {
      name: "crop portrait",
      keywords: "crop portrait crop portrait resize edit crop tool portrait crop vertical crop crop icon portrait orientation",
      icon: "ee05",
      color: false,
   },
   {
      name: "crop square",
      keywords: "crop square crop square resize edit crop tool square crop equal size crop crop icon square shape",
      icon: "ee06",
      color: false,
   },
   {
      name: "dehaze",
      keywords: "dehaze dehaze haze clear remove visibility atmosphere environment dehaze icon clear sky",
      icon: "ee07",
      color: false,
   },
   {
      name: "details",
      keywords: "details details information specifics particulars details icon more info details view additional details expanded view",
      icon: "ee08",
      color: false,
   },
   {
      name: "exposure",
      keywords: "exposure brightness lighting photography camera exposure adjustment image exposure photo exposure exposure control brightness adjustment",
      icon: "ee09",
      color: false,
   },
   {
      name: "exposure neg 1",
      keywords: "exposure negative 1 exposure  1 brightness  1 reduce exposure decrease brightness lower exposure exposure adjustment brightness adjustment negative exposure exposure level  1",
      icon: "ee0a",
      color: false,
   },
   {
      name: "exposure neg 2",
      keywords: "exposure negative 2 exposure  2 brightness  2 reduce exposure decrease brightness lower exposure exposure adjustment brightness adjustment negative exposure exposure level  2",
      icon: "ee0b",
      color: false,
   },
   {
      name: "exposure plus 1",
      keywords: "exposure plus 1 exposure +1 brightness +1 increase exposure add brightness raise exposure exposure adjustment brightness adjustment positive exposure exposure level +1",
      icon: "ee0c",
      color: false,
   },
   {
      name: "exposure plus 2",
      keywords: "exposure plus 2 exposure +2 brightness +2 increase exposure add brightness raise exposure exposure adjustment brightness adjustment positive exposure exposure level +2",
      icon: "ee0d",
      color: false,
   },
   {
      name: "exposure zero",
      keywords: "exposure zero exposure 0 brightness 0 neutral exposure default exposure no adjustment zero exposure exposure level 0 neutral brightness no brightness adjustment",
      icon: "ee0e",
      color: false,
   },
   {
      name: "filter 1",
      keywords: "filter 1 effect 1 photo filter 1 image filter 1 artistic filter filter style 1 filter effect 1 photo effect 1 image effect 1 visual filter",
      icon: "ee0f",
      color: false,
   },
   {
      name: "filter 2",
      keywords: "filter 2 effect 2 photo filter 2 image filter 2 artistic filter filter style 2 filter effect 2 photo effect 2 image effect 2 visual filter",
      icon: "ee10",
      color: false,
   },
   {
      name: "filter 3",
      keywords: "filter 3 effect 3 photo filter 3 image filter 3 artistic filter filter style 3 filter effect 3 photo effect 3 image effect 3 visual filter",
      icon: "ee11",
      color: false,
   },
   {
      name: "filter2",
      keywords: "filter 4 effect 4 photo filter 4 image filter 4 artistic filter filter style 4 filter effect 4 photo effect 4 image effect 4 visual filter",
      icon: "ee12",
      color: false,
   },
   {
      name: "filter 4",
      keywords: "filter 4 effect 4 photo filter 4 image filter 4 artistic filter filter style 4 filter effect 4 photo effect 4 image effect 4 visual filter",
      icon: "ee13",
      color: false,
   },
   {
      name: "filter 5",
      keywords: "filter 5 effect 5 photo filter 5 image filter 5 artistic filter filter style 5 filter effect 5 photo effect 5 image effect 5 visual filter",
      icon: "ee14",
      color: false,
   },
   {
      name: "filter 6",
      keywords: "filter 6 filter six adjust select sort options filter options filter icon six filters",
      icon: "ee15",
      color: false,
   },
   {
      name: "filter 7",
      keywords: "filter 7 effect 7 photo filter 7 image filter 7 artistic filter filter style 7 filter effect 7 photo effect 7 image effect 7 visual filter",
      icon: "ee16",
      color: false,
   },
   {
      name: "filter 8",
      keywords: "filter 8 effect 8 photo filter 8 image filter 8 artistic filter filter style 8 filter effect 8 photo effect 8 image effect 8 visual filter",
      icon: "ee17",
      color: false,
   },
   {
      name: "filter 9",
      keywords: "filter 9 effect 9 photo filter 9 image filter 9 artistic filter filter style 9 filter effect 9 photo effect 9 image effect 9 visual filter",
      icon: "ee18",
      color: false,
   },
   {
      name: "filter 9 plus",
      keywords: "filter 9 plus effect 9 plus photo filter 9 plus image filter 9 plus artistic filter filter style 9 plus filter effect 9 plus photo effect 9 plus image effect 9 plus visual filter",
      icon: "ee19",
      color: false,
   },
   {
      name: "filter b and w",
      keywords: "filter black and white black and white monochrome filter grayscale filter b&w filter black and white effect monochrome effect grayscale effect b&w effect black and white style",
      icon: "ee1a",
      color: false,
   },
   {
      name: "filter center focus",
      keywords: "filter center focus focus filter center focus blur filter focus effect focus style center focus effect blur effect blurry style focused filter",
      icon: "ee1b",
      color: false,
   },
   {
      name: "filter drama",
      keywords: "filter drama drama filter dramatic filter intense filter emotional filter drama effect dramatic effect intense effect emotional effect dramatic style",
      icon: "ee1c",
      color: false,
   },
   {
      name: "filter frames",
      keywords: "filter frames frames filter photo frames image frames frame effect picture frames frame style photo framing image framing picture framing",
      icon: "ee1d",
      color: false,
   },
   {
      name: "filter hdr",
      keywords: "filter hdr hdr filter high dynamic range filter hdr effect high dynamic range effect hdr style high dynamic range style hdr photography hdr processing hdr look",
      icon: "ee1e",
      color: false,
   },
   {
      name: "filter none",
      keywords: "filter none no filter clear filter remove filter unfiltered neutral filter no effect plain filter off no style",
      icon: "ee1f",
      color: false,
   },
   {
      name: "filter tilt shift",
      keywords: "filter tilt shift tilt shift filter perspective filter miniature filter tilt shift effect perspective effect miniature effect tilt shift style perspective style miniature style",
      icon: "ee20",
      color: false,
   },
   {
      name: "filter vintage",
      keywords: "filter vintage vintage filter retro filter classic filter old fashioned filter vintage effect retro effect classic effect old fashioned effect vintage style",
      icon: "ee21",
      color: false,
   },
   {
      name: "flare",
      keywords: "flare light flare sun flare flare effect sunlight effect brightness effect glare shine glow flare icon",
      icon: "ee22",
      color: false,
   },
   {
      name: "flash auto",
      keywords: "flash auto auto flash automatic flash camera flash flash mode auto auto flash mode flash setting auto flash setting automatic flash mode auto flash icon",
      icon: "ee23",
      color: false,
   },
   {
      name: "flash off",
      keywords: "flash off no flash turn off flash flash disabled flash mode off no flash mode flash setting off turn off flash icon no flash icon flash off mode",
      icon: "ee24",
      color: false,
   },
   {
      name: "flash on",
      keywords: "flash on turn on flash activate flash camera flash flash mode on on flash mode flash setting on turn on flash icon flash activated flash on mode",
      icon: "ee25",
      color: false,
   },
   {
      name: "flip",
      keywords: "flip mirror rotate turn flip image mirror image rotate image flip icon mirror icon rotate icon",
      icon: "ee26",
      color: false,
   },
   {
      name: "gradient",
      keywords: "gradient color gradient color transition gradient effect color blend gradient style gradient design color gradient icon color transition effect color blend effect",
      icon: "ee27",
      color: false,
   },
   {
      name: "grain",
      keywords: "grain texture noise grainy textured noisy grain effect texture effect noise effect grainy effect",
      icon: "ee28",
      color: false,
   },
   {
      name: "grid off",
      keywords: "grid off no grid remove grid turn off grid grid disabled grid setting off grid mode off no grid icon grid off mode disable grid",
      icon: "ee29",
      color: false,
   },
   {
      name: "grid on",
      keywords: "grid on turn on grid activate grid enable grid grid mode on grid setting on grid activated grid on mode show grid display grid",
      icon: "ee2a",
      color: false,
   },
   {
      name: "hdr off",
      keywords: "hdr off no hdr turn off hdr hdr disabled hdr mode off no hdr mode hdr setting off hdr off mode disable hdr no hdr icon",
      icon: "ee2b",
      color: false,
   },
   {
      name: "hdr on",
      keywords: "hdr on turn on hdr activate hdr enable hdr hdr mode on hdr setting on hdr activated hdr on mode use hdr hdr enabled",
      icon: "ee2c",
      color: false,
   },
   {
      name: "hdr strong",
      keywords: "hdr strong strong hdr intense hdr powerful hdr vivid hdr hdr effect strong hdr style strong high hdr hdr strong mode bold hdr",
      icon: "ee2d",
      color: false,
   },
   {
      name: "hdr weak",
      keywords: "hdr weak weak hdr mild hdr subtle hdr soft hdr hdr effect weak hdr style weak low hdr hdr weak mode gentle hdr",
      icon: "ee2e",
      color: false,
   },
   {
      name: "healing",
      keywords: "healing photo healing image healing restore repair fix healing effect photo repair image restoration healing tool",
      icon: "ee2f",
      color: false,
   },
   {
      name: "image aspect ratio",
      keywords: "image aspect ratio aspect ratio photo aspect ratio image ratio picture ratio image proportions photo proportions aspect ratio setting image aspect picture aspect",
      icon: "ee30",
      color: false,
   },
   {
      name: "iso",
      keywords: "iso sensitivity iso setting camera iso iso level light sensitivity iso speed iso adjustment sensitivity setting camera sensitivity",
      icon: "ee31",
      color: false,
   },
   {
      name: "leak add",
      keywords: "leak add add light leak add leak effect light leak leakage light effect add glow add brightness light leak effect light leak addition",
      icon: "ee32",
      color: false,
   },
   {
      name: "leak remove",
      keywords: "leak remove remove light leak remove leak effect fix light leak repair light leak remove leakage remove light effect remove glow remove brightness remove light leak effect",
      icon: "ee33",
      color: false,
   },
   {
      name: "lens",
      keywords: "lens camera lens lens icon camera lens icon camera equipment photography equipment lens tool photography lens camera part photography gear",
      icon: "ee34",
      color: false,
   },
   {
      name: "looks 3",
      keywords: "looks 3 photo looks 3 image looks 3 visual style 3 photo style 3 image style 3 looks effect 3 photo effect 3 image effect 3 looks style 3",
      icon: "ee35",
      color: false,
   },
   {
      name: "looks",
      keywords: "looks photo looks image looks visual style photo style image style looks effect photo effect image effect looks style",
      icon: "ee36",
      color: false,
   },
   {
      name: "looks 4",
      keywords: "looks 4 photo looks 4 image looks 4 visual style 4 photo style 4 image style 4 looks effect 4 photo effect 4 image effect 4 looks style 4",
      icon: "ee37",
      color: false,
   },
   {
      name: "looks 5",
      keywords: "looks 5 photo looks 5 image looks 5 visual style 5 photo style 5 image style 5 looks effect 5 photo effect 5 image effect 5 looks style 5",
      icon: "ee38",
      color: false,
   },
   {
      name: "looks 6",
      keywords: "looks 6 photo looks 6 image looks 6 visual style 6 photo style 6 image style 6 looks effect 6 photo effect 6 image effect 6 looks style 6",
      icon: "ee39",
      color: false,
   },
   {
      name: "looks one",
      keywords: "looks one photo looks one image looks one visual style one photo style one image style one looks effect one photo effect one image effect one looks style one",
      icon: "ee3a",
      color: false,
   },
   {
      name: "looks two",
      keywords: "looks two photo looks two image looks two visual style two photo style two image style two looks effect two photo effect two image effect two looks style two",
      icon: "ee3b",
      color: false,
   },
   {
      name: "loupe",
      keywords: "loupe magnifying glass zoom magnifier lens search inspection magnify zoom tool magnifying tool",
      icon: "ee3c",
      color: false,
   },
   {
      name: "monochrome photos",
      keywords: "monochrome photos black and white photos grayscale photos monochrome images black and white images grayscale images monochrome photography black and white photography grayscale photography monochrome style",
      icon: "ee3d",
      color: false,
   },
   {
      name: "music note",
      keywords: "music note note music musical note sound music symbol note symbol music icon note icon audio",
      icon: "ee3e",
      color: false,
   },
   {
      name: "nature",
      keywords: "nature natural environment landscape outdoors scenery wildlife nature icon environmental nature scene",
      icon: "ee3f",
      color: false,
   },
   {
      name: "nature people",
      keywords: "nature people people in nature outdoor activity nature lovers nature and people people outdoors nature experience outdoor life nature exploration nature connection",
      icon: "ee40",
      color: false,
   },
   {
      name: "navigate before",
      keywords: "navigate before go back previous backward left arrow previous step navigate back navigate previous backward arrow navigate before icon",
      icon: "ee41",
      color: false,
   },
   {
      name: "navigate next",
      keywords: "navigate next go forward next forward right arrow next step navigate forward navigate next forward arrow navigate next icon",
      icon: "ee42",
      color: false,
   },
   {
      name: "panorama",
      keywords: "panorama panoramic panoramic view panoramic image panorama photo panorama mode panorama shot wide view panorama icon panoramic scene",
      icon: "ee43",
      color: false,
   },
   {
      name: "panorama fisheye",
      keywords: "panorama fisheye fisheye panorama fisheye view fisheye image fisheye photo fisheye mode fisheye shot wide fisheye panorama fisheye icon fisheye scene",
      icon: "ee44",
      color: false,
   },
   {
      name: "panorama horizontal",
      keywords: "panorama horizontal horizontal panorama horizontal view horizontal image horizontal photo horizontal mode horizontal shot wide horizontal panorama horizontal icon horizontal scene",
      icon: "ee45",
      color: false,
   },
   {
      name: "panorama vertical",
      keywords: "panorama vertical vertical panorama vertical view vertical image vertical photo vertical mode vertical shot wide vertical panorama vertical icon vertical scene",
      icon: "ee46",
      color: false,
   },
   {
      name: "panorama wide angle",
      keywords: "panorama wide angle wide angle panorama wide angle view wide angle image wide angle photo wide angle mode wide angle shot wide view angle panorama wide angle icon wide angle scene",
      icon: "ee47",
      color: false,
   },
   {
      name: "photo album",
      keywords: "photo album album picture album photo collection image album album icon picture album icon photo collection icon image album icon gallery",
      icon: "ee48",
      color: false,
   },
   {
      name: "picture as pdf",
      keywords: "picture as pdf image as pdf convert to pdf image to pdf photo to pdf picture to pdf pdf conversion pdf document pdf format pdf file",
      icon: "ee49",
      color: false,
   },
   {
      name: "portrait",
      keywords: "portrait portrait mode portrait photography portrait shot portrait style portrait photo portrait icon portrait image portrait view portrait orientation",
      icon: "ee4a",
      color: false,
   },
   {
      name: "remove red eye",
      keywords: "remove red eye red eye removal eye correction redeye removal red eye fix redeye fix red eye reduction redeye reduction remove red eye effect redeye removal tool",
      icon: "ee4b",
      color: false,
   },
   {
      name: "rotate 90 degrees ccw",
      keywords: "rotate 90 degrees ccw rotate counterclockwise rotate left rotate 90 degrees left rotate left icon rotate counterclockwise icon rotate anti clockwise rotate leftward rotate 90° left rotate ccw",
      icon: "ee4c",
      color: false,
   },
   {
      name: "rotate left",
      keywords: "rotate left rotate counterclockwise undo rotate turn left rotate left icon rotate left symbol rotate counterclockwise icon undo rotation counter rotate",
      icon: "ee4d",
      color: false,
   },
   {
      name: "rotate right",
      keywords: "rotate right rotate right turn spin revolve rotate clockwise right rotation rotate right icon rotate icon",
      icon: "ee4e",
      color: false,
   },
   {
      name: "slideshow",
      keywords: "slideshow image slideshow photo slideshow picture slideshow image presentation photo presentation slideshow mode slideshow icon picture presentation image display",
      icon: "ee4f",
      color: false,
   },
   {
      name: "straighten",
      keywords: "straighten straighten image level straighten photo align correct straighten tool leveling straighten icon alignment",
      icon: "ee50",
      color: false,
   },
   {
      name: "style",
      keywords: "style styling fashion design trend look fashion style design style visual style image style",
      icon: "ee51",
      color: false,
   },
   {
      name: "switch camera",
      keywords: "switch camera change camera toggle camera switch front and back camera flip camera swap camera camera switch camera toggle camera rotation camera exchange",
      icon: "ee52",
      color: false,
   },
   {
      name: "switch video",
      keywords: "switch video change video toggle video video switch video toggle video rotation video exchange switch camera mode toggle camera mode video camera switch",
      icon: "ee53",
      color: false,
   },
   {
      name: "texture",
      keywords: "texture textured pattern surface grain material textural texture effect texture style textured icon",
      icon: "ee54",
      color: false,
   },
   {
      name: "timelapse",
      keywords: "timelapse time lapse time lapse timelapse photography time lapse video fast forward accelerated timelapse mode time lapse mode timelapse icon",
      icon: "ee55",
      color: false,
   },
   {
      name: "timer 10",
      keywords: "timer 10 10 seconds countdown 10 10 second timer 10 sec timer 10s countdown 10 seconds remaining 10 sec countdown timer countdown 10 10 seconds left",
      icon: "ee56",
      color: false,
   },
   {
      name: "timer 3",
      keywords: "timer 3 3 seconds countdown 3 3 second timer 3 sec timer 3s countdown 3 seconds remaining 3 sec countdown timer countdown 3 3 seconds left",
      icon: "ee57",
      color: false,
   },
   {
      name: "timer",
      keywords: "timer time countdown clock stopwatch timer tool countdown tool time tool clock tool timing",
      icon: "ee58",
      color: false,
   },
   {
      name: "timer off",
      keywords: "timer off stop timer end timer cancel timer timer stopped timer turned off timer disabled timer pause timer off icon stopwatch off",
      icon: "ee59",
      color: false,
   },
   {
      name: "tonality",
      keywords: "tonality tone color tone shade tint hue brightness contrast color adjustment image tone",
      icon: "ee5a",
      color: false,
   },
   {
      name: "transform",
      keywords: "transform change modify alter edit adjust transform image change photo modify picture edit image",
      icon: "ee5b",
      color: false,
   },
   {
      name: "tune",
      keywords: "tune adjust fine tune fine tuning tuning music audio sound sound adjustment audio adjustment",
      icon: "ee5c",
      color: false,
   },
   {
      name: "view comfy",
      keywords: "view comfy comfort view cozy view relaxing view comfortable view comfy mode comfortable mode cozy mode relaxing mode user friendly view",
      icon: "ee5d",
      color: false,
   },
   {
      name: "view compact",
      keywords: "view compact compact view condensed view compressed view compact mode condensed mode compressed mode compact display condensed display compressed display",
      icon: "ee5e",
      color: false,
   },
   {
      name: "wb auto",
      keywords: "wb auto auto white balance automatic white balance white balance auto auto wb automatic wb wb setting auto auto white balance setting auto white balance mode automatic white balance mode",
      icon: "ee5f",
      color: false,
   },
   {
      name: "wb cloudy",
      keywords: "wb cloudy cloudy white balance cloudy conditions cloudy wb cloudy white balance mode wb setting cloudy cloudy white balance setting cloudy white balance adjustment cloudy mode overcast conditions",
      icon: "ee60",
      color: false,
   },
   {
      name: "wb incandescent",
      keywords: "wb incandescent incandescent white balance incandescent lighting incandescent wb incandescent white balance mode wb setting incandescent incandescent white balance setting incandescent light conditions warm lighting tungsten lighting",
      icon: "ee61",
      color: false,
   },
   {
      name: "wb sunny",
      keywords: "wb sunny sunny white balance sunny conditions sunny wb sunny white balance mode wb setting sunny sunny white balance setting sunny white balance adjustment sunny mode sunlight conditions",
      icon: "ee62",
      color: false,
   },
   {
      name: "collections bookmark",
      keywords: "collections bookmark bookmark collection saved collections collection folder bookmarked collections saved items bookmark icon collection folder icon saved folder saved collection",
      icon: "ee63",
      color: false,
   },
   {
      name: "photo size select actual",
      keywords: "photo size select actual actual size original size photo size image size picture size real size photo size adjustment image size adjustment actual size icon",
      icon: "ee64",
      color: false,
   },
   {
      name: "photo size select large",
      keywords: "photo size select large large size big size photo size image size picture size large image large photo large size icon big size icon",
      icon: "ee65",
      color: false,
   },
   {
      name: "photo size select small",
      keywords: "photo size select small small size mini size photo size image size picture size small image small photo small size icon mini size icon",
      icon: "ee66",
      color: false,
   },
   {
      name: "vignette",
      keywords: "vignette vignetting fade border vintage gradient blur vignette effect vignette style vignette icon",
      icon: "ee67",
      color: false,
   },
   {
      name: "wb iridescent",
      keywords: "wb iridescent iridescent white balance iridescent lighting iridescent wb iridescent white balance mode wb setting iridescent iridescent white balance setting iridescent light conditions rainbow effect pearlescent lighting",
      icon: "ee68",
      color: false,
   },
   {
      name: "crop rotate",
      keywords: "crop rotate rotate crop rotate and crop crop and rotate adjust angle rotation angle adjustment rotate tool crop tool rotate and crop icon",
      icon: "ee69",
      color: false,
   },
   {
      name: "linked camera",
      keywords: "linked camera connected camera camera link link camera linked devices camera connection camera pairing connected devices linked camera icon camera linking",
      icon: "ee6a",
      color: false,
   },
   {
      name: "add a photo",
      keywords: "add a photo add photo add picture insert photo upload photo attach photo photo attachment photo addition add a photo icon upload picture",
      icon: "ee6b",
      color: false,
   },
   {
      name: "movie filter",
      keywords: "movie filter film filter cinema filter movie effect film effect cinematic filter movie style film style cinematic style cinematic look",
      icon: "ee6c",
      color: false,
   },
   {
      name: "photo filter",
      keywords: "photo filter image filter picture filter photographic filter filter effect photo effect image effect picture effect filter style photo styling",
      icon: "ee6d",
      color: false,
   },
   {
      name: "burst mode",
      keywords: "burst mode rapid capture continuous shooting fast capture photo burst rapid fire camera burst multiple shots rapid mode quick capture",
      icon: "ee6e",
      color: false,
   },
   {
      name: "shutter speed",
      keywords: "shutter speed exposure time camera settings photography aperture camera controls shutter time capture speed shutter setting shutter duration",
      icon: "ee6f",
      color: false,
   },
   {
      name: "add photo alternate",
      keywords: "add photo alternate add photo alternate photo add image add picture add media insert photo add alternate image add alternate picture insert alternate photo",
      icon: "ee70",
      color: false,
   },
   {
      name: "image search",
      keywords: "image search search image find image picture search image lookup visual search photo search search by image image discovery reverse image search",
      icon: "ee71",
      color: false,
   },
   {
      name: "music off",
      keywords: "music off sound off mute no music audio off silence quiet music muted turn off music mute sound",
      icon: "ee72",
      color: false,
   },
   {
      name: "beenhere",
      keywords: "beenhere visited location visited check in place visited travel marked location visited icon check in been here",
      icon: "ee73",
      color: false,
   },
   {
      name: "directions",
      keywords: "directions navigation route guidance travel directional wayfinding map path guide",
      icon: "ee74",
      color: false,
   },
   {
      name: "directions bike",
      keywords: "directions bike bike directions cycling route biking directions bicycle navigation bike path cycling route bike directions biking route cycle navigation",
      icon: "ee75",
      color: false,
   },
   {
      name: "directions bus",
      keywords: "directions bus bus directions bus route public transit bus navigation bus path public transport bus directions transit route bus travel",
      icon: "ee76",
      color: false,
   },
   {
      name: "directions car",
      keywords: "directions car car directions driving route car navigation driving directions auto route vehicle navigation car path drive directions automobile route",
      icon: "ee77",
      color: false,
   },
   {
      name: "directions ferry",
      keywords: "directions ferry ferry directions boat route ferry route waterway navigation ferry navigation marine route boat directions ship route ferry path",
      icon: "ee78",
      color: false,
   },
   {
      name: "directions subway",
      keywords: "directions subway subway directions metro route subway route train navigation metro navigation rail route subway travel train directions underground route",
      icon: "ee79",
      color: false,
   },
   {
      name: "directions train",
      keywords: "directions train train directions railway route train route rail navigation train navigation locomotive route railroad travel train travel railroad route",
      icon: "ee7a",
      color: false,
   },
   {
      name: "directions walk",
      keywords: "directions walk walk directions walking route pedestrian navigation footpath navigation walk path walkway route on foot navigation walking travel pedestrian route",
      icon: "ee7b",
      color: false,
   },
   {
      name: "hotel1",
      keywords: "hotel accommodation lodging inn motel stay lodgings hospitality guesthouse hostel",
      icon: "ee7c",
      color: false,
   },
   {
      name: "layers1",
      keywords: "layers layered layering stacked stacking stratified tiered multilayered layered icon layers stack",
      icon: "ee7d",
      color: false,
   },
   {
      name: "layers clear",
      keywords: "layers clear clear layers remove layers delete layers erase layers clear stack layers reset layers cleaned clean up layers clear layer stack",
      icon: "ee7e",
      color: false,
   },
   {
      name: "local atm",
      keywords: "local atm atm cash machine automated teller bank machine cash dispenser atm icon cash point money machine teller machine",
      icon: "ee7f",
      color: false,
   },
   {
      name: "local attraction",
      keywords: "local attraction attraction tourist spot landmark point of interest sightseeing place of interest local landmark attraction icon tourist attraction",
      icon: "ee80",
      color: false,
   },
   {
      name: "local bar",
      keywords: "local bar bar pub tavern drinkery watering hole local pub nightclub bar icon drinking spot",
      icon: "ee81",
      color: false,
   },
   {
      name: "local cafe",
      keywords: "local cafe cafe coffee shop coffeehouse bistro cafeteria espresso bar local coffee shop cafe icon tea house",
      icon: "ee82",
      color: false,
   },
   {
      name: "local car wash",
      keywords: "local car wash car wash automobile wash vehicle wash auto wash car cleaning car wash facility car cleaning service car wash icon car cleaning station",
      icon: "ee83",
      color: false,
   },
   {
      name: "local convenience store",
      keywords: "local convenience store convenience store corner store corner shop mini market neighborhood store local shop convenience shop convenience store icon local market",
      icon: "ee84",
      color: false,
   },
   {
      name: "local drink",
      keywords: "local drink drink beverage liquor cocktail mixed drink alcohol local beverage local drink icon beverage icon",
      icon: "ee85",
      color: false,
   },
   {
      name: "local florist",
      keywords: "local florist florist flower shop flower store floral boutique flower market floral shop local flower shop florist icon flower vendor",
      icon: "ee86",
      color: false,
   },
   {
      name: "local gas station",
      keywords: "local gas station gas station petrol station filling station service station fuel station gas pump local fuel station gas station icon petrol pump",
      icon: "ee87",
      color: false,
   },
   {
      name: "local grocery store",
      keywords: "local grocery store grocery store supermarket market food store corner market local market local supermarket grocery icon market icon",
      icon: "ee88",
      color: false,
   },
   {
      name: "local hospital",
      keywords: "local hospital hospital medical center clinic health center emergency room medical facility local medical center hospital icon medical center icon",
      icon: "ee89",
      color: false,
   },
   {
      name: "local laundry service",
      keywords: "local laundry service laundry service laundromat dry cleaner clothes washing washing service cleaning service laundry icon washing machine dry cleaning",
      icon: "ee8a",
      color: false,
   },
   {
      name: "local library",
      keywords: "local library library bookstore reading room bookshop public library community library local bookshop library icon bookstore icon",
      icon: "ee8b",
      color: false,
   },
   {
      name: "local mall",
      keywords: "local mall mall shopping center shopping mall shopping plaza shopping complex retail center local shopping mall mall icon shopping mall icon",
      icon: "ee8c",
      color: false,
   },
   {
      name: "local movies",
      keywords: "local movies movies cinema movie theater film movie house cinematic local cinema movies icon cinema icon",
      icon: "ee8d",
      color: false,
   },
   {
      name: "local offer",
      keywords: "local offer offer discount deal special offer promotion sale discounted local discount offer icon",
      icon: "ee8e",
      color: false,
   },
   {
      name: "local parking",
      keywords: "local parking parking parking lot car park parking garage parking facility parking area local car park parking icon car park icon",
      icon: "ee8f",
      color: false,
   },
   {
      name: "local pharmacy",
      keywords: "local pharmacy pharmacy drugstore chemist apothecary drugstore medication store local drugstore pharmacy icon drugstore icon",
      icon: "ee90",
      color: false,
   },
   {
      name: "local pizza",
      keywords: "local pizza pizza pizzeria pizza shop pizza parlor pizza place pizza restaurant local pizza shop pizza icon pizzeria icon",
      icon: "ee91",
      color: false,
   },
   {
      name: "local printshop",
      keywords: "local printshop print shop print store copy shop printing service print center printery local printing shop printshop icon copy shop icon",
      icon: "ee92",
      color: false,
   },
   {
      name: "local restaurant",
      keywords: "local restaurant restaurant dining eatery bistro cafe diner local dining restaurant icon eatery icon",
      icon: "ee93",
      color: false,
   },
   {
      name: "local shipping",
      keywords: "local shipping shipping delivery parcel service courier service shipping service mail delivery local delivery shipping icon parcel icon",
      icon: "ee94",
      color: false,
   },
   {
      name: "local taxi",
      keywords: "local taxi taxi cab taxicab car service ride service taxi cab local cab taxi icon cab icon",
      icon: "ee95",
      color: false,
   },
   {
      name: "location history",
      keywords: "location history history location track travel history location log movement history location tracking location trail history icon",
      icon: "ee96",
      color: false,
   },
   {
      name: "map4",
      keywords: "map navigation cartography geography map icon route atlas map view map tool map app",
      icon: "ee97",
      color: false,
   },
   {
      name: "navigation",
      keywords: "navigation directions route guidance travel wayfinding map navigation icon navigation system navigator",
      icon: "ee98",
      color: false,
   },
   {
      name: "pin drop",
      keywords: "pin drop location pin map pin marker drop pin place marker pin location location marker pinpoint drop marker",
      icon: "ee99",
      color: false,
   },
   {
      name: "rate review",
      keywords: "rate review rate review rating feedback evaluation assessment critique opinion rate and review",
      icon: "ee9a",
      color: false,
   },
   {
      name: "satellite",
      keywords: "satellite satellite view aerial view satellite image orbit space satellite icon satellite picture satellite imagery satellite photo",
      icon: "ee9b",
      color: false,
   },
   {
      name: "store mall directory",
      keywords: "store mall directory mall directory shopping mall directory store map mall map shopping directory store directory mall guide shopping guide store locator",
      icon: "ee9c",
      color: false,
   },
   {
      name: "traffic",
      keywords: "traffic road traffic traffic flow congestion traffic jam commute gridlock traffic icon traffic control traffic conditions",
      icon: "ee9d",
      color: false,
   },
   {
      name: "directions run",
      keywords: "directions run run directions run route jogging route jogging directions running navigation jogging path run path running route jog directions",
      icon: "ee9e",
      color: false,
   },
   {
      name: "add location",
      keywords: "add location add place add point add landmark mark location pin location add spot add site add address location icon",
      icon: "ee9f",
      color: false,
   },
   {
      name: "edit location",
      keywords: "edit location edit place edit point edit landmark modify location change location update location edit spot edit site edit address",
      icon: "eea0",
      color: false,
   },
   {
      name: "near me",
      keywords: "near me close by around me nearby close to me proximity near here find nearby find close nearby places",
      icon: "eea1",
      color: false,
   },
   {
      name: "person pin circle",
      keywords: "person pin circle location person user location pin person person icon location icon pin circle user pin person pin person location",
      icon: "eea2",
      color: false,
   },
   {
      name: "zoom out map",
      keywords: "zoom out map zoom out map zoom out reduce map shrink map minimize map zoom map out zoom out icon map scale down map zoom",
      icon: "eea3",
      color: false,
   },
   {
      name: "restaurant",
      keywords: "restaurant dining eatery bistro cafe diner eat out dining out restaurant icon eatery icon",
      icon: "eea4",
      color: false,
   },
   {
      name: "ev station",
      keywords: "ev station electric vehicle station charging station ev charging electric vehicle charging electric car station ev charger ev charging point ev station icon ev charging icon",
      icon: "eea5",
      color: false,
   },
   {
      name: "streetview",
      keywords: "streetview street view 360 view panorama 360 panorama virtual tour virtual reality streetview icon virtual tour icon panorama view",
      icon: "eea6",
      color: false,
   },
   {
      name: "subway1",
      keywords: "subway metro underground subway train subway station train public transit subway icon metro icon train icon",
      icon: "eea7",
      color: false,
   },
   {
      name: "train1",
      keywords: "train railway railroad locomotive rail transport railroad train train icon railway icon locomotive icon train station",
      icon: "eea8",
      color: false,
   },
   {
      name: "tram",
      keywords: "tram streetcar trolley light rail tramcar public transit tram icon streetcar icon trolley icon light rail icon",
      icon: "eea9",
      color: false,
   },
   {
      name: "transfer within a station",
      keywords: "transfer within a station station transfer interchange transfer station transit hub station connection transfer icon station transfer icon transit hub icon transfer station icon",
      icon: "eeaa",
      color: false,
   },
   {
      name: "atm",
      keywords: "atm cash machine automated teller bank machine cash dispenser atm icon cash point money machine teller machine atm machine",
      icon: "eeab",
      color: false,
   },
   {
      name: "category",
      keywords: "category group type class classification division category icon group icon classification icon type icon",
      icon: "eeac",
      color: false,
   },
   {
      name: "not listed location",
      keywords: "not listed location unlisted location undisclosed location hidden location mystery location unknown location secret location not listed icon undisclosed icon hidden icon",
      icon: "eead",
      color: false,
   },
   {
      name: "departure board",
      keywords: "departure board flight board departures flight departures train departures departure schedule flight schedule train schedule departures board departure board icon",
      icon: "eeae",
      color: false,
   },
   {
      name: "360",
      keywords: "360 360 degrees 360 view panorama 360 panorama 360 icon virtual reality virtual tour 360° 360 degree view",
      icon: "eeaf",
      color: false,
   },
   {
      name: "edit attributes",
      keywords: "edit attributes modify attributes change attributes edit details modify details attribute editor customize attributes edit properties attribute settings modify attributes",
      icon: "eeb0",
      color: false,
   },
   {
      name: "transit enterexit",
      keywords: "transit enterexit transit exit transit entry transit access transit gateway entry point exit point transit enterexit icon access point transit access point",
      icon: "eeb1",
      color: false,
   },
   {
      name: "fastfood",
      keywords: "fastfood fast food quick meal fast meal fast cuisine quick food fastfood icon quick meal icon fast meal icon fast cuisine icon",
      icon: "eeb2",
      color: false,
   },
   {
      name: "trip origin",
      keywords: "trip origin starting point departure beginning initial point trip start start point origin starting location trip origin icon",
      icon: "eeb3",
      color: false,
   },
   {
      name: "compass calibration",
      keywords: "compass calibration calibrate compass compass adjustment compass calibration icon compass calibration tool adjust compass compass setting compass calibrator calibration compass tool",
      icon: "eeb4",
      color: false,
   },
   {
      name: "money1",
      keywords: "money currency cash financial wealth money icon money symbol money bag money stack dollar",
      icon: "eeb5",
      color: false,
   },
   {
      name: "apps",
      keywords: "apps applications programs software apps icon mobile apps desktop apps app store app marketplace application software",
      icon: "eeb6",
      color: false,
   },
   {
      name: "arrow back",
      keywords: "arrow back back go back return back arrow previous back icon left arrow back button backward arrow",
      icon: "eeb7",
      color: false,
   },
   {
      name: "arrow drop down",
      keywords: "arrow drop down drop down downward arrow down arrow arrow down drop down menu down icon expand menu dropdown downward",
      icon: "eeb8",
      color: false,
   },
   {
      name: "arrow drop down circle",
      keywords: "arrow drop down circle drop down circle circle arrow down downward circle arrow circle down expand circle drop circle down circle circle drop down circle arrow",
      icon: "eeb9",
      color: false,
   },
   {
      name: "arrow drop up",
      keywords: "arrow drop up drop up upward arrow up arrow arrow up up icon arrow drop collapse menu expand up upward",
      icon: "eeba",
      color: false,
   },
   {
      name: "arrow forward",
      keywords: "arrow forward forward go forward next forward arrow forward icon right arrow forward button arrow right next arrow",
      icon: "eebb",
      color: false,
   },
   {
      name: "cancel",
      keywords: "cancel close dismiss terminate abort cancel icon cancel button exit stop cancel action",
      icon: "eebc",
      color: false,
   },
   {
      name: "check2",
      keywords: "check tick mark approved checked confirmed checkmark check mark tick icon checked icon",
      icon: "eebd",
      color: false,
   },
   {
      name: "expand less",
      keywords: "expand less less collapse minimize reduce narrow shrink contract expand less icon minimize icon",
      icon: "eebe",
      color: false,
   },
   {
      name: "expand more",
      keywords: "expand more more expand maximize enlarge extend widen stretch expand more icon maximize icon",
      icon: "eebf",
      color: false,
   },
   {
      name: "fullscreen",
      keywords: "fullscreen full screen expand screen maximize screen fullscreen mode fullscreen icon enlarge screen fullscreen view expand window fullscreen display",
      icon: "eec0",
      color: false,
   },
   {
      name: "fullscreen exit",
      keywords: "fullscreen exit exit fullscreen exit full screen minimize screen restore screen exit fullscreen mode close fullscreen close full screen fullscreen exit icon minimize icon",
      icon: "eec1",
      color: false,
   },
   {
      name: "menu5",
      keywords: "menu navigation menu options menu main menu menu icon hamburger menu menu button menu list menu options menu symbol",
      icon: "eec2",
      color: false,
   },
   {
      name: "keyboard control",
      keywords: "keyboard control keyboard type keyboard icon keyboard settings input control typing text input keyboard control icon keyboard layout",
      icon: "eec3",
      color: false,
   },
   {
      name: "more vert",
      keywords: "more vert more options vertical ellipsis menu dots ellipsis more menu more icon vertical menu more actions dots",
      icon: "eec4",
      color: false,
   },
   {
      name: "refresh1",
      keywords: "refresh reload refresh page refresh icon reload page update refresh button reload icon refresh symbol refresh action",
      icon: "eec5",
      color: false,
   },
   {
      name: "unfold less",
      keywords: "unfold less collapse minimize less hide fold narrow shrink contract unfold less icon",
      icon: "eec6",
      color: false,
   },
   {
      name: "unfold more",
      keywords: "unfold more expand maximize more show unfold widen stretch enlarge unfold more icon",
      icon: "eec7",
      color: false,
   },
   {
      name: "arrow upward",
      keywords: "arrow upward upward arrow up arrow arrow up up icon arrow upward icon up arrow icon expand up move up rise",
      icon: "eec8",
      color: false,
   },
   {
      name: "subdirectory arrow left",
      keywords: "subdirectory arrow left left arrow arrow left subdirectory back arrow arrow icon previous directory subdirectory arrow left icon directory arrow",
      icon: "eec9",
      color: false,
   },
   {
      name: "subdirectory arrow right",
      keywords: "subdirectory arrow right right arrow arrow right subdirectory forward arrow next directory arrow icon subdirectory arrow right icon directory arrow",
      icon: "eeca",
      color: false,
   },
   {
      name: "arrow downward",
      keywords: "arrow downward downward arrow down arrow arrow down down icon arrow downward icon down arrow icon expand down move down descend",
      icon: "eecb",
      color: false,
   },
   {
      name: "first page",
      keywords: "first page start beginning first initial first page icon first icon go to first navigate to start first page button",
      icon: "eecc",
      color: false,
   },
   {
      name: "last page",
      keywords: "last page end final last terminal last page icon last icon go to last navigate to end last page button",
      icon: "eecd",
      color: false,
   },
   {
      name: "arrow left",
      keywords: "arrow left arrow left direction pointing arrow icon back arrow left icon move left west",
      icon: "eece",
      color: false,
   },
   {
      name: "arrow right",
      keywords: "arrow right arrow right direction pointing arrow icon forward arrow right icon move right east",
      icon: "eecf",
      color: false,
   },
   {
      name: "arrow back ios",
      keywords: "arrow back ios back ios ios back ios arrow back arrow ios arrow back ios icon ios back icon ios arrow icon back ios icon previous ios",
      icon: "eed0",
      color: false,
   },
   {
      name: "arrow forward ios",
      keywords: "arrow forward ios forward ios ios forward ios arrow forward arrow ios arrow forward ios icon ios forward icon ios arrow icon forward ios icon next ios",
      icon: "eed1",
      color: false,
   },
   {
      name: "adb",
      keywords: "adb android debugging bridge debugging android development bridge connectivity programming tool adb icon",
      icon: "eed2",
      color: false,
   },
   {
      name: "disc full",
      keywords: "disc full full storage disk memory capacity space disk full full storage full icon",
      icon: "eed3",
      color: false,
   },
   {
      name: "do not disturb alt",
      keywords: "do not disturb alt do not disturb silent mode quiet mute notification silence disturbance silent mute mode quiet mode",
      icon: "eed4",
      color: false,
   },
   {
      name: "drive eta",
      keywords: "drive eta drive eta car vehicle navigation estimate time of arrival travel driving arrival time",
      icon: "eed5",
      color: false,
   },
   {
      name: "event available",
      keywords: "event available event available calendar date time schedule appointment event icon availability",
      icon: "eed6",
      color: false,
   },
   {
      name: "event busy",
      keywords: "event busy event busy calendar date time schedule appointment event icon engaged",
      icon: "eed7",
      color: false,
   },
   {
      name: "event note",
      keywords: "event note event note calendar date time schedule appointment event icon note taking",
      icon: "eed8",
      color: false,
   },
   {
      name: "folder special",
      keywords: "folder special folder special directory file storage category folder icon special folder unique folder",
      icon: "eed9",
      color: false,
   },
   {
      name: "mms",
      keywords: "mms multimedia messaging service message text sms communication chat multimedia message messaging mms icon",
      icon: "eeda",
      color: false,
   },
   {
      name: "more",
      keywords: "more menu options expand additional settings actions ellipsis more options more icon",
      icon: "eedb",
      color: false,
   },
   {
      name: "network locked",
      keywords: "network locked network locked lock secure connection restricted privacy network lock locked network",
      icon: "eedc",
      color: false,
   },
   {
      name: "phone bluetooth speaker",
      keywords: "phone bluetooth speaker phone bluetooth speaker call communication hands free phone call speakerphone bluetooth icon",
      icon: "eedd",
      color: false,
   },
   {
      name: "phone forwarded",
      keywords: "phone forwarded phone forwarded call communication transfer forwarding redirected phone call forwarded call",
      icon: "eede",
      color: false,
   },
   {
      name: "phone in talk",
      keywords: "phone in talk phone talk call communication chat conversation phone call talking call in progress",
      icon: "eedf",
      color: false,
   },
   {
      name: "phone locked",
      keywords: "phone locked phone locked lock secure privacy restricted phone lock locked phone locked device",
      icon: "eee0",
      color: false,
   },
   {
      name: "phone missed",
      keywords: "phone missed phone missed call communication phone call missed call unanswered phone icon missed call icon",
      icon: "eee1",
      color: false,
   },
   {
      name: "phone paused",
      keywords: "phone paused phone paused call communication pause hold waiting phone call paused call",
      icon: "eee2",
      color: false,
   },
   {
      name: "sim card alert",
      keywords: "sim card alert sim card alert notification warning message communication sim card icon alert icon sim alert",
      icon: "eee3",
      color: false,
   },
   {
      name: "sms failed",
      keywords: "sms failed sms message text failed error communication failed message failed sms message failed",
      icon: "eee4",
      color: false,
   },
   {
      name: "sync disabled",
      keywords: "sync disabled sync disabled syncing synchronization connection data disable sync icon disabled sync",
      icon: "eee5",
      color: false,
   },
   {
      name: "sync problem",
      keywords: "sync problem sync problem syncing synchronization connection data issue sync icon sync issue",
      icon: "eee6",
      color: false,
   },
   {
      name: "system update",
      keywords: "system update system update software firmware upgrade update available system upgrade system update icon software update",
      icon: "eee7",
      color: false,
   },
   {
      name: "tap and play",
      keywords: "tap and play tap play nfc near field communication connection device touch connect play icon",
      icon: "eee8",
      color: false,
   },
   {
      name: "vibration",
      keywords: "vibration vibrate vibrating shake buzz silent alert notification vibration mode vibration icon",
      icon: "eee9",
      color: false,
   },
   {
      name: "voice chat",
      keywords: "voice chat voice chat communication call conversation talk voice call voice messaging voice chat icon",
      icon: "eeea",
      color: false,
   },
   {
      name: "vpn lock",
      keywords: "vpn lock vpn lock security privacy secure connection virtual private network connection lock icon vpn icon",
      icon: "eeeb",
      color: false,
   },
   {
      name: "airline seat flat",
      keywords: "airline seat flat airline seat flat airplane flight travel seat flat seat airplane seat flat position",
      icon: "eeec",
      color: false,
   },
   {
      name: "airline seat flat angled",
      keywords: "airline seat flat angled airline seat flat angled airplane flight travel seat angled seat airplane seat angled position",
      icon: "eeed",
      color: false,
   },
   {
      name: "airline seat individual suite",
      keywords: "airline seat individual suite airline seat individual suite airplane flight travel seat suite first class luxury seat",
      icon: "eeee",
      color: false,
   },
   {
      name: "airline seat legroom extra",
      keywords: "airline seat legroom extra airline seat legroom extra airplane flight travel seat legroom extra legroom comfortable seat",
      icon: "eeef",
      color: false,
   },
   {
      name: "airline seat legroom normal",
      keywords: "airline seat legroom normal airline seat legroom normal airplane flight travel seat legroom normal legroom regular seat",
      icon: "eef0",
      color: false,
   },
   {
      name: "airline seat legroom reduced",
      keywords: "airline seat legroom reduced airline seat legroom reduced airplane flight travel seat legroom reduced legroom small seat",
      icon: "eef1",
      color: false,
   },
   {
      name: "airline seat recline extra",
      keywords: "airline seat recline extra airline seat recline extra airplane flight travel seat recline extra recline reclining seat",
      icon: "eef2",
      color: false,
   },
   {
      name: "airline seat recline normal",
      keywords: "airline seat recline normal airline seat recline normal airplane flight travel seat recline normal recline regular seat",
      icon: "eef3",
      color: false,
   },
   {
      name: "confirmation number",
      keywords: "confirmation number confirmation number code confirmation code ticket booking reservation reference confirmation icon",
      icon: "eef4",
      color: false,
   },
   {
      name: "live tv",
      keywords: "live tv live tv television broadcast streaming channel entertainment live stream live icon",
      icon: "eef5",
      color: false,
   },
   {
      name: "ondemand video",
      keywords: "ondemand video ondemand video streaming watch movie show demand video on demand streaming icon",
      icon: "eef6",
      color: false,
   },
   {
      name: "personal video",
      keywords: "personal video personal video camera recording home video video clip video camera personal recording personal video icon",
      icon: "eef7",
      color: false,
   },
   {
      name: "power1",
      keywords: "power power button on off turn on turn off energy shutdown start power icon",
      icon: "eef8",
      color: false,
   },
   {
      name: "wc",
      keywords: "wc bathroom restroom toilet washroom sanitary lavatory facility water closet wc icon",
      icon: "eef9",
      color: false,
   },
   {
      name: "wifi1",
      keywords: "wifi wi fi internet wireless connection network signal wi fi signal wifi icon internet connection",
      icon: "eefa",
      color: false,
   },
   {
      name: "enhanced encryption",
      keywords: "enhanced encryption enhanced encryption security lock secure connection data protection privacy enhanced security encryption icon",
      icon: "eefb",
      color: false,
   },
   {
      name: "network check",
      keywords: "network check network check connection diagnose test internet network troubleshooting network status network check icon",
      icon: "eefc",
      color: false,
   },
   {
      name: "no encryption",
      keywords: "no encryption no encryption unsecure insecure open unencrypted unprotected no security no encryption icon",
      icon: "eefd",
      color: false,
   },
   {
      name: "rv hookup",
      keywords: "rv hookup rv hookup camping connection vehicle trailer recreational vehicle campsite rv hookups",
      icon: "eefe",
      color: false,
   },
   {
      name: "do not disturb off",
      keywords: "do not disturb off do not disturb off turn off silent mode off quit disable notification silence off disturbance off do not disturb icon",
      icon: "eeff",
      color: false,
   },
   {
      name: "priority high",
      keywords: "priority high priority high importance urgent critical top priority level high priority priority icon",
      icon: "ef00",
      color: false,
   },
   {
      name: "power off",
      keywords: "power off turn off shutdown power down switch off power button off button power icon off icon shutdown icon",
      icon: "ef01",
      color: false,
   },
   {
      name: "tv off",
      keywords: "tv off tv off television shutdown turn off tv icon off screen tv power off tv off icon",
      icon: "ef02",
      color: false,
   },
   {
      name: "wifi off",
      keywords: "wifi off wifi off wi fi wireless no connection disable wifi icon no wifi wifi disabled",
      icon: "ef03",
      color: false,
   },
   {
      name: "phone callback",
      keywords: "phone callback phone callback call communication return call call back callback icon call back icon phone icon",
      icon: "ef04",
      color: false,
   },
   {
      name: "pie chart",
      keywords: "pie chart chart graph statistics data pie chart icon diagram analysis visualization pie graph",
      icon: "ef05",
      color: false,
   },
   {
      name: "pie chart outlined",
      keywords: "pie chart outlined pie chart outlined graph data statistics analysis visualization outlined pie chart",
      icon: "ef06",
      color: false,
   },
   {
      name: "bubble chart",
      keywords: "bubble chart bubble chart graph data statistics analysis visualization bubble chart icon data visualization",
      icon: "ef07",
      color: false,
   },
   {
      name: "multiline chart",
      keywords: "multiline chart multiline chart graph data statistics analysis visualization multiline chart icon data visualization",
      icon: "ef08",
      color: false,
   },
   {
      name: "show chart",
      keywords: "show chart show chart display graph data statistics analysis visualization show chart icon",
      icon: "ef09",
      color: false,
   },
   {
      name: "cake1",
      keywords: "cake celebration dessert party birthday sweet treat pastry cake icon birthday cake",
      icon: "ef0a",
      color: false,
   },
   {
      name: "group1",
      keywords: "group team people community friends collaboration members social group icon teamwork",
      icon: "ef0b",
      color: false,
   },
   {
      name: "group add",
      keywords: "group add group add add group team people community friends group icon add icon",
      icon: "ef0c",
      color: false,
   },
   {
      name: "location city",
      keywords: "location city location city urban town metropolis cityscape city icon city location cityscape icon",
      icon: "ef0d",
      color: false,
   },
   {
      name: "mood bad",
      keywords: "mood bad mood bad emotion feeling negative sad unhappy displeased bad mood",
      icon: "ef0e",
      color: false,
   },
   {
      name: "notifications",
      keywords: "notifications notification alert message warning reminder communication notifications icon notification icon alerts",
      icon: "ef0f",
      color: false,
   },
   {
      name: "notifications none",
      keywords: "notifications none notifications notification alert message warning reminder communication notifications icon notification icon",
      icon: "ef10",
      color: false,
   },
   {
      name: "notifications off",
      keywords: "notifications off notifications notification alert message warning reminder communication notifications icon notification icon",
      icon: "ef11",
      color: false,
   },
   {
      name: "notifications on",
      keywords: "notifications on notifications notification alert message warning reminder communication notifications icon notification icon",
      icon: "ef12",
      color: false,
   },
   {
      name: "notifications paused",
      keywords: "notifications paused notifications notification alert message warning reminder communication notifications icon notification icon",
      icon: "ef13",
      color: false,
   },
   {
      name: "pages",
      keywords: "pages page document file content pages icon document icon file icon page icon content icon",
      icon: "ef14",
      color: false,
   },
   {
      name: "party mode",
      keywords: "party mode party mode celebration fun entertainment music dance party icon party time",
      icon: "ef15",
      color: false,
   },
   {
      name: "people outline",
      keywords: "people outline people outline person human user profile people icon user icon person icon",
      icon: "ef16",
      color: false,
   },
   {
      name: "person",
      keywords: "person people user profile human avatar account person icon user icon profile icon",
      icon: "ef17",
      color: false,
   },
   {
      name: "person add",
      keywords: "person add people add add person user profile human avatar person icon user icon",
      icon: "ef18",
      color: false,
   },
   {
      name: "person outline",
      keywords: "person outline people outline user profile human avatar person icon user icon profile icon",
      icon: "ef19",
      color: false,
   },
   {
      name: "plus one",
      keywords: "plus one plus one add increase more extra additional add one plus one icon",
      icon: "ef1a",
      color: false,
   },
   {
      name: "public",
      keywords: "public globe world global international earth planet public icon worldwide global icon",
      icon: "ef1b",
      color: false,
   },
   {
      name: "school",
      keywords: "school education learning institution academy student class school icon education icon learning icon",
      icon: "ef1c",
      color: false,
   },
   {
      name: "share4",
      keywords: "share share icon share button share symbol social network share option sharing sharing icon share symbol",
      icon: "ef1d",
      color: false,
   },
   {
      name: "whatshot",
      keywords: "whatshot fire hot flame burning heat passion trending trending icon popular",
      icon: "ef1e",
      color: false,
   },
   {
      name: "sentiment dissatisfied",
      keywords: "sentiment dissatisfied sentiment dissatisfied unsatisfied negative displeased sad unhappy sentiment icon negative sentiment",
      icon: "ef1f",
      color: false,
   },
   {
      name: "sentiment neutral",
      keywords: "sentiment neutral sentiment neutral indifferent balanced calm neutral sentiment sentiment icon neutral emotion neutral face",
      icon: "ef20",
      color: false,
   },
   {
      name: "sentiment satisfied",
      keywords: "sentiment satisfied sentiment satisfied happy pleased content positive satisfied icon positive sentiment happy face",
      icon: "ef21",
      color: false,
   },
   {
      name: "sentiment very dissatisfied",
      keywords: "sentiment very dissatisfied sentiment very dissatisfied extremely dissatisfied very unhappy very negative sad unhappy dissatisfied very dissatisfied icon",
      icon: "ef22",
      color: false,
   },
   {
      name: "sentiment very satisfied",
      keywords: "sentiment very satisfied sentiment very satisfied extremely satisfied very happy very positive pleased satisfied happy very satisfied icon",
      icon: "ef23",
      color: false,
   },
   {
      name: "thumb down alt",
      keywords: "thumb down alt thumb down dislike negative thumbs down thumb down icon disapproval dislike icon thumb down alternative downvote",
      icon: "ef24",
      color: false,
   },
   {
      name: "thumb up alt",
      keywords: "thumb up alt thumb up like positive thumbs up thumb up icon approval like icon thumb up alternative upvote",
      icon: "ef25",
      color: false,
   },
   {
      name: "check box",
      keywords: "check box checkbox box tick selection mark checkmark checked unchecked checkbox icon",
      icon: "ef26",
      color: false,
   },
   {
      name: "check box outline blank",
      keywords: "check box outline blank checkbox box outline empty unchecked checkbox icon unchecked box unchecked checkbox unchecked outline",
      icon: "ef27",
      color: false,
   },
   {
      name: "radio button on",
      keywords: "radio button on radio button circle option choice select checked radio icon radio button",
      icon: "ef28",
      color: false,
   },
   {
      name: "star2",
      keywords: "star star icon rating favorite bookmark gold star rating icon star symbol star shape favourite",
      icon: "ef29",
      color: false,
   },
   {
      name: "star half",
      keywords: "star half half star star part partial star star half icon star rating star shape rating review half filled star",
      icon: "ef2a",
      color: false,
   },
   {
      name: "star outline",
      keywords: "star outline star outline rating favorite bookmark gold star rating icon star symbol star shape",
      icon: "ef2b",
      color: false,
   },
   {
      name: "3d rotation",
      keywords: "3d rotation 3d rotation rotate three dimensional visual 3d icon 3d effect 3d object 3d model",
      icon: "ef2c",
      color: false,
   },
   {
      name: "accessibility1",
      keywords: "accessibility accessibility icon accessible inclusive disabled handicap wheelchair disability accessibility options access",
      icon: "ef2d",
      color: false,
   },
   {
      name: "account balance",
      keywords: "account balance account balance bank finance money accounting financial balance icon banking",
      icon: "ef2e",
      color: false,
   },
   {
      name: "account balance wallet",
      keywords: "account balance wallet account balance wallet purse money finance financial wallet icon banking",
      icon: "ef2f",
      color: false,
   },
   {
      name: "account box",
      keywords: "account box account box profile user person avatar account icon user icon profile icon",
      icon: "ef30",
      color: false,
   },
   {
      name: "account circle",
      keywords: "account circle account circle profile user person avatar account icon user icon profile icon",
      icon: "ef31",
      color: false,
   },
   {
      name: "add shopping cart",
      keywords: "add shopping cart add shopping cart buy purchase add to cart shopping icon cart icon add to shopping cart",
      icon: "ef32",
      color: false,
   },
   {
      name: "alarm off",
      keywords: "alarm off alarm off notification clock timer stop quiet disable alarm icon",
      icon: "ef33",
      color: false,
   },
   {
      name: "alarm on",
      keywords: "alarm on alarm on notification clock timer start active alarm icon turn on alarm",
      icon: "ef34",
      color: false,
   },
   {
      name: "android2",
      keywords: "android android icon robot google operating system mobile android logo smartphone android symbol android mascot",
      icon: "ef35",
      color: false,
   },
   {
      name: "announcement",
      keywords: "announcement announcement icon notification news alert message broadcast inform notice update",
      icon: "ef36",
      color: false,
   },
   {
      name: "aspect ratio",
      keywords: "aspect ratio aspect ratio proportion size scale dimensions screen resolution aspect ratio icon",
      icon: "ef37",
      color: false,
   },
   {
      name: "assignment",
      keywords: "assignment task work project job assignment icon homework duty mission challenge",
      icon: "ef38",
      color: false,
   },
   {
      name: "assignment ind",
      keywords: "assignment ind assignment task work project job assignment icon assigned employee person",
      icon: "ef39",
      color: false,
   },
   {
      name: "assignment late",
      keywords: "assignment late assignment task work project job assignment icon late deadline delay",
      icon: "ef3a",
      color: false,
   },
   {
      name: "assignment return",
      keywords: "assignment return assignment task work project job assignment icon return send back response",
      icon: "ef3b",
      color: false,
   },
   {
      name: "assignment returned",
      keywords: "assignment returned assignment task work project job assignment icon returned sent back response",
      icon: "ef3c",
      color: false,
   },
   {
      name: "assignment turned in",
      keywords: "assignment turned in assignment task work project job assignment icon turned in submitted completed",
      icon: "ef3d",
      color: false,
   },
   {
      name: "autorenew",
      keywords: "autorenew autorenewal renew refresh update rotate reload cycle recurring autorenew icon",
      icon: "ef3e",
      color: false,
   },
   {
      name: "book3",
      keywords: "book book icon reading knowledge study literature textbook library education book symbol",
      icon: "ef3f",
      color: false,
   },
   {
      name: "bookmark3",
      keywords: "bookmark bookmark icon save favorite mark flag remember reference tag bookmark symbol",
      icon: "ef40",
      color: false,
   },
   {
      name: "bookmark outline",
      keywords: "bookmark outline bookmark outline save favorite mark flag remember reference tag",
      icon: "ef41",
      color: false,
   },
   {
      name: "bug report",
      keywords: "bug report bug report issue problem debug error defect bug icon reporting",
      icon: "ef42",
      color: false,
   },
   {
      name: "build",
      keywords: "build construction development create make assemble build icon manufacture build up build process",
      icon: "ef43",
      color: false,
   },
   {
      name: "cached",
      keywords: "cached cache stored memory temporary buffer retain saved cached icon stored data",
      icon: "ef44",
      color: false,
   },
   {
      name: "change history",
      keywords: "change history change history log record revision update progress alteration change icon",
      icon: "ef45",
      color: false,
   },
   {
      name: "check circle",
      keywords: "check circle tick circle checkmark circle check icon tick icon checkmark icon check circle icon check circle symbol tick circle icon circle with checkmark",
      icon: "ef46",
      color: false,
   },
   {
      name: "chrome reader mode",
      keywords: "chrome reader mode chrome reader mode browser reading mode view browser mode chrome icon web",
      icon: "ef47",
      color: false,
   },
   {
      name: "code2",
      keywords: "code code icon programming scripting development source software coding program code symbol",
      icon: "ef48",
      color: false,
   },
   {
      name: "credit card",
      keywords: "credit card credit card payment finance money credit card icon payment icon money icon",
      icon: "ef49",
      color: false,
   },
   {
      name: "dashboard1",
      keywords: "dashboard dashboard icon control panel overview interface management monitor dashboard view dashboard symbol dashboard screen",
      icon: "ef4a",
      color: false,
   },
   {
      name: "delete",
      keywords: "delete remove erase trash discard eliminate delete icon remove icon erase icon delete symbol",
      icon: "ef4b",
      color: false,
   },
   {
      name: "description",
      keywords: "description description icon details explanation summary information definition description symbol about description text",
      icon: "ef4c",
      color: false,
   },
   {
      name: "dns",
      keywords: "dns dns domain name server internet network dns icon domain name dns server",
      icon: "ef4d",
      color: false,
   },
   {
      name: "done",
      keywords: "done complete finish accomplish achieve success task done done icon checkmark success icon",
      icon: "ef4e",
      color: false,
   },
   {
      name: "done all",
      keywords: "done all complete finish accomplish achieve success task done done all icon checkmark success icon",
      icon: "ef4f",
      color: false,
   },
   {
      name: "exit to app",
      keywords: "exit to app exit app leave close quit end exit icon application exit app",
      icon: "ef50",
      color: false,
   },
   {
      name: "explore",
      keywords: "explore exploration discover search navigate journey explore icon adventure expedition explore symbol",
      icon: "ef51",
      color: false,
   },
   {
      name: "extension",
      keywords: "extension addon plugin module component feature extension icon browser extension additional extra",
      icon: "ef52",
      color: false,
   },
   {
      name: "face",
      keywords: "face face icon person user avatar profile human face symbol identity face illustration",
      icon: "ef53",
      color: false,
   },
   {
      name: "favorite",
      keywords: "favorite favorite icon like love star heart favorite symbol bookmark favorite button preferred",
      icon: "ef54",
      color: false,
   },
   {
      name: "favorite outline",
      keywords: "favorite outline favorite outline like love star heart favorite symbol bookmark favorite button",
      icon: "ef55",
      color: false,
   },
   {
      name: "find in page",
      keywords: "find in page find search locate query locate in page search page find in page icon find text search text",
      icon: "ef56",
      color: false,
   },
   {
      name: "find replace",
      keywords: "find replace find replace search replace text search and replace substitute find replace icon search and replace text find and replace",
      icon: "ef57",
      color: false,
   },
   {
      name: "flip to back",
      keywords: "flip to back flip back reverse rotate flip to back icon flip icon back icon reverse icon",
      icon: "ef58",
      color: false,
   },
   {
      name: "flip to front",
      keywords: "flip to front flip front rotate flip to front icon flip icon front icon reverse icon",
      icon: "ef59",
      color: false,
   },
   {
      name: "group work",
      keywords: "group work group team collaboration teamwork work together group work icon team icon cooperation joint effort",
      icon: "ef5a",
      color: false,
   },
   {
      name: "help1",
      keywords: "help help icon question support assistance guide help symbol information aid help button",
      icon: "ef5b",
      color: false,
   },
   {
      name: "highlight remove",
      keywords: "highlight remove highlight remove erase clear delete highlight remove icon remove highlight erase highlight clear highlight",
      icon: "ef5c",
      color: false,
   },
   {
      name: "history2",
      keywords: "history history icon past record timeline log historical history symbol events history record",
      icon: "ef5d",
      color: false,
   },
   {
      name: "home5",
      keywords: "home home icon house dwelling residence home symbol home page homepage main page home screen",
      icon: "ef5e",
      color: false,
   },
   {
      name: "hourglass empty",
      keywords: "hourglass empty hourglass empty time waiting hourglass symbol hourglass empty icon time passing hourglass image waiting symbol",
      icon: "ef5f",
      color: false,
   },
   {
      name: "hourglass full",
      keywords: "hourglass full hourglass full time waiting hourglass symbol hourglass full icon time passing hourglass image waiting symbol",
      icon: "ef60",
      color: false,
   },
   {
      name: "https",
      keywords: "https secure encryption security safe https icon lock ssl secure connection https protocol",
      icon: "ef61",
      color: false,
   },
   {
      name: "info3",
      keywords: "info info icon information details about help info symbol information icon info button about icon",
      icon: "ef62",
      color: false,
   },
   {
      name: "info outline",
      keywords: "info outline info outline information details about help info symbol information outline info button",
      icon: "ef63",
      color: false,
   },
   {
      name: "input",
      keywords: "input input icon enter type text entry input symbol keyboard input device data entry",
      icon: "ef64",
      color: false,
   },
   {
      name: "invert colors on",
      keywords: "invert colors on invert colors inverted colors contrast inversion invert colors icon color inversion dark mode light mode",
      icon: "ef65",
      color: false,
   },
   {
      name: "label",
      keywords: "label label icon tag mark tagging labeling classification label symbol category identification",
      icon: "ef66",
      color: false,
   },
   {
      name: "label outline",
      keywords: "label outline label outline tag mark tagging labeling classification label symbol category",
      icon: "ef67",
      color: false,
   },
   {
      name: "language2",
      keywords: "language language icon translation communication linguistics language symbol language selection language option language settings language choice",
      icon: "ef68",
      color: false,
   },
   {
      name: "launch",
      keywords: "launch launch icon start commence begin launch symbol launching initiate launch button take off",
      icon: "ef69",
      color: false,
   },
   {
      name: "list4",
      keywords: "list list icon item record inventory register listing list symbol menu directory",
      icon: "ef6a",
      color: false,
   },
   {
      name: "lock open",
      keywords: "lock open lock open unlock access lock open icon unlock icon open lock lock symbol access symbol",
      icon: "ef6b",
      color: false,
   },
   {
      name: "lock outline",
      keywords: "lock outline lock outline secure protect lock symbol lock outline icon secured locked privacy",
      icon: "ef6c",
      color: false,
   },
   {
      name: "loyalty",
      keywords: "loyalty loyalty icon loyal loyalty card reward loyalty program loyalty points loyalty badge customer loyalty loyalty symbol",
      icon: "ef6d",
      color: false,
   },
   {
      name: "markunread mailbox",
      keywords: "markunread mailbox markunread mailbox inbox new unread mark as unread markunread icon message mail",
      icon: "ef6e",
      color: false,
   },
   {
      name: "note add",
      keywords: "note add note add insert write notebook notepad note add icon add note write note",
      icon: "ef6f",
      color: false,
   },
   {
      name: "open in browser",
      keywords: "open in browser open browser web internet open in browser icon browser window open web open link open browser",
      icon: "ef70",
      color: false,
   },
   {
      name: "open with",
      keywords: "open with open with access use open with icon choose open application open file open tool",
      icon: "ef71",
      color: false,
   },
   {
      name: "pageview",
      keywords: "pageview page view view display page pageview icon webpage page viewer website site view",
      icon: "ef72",
      color: false,
   },
   {
      name: "perm camera mic",
      keywords: "perm camera mic permission camera mic microphone access perm camera mic icon audio permission video permission microphone permission",
      icon: "ef73",
      color: false,
   },
   {
      name: "perm contact calendar",
      keywords: "perm contact calendar permission contact calendar access perm contact calendar icon contact permission calendar permission event permission",
      icon: "ef74",
      color: false,
   },
   {
      name: "perm data setting",
      keywords: "perm data setting permission data setting configuration access perm data setting icon data permission settings permission data access",
      icon: "ef75",
      color: false,
   },
   {
      name: "perm device information",
      keywords: "perm device information permission device information access perm device information icon device info permission device details permission hardware permission",
      icon: "ef76",
      color: false,
   },
   {
      name: "perm media",
      keywords: "perm media permission media access perm media icon media permission multimedia permission media access audio permission video permission",
      icon: "ef77",
      color: false,
   },
   {
      name: "perm phone msg",
      keywords: "perm phone msg permission phone message access perm phone msg icon call permission message permission telephony permission phone permission",
      icon: "ef78",
      color: false,
   },
   {
      name: "perm scan wifi",
      keywords: "perm scan wifi permission scan wifi network access perm scan wifi icon wifi permission network permission wireless permission",
      icon: "ef79",
      color: false,
   },
   {
      name: "picture in picture",
      keywords: "picture in picture picture in picture in picture multimedia media video picture in picture icon pip video overlay",
      icon: "ef7a",
      color: false,
   },
   {
      name: "polymer",
      keywords: "polymer plastic polymer icon material synthetic compound chemical polymerization polymer symbol chemistry",
      icon: "ef7b",
      color: false,
   },
   {
      name: "power settings new",
      keywords: "power settings new power settings new power settings new icon power options power off shutdown restart sleep",
      icon: "ef7c",
      color: false,
   },
   {
      name: "receipt",
      keywords: "receipt receipt icon invoice bill document purchase transaction receipt symbol payment receipt paper",
      icon: "ef7d",
      color: false,
   },
   {
      name: "redeem",
      keywords: "redeem redeem icon claim exchange voucher redeem code redeem reward redeem points redeem coupon redeem prize",
      icon: "ef7e",
      color: false,
   },
   {
      name: "search2",
      keywords: "search search icon find locate look for search symbol magnifying glass search button searching query",
      icon: "ef7f",
      color: false,
   },
   {
      name: "settings",
      keywords: "settings settings icon configuration preferences options settings symbol settings gear settings menu adjustments settings button",
      icon: "ef80",
      color: false,
   },
   {
      name: "settings applications",
      keywords: "settings applications settings applications configuration preferences options settings symbol settings gear settings menu adjustments",
      icon: "ef81",
      color: false,
   },
   {
      name: "settings backup restore",
      keywords: "settings backup restore settings backup restore configuration preferences options settings symbol settings gear settings menu",
      icon: "ef82",
      color: false,
   },
   {
      name: "settings bluetooth",
      keywords: "settings bluetooth settings bluetooth configuration preferences options settings symbol settings gear settings menu bluetooth settings",
      icon: "ef83",
      color: false,
   },
   {
      name: "settings cell",
      keywords: "settings cell settings cell configuration preferences options settings symbol settings gear settings menu cellular settings",
      icon: "ef84",
      color: false,
   },
   {
      name: "settings display",
      keywords: "settings display settings display configuration preferences options settings symbol settings gear settings menu display settings",
      icon: "ef85",
      color: false,
   },
   {
      name: "settings ethernet",
      keywords: "settings ethernet settings ethernet configuration preferences options settings symbol settings gear settings menu ethernet settings",
      icon: "ef86",
      color: false,
   },
   {
      name: "settings input antenna",
      keywords: "settings input antenna settings input antenna configuration preferences options settings symbol settings gear settings menu",
      icon: "ef87",
      color: false,
   },
   {
      name: "settings input component",
      keywords: "settings input component settings input component configuration preferences options settings symbol settings gear settings menu",
      icon: "ef88",
      color: false,
   },
   {
      name: "settings input hdmi",
      keywords: "settings input hdmi settings input hdmi configuration preferences options settings symbol settings gear settings menu",
      icon: "ef89",
      color: false,
   },
   {
      name: "settings input svideo",
      keywords: "settings input svideo settings input svideo configuration preferences options settings symbol settings gear settings menu",
      icon: "ef8a",
      color: false,
   },
   {
      name: "settings overscan",
      keywords: "settings overscan settings overscan configuration preferences options settings symbol settings gear settings menu screen settings",
      icon: "ef8b",
      color: false,
   },
   {
      name: "settings phone",
      keywords: "settings phone settings phone configuration preferences options settings symbol settings gear settings menu phone settings",
      icon: "ef8c",
      color: false,
   },
   {
      name: "settings power",
      keywords: "settings power settings power configuration preferences options settings symbol settings gear settings menu power settings",
      icon: "ef8d",
      color: false,
   },
   {
      name: "settings remote",
      keywords: "settings remote settings remote configuration preferences options settings symbol settings gear settings menu remote settings",
      icon: "ef8e",
      color: false,
   },
   {
      name: "settings voice",
      keywords: "settings voice settings voice configuration preferences options settings symbol settings gear settings menu voice settings",
      icon: "ef8f",
      color: false,
   },
   {
      name: "shop1",
      keywords: "shop shop icon store market retail buy shopping shop symbol online shop shop button",
      icon: "ef90",
      color: false,
   },
   {
      name: "shop two",
      keywords: "shop two shop store market retail buy shopping shop symbol online shop shop button",
      icon: "ef91",
      color: false,
   },
   {
      name: "shopping basket",
      keywords: "shopping basket basket shopping cart groceries store purchase buy shop shopping icon",
      icon: "ef92",
      color: false,
   },
   {
      name: "speaker notes",
      keywords: "speaker notes speaker notes lecture presentation speech talk speaker notes icon audio lecture notes",
      icon: "ef93",
      color: false,
   },
   {
      name: "spellcheck",
      keywords: "spellcheck spell check grammar correction proofreading spellcheck icon language writing spelling",
      icon: "ef94",
      color: false,
   },
   {
      name: "stars",
      keywords: "stars stars icon star rating review best top favorite stars rating stars symbol",
      icon: "ef95",
      color: false,
   },
   {
      name: "subject",
      keywords: "subject subject icon topic theme subject matter content subject line subject symbol category subject area",
      icon: "ef96",
      color: false,
   },
   {
      name: "supervisor account",
      keywords: "supervisor account supervisor account admin manager supervisor icon supervisor symbol administrator supervision authority",
      icon: "ef97",
      color: false,
   },
   {
      name: "swap horiz",
      keywords: "swap horiz swap horizontal exchange flip swap horiz icon switch swap icon horizontal swap swap horizontal",
      icon: "ef98",
      color: false,
   },
   {
      name: "swap vert",
      keywords: "swap vert swap vertical exchange flip swap vert icon switch swap icon vertical swap swap vertical",
      icon: "ef99",
      color: false,
   },
   {
      name: "swap vertical circle",
      keywords: "swap vertical circle swap vertical circle exchange rotate switch change swap icon vertical circle",
      icon: "ef9a",
      color: false,
   },
   {
      name: "system update tv",
      keywords: "system update tv system update tv television update software upgrade refresh system icon tv update",
      icon: "ef9b",
      color: false,
   },
   {
      name: "tab1",
      keywords: "tab navigation tab tab bar browser tab interface section category tab icon web tab ui tab",
      icon: "ef9c",
      color: false,
   },
   {
      name: "tab unselected",
      keywords: "tab unselected tab unselected deselected inactive tab tab switch unselected tab tab icon inactive not selected",
      icon: "ef9d",
      color: false,
   },
   {
      name: "thumb down",
      keywords: "thumb down dislike thumbs down hand gesture negative opinion thumb icon downvote thumbs down icon",
      icon: "ef9e",
      color: false,
   },
   {
      name: "thumb up",
      keywords: "thumb up like thumbs up hand gesture positive opinion thumb icon upvote thumbs up icon",
      icon: "ef9f",
      color: false,
   },
   {
      name: "thumbs up down",
      keywords: "thumbs up down thumb like dislike vote opinion rating thumbs icon upvote downvote",
      icon: "efa0",
      color: false,
   },
   {
      name: "toc",
      keywords: "table of contents toc contents index outline navigation guide toc icon menu list",
      icon: "efa1",
      color: false,
   },
   {
      name: "today",
      keywords: "today current day now date present today icon calendar agenda current date current time",
      icon: "efa2",
      color: false,
   },
   {
      name: "toll",
      keywords: "toll fee charge payment price toll icon cost tax tariff toll booth",
      icon: "efa3",
      color: false,
   },
   {
      name: "track changes",
      keywords: "track changes track changes edit update modify monitor track icon revision alteration",
      icon: "efa4",
      color: false,
   },
   {
      name: "translate",
      keywords: "translate translation language convert interpret translate icon language icon translator dictionary babel",
      icon: "efa5",
      color: false,
   },
   {
      name: "trending down",
      keywords: "trending down trending down decreasing falling decline trend downward arrow trending icon",
      icon: "efa6",
      color: false,
   },
   {
      name: "trending neutral",
      keywords: "trending neutral trending neutral stable unchanged balanced even steady trend neutral trend",
      icon: "efa7",
      color: false,
   },
   {
      name: "trending up",
      keywords: "trending up trending up increasing rising growth ascend upward arrow trending icon",
      icon: "efa8",
      color: false,
   },
   {
      name: "verified user",
      keywords: "verified user verified user certified approved authenticated verified icon verified badge authentic confirmation",
      icon: "efa9",
      color: false,
   },
   {
      name: "view agenda",
      keywords: "view agenda view agenda calendar schedule list day agenda icon calendar view agenda view",
      icon: "efaa",
      color: false,
   },
   {
      name: "view array",
      keywords: "view array view array grid matrix table list view icon array view grid view",
      icon: "efab",
      color: false,
   },
   {
      name: "view carousel",
      keywords: "view carousel view carousel slider slideshow gallery rotate view icon carousel view slide view",
      icon: "efac",
      color: false,
   },
   {
      name: "view column",
      keywords: "view column view column grid layout table list view icon column view grid view",
      icon: "efad",
      color: false,
   },
   {
      name: "view day",
      keywords: "view day view day calendar date agenda list view icon day view calendar view",
      icon: "efae",
      color: false,
   },
   {
      name: "view headline",
      keywords: "view headline view headline list news article title view icon headline view list view",
      icon: "efaf",
      color: false,
   },
   {
      name: "view list",
      keywords: "view list view list details items menu options view icon list view list items",
      icon: "efb0",
      color: false,
   },
   {
      name: "view module",
      keywords: "view module view module grid layout table list view icon module view grid view",
      icon: "efb1",
      color: false,
   },
   {
      name: "view quilt",
      keywords: "view quilt view quilt grid layout table list view icon quilt view grid view",
      icon: "efb2",
      color: false,
   },
   {
      name: "view stream",
      keywords: "view stream view stream flow continuous list view icon stream view flow view",
      icon: "efb3",
      color: false,
   },
   {
      name: "view week",
      keywords: "view week view week calendar date agenda list view icon week view calendar view",
      icon: "efb4",
      color: false,
   },
   {
      name: "visibility off",
      keywords: "visibility off visibility off hidden invisible conceal eye visibility icon hide invisible icon",
      icon: "efb5",
      color: false,
   },
   {
      name: "card membership",
      keywords: "card membership card membership loyalty id card icon membership card access cardholder member",
      icon: "efb6",
      color: false,
   },
   {
      name: "card travel",
      keywords: "card travel card travel ticket pass boarding pass card icon travel card transportation card ticket card",
      icon: "efb7",
      color: false,
   },
   {
      name: "work",
      keywords: "work office job occupation business workplace work icon employment career professional",
      icon: "efb8",
      color: false,
   },
   {
      name: "youtube searched for",
      keywords: "youtube searched for youtube search searched find lookup youtube icon search icon magnifying glass youtube search",
      icon: "efb9",
      color: false,
   },
   {
      name: "eject2",
      keywords: "eject ejection remove eject icon exit expel release eject button eject symbol",
      icon: "efba",
      color: false,
   },
   {
      name: "camera enhance",
      keywords: "camera enhance camera enhance improve upgrade enhancement camera icon improved camera enhanced photo photo improvement",
      icon: "efbb",
      color: false,
   },
   {
      name: "help outline",
      keywords: "help outline help outline information assistance question help icon hint guide support",
      icon: "efbc",
      color: false,
   },
   {
      name: "reorder1",
      keywords: "reorder rearrange shuffle sort order reorder icon organize reposition rearrange items reorder button",
      icon: "efbd",
      color: false,
   },
   {
      name: "zoom in",
      keywords: "zoom in magnify enlarge expand zoom in icon focus magnifying glass close up zoom out enlarge icon",
      icon: "efbe",
      color: false,
   },
   {
      name: "zoom out",
      keywords: "zoom out minimize shrink reduce zoom out icon magnifying glass decrease zoom in shrink icon reduce icon",
      icon: "efbf",
      color: false,
   },
   {
      name: "http",
      keywords: "http web protocol internet url browser http icon website online communication",
      icon: "efc0",
      color: false,
   },
   {
      name: "event seat",
      keywords: "event seat event seat ticket pass admission audience event icon seat reservation venue",
      icon: "efc1",
      color: false,
   },
   {
      name: "flight land",
      keywords: "flight land flight land airport airplane arrival landing flight icon air travel arrival icon",
      icon: "efc2",
      color: false,
   },
   {
      name: "flight takeoff",
      keywords: "flight takeoff flight takeoff airport airplane departure takeoff flight icon air travel departure icon",
      icon: "efc3",
      color: false,
   },
   {
      name: "play for work",
      keywords: "play for work play work action activity task play icon work icon task icon productive",
      icon: "efc4",
      color: false,
   },
   {
      name: "gif",
      keywords: "gif animated animation graphic image file gif icon moving image animated image gif file",
      icon: "efc5",
      color: false,
   },
   {
      name: "indeterminate check box",
      keywords: "indeterminate check box indeterminate check box checkbox selection tick box uncertain checkbox icon indeterminate checkbox partial selection",
      icon: "efc6",
      color: false,
   },
   {
      name: "offline pin",
      keywords: "offline pin offline pin save bookmark download offline icon pin icon save for later offline mode",
      icon: "efc7",
      color: false,
   },
   {
      name: "all out",
      keywords: "all out all out complete total entire everything all icon complete icon entirety",
      icon: "efc8",
      color: false,
   },
   {
      name: "copyright1",
      keywords: "copyright rights copyright symbol legal ownership authorship copyright icon legal rights intellectual property copyright sign",
      icon: "efc9",
      color: false,
   },
   {
      name: "fingerprint",
      keywords: "fingerprint biometric security identification thumbprint fingerprint icon biometric data security icon identification icon thumbprint icon",
      icon: "efca",
      color: false,
   },
   {
      name: "gavel1",
      keywords: "gavel hammer justice court legal law gavel icon courtroom judge legal system",
      icon: "efcb",
      color: false,
   },
   {
      name: "lightbulb outline",
      keywords: "lightbulb outline lightbulb outline idea innovation concept lightbulb icon idea icon innovation icon concept icon",
      icon: "efcc",
      color: false,
   },
   {
      name: "picture in picture alt",
      keywords: "picture in picture alt picture in picture pip multitasking video overlay picture in picture picture icon video icon multitasking icon",
      icon: "efcd",
      color: false,
   },
   {
      name: "important devices",
      keywords: "important devices important devices essential critical vital important icon key devices essential devices critical devices",
      icon: "efce",
      color: false,
   },
   {
      name: "touch app",
      keywords: "touch app touch app application interface user interface touchscreen touch icon app icon touchscreen app",
      icon: "efcf",
      color: false,
   },
   {
      name: "accessible",
      keywords: "accessible accessibility disabled handicap wheelchair disability accessible icon accessibility icon handicap icon wheelchair icon",
      icon: "efd0",
      color: false,
   },
   {
      name: "compare arrows",
      keywords: "compare arrows compare arrows direction compare icon arrow icon directional arrows compare symbol compare signs arrow comparison",
      icon: "efd1",
      color: false,
   },
   {
      name: "date range",
      keywords: "date range date range calendar time period duration date icon time range date period",
      icon: "efd2",
      color: false,
   },
   {
      name: "donut large",
      keywords: "donut large donut large circle chart graph pie chart donut icon circle chart graph icon",
      icon: "efd3",
      color: false,
   },
   {
      name: "donut small",
      keywords: "donut small donut small circle chart graph pie chart donut icon circle chart graph icon",
      icon: "efd4",
      color: false,
   },
   {
      name: "line style",
      keywords: "line style line style outline stroke design line icon drawing line pattern outline style",
      icon: "efd5",
      color: false,
   },
   {
      name: "line weight",
      keywords: "line weight line weight thickness stroke bold line icon drawing line thickness bold line",
      icon: "efd6",
      color: false,
   },
   {
      name: "motorcycle1",
      keywords: "motorcycle bike motorbike vehicle transportation motorcycle icon bike icon transport icon vehicle icon motorbike icon",
      icon: "efd7",
      color: false,
   },
   {
      name: "opacity",
      keywords: "opacity transparency visibility clear fading fade opacity icon transparency icon visibility icon clear icon",
      icon: "efd8",
      color: false,
   },
   {
      name: "pets",
      keywords: "pets animals domestic companions pets icon animal icon companion animals domestic animals pet care pet shop",
      icon: "efd9",
      color: false,
   },
   {
      name: "pregnant woman",
      keywords: "pregnant woman pregnant woman expecting mother maternity pregnant icon expecting icon motherhood maternity icon",
      icon: "efda",
      color: false,
   },
   {
      name: "record voice over",
      keywords: "record voice over record voice over microphone voice recording record icon voice icon microphone icon recording icon",
      icon: "efdb",
      color: false,
   },
   {
      name: "rounded corner",
      keywords: "rounded corner rounded corner radius curve border rounded icon rounded edge corner icon rounded shape",
      icon: "efdc",
      color: false,
   },
   {
      name: "rowing",
      keywords: "rowing row boat oar water rowing icon rowing boat rowing oar rowing competition rowing sport",
      icon: "efdd",
      color: false,
   },
   {
      name: "timeline",
      keywords: "timeline schedule chronology history events time timeline icon event timeline timeline chart event schedule",
      icon: "efde",
      color: false,
   },
   {
      name: "update",
      keywords: "update refresh renew upgrade update icon refresh icon renewal system update software update update button",
      icon: "efdf",
      color: false,
   },
   {
      name: "watch later",
      keywords: "watch later watch later time clock alarm schedule watch icon later icon time icon",
      icon: "efe0",
      color: false,
   },
   {
      name: "pan tool",
      keywords: "pan tool pan tool move scroll drag pan icon tool icon navigation panning",
      icon: "efe1",
      color: false,
   },
   {
      name: "euro symbol",
      keywords: "euro symbol euro currency money euro icon money icon currency icon euro sign euro currency european currency",
      icon: "efe2",
      color: false,
   },
   {
      name: "g translate",
      keywords: "g translate translate language google translate google translation g translate icon translate icon language icon google icon",
      icon: "efe3",
      color: false,
   },
   {
      name: "remove shopping cart",
      keywords: "remove shopping cart remove shopping cart delete eliminate remove icon shopping cart icon discard remove from cart remove product",
      icon: "efe4",
      color: false,
   },
   {
      name: "restore page",
      keywords: "restore page restore page reload refresh renew restore icon page icon webpage reload page",
      icon: "efe5",
      color: false,
   },
   {
      name: "speaker notes off",
      keywords: "speaker notes off speaker notes off mute quiet speaker icon notes icon speaker off mute speaker",
      icon: "efe6",
      color: false,
   },
   {
      name: "delete forever",
      keywords: "delete forever delete forever remove erase delete icon permanent delete remove forever delete permanently erase forever",
      icon: "efe7",
      color: false,
   },
   {
      name: "accessibility new",
      keywords: "accessibility new accessibility new disabled handicap wheelchair accessibility icon disabled icon new icon improved accessibility",
      icon: "efe8",
      color: false,
   },
   {
      name: "check circle outline",
      keywords: "check circle outline check circle outline checkbox tick check mark check icon circle icon unchecked unchecked circle",
      icon: "efe9",
      color: false,
   },
   {
      name: "delete outline",
      keywords: "delete outline delete outline remove erase delete icon erase icon remove icon delete button delete symbol",
      icon: "efea",
      color: false,
   },
   {
      name: "done outline",
      keywords: "done outline done outline complete finished success check mark done icon check icon complete icon",
      icon: "efeb",
      color: false,
   },
   {
      name: "maximize",
      keywords: "maximize enlarge expand full screen maximize icon fullscreen zoom maximize button maximize window maximize view",
      icon: "efec",
      color: false,
   },
   {
      name: "minimize",
      keywords: "minimize reduce shrink collapse minimize icon minimize button hide minimize window minimize view less",
      icon: "efed",
      color: false,
   },
   {
      name: "offline bolt",
      keywords: "offline bolt offline bolt internet thunder lightning offline icon bolt icon no connection offline mode",
      icon: "efee",
      color: false,
   },
   {
      name: "swap horizontal circle",
      keywords: "swap horizontal circle swap horizontal circle exchange rotate switch change swap icon horizontal circle",
      icon: "efef",
      color: false,
   },
   {
      name: "accessible forward",
      keywords: "accessible forward accessible forward disabled handicap wheelchair forward icon accessibility disabled icon handicap icon",
      icon: "eff0",
      color: false,
   },
   {
      name: "calendar today",
      keywords: "calendar today calendar today current date date present today icon calendar view current day current time",
      icon: "eff1",
      color: false,
   },
   {
      name: "calendar view day",
      keywords: "calendar view day calendar view day current date date today day view calendar icon agenda",
      icon: "eff2",
      color: false,
   },
   {
      name: "label important",
      keywords: "label important label important priority mark star tag label icon important icon priority icon",
      icon: "eff3",
      color: false,
   },
   {
      name: "restore from trash",
      keywords: "restore from trash restore trash recycle bin recover restore icon trash icon undo retrieve",
      icon: "eff4",
      color: false,
   },
   {
      name: "supervised user circle",
      keywords: "supervised user circle supervised user circle child parental supervised user supervised icon circle icon child icon",
      icon: "eff5",
      color: false,
   },
   {
      name: "text rotate up",
      keywords: "text rotate up text rotate up rotate text text rotation text icon rotate icon up icon text orientation",
      icon: "eff6",
      color: false,
   },
   {
      name: "text rotate vertical",
      keywords: "text rotate vertical text rotate vertical rotate text text rotation text icon rotate icon vertical icon text orientation",
      icon: "eff7",
      color: false,
   },
   {
      name: "text rotation angledown",
      keywords: "text rotation angledown text rotation angle down rotate text text rotation text icon rotate icon angle down icon text orientation",
      icon: "eff8",
      color: false,
   },
   {
      name: "text rotation angleup",
      keywords: "text rotation angleup text rotation angle up rotate text text rotation text icon rotate icon angle up icon text orientation",
      icon: "eff9",
      color: false,
   },
   {
      name: "text rotation down",
      keywords: "text rotation down text rotation down rotate text text rotation text icon rotate icon down icon text orientation",
      icon: "effa",
      color: false,
   },
   {
      name: "text rotation none",
      keywords: "text rotation none text rotation none rotate text text rotation text icon rotate icon no rotation text orientation",
      icon: "effb",
      color: false,
   },
   {
      name: "commute",
      keywords: "commute travel transport journey commute icon trip drive commuting commuter transportation",
      icon: "effc",
      color: false,
   },
   {
      name: "arrow right alt",
      keywords: "arrow right alt arrow right alt direction arrow icon right arrow alternative alternate arrow right direction",
      icon: "effd",
      color: false,
   },
   {
      name: "work off",
      keywords: "work off off work work unavailable busy pause break rest disable off",
      icon: "effe",
      color: false,
   },
   {
      name: "work outline",
      keywords: "work outline work outline task job project work icon outline work work border work frame",
      icon: "efff",
      color: false,
   },
   {
      name: "drag indicator",
      keywords: "drag indicator drag indicator drag handle drag icon drag symbol move resize control manipulate",
      icon: "000",
      color: false,
   },
   {
      name: "horizontal split",
      keywords: "horizontal split horizontal split divide separate divide horizontally split screen horizontal division split icon horizontal separator",
      icon: "001",
      color: false,
   },
   {
      name: "label important outline",
      keywords: "label important outline label important outline tag mark highlight important label priority important icon",
      icon: "002",
      color: false,
   },
   {
      name: "vertical split",
      keywords: "vertical split vertical split divide separate divide vertically split screen vertical division split icon vertical separator",
      icon: "003",
      color: false,
   },
   {
      name: "voice over off",
      keywords: "voice over off voice over off mute silent disable no voice sound off voice icon",
      icon: "004",
      color: false,
   },
   {
      name: "segment",
      keywords: "segment part section division portion slice segmented piece segment icon division",
      icon: "005",
      color: false,
   },
   {
      name: "contact support",
      keywords: "contact support contact support help assistance customer service help desk support center contact icon support icon",
      icon: "006",
      color: false,
   },
   {
      name: "compress1",
      keywords: "compress compress icon shrink reduce minimize compact squash compress button compress symbol compress action",
      icon: "007",
      color: false,
   },
   {
      name: "filter list alt",
      keywords: "filter list alt filter list alternative alternate different filtering list icon filter option different filter",
      icon: "008",
      color: false,
   },
   {
      name: "expand1",
      keywords: "expand expand icon enlarge extend grow stretch open expand button expand symbol expand action",
      icon: "009",
      color: false,
   },
   {
      name: "edit off",
      keywords: "edit off edit off disable edit edit disable edit icon no edit edit stop edit end edit off symbol",
      icon: "00a",
      color: false,
   },
   {
      name: "10k",
      keywords: "10k 10,000 ten thousand high resolution quality high quality 10k resolution ultra hd resolution 10k pixels",
      icon: "00b",
      color: false,
   },
   {
      name: "10mp",
      keywords: "10mp 10 megapixels 10 million pixels camera photo quality image resolution 10mp camera picture quality 10mp resolution 10mp image",
      icon: "00c",
      color: false,
   },
   {
      name: "11mp",
      keywords: "11mp 11 megapixels 11 million pixels camera photo quality image resolution 11mp camera picture quality 11mp resolution 11mp image",
      icon: "00d",
      color: false,
   },
   {
      name: "12mp",
      keywords: "12mp 12 megapixels 12 million pixels camera photo quality image resolution 12mp camera picture quality 12mp resolution 12mp image",
      icon: "00e",
      color: false,
   },
   {
      name: "13mp",
      keywords: "13mp 13 megapixels 13 million pixels camera photo quality image resolution 13mp camera picture quality 13mp resolution 13mp image",
      icon: "00f",
      color: false,
   },
   {
      name: "14mp",
      keywords: "14mp 14 megapixels 14 million pixels camera photo quality image resolution 14mp camera picture quality 14mp resolution 14mp image",
      icon: "010",
      color: false,
   },
   {
      name: "15mp",
      keywords: "15mp 15 megapixels 15 million pixels camera photo quality image resolution 15mp camera picture quality 15mp resolution 15mp image",
      icon: "011",
      color: false,
   },
   {
      name: "16mp",
      keywords: "16mp 16 megapixels 16 million pixels camera photo quality image resolution 16mp camera picture quality 16mp resolution 16mp image",
      icon: "012",
      color: false,
   },
   {
      name: "17mp",
      keywords: "17mp 17 megapixels 17 million pixels camera photo quality image resolution 17mp camera picture quality 17mp resolution 17mp image",
      icon: "013",
      color: false,
   },
   {
      name: "18mp",
      keywords: "18mp 18 megapixels 18 million pixels camera photo quality image resolution 18mp camera picture quality 18mp resolution 18mp image",
      icon: "014",
      color: false,
   },
   {
      name: "19mp",
      keywords: "19mp 19 megapixels 19 million pixels camera photo quality image resolution 19mp camera picture quality 19mp resolution 19mp image",
      icon: "015",
      color: false,
   },
   {
      name: "1k",
      keywords: "1k 1,000 one thousand high resolution quality high quality 1k resolution hd resolution 1k pixels",
      icon: "016",
      color: false,
   },
   {
      name: "1k plus",
      keywords: "1k plus 1k plus high resolution quality high quality 1k resolution hd resolution 1k pixels",
      icon: "017",
      color: false,
   },
   {
      name: "20mp",
      keywords: "20mp 20 megapixels 20 million pixels camera photo quality image resolution 20mp camera picture quality 20mp resolution 20mp image",
      icon: "018",
      color: false,
   },
   {
      name: "21mp",
      keywords: "21mp 21 megapixels 21 million pixels camera photo quality image resolution 21mp camera picture quality 21mp resolution 21mp image",
      icon: "019",
      color: false,
   },
   {
      name: "22mp",
      keywords: "22mp 22 megapixels 22 million pixels camera photo quality image resolution 22mp camera picture quality 22mp resolution 22mp image",
      icon: "01a",
      color: false,
   },
   {
      name: "23mp",
      keywords: "23mp 23 megapixels 23 million pixels camera photo quality image resolution 23mp camera picture quality 23mp resolution 23mp image",
      icon: "01b",
      color: false,
   },
   {
      name: "24mp",
      keywords: "24mp 24 megapixels 24 million pixels camera photo quality image resolution 24mp camera picture quality 24mp resolution 24mp image",
      icon: "01c",
      color: false,
   },
   {
      name: "2k",
      keywords: "2k 2,000 two thousand high resolution quality high quality 2k resolution hd resolution 2k pixels",
      icon: "01d",
      color: false,
   },
   {
      name: "2k plus",
      keywords: "2k plus 2k plus high resolution quality high quality 2k resolution hd resolution 2k pixels",
      icon: "01e",
      color: false,
   },
   {
      name: "2mp",
      keywords: "2mp 2 megapixels 2 million pixels camera photo quality image resolution 2mp camera picture quality 2mp resolution 2mp image",
      icon: "01f",
      color: false,
   },
   {
      name: "3k",
      keywords: "3k 3,000 three thousand high resolution quality high quality 3k resolution hd resolution 3k pixels",
      icon: "020",
      color: false,
   },
   {
      name: "3k plus",
      keywords: "3k plus 3k plus high resolution quality high quality 3k resolution hd resolution 3k pixels",
      icon: "021",
      color: false,
   },
   {
      name: "3mp",
      keywords: "3mp 3 megapixels 3 million pixels camera photo quality image resolution 3mp camera picture quality 3mp resolution 3mp image",
      icon: "022",
      color: false,
   },
   {
      name: "4k plus",
      keywords: "4k plus 4k plus high resolution quality high quality 4k resolution ultra hd resolution 4k pixels",
      icon: "023",
      color: false,
   },
   {
      name: "4mp",
      keywords: "4mp 4 megapixels 4 million pixels camera photo quality image resolution 4mp camera picture quality 4mp resolution 4mp image",
      icon: "024",
      color: false,
   },
   {
      name: "5k",
      keywords: "5k 5,000 five thousand high resolution quality high quality 5k resolution hd resolution 5k pixels",
      icon: "025",
      color: false,
   },
   {
      name: "5k plus",
      keywords: "5k plus 5k plus high resolution quality high quality 5k resolution hd resolution 5k pixels",
      icon: "026",
      color: false,
   },
   {
      name: "5mp",
      keywords: "5mp 5 megapixels 5 million pixels camera photo quality image resolution 5mp camera picture quality 5mp resolution 5mp image",
      icon: "027",
      color: false,
   },
   {
      name: "6k",
      keywords: "6k 6,000 six thousand high resolution quality high quality 6k resolution hd resolution 6k pixels",
      icon: "028",
      color: false,
   },
   {
      name: "6k plus",
      keywords: "6k plus 6k plus high resolution quality high quality 6k resolution hd resolution 6k pixels",
      icon: "029",
      color: false,
   },
   {
      name: "6mp",
      keywords: "6mp 6 megapixels 6 million pixels camera photo quality image resolution 6mp camera picture quality 6mp resolution 6mp image",
      icon: "02a",
      color: false,
   },
   {
      name: "7k",
      keywords: "7k 7,000 seven thousand high resolution quality high quality 7k resolution hd resolution 7k pixels",
      icon: "02b",
      color: false,
   },
   {
      name: "7k plus",
      keywords: "7k plus 7k plus high resolution quality high quality 7k resolution hd resolution 7k pixels",
      icon: "02c",
      color: false,
   },
   {
      name: "7mp",
      keywords: "7mp 7 megapixels 7 million pixels camera photo quality image resolution 7mp camera picture quality 7mp resolution 7mp image",
      icon: "02d",
      color: false,
   },
   {
      name: "8k",
      keywords: "8k 8,000 eight thousand high resolution quality high quality 8k resolution hd resolution 8k pixels",
      icon: "02e",
      color: false,
   },
   {
      name: "8k plus",
      keywords: "8k plus 8k plus high resolution quality high quality 8k resolution hd resolution 8k pixels",
      icon: "02f",
      color: false,
   },
   {
      name: "8mp",
      keywords: "8mp 8 megapixels 8 million pixels camera photo quality image resolution 8mp camera picture quality 8mp resolution 8mp image",
      icon: "030",
      color: false,
   },
   {
      name: "9k",
      keywords: "9k 9,000 nine thousand high resolution quality high quality 9k resolution hd resolution 9k pixels",
      icon: "031",
      color: false,
   },
   {
      name: "9k plus",
      keywords: "9k plus 9k plus high resolution quality high quality 9k resolution hd resolution 9k pixels",
      icon: "032",
      color: false,
   },
   {
      name: "9mp",
      keywords: "9mp 9 megapixels 9 million pixels camera photo quality image resolution 9mp camera picture quality 9mp resolution 9mp image",
      icon: "033",
      color: false,
   },
   {
      name: "account tree",
      keywords: "account tree account tree hierarchy organization structure accounts account icon tree icon hierarchical structure",
      icon: "034",
      color: false,
   },
   {
      name: "add chart",
      keywords: "add chart add chart graph data add data add graph add icon add chart icon add graph icon",
      icon: "035",
      color: false,
   },
   {
      name: "add ic call",
      keywords: "add ic call add call phone telephone dial add phone add call add call icon add phone call",
      icon: "036",
      color: false,
   },
   {
      name: "add moderator",
      keywords: "add moderator add moderator assign appoint administer add admin add user add moderator icon assign moderator",
      icon: "037",
      color: false,
   },
   {
      name: "all inbox",
      keywords: "all inbox all inbox messages emails notifications received all messages all notifications inbox icon",
      icon: "038",
      color: false,
   },
   {
      name: "approval",
      keywords: "approval approve accept agree confirm permit permission approval icon acceptance approve icon",
      icon: "039",
      color: false,
   },
   {
      name: "assistant direction",
      keywords: "assistant direction assistant direction guide help assistant icon navigation assistant help assistant guide assistant direction icon",
      icon: "03a",
      color: false,
   },
   {
      name: "assistant navigation",
      keywords: "assistant navigation assistant navigation guide help assistant icon direction assistant help assistant guide assistant navigation icon",
      icon: "03b",
      color: false,
   },
   {
      name: "bookmarks2",
      keywords: "bookmarks bookmark favorites saved bookmarks icon bookmark icon saved items saved pages bookmark manager bookmark folder",
      icon: "03c",
      color: false,
   },
   {
      name: "bus alert",
      keywords: "bus alert bus alert transport warning bus icon alert icon bus warning public transport bus warning icon",
      icon: "03d",
      color: false,
   },
   {
      name: "cases",
      keywords: "cases case lawsuit legal legal case court briefcase cases icon legal icon legal matter",
      icon: "03e",
      color: false,
   },
   {
      name: "circle notifications",
      keywords: "circle notifications circle notifications alert circle alert circle warning circle notifications icon circle warning icon circle alert icon circle notification",
      icon: "03f",
      color: false,
   },
   {
      name: "closed caption off",
      keywords: "closed caption off closed caption caption off closed captioning disable closed caption off icon no caption closed caption disabled caption off",
      icon: "040",
      color: false,
   },
   {
      name: "connected tv",
      keywords: "connected tv connected tv smart tv connected television connected device connected tv icon smart tv icon tv icon connected screen",
      icon: "041",
      color: false,
   },
   {
      name: "dangerous",
      keywords: "dangerous danger warning caution hazard danger sign warning sign hazardous danger icon warning icon",
      icon: "042",
      color: false,
   },
   {
      name: "dashboard customize",
      keywords: "dashboard customize dashboard customize personalize edit dashboard options customize dashboard dashboard icon customize icon dashboard personalization",
      icon: "043",
      color: false,
   },
   {
      name: "desktop access disabled",
      keywords: "desktop access disabled desktop access disabled computer desktop access disable desktop icon no access restricted access",
      icon: "044",
      color: false,
   },
   {
      name: "drive file move outline",
      keywords: "drive file move outline drive file move outline transfer move file move document move folder move outline icon",
      icon: "045",
      color: false,
   },
   {
      name: "drive file rename outline",
      keywords: "drive file rename outline drive file rename outline change name rename file rename document rename folder rename outline icon",
      icon: "046",
      color: false,
   },
   {
      name: "drive folder upload",
      keywords: "drive folder upload drive folder upload drive upload upload folder upload directory cloud upload drive folder folder upload",
      icon: "047",
      color: false,
   },
   {
      name: "duo",
      keywords: "duo pair duet two double couple partners duo icon pair icon two icon",
      icon: "048",
      color: false,
   },
   {
      name: "explore off",
      keywords: "explore off explore off disabled explore disable explore off icon explore disabled explore icon no explore no exploration",
      icon: "049",
      color: false,
   },
   {
      name: "file download done",
      keywords: "file download done file download done completed finish file download download complete file icon download icon",
      icon: "04a",
      color: false,
   },
   {
      name: "rtt",
      keywords: "rtt real time text text communication typing real time rtt icon texting text message real time messaging",
      icon: "04b",
      color: false,
   },
   {
      name: "grid view",
      keywords: "grid view grid view layout arrangement grid mode grid display grid icon view options grid layout",
      icon: "04c",
      color: false,
   },
   {
      name: "hail",
      keywords: "hail weather storm precipitation rain hailstorm hail icon stormy weather hail warning weather icon",
      icon: "04d",
      color: false,
   },
   {
      name: "home filled",
      keywords: "home filled home house residence dwelling home icon house icon filled home home symbol home shape",
      icon: "04e",
      color: false,
   },
   {
      name: "imagesearch roller",
      keywords: "imagesearch roller image search roller search find lookup image search tool search tool image search icon roller icon",
      icon: "04f",
      color: false,
   },
   {
      name: "label off",
      keywords: "label off label off remove label disable label no label label icon label disabled remove tag no tag",
      icon: "050",
      color: false,
   },
   {
      name: "library add check",
      keywords: "library add check library add check add to library library add library check add to collection library icon check icon",
      icon: "051",
      color: false,
   },
   {
      name: "logout",
      keywords: "logout sign out exit log out leave quit end session logout icon sign out icon exit icon",
      icon: "052",
      color: false,
   },
   {
      name: "margin",
      keywords: "margin space padding border edge margin icon spacing margin space margin size margin settings",
      icon: "053",
      color: false,
   },
   {
      name: "mark as unread",
      keywords: "mark as unread mark unread flag indicator unopened unread message unread email mark as unread icon flag as unread",
      icon: "054",
      color: false,
   },
   {
      name: "menu open",
      keywords: "menu open menu open expand menu menu icon open menu show menu menu options menu interface menu button",
      icon: "055",
      color: false,
   },
   {
      name: "mp",
      keywords: "mp megapixel pixel resolution image quality photo resolution camera resolution image size pixel size megapixel icon",
      icon: "056",
      color: false,
   },
   {
      name: "offline share",
      keywords: "offline share offline share transfer send share offline offline sharing send offline share icon offline icon",
      icon: "057",
      color: false,
   },
   {
      name: "padding",
      keywords: "padding space margin border edge padding icon spacing padding space padding size padding settings",
      icon: "058",
      color: false,
   },
   {
      name: "panorama photosphere",
      keywords: "panorama photosphere panorama photosphere 360 360 degrees virtual reality panorama view panorama icon photosphere icon 360 view",
      icon: "059",
      color: false,
   },
   {
      name: "panorama photosphere select",
      keywords: "panorama photosphere select panorama photosphere 360 360 degrees virtual reality panorama view panorama icon photosphere icon 360 view",
      icon: "05a",
      color: false,
   },
   {
      name: "person add disabled",
      keywords: "person add disabled person add disabled new user add user user icon disabled user user disable add person",
      icon: "05b",
      color: false,
   },
   {
      name: "phone disabled",
      keywords: "phone disabled phone disabled no phone phone off disable phone phone icon no call phone disable phone off icon",
      icon: "05c",
      color: false,
   },
   {
      name: "phone enabled",
      keywords: "phone enabled phone enabled available call phone on enable phone phone icon call icon phone on icon",
      icon: "05d",
      color: false,
   },
   {
      name: "pivot table chart",
      keywords: "pivot table chart pivot table chart data analysis pivot table pivot chart pivot analysis pivot visualization",
      icon: "05e",
      color: false,
   },
   {
      name: "print disabled",
      keywords: "print disabled print disabled no print disable print printer printing print off disable printing print icon",
      icon: "05f",
      color: false,
   },
   {
      name: "railway alert",
      keywords: "railway alert railway train alert warning railway warning train warning railway icon train icon warning icon",
      icon: "060",
      color: false,
   },
   {
      name: "recommend",
      keywords: "recommend recommend suggest advise propose endorse recommendation recommend icon suggestion recommendation icon",
      icon: "061",
      color: false,
   },
   {
      name: "remove done",
      keywords: "remove done remove done completed finish delete checkmark complete task task done finished",
      icon: "062",
      color: false,
   },
   {
      name: "remove moderator",
      keywords: "remove moderator remove moderator admin administer revoke take away eliminate moderator icon remove admin",
      icon: "063",
      color: false,
   },
   {
      name: "repeat on",
      keywords: "repeat on repeat on cyclic loop again recurring repetition repeat icon enabled repeat",
      icon: "064",
      color: false,
   },
   {
      name: "repeat one on",
      keywords: "repeat one on repeat one on cyclic loop again recurring repetition repeat one icon enabled repeat one",
      icon: "065",
      color: false,
   },
   {
      name: "replay circle filled",
      keywords: "replay circle filled replay circle filled refresh restart reload replay icon circular replay replay circle",
      icon: "066",
      color: false,
   },
   {
      name: "reset tv",
      keywords: "reset tv reset tv television restart reboot refresh reset icon reset television restart tv",
      icon: "067",
      color: false,
   },
   {
      name: "sd",
      keywords: "sd storage device memory card sd card memory data storage flash sd icon memory storage",
      icon: "068",
      color: false,
   },
   {
      name: "shield3",
      keywords: "shield protection safeguard security defense guard shield icon secure protective defend",
      icon: "069",
      color: false,
   },
   {
      name: "shuffle on",
      keywords: "shuffle on shuffle on random mix reorder randomize shuffle icon enabled shuffle shuffle mode",
      icon: "06a",
      color: false,
   },
   {
      name: "speed",
      keywords: "speed velocity pace rate quickness rapid speedometer fast acceleration velocity icon",
      icon: "06b",
      color: false,
   },
   {
      name: "stacked bar chart",
      keywords: "stacked bar chart stacked bar chart chart graph data visual analytics stacked bars bar chart icon",
      icon: "06c",
      color: false,
   },
   {
      name: "stream",
      keywords: "stream flow current running move run streaming live continuous stream icon",
      icon: "06d",
      color: false,
   },
   {
      name: "swipe",
      keywords: "swipe gesture motion flick move slide touch swiping gesture icon touch screen",
      icon: "06e",
      color: false,
   },
   {
      name: "switch account",
      keywords: "switch account switch account change toggle swap profile user switch user account switch",
      icon: "06f",
      color: false,
   },
   {
      name: "tag2",
      keywords: "tag label marker identification category tag icon tagging classification tag label metadata",
      icon: "070",
      color: false,
   },
   {
      name: "thumb down off alt",
      keywords: "thumb down off alt thumb down dislike thumb down disapproval thumbs down thumb down icon disliked reject",
      icon: "071",
      color: false,
   },
   {
      name: "thumb up off alt",
      keywords: "thumb up off alt thumb up like thumbs up thumb up approval endorsement thumb up icon liked",
      icon: "072",
      color: false,
   },
   {
      name: "toggle off",
      keywords: "toggle off switch off turn off disable off switch toggle switch toggle off icon power off toggle off icon",
      icon: "073",
      color: false,
   },
   {
      name: "toggle on",
      keywords: "toggle on switch on turn on enable on switch toggle switch toggle on icon power on toggle on icon",
      icon: "074",
      color: false,
   },
   {
      name: "two wheeler",
      keywords: "two wheeler bike bicycle cycle motorbike scooter two wheeled vehicle transport two wheeler icon bicycle icon",
      icon: "075",
      color: false,
   },
   {
      name: "upload file",
      keywords: "upload file upload file document data transfer uploading send upload icon file upload",
      icon: "076",
      color: false,
   },
   {
      name: "view in ar",
      keywords: "view in ar view ar augmented reality 3d virtual experience visualization ar icon augmented reality view",
      icon: "077",
      color: false,
   },
   {
      name: "waterfall chart",
      keywords: "waterfall chart waterfall chart graph data visual analytics waterfall graph waterfall chart icon data waterfall",
      icon: "078",
      color: false,
   },
   {
      name: "wb shade",
      keywords: "wb shade wb shade white balance lighting brightness wb icon wb adjustment light adjustment brightness setting",
      icon: "079",
      color: false,
   },
   {
      name: "wb twighlight",
      keywords: "wb twilight wb twilight white balance lighting wb icon wb adjustment light adjustment wb twilight mode twilight mode",
      icon: "07a",
      color: false,
   },
   {
      name: "home work",
      keywords: "home work home work school education homework study learning house workplace",
      icon: "07b",
      color: false,
   },
   {
      name: "schedule send",
      keywords: "schedule send schedule send timing scheduling send later delayed scheduled schedule icon send timing",
      icon: "07c",
      color: false,
   },
   {
      name: "bolt1",
      keywords: "bolt lightning thunder energy electric power electricity bolt icon flash bolt symbol",
      icon: "07d",
      color: false,
   },
   {
      name: "send and archive",
      keywords: "send and archive send archive send email store file save send and save send icon archive email",
      icon: "07e",
      color: false,
   },
   {
      name: "workspaces filled",
      keywords: "workspaces filled workspaces workspace office work filled workspace icon workplace working filled workspace",
      icon: "07f",
      color: false,
   },
   {
      name: "file present",
      keywords: "file present file present document available file icon existing file present icon file available document available",
      icon: "080",
      color: false,
   },
   {
      name: "workspaces outline",
      keywords: "workspaces outline workspaces workspace office work outline workspace icon workplace working outline workspace",
      icon: "081",
      color: false,
   },
   {
      name: "fit screen",
      keywords: "fit screen fit screen adjust resize view fitting screen icon screen adjustment adjust screen",
      icon: "082",
      color: false,
   },
   {
      name: "saved search",
      keywords: "saved search saved search find lookup bookmark saved icon saved query saved result search history",
      icon: "083",
      color: false,
   },
   {
      name: "storefront",
      keywords: "storefront store shop retail market commerce storefront icon shopping business storefront display",
      icon: "084",
      color: false,
   },
   {
      name: "amp stories",
      keywords: "amp stories amp stories accelerated mobile pages news articles amp icon story amp storytelling mobile stories",
      icon: "085",
      color: false,
   },
   {
      name: "dynamic feed",
      keywords: "dynamic feed dynamic feed news updates stream dynamic content feed icon live feed real time updates",
      icon: "086",
      color: false,
   },
   {
      name: "euro1",
      keywords: "euro currency euro sign euro symbol money currency symbol euro icon money symbol european currency euro currency",
      icon: "087",
      color: false,
   },
   {
      name: "height",
      keywords: "height tall length elevation altitude measure height icon height measurement tallness height value",
      icon: "088",
      color: false,
   },
   {
      name: "policy",
      keywords: "policy rules regulation guidelines law policy icon rulebook terms standard policies",
      icon: "089",
      color: false,
   },
   {
      name: "sync alt",
      keywords: "sync alt sync synchronize update refresh sync icon syncing data sync sync alternative sync mode",
      icon: "08a",
      color: false,
   },
   {
      name: "menu book",
      keywords: "menu book menu book menu icon restaurant food catalog menu list menu options menu selection",
      icon: "08b",
      color: false,
   },
   {
      name: "emoji flags",
      keywords: "emoji flags emoji flags flag country nation emoji icon flag emoji national flags emoji flags icon",
      icon: "08c",
      color: false,
   },
   {
      name: "emoji food beverage",
      keywords: "emoji food beverage emoji food beverage drink eating emoji icon food icon drink icon beverage icon",
      icon: "08d",
      color: false,
   },
   {
      name: "emoji nature",
      keywords: "emoji nature emoji nature environment ecology natural emoji icon nature icon environment icon ecology icon",
      icon: "08e",
      color: false,
   },
   {
      name: "emoji people",
      keywords: "emoji people emoji people person human character emoji icon people icon person icon human icon",
      icon: "08f",
      color: false,
   },
   {
      name: "emoji symbols",
      keywords: "emoji symbols emoji symbols icon symbol shape emoji icon symbols icon symbolic iconic",
      icon: "090",
      color: false,
   },
   {
      name: "emoji transportation",
      keywords: "emoji transportation emoji transportation vehicle transport car emoji icon transportation icon vehicle icon car icon",
      icon: "091",
      color: false,
   },
   {
      name: "post add",
      keywords: "post add post add create write compose share post icon add post write post",
      icon: "092",
      color: false,
   },
   {
      name: "people alt",
      keywords: "people alt people persons individuals characters group people icon person icon user user icon",
      icon: "093",
      color: false,
   },
   {
      name: "emoji emotions",
      keywords: "emoji emotions emoji emotions mood feeling emoji icon emotion icon smiley happy emoji emotions icon",
      icon: "094",
      color: false,
   },
   {
      name: "emoji events",
      keywords: "emoji events emoji events occasion celebration emoji icon event icon celebration icon party festival",
      icon: "095",
      color: false,
   },
   {
      name: "emoji objects",
      keywords: "emoji objects emoji objects item thing equipment emoji icon object icon item icon equipment icon",
      icon: "096",
      color: false,
   },
   {
      name: "sports basketball",
      keywords: "sports basketball sports basketball game sport ball basketball icon basketball game basketball sport basketball hoop",
      icon: "097",
      color: false,
   },
   {
      name: "sports cricket",
      keywords: "sports cricket sports cricket game sport ball cricket icon cricket game cricket sport cricket bat",
      icon: "098",
      color: false,
   },
   {
      name: "sports esports",
      keywords: "sports esports sports esports gaming game sport esports icon esports game competitive gaming esports competition",
      icon: "099",
      color: false,
   },
   {
      name: "sports football",
      keywords: "sports football sports football game sport ball football icon football game football sport soccer ball",
      icon: "09a",
      color: false,
   },
   {
      name: "sports golf",
      keywords: "sports golf sports golf game sport ball golf icon golf game golf sport golf club",
      icon: "09b",
      color: false,
   },
   {
      name: "sports hockey",
      keywords: "sports hockey sports hockey game sport ball hockey icon hockey game hockey sport hockey stick",
      icon: "09c",
      color: false,
   },
   {
      name: "sports mma",
      keywords: "sports mma sports mma fighting mixed martial arts combat mma icon mma fight mma sport mma glove",
      icon: "09d",
      color: false,
   },
   {
      name: "sports motorsports",
      keywords: "sports motorsports sports motorsports racing cars motorbikes motorsports icon motor racing car racing motorbike racing",
      icon: "09e",
      color: false,
   },
   {
      name: "sports rugby",
      keywords: "sports rugby sports rugby game sport ball rugby icon rugby game rugby sport rugby ball",
      icon: "09f",
      color: false,
   },
   {
      name: "sports soccer",
      keywords: "sports soccer sports soccer game sport ball soccer icon soccer game soccer sport football ball",
      icon: "0a0",
      color: false,
   },
   {
      name: "sports",
      keywords: "sports activity athletics games competitions sport sports icon athletic events sporting activities physical activity",
      icon: "0a1",
      color: false,
   },
   {
      name: "sports volleyball",
      keywords: "sports volleyball sports volleyball game sport ball volleyball icon volleyball game volleyball sport volleyball net",
      icon: "0a2",
      color: false,
   },
   {
      name: "sports tennis",
      keywords: "sports tennis sports tennis game sport ball tennis icon tennis game tennis sport tennis racket",
      icon: "0a3",
      color: false,
   },
   {
      name: "sports handball",
      keywords: "sports handball sports handball game sport ball handball icon handball game handball sport handball court",
      icon: "0a4",
      color: false,
   },
   {
      name: "sports kabaddi",
      keywords: "sports kabaddi sports kabaddi game sport ball kabaddi icon kabaddi game kabaddi sport kabaddi court",
      icon: "0a5",
      color: false,
   },
   {
      name: "eco",
      keywords: "eco ecological environment green sustainable earth ecosystem eco icon environmental ecology",
      icon: "0a6",
      color: false,
   },
   {
      name: "museum",
      keywords: "museum exhibit gallery collection art history culture museum icon display museum building",
      icon: "0a7",
      color: false,
   },
   {
      name: "flip camera android",
      keywords: "flip camera android flip camera android flip camera rotate rear camera selfie camera flip camera icon android camera",
      icon: "0a8",
      color: false,
   },
   {
      name: "flip camera ios",
      keywords: "flip camera ios flip camera ios flip camera rotate rear camera selfie camera flip camera icon ios camera",
      icon: "0a9",
      color: false,
   },
   {
      name: "cancel schedule send",
      keywords: "cancel schedule send cancel schedule send undo abort rescind revoke cancel send cancel schedule",
      icon: "0aa",
      color: false,
   },
   {
      name: "apartment",
      keywords: "apartment building condominium flat residence apartment complex apartment icon housing apartment block multi storey building",
      icon: "0ab",
      color: false,
   },
   {
      name: "bathtub1",
      keywords: "bathtub bath tub shower bathroom clean bathtub icon relax hygiene bathtub silhouette",
      icon: "0ac",
      color: false,
   },
   {
      name: "deck",
      keywords: "deck patio terrace porch veranda deck icon outdoor space deck flooring exterior space outdoor area",
      icon: "0ad",
      color: false,
   },
   {
      name: "fireplace",
      keywords: "fireplace fire hearth chimney flame fireplace icon cozy warm home fireplace silhouette",
      icon: "0ae",
      color: false,
   },
   {
      name: "house",
      keywords: "house home residence dwelling building house icon household habitat home icon accommodation",
      icon: "0af",
      color: false,
   },
   {
      name: "king bed",
      keywords: "king bed king bed mattress bedroom sleep king size bed bed icon royal bed large bed",
      icon: "0b0",
      color: false,
   },
   {
      name: "nights stay",
      keywords: "nights stay night stay overnight accommodation lodging nights stay icon nighttime staying night time",
      icon: "0b1",
      color: false,
   },
   {
      name: "outdoor grill",
      keywords: "outdoor grill grill barbecue cook outdoor cooking outdoor grill icon grilling barbecue grill outdoor dining bbq",
      icon: "0b2",
      color: false,
   },
   {
      name: "single bed",
      keywords: "single bed single bed mattress bedroom sleep single bed icon bed icon small bed sleeping",
      icon: "0b3",
      color: false,
   },
   {
      name: "square foot",
      keywords: "square foot square foot area measurement size square footage square foot icon space room size",
      icon: "0b4",
      color: false,
   },
   {
      name: "double arrow",
      keywords: "double arrow arrow double direction move pointing double arrow icon arrows opposite bidirectional",
      icon: "0b5",
      color: false,
   },
   {
      name: "sports baseball",
      keywords: "sports baseball sports baseball game sport ball baseball icon baseball game baseball sport baseball bat",
      icon: "0b6",
      color: false,
   },
   {
      name: "attractions",
      keywords: "attractions sightseeing places of interest tourist attractions landmarks attractions icon points of interest visitor attractions sights tourism",
      icon: "0b7",
      color: false,
   },
   {
      name: "bakery dining",
      keywords: "bakery dining bakery dining cafe restaurant food bakery icon bread baked goods pastry",
      icon: "0b8",
      color: false,
   },
   {
      name: "breakfast dining",
      keywords: "breakfast dining breakfast dining restaurant meal food breakfast icon morning breakfast meal breakfast food",
      icon: "0b9",
      color: false,
   },
   {
      name: "car rental",
      keywords: "car rental car rental automobile hire vehicle car rental icon rent a car car hire rental car",
      icon: "0ba",
      color: false,
   },
   {
      name: "car repair",
      keywords: "car repair car repair automobile service mechanic car repair icon auto repair vehicle repair fix car",
      icon: "0bb",
      color: false,
   },
   {
      name: "dinner dining",
      keywords: "dinner dining dinner dining restaurant meal food dinner icon evening dinner meal dinner food",
      icon: "0bc",
      color: false,
   },
   {
      name: "dry cleaning",
      keywords: "dry cleaning dry cleaning laundry clean dry cleaning icon laundry service clean clothes dry clean washing",
      icon: "0bd",
      color: false,
   },
   {
      name: "hardware",
      keywords: "hardware tools equipment hardware store tools icon hardware tools building supplies hardware shop construction building",
      icon: "0be",
      color: false,
   },
   {
      name: "liquor",
      keywords: "liquor alcohol drink beverage liquor store liquor icon spirits alcoholic drinks drinking liquor bottle",
      icon: "0bf",
      color: false,
   },
   {
      name: "lunch dining",
      keywords: "lunch dining lunch dining restaurant meal food lunch icon midday meal lunch meal lunch food",
      icon: "0c0",
      color: false,
   },
   {
      name: "nightlife",
      keywords: "nightlife night life entertainment nighttime party nightclub nightlife icon night out nighttime activity",
      icon: "0c1",
      color: false,
   },
   {
      name: "park",
      keywords: "park parkland green space recreation area garden park icon public park outdoor park landscape park scenery",
      icon: "0c2",
      color: false,
   },
   {
      name: "ramen dining",
      keywords: "ramen dining ramen dining restaurant meal food ramen icon noodles ramen meal ramen food",
      icon: "0c3",
      color: false,
   },
   {
      name: "celebration",
      keywords: "celebration celebrate party event occasion festivity celebration icon joy festive celebration party",
      icon: "0c4",
      color: false,
   },
   {
      name: "theater comedy",
      keywords: "theater comedy theater comedy stage performing arts theater icon comedy show comedy theater theater performance comedy performance",
      icon: "0c5",
      color: false,
   },
   {
      name: "badge",
      keywords: "badge achievement award medal honor distinction merit decoration insignia recognition",
      icon: "0c6",
      color: false,
   },
   {
      name: "festival",
      keywords: "festival celebration event holiday festivity party ceremony occasion gathering festive",
      icon: "0c7",
      color: false,
   },
   {
      name: "icecream",
      keywords: "ice cream dessert treat scoop gelato frozen sweet cone flavor delicious",
      icon: "0c8",
      color: false,
   },
   {
      name: "volunteer activism",
      keywords: "volunteer activism volunteer activism charity cause community social action volunteering service",
      icon: "0c9",
      color: false,
   },
   {
      name: "contactless",
      keywords: "contactless contact free no touch hands free contactless payment no contact touchless hygienic safe convenient",
      icon: "0ca",
      color: false,
   },
   {
      name: "delivery dining",
      keywords: "delivery dining delivery takeout food delivery dining restaurant meal delivery ordering delivery service food",
      icon: "0cb",
      color: false,
   },
   {
      name: "brunch dining",
      keywords: "brunch dining brunch breakfast lunch dining meal morning late breakfast brunch meal brunch option",
      icon: "0cc",
      color: false,
   },
   {
      name: "takeout dining",
      keywords: "takeout dining takeout dining food meal restaurant to go grab and go carryout takeaway",
      icon: "0cd",
      color: false,
   },
   {
      name: "ac unit",
      keywords: "ac unit air conditioning cooling air conditioner ac climate control cool air cooling system temperature control air cooling",
      icon: "0ce",
      color: false,
   },
   {
      name: "airport shuttle",
      keywords: "airport shuttle shuttle transportation transfer airport shuttle service pickup drop off airport transport shuttle bus",
      icon: "0cf",
      color: false,
   },
   {
      name: "all inclusive",
      keywords: "all inclusive inclusive comprehensive complete total full service all services inclusive package inclusive deal all inclusive resort",
      icon: "0d0",
      color: false,
   },
   {
      name: "beach access",
      keywords: "beach access beach access shore sea ocean beachfront beach view coast seaside",
      icon: "0d1",
      color: false,
   },
   {
      name: "business center",
      keywords: "business center business center office workspace workplace business services work area corporate office services",
      icon: "0d2",
      color: false,
   },
   {
      name: "casino",
      keywords: "casino gambling gaming betting casino games roulette cards slot machines casino floor gambling establishment",
      icon: "0d3",
      color: false,
   },
   {
      name: "child care",
      keywords: "child care childcare daycare nursery babysitting child services child supervision preschool child support early childhood",
      icon: "0d4",
      color: false,
   },
   {
      name: "child friendly",
      keywords: "child friendly kid friendly family friendly children kids family child safe child oriented suitable for children child friendly environment",
      icon: "0d5",
      color: false,
   },
   {
      name: "fitness center",
      keywords: "fitness center fitness gym exercise workout training health fitness facility fitness club health club",
      icon: "0d6",
      color: false,
   },
   {
      name: "golf course",
      keywords: "golf course golf course golfing golf club fairway putting green 18 holes tee driving range",
      icon: "0d7",
      color: false,
   },
   {
      name: "hot tub",
      keywords: "hot tub jacuzzi spa whirlpool hot spring relaxation bath soak hydrotherapy hot tub spa",
      icon: "0d8",
      color: false,
   },
   {
      name: "kitchen",
      keywords: "kitchen cooking culinary food preparation chef cook kitchenette meal preparation cooking area kitchen appliances",
      icon: "0d9",
      color: false,
   },
   {
      name: "pool",
      keywords: "pool swimming pool swim poolside aquatic water recreation swimming pool area pool facilities",
      icon: "0da",
      color: false,
   },
   {
      name: "room service",
      keywords: "room service service hotel service hospitality in room service delivery accommodation service guest service concierge hotel amenities",
      icon: "0db",
      color: false,
   },
   {
      name: "smoke free",
      keywords: "smoke free no smoking smokeless non smoking smoke free environment clean air smoking ban no smoking area smoke free zone fresh air",
      icon: "0dc",
      color: false,
   },
   {
      name: "smoking rooms",
      keywords: "smoking rooms smoking rooms smoking area smoking allowed smoking section smoking accommodation smoking facilities smoking zone designated smoking area",
      icon: "0dd",
      color: false,
   },
   {
      name: "spa",
      keywords: "spa wellness relaxation massage pampering health therapy treatment spa services spa treatment",
      icon: "0de",
      color: false,
   },
   {
      name: "no meeting room",
      keywords: "no meeting room no meeting room no conference room no meeting space no boardroom no meeting facilities no event space no venue no room for meetings",
      icon: "0df",
      color: false,
   },
   {
      name: "meeting room",
      keywords: "meeting room conference room boardroom meeting space conference center event space venue room for meetings business meeting meeting facilities",
      icon: "0e0",
      color: false,
   },
   {
      name: "goat",
      keywords: "goat animal farm livestock mammal horned ruminant domestic goat icon hoofed",
      icon: "0e1",
      color: false,
   },
   {
      name: "5g",
      keywords: "5g 5g network high speed internet wireless 5g technology mobile network 5g connectivity 5g icon 5g signal 5g wireless",
      icon: "0e2",
      color: false,
   },
   {
      name: "ad units",
      keywords: "ad units advertising units ads advertisement marketing ad space promotional advertisement units banner ads advertising space",
      icon: "0e3",
      color: false,
   },
   {
      name: "add business",
      keywords: "add business add business addition create business creation add company add enterprise add business icon establish business",
      icon: "0e4",
      color: false,
   },
   {
      name: "add location alt",
      keywords: "add location alt add location map pin mark point add place add destination add spot add location icon",
      icon: "0e5",
      color: false,
   },
   {
      name: "add road",
      keywords: "add road add road path street route add route add highway add street add thoroughfare",
      icon: "0e6",
      color: false,
   },
   {
      name: "add to drive",
      keywords: "add to drive add drive save store upload add to storage add to cloud add to disk add to drive icon",
      icon: "0e7",
      color: false,
   },
   {
      name: "addchart",
      keywords: "add chart add chart graph data visualization add graph add diagram add visualization add chart icon",
      icon: "0e8",
      color: false,
   },
   {
      name: "admin panel settings",
      keywords: "admin panel settings admin panel settings administration control panel configuration administrator management admin settings admin panel icon",
      icon: "0e9",
      color: false,
   },
   {
      name: "agriculture",
      keywords: "agriculture farming agribusiness farm agricultural crop agricultural industry cultivation agricultural sector agriculture icon",
      icon: "0ea",
      color: false,
   },
   {
      name: "alt route",
      keywords: "alternative route alternate route alternative alternate route alternative path alternate path alternative road alternate road alt route",
      icon: "0eb",
      color: false,
   },
   {
      name: "analytics",
      keywords: "analytics data analytics analysis data analysis metrics statistics analytics tool analytical analytics icon analytical tool",
      icon: "0ec",
      color: false,
   },
   {
      name: "anchor1",
      keywords: "anchor nautical marine sailing boat ship naval sea mooring anchor icon",
      icon: "0ed",
      color: false,
   },
   {
      name: "animation",
      keywords: "animation animated motion cartoon moving animated icon animation tool animation software animated graphics animated illustration",
      icon: "0ee",
      color: false,
   },
   {
      name: "api",
      keywords: "api application programming interface integration api endpoint programming development software api service api integration api icon",
      icon: "0ef",
      color: false,
   },
   {
      name: "app blocking",
      keywords: "app blocking app blocking block restriction app control app management parental control app blocking icon app access control",
      icon: "0f0",
      color: false,
   },
   {
      name: "app registration",
      keywords: "app registration app registration sign up account creation enrollment app authentication app login app registration icon app signup",
      icon: "0f1",
      color: false,
   },
   {
      name: "app settings alt",
      keywords: "app settings alt app settings settings app configuration app options app preferences app controls app setup app customization app settings icon",
      icon: "0f2",
      color: false,
   },
   {
      name: "architecture",
      keywords: "architecture building design construction architectural structure building design architecture icon architectural design architect",
      icon: "0f3",
      color: false,
   },
   {
      name: "arrow circle down",
      keywords: "arrow circle down arrow down circle downwards fall arrow circle down icon arrow down circle icon downwards icon fall icon down arrow circle descend circle",
      icon: "0f4",
      color: false,
   },
   {
      name: "arrow circle up",
      keywords: "arrow circle up arrow up circle upwards rise arrow circle up icon arrow up circle icon upwards icon rise icon up arrow circle ascend circle",
      icon: "0f5",
      color: false,
   },
   {
      name: "article",
      keywords: "article news story publication report journalism content article icon article publication article writing",
      icon: "0f6",
      color: false,
   },
   {
      name: "attach email",
      keywords: "attach email attach email attachment message mail send email email attachment attach message attach email icon",
      icon: "0f7",
      color: false,
   },
   {
      name: "auto awesome",
      keywords: "auto awesome auto awesome enhancement improvement auto editing auto feature auto effect auto enhancement auto awesome icon",
      icon: "0f8",
      color: false,
   },
   {
      name: "auto awesome mosaic",
      keywords: "auto awesome mosaic auto awesome mosaic mosaic effect photo mosaic mosaic creation photo collage mosaic design auto mosaic",
      icon: "0f9",
      color: false,
   },
   {
      name: "auto awesome motion",
      keywords: "auto awesome motion auto awesome motion motion effect auto motion moving photo motion picture moving image auto motion effect",
      icon: "0fa",
      color: false,
   },
   {
      name: "auto delete",
      keywords: "auto delete auto delete automatic deletion auto removal auto cleanup auto erase auto delete icon automatic delete auto discard",
      icon: "0fb",
      color: false,
   },
   {
      name: "auto fix high",
      keywords: "auto fix high auto fix high enhancement improvement auto repair auto improvement auto enhancement auto fix high icon",
      icon: "0fc",
      color: false,
   },
   {
      name: "auto fix normal",
      keywords: "auto fix normal auto fix normal enhancement improvement auto repair auto improvement auto enhancement auto fix normal icon",
      icon: "0fd",
      color: false,
   },
   {
      name: "auto fix off",
      keywords: "auto fix off auto fix off disable off switch disable enhancement disable improvement disable auto fix auto fix off icon",
      icon: "0fe",
      color: false,
   },
   {
      name: "auto stories",
      keywords: "auto stories auto stories story tale narrative auto generated stories storytelling auto storytelling auto stories icon",
      icon: "0ff",
      color: false,
   },
   {
      name: "baby changing station",
      keywords: "baby changing station baby changing station diaper changing infant care changing table baby care changing facility baby changing baby changing station icon",
      icon: "100",
      color: false,
   },
   {
      name: "backpack",
      keywords: "backpack bag pack rucksack knapsack sack backpack icon travel bag backpacker school bag",
      icon: "101",
      color: false,
   },
   {
      name: "backup table",
      keywords: "backup table backup table data backup backup storage backup option backup database backup file backup system backup table icon",
      icon: "102",
      color: false,
   },
   {
      name: "batch prediction",
      keywords: "batch prediction batch prediction analytics forecasting data analysis prediction model machine learning data prediction batch prediction icon",
      icon: "103",
      color: false,
   },
   {
      name: "bedtime",
      keywords: "bedtime bed sleep rest night sleeping bedtime routine bedtime story sleep time bedtime icon",
      icon: "104",
      color: false,
   },
   {
      name: "bento",
      keywords: "bento lunchbox meal bento box japanese lunch lunch food takeout packed lunch bento icon",
      icon: "105",
      color: false,
   },
   {
      name: "bike scooter",
      keywords: "bike scooter bike scooter bicycle scooter cycle bike share bike rental scooter share bicycle rental",
      icon: "106",
      color: false,
   },
   {
      name: "biotech",
      keywords: "biotech biotechnology biology technology science genetics research biomedical biotech industry biotech icon",
      icon: "107",
      color: false,
   },
   {
      name: "block flipped",
      keywords: "block flipped block flipped block direction reverse block invert block block flip block turn block orientation block flipped icon",
      icon: "108",
      color: false,
   },
   {
      name: "browser not supported",
      keywords: "browser not supported browser not supported unsupported web browser incompatible browser browser warning unsupported browser browser error browser not supported icon",
      icon: "109",
      color: false,
   },
   {
      name: "build circle",
      keywords: "build circle build circle construction development build icon circular construction circular building circle construction circle development",
      icon: "10a",
      color: false,
   },
   {
      name: "calculate",
      keywords: "calculate calculator calculation compute math arithmetic calculation tool mathematics compute icon calculate symbol",
      icon: "10b",
      color: false,
   },
   {
      name: "campaign",
      keywords: "campaign marketing promotion advertising campaigning campaign strategy election political campaign campaign icon campaign message",
      icon: "10c",
      color: false,
   },
   {
      name: "carpenter",
      keywords: "carpenter carpentry woodworking craftsman woodwork woodworker carpenter tools carpentry tools carpenter icon carpentry icon",
      icon: "10d",
      color: false,
   },
   {
      name: "cast for education",
      keywords: "cast for education cast education casting streaming classroom teaching education technology cast icon casting icon",
      icon: "10e",
      color: false,
   },
   {
      name: "charging station",
      keywords: "charging station charging station charge charging point electric vehicle ev charger charging port charging infrastructure charging station icon",
      icon: "10f",
      color: false,
   },
   {
      name: "checkroom",
      keywords: "checkroom coatroom cloakroom room check storage room luggage storage baggage check checkroom service checkroom icon coatroom icon",
      icon: "110",
      color: false,
   },
   {
      name: "circle2",
      keywords: "circle round oval ring loop circular sphere circumference disk circle icon",
      icon: "111",
      color: false,
   },
   {
      name: "cleaning services",
      keywords: "cleaning services cleaning services clean maid service housekeeping cleaning company professional cleaning cleaning service icon cleaning personnel",
      icon: "112",
      color: false,
   },
   {
      name: "close fullscreen",
      keywords: "close fullscreen close fullscreen exit fullscreen close screen close display close icon fullscreen exit close fullscreen icon exit fullscreen icon",
      icon: "113",
      color: false,
   },
   {
      name: "closed caption disabled",
      keywords: "closed caption disabled closed caption disabled closed captioning cc subtitles captioning closed caption off closed caption disabled icon closed captioning disabled",
      icon: "114",
      color: false,
   },
   {
      name: "comment bank",
      keywords: "comment bank comment bank comments comment storage comment archive comment repository comment collection comment database comment bank icon",
      icon: "115",
      color: false,
   },
   {
      name: "construction",
      keywords: "construction building development work progress construction site building site construction icon work in progress construction symbol",
      icon: "116",
      color: false,
   },
   {
      name: "corporate fare",
      keywords: "corporate fare corporate fare business travel corporate travel business trip business fare corporate transportation corporate fare icon",
      icon: "117",
      color: false,
   },
   {
      name: "countertops",
      keywords: "countertops countertop kitchen counter work surface kitchen surface kitchen top kitchen counter countertops icon kitchen countertop kitchen surface",
      icon: "118",
      color: false,
   },
   {
      name: "design services",
      keywords: "design services design services graphic design creative services designer design company design agency designer services design services icon",
      icon: "119",
      color: false,
   },
   {
      name: "directions off",
      keywords: "directions off directions off no directions directionless lost navigation off lost direction directions off icon no navigation",
      icon: "11a",
      color: false,
   },
   {
      name: "dirty lens",
      keywords: "dirty lens dirty lens camera lens unclean dusty smudged lens cleaning dirty camera dirty lens icon",
      icon: "11b",
      color: false,
   },
   {
      name: "do not step",
      keywords: "do not step do not step warning caution prohibition danger no entry do not step icon no stepping",
      icon: "11c",
      color: false,
   },
   {
      name: "do not touch",
      keywords: "do not touch do not touch warning caution prohibition danger no touch do not touch icon no touching",
      icon: "11d",
      color: false,
   },
   {
      name: "domain verification",
      keywords: "domain verification domain verification domain validation domain ownership domain authentication verify domain domain confirmation domain verification icon domain validation icon",
      icon: "11e",
      color: false,
   },
   {
      name: "drive file move",
      keywords: "drive file move drive file move transfer relocate move file drive file transfer file movement file relocation",
      icon: "11f",
      color: false,
   },
   {
      name: "dry",
      keywords: "dry laundry drying dry cleaning clean dryer dry icon cleaning drying clothes dry clothes",
      icon: "120",
      color: false,
   },
   {
      name: "dynamic form",
      keywords: "dynamic form dynamic form interactive form form design online form web form dynamic document form creation dynamic form icon",
      icon: "121",
      color: false,
   },
   {
      name: "east",
      keywords: "east direction eastern compass east direction orientation east symbol east icon eastward east compass",
      icon: "122",
      color: false,
   },
   {
      name: "edit road",
      keywords: "edit road edit road modify road change road road editing roadwork edit route road improvement edit road icon",
      icon: "123",
      color: false,
   },
   {
      name: "electric bike",
      keywords: "electric bike electric bike bicycle e bike electric bicycle e bicycle electric transport e vehicle electric bike icon",
      icon: "124",
      color: false,
   },
   {
      name: "electric car",
      keywords: "electric car electric car vehicle electric vehicle ev electric automobile electric vehicle icon electric car icon electric auto",
      icon: "125",
      color: false,
   },
   {
      name: "electric moped",
      keywords: "electric moped electric moped scooter e moped electric scooter e scooter electric transport electric vehicle electric moped icon",
      icon: "126",
      color: false,
   },
   {
      name: "electric rickshaw",
      keywords: "electric rickshaw electric rickshaw auto rickshaw e rickshaw electric tricycle battery rickshaw electric transport electric vehicle electric rickshaw icon",
      icon: "127",
      color: false,
   },
   {
      name: "electric scooter",
      keywords: "electric scooter electric scooter e scooter scooter e scooter electric transport electric vehicle electric scooter icon electric scooter image",
      icon: "128",
      color: false,
   },
   {
      name: "electrical services",
      keywords: "electrical services electrical services electrician wiring electric work electrical engineering electrical maintenance electrical installation electrical services icon",
      icon: "129",
      color: false,
   },
   {
      name: "elevator",
      keywords: "elevator lift vertical transport building floor transportation up down lift icon elevator symbol",
      icon: "12a",
      color: false,
   },
   {
      name: "engineering",
      keywords: "engineering engineering symbol engineer construction design industry technical architecture engineering icon engineering concept",
      icon: "12b",
      color: false,
   },
   {
      name: "escalator",
      keywords: "escalator moving stairs staircase transportation up down escalator icon escalator symbol moving staircase stairs",
      icon: "12c",
      color: false,
   },
   {
      name: "escalator warning",
      keywords: "escalator warning escalator caution escalator danger warning caution danger escalator hazard escalator icon escalator symbol escalator safety",
      icon: "12d",
      color: false,
   },
   {
      name: "face retouching natural",
      keywords: "face retouching natural face retouch face editing natural retouching portrait editing photo retouch image retouching facial enhancement beauty editing face retouching icon",
      icon: "12e",
      color: false,
   },
   {
      name: "fact check",
      keywords: "fact check fact verification accuracy truth confirm validate checkmark fact checking fact check icon",
      icon: "12f",
      color: false,
   },
   {
      name: "family restroom",
      keywords: "family restroom family restroom bathroom toilet washroom facilities family friendly restroom sign restroom symbol",
      icon: "130",
      color: false,
   },
   {
      name: "fence",
      keywords: "fence boundary barrier enclosure perimeter border separation fencing fence icon fence symbol",
      icon: "131",
      color: false,
   },
   {
      name: "filter alt",
      keywords: "filter alt filter alternate filter sort organize search arrange filtering filter icon filtering options",
      icon: "132",
      color: false,
   },
   {
      name: "fire extinguisher",
      keywords: "fire extinguisher fire extinguish safety emergency firefighting safety equipment emergency equipment fire safety extinguisher icon",
      icon: "133",
      color: false,
   },
   {
      name: "flaky",
      keywords: "flaky flake fragile unstable crumbling delicate weak breakable brittle flaky icon",
      icon: "134",
      color: false,
   },
   {
      name: "food bank",
      keywords: "food bank food bank hunger relief charity donation community food assistance food donation food bank icon",
      icon: "135",
      color: false,
   },
   {
      name: "forward to inbox",
      keywords: "forward to inbox forward inbox email message transfer send forwarding forward to inbox icon email transfer",
      icon: "136",
      color: false,
   },
   {
      name: "foundation",
      keywords: "foundation base groundwork support structure building basis establishment foundation icon foundation symbol",
      icon: "137",
      color: false,
   },
   {
      name: "grading",
      keywords: "grading grade assessment evaluation rating scoring grading system grading icon evaluation system assessment icon",
      icon: "138",
      color: false,
   },
   {
      name: "grass",
      keywords: "grass lawn greenery field vegetation nature outdoors grassland grass icon grass symbol",
      icon: "139",
      color: false,
   },
   {
      name: "handyman",
      keywords: "handyman repair maintenance fix service craftsman handyman services handyman icon maintenance worker repairman",
      icon: "13a",
      color: false,
   },
   {
      name: "hdr enhanced select",
      keywords: "hdr enhanced select hdr enhanced select high dynamic range hdr image image enhancement hdr icon enhanced icon hdr symbol",
      icon: "13b",
      color: false,
   },
   {
      name: "hearing disabled",
      keywords: "hearing disabled hearing impairment deaf disability ear auditory hearing loss accessibility hearing disabled icon deaf symbol",
      icon: "13c",
      color: false,
   },
   {
      name: "help center",
      keywords: "help center help support assistance customer service information guidance help desk help center icon support center",
      icon: "13d",
      color: false,
   },
   {
      name: "highlight alt",
      keywords: "highlight alt highlight alternate highlight mark select emphasis highlighting highlighter highlight icon highlighting tool",
      icon: "13e",
      color: false,
   },
   {
      name: "history edu",
      keywords: "history edu history education historical past learning study history icon education icon historical education",
      icon: "13f",
      color: false,
   },
   {
      name: "history toggle off",
      keywords: "history toggle off history toggle off disable history history switch record off history icon toggle icon history toggle",
      icon: "140",
      color: false,
   },
   {
      name: "home repair service",
      keywords: "home repair service home repair repair service maintenance handyman home improvement house repair home repair icon maintenance service home service",
      icon: "141",
      color: false,
   },
   {
      name: "horizontal rule",
      keywords: "horizontal rule horizontal rule line divider separator horizontal line horizontal rule icon line divider page break",
      icon: "142",
      color: false,
   },
   {
      name: "hourglass bottom",
      keywords: "hourglass bottom hourglass bottom time sand clock countdown waiting hourglass icon hourglass symbol bottom hourglass",
      icon: "143",
      color: false,
   },
   {
      name: "hourglass disabled",
      keywords: "hourglass disabled hourglass disabled hourglass icon hourglass symbol disabled hourglass hourglass off inactive hourglass stopped hourglass hourglass pause",
      icon: "144",
      color: false,
   },
   {
      name: "hourglass top",
      keywords: "hourglass top hourglass top time sand clock countdown waiting hourglass icon hourglass symbol top hourglass",
      icon: "145",
      color: false,
   },
   {
      name: "house siding",
      keywords: "house siding house siding home building facade architecture construction house siding icon home exterior",
      icon: "146",
      color: false,
   },
   {
      name: "hvac",
      keywords: "hvac heating ventilation air conditioning cooling climate control hvac system hvac icon hvac symbol air system",
      icon: "147",
      color: false,
   },
   {
      name: "image not supported",
      keywords: "image not supported image not supported unsupported image picture graphic file photo image icon unsupported format",
      icon: "148",
      color: false,
   },
   {
      name: "insights",
      keywords: "insights insight analysis data information understanding knowledge insights icon data analysis insightful",
      icon: "149",
      color: false,
   },
   {
      name: "integration instructions",
      keywords: "integration instructions integration instructions guide manual tutorial setup integrate integration guide integration icon",
      icon: "14a",
      color: false,
   },
   {
      name: "ios share",
      keywords: "ios share ios share apple iphone sharing ios icon share icon apple share ios sharing",
      icon: "14b",
      color: false,
   },
   {
      name: "legend toggle",
      keywords: "legend toggle legend toggle show/hide legend toggle legend key map key legend icon toggle icon map legend",
      icon: "14c",
      color: false,
   },
   {
      name: "local fire department",
      keywords: "local fire department fire department firefighters emergency services fire station firefighters local fire department icon fire department symbol firefighters icon",
      icon: "14d",
      color: false,
   },
   {
      name: "local police",
      keywords: "local police police law enforcement security safety officers local police icon police symbol law enforcement icon police station",
      icon: "14e",
      color: false,
   },
   {
      name: "location pin",
      keywords: "location pin location pin map marker destination navigation location icon map pin pinpoint",
      icon: "14f",
      color: false,
   },
   {
      name: "lock clock",
      keywords: "lock clock lock clock time security schedule time lock locked lock icon clock icon",
      icon: "150",
      color: false,
   },
   {
      name: "login1",
      keywords: "login log in sign in authentication access account login icon sign in icon authentication icon login symbol",
      icon: "151",
      color: false,
   },
   {
      name: "maps ugc",
      keywords: "maps ugc maps ugc user generated content community mapping location maps icon ugc icon user generated content icon",
      icon: "152",
      color: false,
   },
   {
      name: "mark chat read",
      keywords: "mark chat read mark read chat read message read read indicator mark chat read chat icon mark read icon message read icon",
      icon: "153",
      color: false,
   },
   {
      name: "mark chat unread",
      keywords: "mark chat unread mark unread chat unread message unread unread indicator mark chat unread chat icon mark unread icon message unread icon",
      icon: "154",
      color: false,
   },
   {
      name: "mark email read",
      keywords: "mark email read mark read email read message read read indicator mark email read email icon mark read icon message read icon",
      icon: "155",
      color: false,
   },
   {
      name: "mark email unread",
      keywords: "mark email unread mark unread email unread message unread unread indicator mark email unread email icon mark unread icon message unread icon",
      icon: "156",
      color: false,
   },
   {
      name: "mediation",
      keywords: "mediation mediator arbitration negotiation resolution conflict resolution mediation icon negotiation icon arbitration icon mediation symbol",
      icon: "157",
      color: false,
   },
   {
      name: "medical services",
      keywords: "medical services medical services healthcare clinic hospital doctors medical assistance health services medical icon",
      icon: "158",
      color: false,
   },
   {
      name: "mic external off",
      keywords: "mic external off mic off external mic off microphone off mute audio off mic icon mic off icon mute icon microphone off icon",
      icon: "159",
      color: false,
   },
   {
      name: "mic external on",
      keywords: "mic external on mic on external mic on microphone on unmute audio on mic icon mic on icon unmute icon microphone on icon",
      icon: "15a",
      color: false,
   },
   {
      name: "microwave",
      keywords: "microwave oven appliance cooking kitchen microwave oven food heat microwave icon kitchen appliance",
      icon: "15b",
      color: false,
   },
   {
      name: "military tech",
      keywords: "military tech military technology defense army armed forces military technology military icon defense icon military symbol",
      icon: "15c",
      color: false,
   },
   {
      name: "miscellaneous services",
      keywords: "miscellaneous services miscellaneous services varied services assorted services miscellaneous icon services icon miscellaneous symbol varied services icon assorted services icon",
      icon: "15d",
      color: false,
   },
   {
      name: "model training",
      keywords: "model training training model machine learning ai artificial intelligence data analysis modeling training icon",
      icon: "15e",
      color: false,
   },
   {
      name: "monitor",
      keywords: "monitor screen display computer monitoring viewing screen icon monitor icon display icon computer monitor",
      icon: "15f",
      color: false,
   },
   {
      name: "moped",
      keywords: "moped scooter motorbike bike motorcycle transportation two wheeler moped icon scooter icon motorcycle icon",
      icon: "160",
      color: false,
   },
   {
      name: "more time",
      keywords: "more time extra time additional time extended time time extension duration time period time icon more time icon time extension icon",
      icon: "161",
      color: false,
   },
   {
      name: "motion photos off",
      keywords: "motion photos off motion off photo off image off disable motion motion photography motion off icon photo off icon image off icon motion photos icon",
      icon: "162",
      color: false,
   },
   {
      name: "motion photos on",
      keywords: "motion photos on motion on photo on image on enable motion motion photography motion on icon photo on icon image on icon motion photos icon",
      icon: "163",
      color: false,
   },
   {
      name: "motion photos paused",
      keywords: "motion photos paused motion paused photo paused image paused pause motion pause photography motion paused icon photo paused icon image paused icon paused motion",
      icon: "164",
      color: false,
   },
   {
      name: "multiple stop",
      keywords: "multiple stop multiple stop destination point route multiple stops multiple destinations multiple stop icon stop icon",
      icon: "165",
      color: false,
   },
   {
      name: "nat",
      keywords: "nat network address translation network internet communication routing nat icon network icon internet icon communication icon",
      icon: "166",
      color: false,
   },
   {
      name: "near me disabled",
      keywords: "near me disabled near me disabled location disabled location location disabled map location icon near me icon disabled icon",
      icon: "167",
      color: false,
   },
   {
      name: "next plan",
      keywords: "next plan next forward future upcoming schedule plan next icon forward icon future icon",
      icon: "168",
      color: false,
   },
   {
      name: "night shelter",
      keywords: "night shelter shelter night emergency shelter homeless shelter night icon shelter icon emergency shelter icon night shelter icon homeless shelter icon",
      icon: "169",
      color: false,
   },
   {
      name: "nightlight round",
      keywords: "nightlight round nightlight round night light nightlight icon round light night light nightlight symbol nightlight round icon",
      icon: "16a",
      color: false,
   },
   {
      name: "no cell",
      keywords: "no cell no signal cell phone off no reception no service cell phone icon no signal icon cell phone off icon no reception icon no service icon",
      icon: "16b",
      color: false,
   },
   {
      name: "no drinks",
      keywords: "no drinks no beverages no alcohol drink prohibition no drinking forbidden drinks no drinks icon no beverages icon no alcohol icon drink prohibition icon",
      icon: "16c",
      color: false,
   },
   {
      name: "no flash",
      keywords: "no flash no camera flash flash off no photography camera restriction no flash photography no flash icon no camera flash icon camera flash off no photography icon",
      icon: "16d",
      color: false,
   },
   {
      name: "no food",
      keywords: "no food no eating no snacks food restriction no meals forbidden food no food icon no eating icon no snacks icon food restriction icon",
      icon: "16e",
      color: false,
   },
   {
      name: "no meals",
      keywords: "no meals no lunch no dinner meal restriction no eating forbidden meals no meals icon no lunch icon no dinner icon meal restriction icon",
      icon: "16f",
      color: false,
   },
   {
      name: "no photography",
      keywords: "no photography no photos no pictures camera off photo restriction photography prohibition no photography icon no photos icon no pictures icon camera off icon",
      icon: "170",
      color: false,
   },
   {
      name: "no stroller",
      keywords: "no stroller no baby stroller stroller restriction no pram forbidden stroller no stroller icon no baby stroller icon stroller restriction icon no pram icon forbidden stroller icon",
      icon: "171",
      color: false,
   },
   {
      name: "no transfer",
      keywords: "no transfer no move no relocation transfer restriction no shift forbidden transfer no transfer icon no move icon no relocation icon transfer restriction icon",
      icon: "172",
      color: false,
   },
   {
      name: "north",
      keywords: "north compass direction orientation map cardinal direction north icon compass icon direction icon map icon",
      icon: "173",
      color: false,
   },
   {
      name: "north east",
      keywords: "north east compass direction orientation map cardinal direction north east icon compass icon direction icon map icon",
      icon: "174",
      color: false,
   },
   {
      name: "north west",
      keywords: "north west compass direction orientation map cardinal direction north west icon compass icon direction icon map icon",
      icon: "175",
      color: false,
   },
   {
      name: "not accessible",
      keywords: "not accessible inaccessible disabled access unavailable accessibility restricted access not accessible icon inaccessible icon disabled access icon unavailable icon",
      icon: "176",
      color: false,
   },
   {
      name: "not started",
      keywords: "not started unstarted pending incomplete not begun not commenced not started icon unstarted icon pending icon incomplete icon",
      icon: "177",
      color: false,
   },
   {
      name: "online prediction",
      keywords: "online prediction online prediction forecast analysis analytics online icon prediction icon forecast icon analysis icon",
      icon: "178",
      color: false,
   },
   {
      name: "open in full",
      keywords: "open in full open expand fullscreen maximize view full open icon fullscreen icon maximize icon view full icon",
      icon: "179",
      color: false,
   },
   {
      name: "outbox",
      keywords: "outbox email outbox mail outbox sent items pending mail queue outgoing mail outbox icon sent items icon mail outbox icon",
      icon: "17a",
      color: false,
   },
   {
      name: "outgoing mail",
      keywords: "outgoing mail outgoing mail email sent mail sending outbox outgoing mail icon sent mail icon email sending",
      icon: "17b",
      color: false,
   },
   {
      name: "outlet",
      keywords: "outlet power outlet plug socket electric socket wall socket electrical outlet power socket outlet icon power outlet icon plug socket icon",
      icon: "17c",
      color: false,
   },
   {
      name: "panorama horizontal select",
      keywords: "panorama horizontal select panorama horizontal select panoramic view landscape panorama icon horizontal icon panoramic view icon landscape icon",
      icon: "17d",
      color: false,
   },
   {
      name: "panorama vertical select",
      keywords: "panorama vertical select panorama vertical select panoramic view landscape panorama icon vertical icon panoramic view icon landscape icon",
      icon: "17e",
      color: false,
   },
   {
      name: "panorama wide angle select",
      keywords: "panorama wide angle select panorama wide angle select panoramic view landscape panorama icon wide angle icon panoramic view icon landscape icon",
      icon: "17f",
      color: false,
   },
   {
      name: "payments",
      keywords: "payments payment transaction money financial commerce payments icon payment icon transaction icon money icon",
      icon: "180",
      color: false,
   },
   {
      name: "pedal bike",
      keywords: "pedal bike bike bicycle cycle transportation pedal biking cycling pedal bike icon bicycle icon",
      icon: "181",
      color: false,
   },
   {
      name: "pending",
      keywords: "pending pending status in progress waiting to do pending icon in progress icon waiting icon to do icon",
      icon: "182",
      color: false,
   },
   {
      name: "pending actions",
      keywords: "pending actions pending incomplete tasks to do pending icon incomplete icon tasks icon to do icon",
      icon: "183",
      color: false,
   },
   {
      name: "person add alt",
      keywords: "person add alt add person new contact add contact new user add user person add icon add person icon new contact icon add contact icon",
      icon: "184",
      color: false,
   },
   {
      name: "person add alt 1",
      keywords: "person add alt 1 add person new contact add contact new user add user person add icon add person icon new contact icon add contact icon",
      icon: "185",
      color: false,
   },
   {
      name: "person remove",
      keywords: "person remove remove person delete contact remove contact delete user remove user person remove icon remove person icon delete contact icon remove contact icon",
      icon: "186",
      color: false,
   },
   {
      name: "person search",
      keywords: "person search find person search contact find contact search user find user person search icon find person icon search contact icon find contact icon",
      icon: "187",
      color: false,
   },
   {
      name: "pest control",
      keywords: "pest control pest control extermination insect rodent pest control icon pest icon control icon extermination icon",
      icon: "188",
      color: false,
   },
   {
      name: "pest control rodent",
      keywords: "pest control rodent pest control extermination rodent rat mouse pest control icon rodent control rat control pest control symbol",
      icon: "189",
      color: false,
   },
   {
      name: "photo camera back",
      keywords: "photo camera back camera back rear camera back camera photography photo camera icon camera back icon rear camera icon back camera icon",
      icon: "18a",
      color: false,
   },
   {
      name: "photo camera front",
      keywords: "photo camera front camera front front camera selfie camera front facing camera photo camera icon camera front icon front camera icon selfie camera icon",
      icon: "18b",
      color: false,
   },
   {
      name: "plagiarism",
      keywords: "plagiarism copied duplicate copying cheating academic dishonesty plagiarism icon duplicate icon copying icon cheating icon",
      icon: "18c",
      color: false,
   },
   {
      name: "play disabled",
      keywords: "play disabled play disabled inactive play inactive video inactive media play icon disabled play play disabled icon inactive play icon",
      icon: "18d",
      color: false,
   },
   {
      name: "plumbing",
      keywords: "plumbing pipes waterworks plumber maintenance water system pipe repair plumbing services water fixtures plumbing icon",
      icon: "18e",
      color: false,
   },
   {
      name: "point of sale",
      keywords: "point of sale pos sales checkout transaction retail purchase cash register payment point of sale icon",
      icon: "18f",
      color: false,
   },
   {
      name: "preview",
      keywords: "preview preview mode preview window previewing view previewing content preview feature preview icon preview option sneak peek",
      icon: "190",
      color: false,
   },
   {
      name: "privacy tip",
      keywords: "privacy tip privacy tip advice data protection online privacy security privacy awareness privacy guidelines privacy tip icon",
      icon: "191",
      color: false,
   },
   {
      name: "psychology",
      keywords: "psychology mental health mind behavior psychological therapy counseling emotions psychologist psychology icon",
      icon: "192",
      color: false,
   },
   {
      name: "public off",
      keywords: "public off off public restricted private not public disabled turned off off icon not available",
      icon: "193",
      color: false,
   },
   {
      name: "push pin",
      keywords: "push pin pin thumbtack attachment pinned attach pinning pin icon pinning tool push pin icon",
      icon: "194",
      color: false,
   },
   {
      name: "qr code",
      keywords: "qr code qr barcode scanning scan code 2d barcode qr scanning qr icon barcode icon",
      icon: "195",
      color: false,
   },
   {
      name: "qr code scanner",
      keywords: "qr code scanner qr scanner barcode scanner scanner scanning code reader qr reader qr scanning barcode scanning qr code scanner icon",
      icon: "196",
      color: false,
   },
   {
      name: "quickreply",
      keywords: "quick reply quickreply reply response instant reply fast response quick message quick response quickreply icon rapid reply",
      icon: "197",
      color: false,
   },
   {
      name: "read more",
      keywords: "read more read more expand view more details read full continue read more icon view details",
      icon: "198",
      color: false,
   },
   {
      name: "receipt long",
      keywords: "long receipt receipt bill invoice purchase receipt receipt document receipt paper receipt icon payment receipt long receipt icon",
      icon: "199",
      color: false,
   },
   {
      name: "request quote",
      keywords: "request quote quote request price quote quotation estimate requesting quote quote request request quote icon get quote",
      icon: "19a",
      color: false,
   },
   {
      name: "rice bowl",
      keywords: "rice bowl rice bowl food meal asian cuisine rice dish japanese food rice serving rice bowl icon",
      icon: "19b",
      color: false,
   },
   {
      name: "roofing",
      keywords: "roofing roof roof repair construction building roofing materials roofing services roofing contractor roofing icon roof installation",
      icon: "19c",
      color: false,
   },
   {
      name: "room preferences",
      keywords: "room preferences room preferences accommodation hotel lodging room options room settings room selection room preferences icon",
      icon: "19d",
      color: false,
   },
   {
      name: "rule",
      keywords: "rule regulation law guideline standard principle rule icon rulebook policy rule enforcement",
      icon: "19e",
      color: false,
   },
   {
      name: "rule folder",
      keywords: "rule folder rule folder regulations guidelines rules policy compliance rule storage rule folder icon",
      icon: "19f",
      color: false,
   },
   {
      name: "run circle",
      keywords: "run circle run circle exercise fitness workout jogging run icon running physical activity",
      icon: "1a0",
      color: false,
   },
   {
      name: "science",
      keywords: "science scientific research knowledge experiment learning science icon education scientific study science lab",
      icon: "1a1",
      color: false,
   },
   {
      name: "screen search desktop",
      keywords: "screen search desktop screen search desktop computer desktop search screen search computer search search desktop screen search desktop icon",
      icon: "1a2",
      color: false,
   },
   {
      name: "search off",
      keywords: "search off search off disabled search turn off search no search search deactivated search icon search disable search turned off",
      icon: "1a3",
      color: false,
   },
   {
      name: "self improvement",
      keywords: "self improvement self improvement personal growth development self help self improvement self development growth self improvement icon",
      icon: "1a4",
      color: false,
   },
   {
      name: "sensor door",
      keywords: "sensor door sensor door automatic door door sensor entry sensor door detection smart door sensor technology sensor door icon",
      icon: "1a5",
      color: false,
   },
   {
      name: "sensor window",
      keywords: "sensor window sensor window window sensor glass sensor window detection smart window sensor technology sensor window icon window security",
      icon: "1a6",
      color: false,
   },
   {
      name: "set meal",
      keywords: "set meal set meal menu combo meal special meal fixed meal set menu meal deal set meal icon",
      icon: "1a7",
      color: false,
   },
   {
      name: "shopping bag",
      keywords: "shopping bag bag purchase buy store shopping shopping bag icon shopping bag symbol shopping cart shopping basket",
      icon: "1a8",
      color: false,
   },
   {
      name: "signal cellular 0 bar",
      keywords: "signal cellular 0 bar signal cellular 0 bar no signal poor signal cell signal weak signal no reception no bars",
      icon: "1a9",
      color: false,
   },
   {
      name: "signal wifi 0 bar",
      keywords: "signal wifi 0 bar signal wifi 0 bar no signal poor signal wifi signal weak signal no connection no bars",
      icon: "1aa",
      color: false,
   },
   {
      name: "smart button",
      keywords: "smart button smart button intelligent button automation button smart device smart technology smart button icon smart control smart home",
      icon: "1ab",
      color: false,
   },
   {
      name: "snippet folder",
      keywords: "snippet folder snippet folder code snippet code folder code storage snippet storage code organization programming snippet folder icon",
      icon: "1ac",
      color: false,
   },
   {
      name: "soap",
      keywords: "soap cleaning hygiene soap bar personal care sanitation soap icon washing cleansing soap dispenser",
      icon: "1ad",
      color: false,
   },
   {
      name: "source",
      keywords: "source origin beginning cause foundation starting point source icon source code root origin source",
      icon: "1ae",
      color: false,
   },
   {
      name: "south",
      keywords: "south direction compass southward southern south icon south direction south symbol southbound southward direction",
      icon: "1af",
      color: false,
   },
   {
      name: "south east",
      keywords: "south east direction compass southeast south east southeastern south east icon southeast direction south east direction southeast symbol",
      icon: "1b0",
      color: false,
   },
   {
      name: "south west",
      keywords: "south west direction compass southwest south west southwestern south west icon southwest direction south west direction southwest symbol",
      icon: "1b1",
      color: false,
   },
   {
      name: "sports bar",
      keywords: "sports bar sports bar pub sports pub sports venue sports lounge sports bar icon sports entertainment sports facility",
      icon: "1b2",
      color: false,
   },
   {
      name: "stairs",
      keywords: "stairs steps staircase escalator climbing upstairs downstairs stairway stairs icon ascending",
      icon: "1b3",
      color: false,
   },
   {
      name: "star outline1",
      keywords: "star outline star outline favorite rating star icon empty star star symbol outline star star outline icon",
      icon: "1b4",
      color: false,
   },
   {
      name: "star rate",
      keywords: "star rate star rate rating review stars star rating star icon rate star star review",
      icon: "1b5",
      color: false,
   },
   {
      name: "sticky note 2",
      keywords: "sticky note 2 sticky note note memo reminder post it sticky note icon note pad message sticky note 2 icon",
      icon: "1b6",
      color: false,
   },
   {
      name: "stop circle",
      keywords: "stop circle stop music video media stop icon stop symbol stop circle icon stop circle button stop media",
      icon: "1b7",
      color: false,
   },
   {
      name: "stroller",
      keywords: "stroller baby stroller pram pushchair baby carriage baby transport stroller icon baby gear stroller symbol stroller silhouette",
      icon: "1b8",
      color: false,
   },
   {
      name: "subscript3",
      keywords: "subscript 3 subscript 3 sub script text formatting subscript number subscript text subscript 3 icon",
      icon: "1b9",
      color: false,
   },
   {
      name: "subtitles off",
      keywords: "subtitles off subtitles off closed captions subtitles disabled no subtitles subtitle settings subtitles icon no caption turn off subtitles",
      icon: "1ba",
      color: false,
   },
   {
      name: "superscript3",
      keywords: "superscript 3 superscript 3 super script text formatting superscript number superscript text superscript 3 icon",
      icon: "1bb",
      color: false,
   },
   {
      name: "support1",
      keywords: "support 1 support help assistance customer service support icon help desk technical support support service support center",
      icon: "1bc",
      color: false,
   },
   {
      name: "support agent",
      keywords: "support agent support agent customer service representative help desk technical support customer support support staff support agent icon",
      icon: "1bd",
      color: false,
   },
   {
      name: "switch left",
      keywords: "switch left switch left toggle change switching control direction switch icon left switch",
      icon: "1be",
      color: false,
   },
   {
      name: "switch right",
      keywords: "switch right switch right toggle change switching control direction switch icon right switch",
      icon: "1bf",
      color: false,
   },
   {
      name: "table rows",
      keywords: "table rows table rows spreadsheet data columns table format data rows row columns table rows icon",
      icon: "1c0",
      color: false,
   },
   {
      name: "table view",
      keywords: "table view table view data spreadsheet display table format table visualization view table table view icon",
      icon: "1c1",
      color: false,
   },
   {
      name: "tapas",
      keywords: "tapas spanish cuisine appetizers small plates snacks spanish food tapas bar tapas restaurant tapas icon tapas dishes",
      icon: "1c2",
      color: false,
   },
   {
      name: "taxi alert",
      keywords: "taxi alert taxi alert cab taxi warning taxi notification taxi icon alert notification taxi arrival taxi warning icon",
      icon: "1c3",
      color: false,
   },
   {
      name: "text snippet",
      keywords: "text snippet text snippet excerpt quote text sample content snippet text clip text passage text snippet icon",
      icon: "1c4",
      color: false,
   },
   {
      name: "tour",
      keywords: "tour sightseeing trip travel tourism guided tour excursion tour icon exploration tour guide",
      icon: "1c5",
      color: false,
   },
   {
      name: "tty1",
      keywords: "tty 1 tty 1 teletypewriter communication telephone tty icon text telephone tty device tty 1 icon",
      icon: "1c6",
      color: false,
   },
   {
      name: "umbrella1",
      keywords: "umbrella 1 umbrella rain protection weather umbrella icon rainy umbrella symbol parasol umbrella 1 icon",
      icon: "1c7",
      color: false,
   },
   {
      name: "upgrade",
      keywords: "upgrade update improvement enhancement upgrade icon enhance advance update icon modernize upgrade button",
      icon: "1c8",
      color: false,
   },
   {
      name: "verified",
      keywords: "verified verified badge confirmation guaranteed authentic verification verified icon certified validated verified symbol",
      icon: "1c9",
      color: false,
   },
   {
      name: "video settings",
      keywords: "video settings video settings video options video configuration video preferences video controls video setup video setup video settings icon",
      icon: "1ca",
      color: false,
   },
   {
      name: "view sidebar",
      keywords: "view sidebar view sidebar navigation layout interface panel side panel sidebar view sidebar icon",
      icon: "1cb",
      color: false,
   },
   {
      name: "wash",
      keywords: "wash clean washing cleaning laundry wash icon wash clothes washing machine cleanliness wash symbol",
      icon: "1cc",
      color: false,
   },
   {
      name: "water damage",
      keywords: "water damage water damage flood disaster water leak property damage water disaster water damage icon damage repair",
      icon: "1cd",
      color: false,
   },
   {
      name: "west",
      keywords: "west direction compass westward western west icon west direction west symbol westbound westward direction",
      icon: "1ce",
      color: false,
   },
   {
      name: "wheelchair pickup",
      keywords: "wheelchair pickup wheelchair pickup accessibility transport mobility wheelchair assistance pickup point wheelchair icon wheelchair pickup icon",
      icon: "1cf",
      color: false,
   },
   {
      name: "wifi calling",
      keywords: "wifi calling wifi calling vowifi internet calling wireless calling wifi phone wifi signal wifi icon wifi calling icon",
      icon: "1d0",
      color: false,
   },
   {
      name: "wifi protected setup",
      keywords: "wifi protected setup wifi wireless internet setup wps network connection security wifi icon",
      icon: "1d1",
      color: false,
   },
   {
      name: "wine bar",
      keywords: "wine bar wine bar pub wine tasting wine selection wine lounge wine cellar wine bar icon wine menu",
      icon: "1d2",
      color: false,
   },
   {
      name: "wrong location",
      keywords: "wrong location wrong location misplaced incorrect mislocated lost wrong direction wrong place wrong location icon",
      icon: "1d3",
      color: false,
   },
   {
      name: "wysiwyg",
      keywords: "wysiwyg wysiwyg editor editor web editor what you see is what you get content editor text editor web design wysiwyg icon wysiwyg interface",
      icon: "1d4",
      color: false,
   },
   {
      name: "leaderboard",
      keywords: "leaderboard ranking top scores competition chart performance leaderboard icon leaderboard display scoreboard leaderboard table",
      icon: "1d5",
      color: false,
   },
   {
      name: "6 ft apart",
      keywords: "6 ft apart social distancing distance six feet apart physical distancing spacing social distance covid 19 6 ft apart icon safety distance",
      icon: "1d6",
      color: false,
   },
   {
      name: "book online",
      keywords: "book online book online reservation booking online booking book now booking online book appointment book online icon",
      icon: "1d7",
      color: false,
   },
   {
      name: "clean hands",
      keywords: "clean hands clean hands hygiene hand washing cleanliness hand hygiene hand sanitizer clean hands icon hand cleaning",
      icon: "1d8",
      color: false,
   },
   {
      name: "connect without contact",
      keywords: "connect without contact connect contact no contact contactless contact free touchless connection safe contact contactless connection",
      icon: "1d9",
      color: false,
   },
   {
      name: "coronavirus",
      keywords: "coronavirus covid 19 virus pandemic health corona disease coronavirus icon virus outbreak public health",
      icon: "1da",
      color: false,
   },
   {
      name: "elderly",
      keywords: "elderly senior old age aging senior citizen elderly person elderly care elderly icon aging population elderly people",
      icon: "1db",
      color: false,
   },
   {
      name: "follow the signs",
      keywords: "follow the signs follow signs directions guidance navigation follow instructions follow path signage follow the signs icon",
      icon: "1dc",
      color: false,
   },
   {
      name: "leave bags at home",
      keywords: "leave bags at home leave bags home no bags baggage luggage bag storage leave bags leave bags at home icon",
      icon: "1dd",
      color: false,
   },
   {
      name: "masks",
      keywords: "masks mask face mask masking protective mask surgical mask mask icon face covering mask requirement mask symbol",
      icon: "1de",
      color: false,
   },
   {
      name: "reduce capacity",
      keywords: "reduce capacity reduce capacity limited capacity crowd control limited occupancy capacity limit reduced occupancy reduce capacity icon capacity reduction",
      icon: "1df",
      color: false,
   },
   {
      name: "sanitizer",
      keywords: "sanitizer hand sanitizer disinfectant sanitization hygiene sanitizing sanitizer icon hand sanitizer icon cleanliness antibacterial",
      icon: "1e0",
      color: false,
   },
   {
      name: "send to mobile",
      keywords: "send to mobile send mobile transfer send to phone mobile device send to smartphone send icon mobile transfer send to mobile icon",
      icon: "1e1",
      color: false,
   },
   {
      name: "sick",
      keywords: "sick ill unwell sickness fever health unhealthy sick icon not feeling well sick person",
      icon: "1e2",
      color: false,
   },
   {
      name: "add task",
      keywords: "add task add task to do create task task list task management task item add to task add task icon",
      icon: "1e3",
      color: false,
   },
   {
      name: "contact page",
      keywords: "contact page contact page contact form contact us contact information contact details contact page icon contact support customer contact",
      icon: "1e4",
      color: false,
   },
   {
      name: "disabled by default",
      keywords: "disabled by default disabled default turned off inactive not enabled deactivated disabled mode disabled state disabled by default icon",
      icon: "1e5",
      color: false,
   },
   {
      name: "facebook4",
      keywords: "facebook facebook 4 social media facebook logo facebook app facebook icon facebook page facebook network facebook platform facebook community",
      icon: "1e6",
      color: false,
   },
   {
      name: "groups",
      keywords: "groups community members team network society group chat social group group icon group discussion",
      icon: "1e7",
      color: false,
   },
   {
      name: "luggage",
      keywords: "luggage bags baggage travel suitcase travel bags carry on luggage icon baggage claim travel luggage",
      icon: "1e8",
      color: false,
   },
   {
      name: "no backpack",
      keywords: "no backpack no backpack restricted no bags no carry on no backpacks allowed no backpack icon no bags allowed no bagpacks",
      icon: "1e9",
      color: false,
   },
   {
      name: "no luggage",
      keywords: "no luggage no luggage restricted no bags no carry on no luggage allowed no luggage icon no bags allowed no luggage bags",
      icon: "1ea",
      color: false,
   },
   {
      name: "outbond",
      keywords: "outbond outbound outbound journey departure outbound flight outbound travel outbond icon outbound trip outgoing outbound direction",
      icon: "1eb",
      color: false,
   },
   {
      name: "published with changes",
      keywords: "published with changes published changes edited updates modified published with alterations revised changed published with changes icon",
      icon: "1ec",
      color: false,
   },
   {
      name: "request page",
      keywords: "request page request page request form request info request details request submission request page icon request service request information",
      icon: "1ed",
      color: false,
   },
   {
      name: "stacked line chart",
      keywords: "stacked line chart stacked chart line chart graph data visualization analytics stacked line line graph stacked line chart icon data chart",
      icon: "1ee",
      color: false,
   },
   {
      name: "unpublished",
      keywords: "unpublished not published draft private unreleased unpublished content unpublished icon hidden unpublished post not yet published",
      icon: "1ef",
      color: false,
   },
   {
      name: "align horizontal center",
      keywords: "align horizontal center align horizontal center alignment centered middle center alignment horizontal center align center",
      icon: "1f0",
      color: false,
   },
   {
      name: "align horizontal left",
      keywords: "align horizontal left align horizontal left alignment left aligned align left horizontal left left alignment align left horizontal",
      icon: "1f1",
      color: false,
   },
   {
      name: "align horizontal right",
      keywords: "align horizontal right horizontal alignment right align right alignment text alignment horizontal position right position align right align right icon right icon",
      icon: "1f2",
      color: false,
   },
   {
      name: "align vertical bottom",
      keywords: "align vertical bottom vertical alignment bottom align bottom alignment text alignment vertical position bottom position align bottom align bottom icon bottom icon",
      icon: "1f3",
      color: false,
   },
   {
      name: "align vertical center",
      keywords: "align vertical center vertical alignment center align center alignment text alignment vertical position center position align center align center icon center icon",
      icon: "1f4",
      color: false,
   },
   {
      name: "align vertical top",
      keywords: "align vertical top vertical alignment top align top alignment text alignment vertical position top position align top align top icon top icon",
      icon: "1f5",
      color: false,
   },
   {
      name: "horizontal distribute",
      keywords: "horizontal distribute horizontal distribution distribute horizontally equal spacing even distribution spread out horizontally horizontal spacing distribute icon spacing icon equal distribution",
      icon: "1f6",
      color: false,
   },
   {
      name: "qr code 2",
      keywords: "qr code 2 qr code barcode barcode scanner qr scanner qr icon barcode icon qr code 2 icon qr code scanner qr code reader",
      icon: "1f7",
      color: false,
   },
   {
      name: "update disabled",
      keywords: "update disabled disabled update update off update prohibition disable update update block stop update update disable update disabled icon update block icon",
      icon: "1f8",
      color: false,
   },
   {
      name: "vertical distribute",
      keywords: "vertical distribute vertical distribution distribute vertically equal spacing even distribution spread out vertically vertical spacing distribute icon spacing icon equal distribution",
      icon: "1f9",
      color: false,
   },
   {
      name: "asterisk",
      keywords: "asterisk star asterisk symbol star symbol multiply star shape asterisk icon star icon multiplication multiply symbol",
      icon: "1fa",
      color: false,
   },
   {
      name: "plus1",
      keywords: "plus add addition plus sign add symbol addition sign plus icon add icon plus1 icon add1",
      icon: "1fb",
      color: false,
   },
   {
      name: "question1",
      keywords: "question question mark help inquiry query interrogative questioning doubt question symbol question mark icon",
      icon: "1fc",
      color: false,
   },
   {
      name: "minus1",
      keywords: "minus subtract subtraction minus sign remove minus symbol minus icon subtract icon minus1 icon subtract1",
      icon: "1fd",
      color: false,
   },
   {
      name: "glass1",
      keywords: "glass magnifying glass search find zoom magnifier magnifying lens searching glass icon magnifying glass icon",
      icon: "1fe",
      color: false,
   },
   {
      name: "music1",
      keywords: "music musical note sound melody song audio music note music symbol music icon musical note icon",
      icon: "1ff",
      color: false,
   },
   {
      name: "search1",
      keywords: "search find magnifying glass lookup explore discover seek searching search icon magnifying glass icon",
      icon: "200",
      color: false,
   },
   {
      name: "envelope o",
      keywords: "envelope o email mail message communication letter post correspondence envelope icon email icon",
      icon: "201",
      color: false,
   },
   {
      name: "heart1",
      keywords: "heart love like affection emotion valentine romance passion heart icon love icon",
      icon: "202",
      color: false,
   },
   {
      name: "star",
      keywords: "star rating favorite highlight award achievement top best star icon rating icon",
      icon: "203",
      color: false,
   },
   {
      name: "star o",
      keywords: "star o empty star star outline rating favorite highlight star symbol star icon outline star unfilled star",
      icon: "204",
      color: false,
   },
   {
      name: "user1",
      keywords: "user person account profile human avatar member user icon profile icon person icon",
      icon: "205",
      color: false,
   },
   {
      name: "film1",
      keywords: "film movie cinema video motion picture filmstrip camera movie reel film icon movie icon",
      icon: "206",
      color: false,
   },
   {
      name: "th large",
      keywords: "th large grid table spreadsheet data layout large grid th icon grid icon table icon",
      icon: "207",
      color: false,
   },
   {
      name: "th",
      keywords: "th grid table spreadsheet data layout th icon grid icon table icon small grid",
      icon: "208",
      color: false,
   },
   {
      name: "th list",
      keywords: "th list list table spreadsheet data layout list view th icon list icon table icon",
      icon: "209",
      color: false,
   },
   {
      name: "check",
      keywords: "check tick mark verified correct true complete checkmark check icon tick icon",
      icon: "20a",
      color: false,
   },
   {
      name: "close",
      keywords: "close x remove cancel delete dismiss cross exit close icon x icon",
      icon: "20b",
      color: false,
   },
   {
      name: "remove",
      keywords: "remove clear delete erase eliminate take away discard remove icon delete icon clear icon",
      icon: "20b",
      color: false,
   },
   {
      name: "times",
      keywords: "times close x remove cancel delete dismiss cross exit times icon",
      icon: "20b",
      color: false,
   },
   {
      name: "search plus",
      keywords: "search plus search find zoom magnifying glass lookup explore discover seek magnifier",
      icon: "20c",
      color: false,
   },
   {
      name: "search minus",
      keywords: "search minus search find zoom out magnifying glass lookup explore discover seek magnifier",
      icon: "20d",
      color: false,
   },
   {
      name: "power off",
      keywords: "power off turn off shutdown power down switch off power button off button power icon off icon shutdown icon",
      icon: "20e",
      color: false,
   },
   {
      name: "signal",
      keywords: "signal connection network bars strength reception wifi internet signal icon network icon",
      icon: "20f",
      color: false,
   },
   {
      name: "cog1",
      keywords: "cog gear settings options preferences configuration setup mechanism cogwheel gear icon",
      icon: "210",
      color: false,
   },
   {
      name: "gear",
      keywords: "gear cog settings options preferences configuration setup mechanism cogwheel gear icon",
      icon: "210",
      color: false,
   },
   {
      name: "trash o",
      keywords: "trash o delete remove bin garbage waste discard trash trash icon delete icon",
      icon: "211",
      color: false,
   },
   {
      name: "home1",
      keywords: "home house building residence dwelling place home icon house icon building icon residence icon",
      icon: "212",
      color: false,
   },
   {
      name: "file o",
      keywords: "file o file document page paper text file icon document icon page icon paper icon",
      icon: "213",
      color: false,
   },
   {
      name: "clock o",
      keywords: "clock o clock time hour watch alarm timepiece clock icon time icon hour icon",
      icon: "214",
      color: false,
   },
   {
      name: "road1",
      keywords: "road street highway route path journey travel roadway road icon street icon",
      icon: "215",
      color: false,
   },
   {
      name: "download1",
      keywords: "download save store get receive fetch downloading download icon save icon download symbol",
      icon: "216",
      color: false,
   },
   {
      name: "arrow circle o down",
      keywords: "arrow circle o down down arrow arrow down downward direction navigation pointer arrow circle o down arrow circle arrow down circle",
      icon: "217",
      color: false,
   },
   {
      name: "arrow circle o up",
      keywords: "arrow circle o up up arrow arrow up upward direction navigation pointer arrow circle o up arrow circle arrow up circle",
      icon: "218",
      color: false,
   },
   {
      name: "inbox",
      keywords: "inbox mail message receive communication mailbox email inbox icon mail icon message icon",
      icon: "219",
      color: false,
   },
   {
      name: "play circle o",
      keywords: "play circle o play start begin launch go play button play icon start button play circle",
      icon: "21a",
      color: false,
   },
   {
      name: "repeat",
      keywords: "repeat loop cycle refresh reload replay recurrence repeat icon loop icon refresh icon",
      icon: "21b",
      color: false,
   },
   {
      name: "rotate right",
      keywords: "rotate right rotate right turn spin revolve rotate clockwise right rotation rotate right icon rotate icon",
      icon: "21b",
      color: false,
   },
   {
      name: "refresh",
      keywords: "refresh reload update sync renew restart refresh icon reload icon update icon sync icon",
      icon: "21c",
      color: false,
   },
   {
      name: "list alt",
      keywords: "list alt list bullets items points index listing list alt icon list icon bullet list",
      icon: "21d",
      color: false,
   },
   {
      name: "lock1",
      keywords: "lock secure protect security safe privacy padlock lock icon secure icon lock1 icon",
      icon: "21e",
      color: false,
   },
   {
      name: "flag1",
      keywords: "flag mark indicator signal banner symbol nationality flag icon mark icon flag1 icon",
      icon: "21f",
      color: false,
   },
   {
      name: "headphones1",
      keywords: "headphones earphones audio sound music listen headset headphones icon earphones icon music icon",
      icon: "220",
      color: false,
   },
   {
      name: "volume off",
      keywords: "volume off mute sound off silence no sound mute icon volume off icon sound off icon no sound icon",
      icon: "221",
      color: false,
   },
   {
      name: "volume down",
      keywords: "volume down sound decrease decrease volume reduce sound volume decrease volume down icon sound decrease icon reduce volume lower volume",
      icon: "222",
      color: false,
   },
   {
      name: "volume up",
      keywords: "volume up sound increase increase volume raise sound volume increase volume up icon sound increase icon increase volume icon raise volume",
      icon: "223",
      color: false,
   },
   {
      name: "qrcode1",
      keywords: "qrcode qr code barcode scan barcode scanner qr scanner qrcode icon qr code icon barcode icon scan icon",
      icon: "224",
      color: false,
   },
   {
      name: "barcode1",
      keywords: "barcode barcode scanner scan qr code qr scanner barcode icon barcode scanner icon scan icon qr code icon qr scanner icon",
      icon: "225",
      color: false,
   },
   {
      name: "tag",
      keywords: "tag label badge marker identifier category tag icon label icon badge icon marker icon",
      icon: "226",
      color: false,
   },
   {
      name: "tags",
      keywords: "tags labels badges markers identifiers categories tags icon labels icon badges icon markers icon",
      icon: "227",
      color: false,
   },
   {
      name: "book1",
      keywords: "book notebook journal diary publication text reading book icon notebook icon journal icon",
      icon: "228",
      color: false,
   },
   {
      name: "bookmark1",
      keywords: "bookmark flag marker favorite tag label bookmark icon flag icon marker icon favorite icon",
      icon: "229",
      color: false,
   },
   {
      name: "print",
      keywords: "print printer paper output hardcopy document print icon printer icon paper icon output icon",
      icon: "22a",
      color: false,
   },
   {
      name: "camera1",
      keywords: "camera photography picture photo image snapshot camera icon photography icon photo icon picture icon",
      icon: "22b",
      color: false,
   },
   {
      name: "font1",
      keywords: "font text typography style writing characters font icon text icon typography icon style icon",
      icon: "22c",
      color: false,
   },
   {
      name: "bold1",
      keywords: "bold bold text strong emphasis thick bold icon bold text icon strong text emphasis text thick text",
      icon: "22d",
      color: false,
   },
   {
      name: "italic1",
      keywords: "italic italicize slant oblique cursive emphasis italic icon italicize icon slant icon oblique icon",
      icon: "22e",
      color: false,
   },
   {
      name: "text height1",
      keywords: "text height font size character height line height letter height text height icon font size icon character height icon line height icon letter height icon",
      icon: "22f",
      color: false,
   },
   {
      name: "text width1",
      keywords: "text width text size width line length character width text width icon text size icon width icon line length icon character width icon",
      icon: "230",
      color: false,
   },
   {
      name: "align left",
      keywords: "align left left align text alignment horizontal alignment left position left justify align left icon left align icon left justify icon text alignment icon",
      icon: "231",
      color: false,
   },
   {
      name: "align center",
      keywords: "align center center align text alignment horizontal alignment center position center justify align center icon center align icon center justify icon text alignment icon",
      icon: "232",
      color: false,
   },
   {
      name: "align right",
      keywords: "align right right align text alignment horizontal alignment right position right justify align right icon right align icon right justify icon text alignment icon",
      icon: "233",
      color: false,
   },
   {
      name: "align justify",
      keywords: "align justify justify text alignment horizontal alignment justify text align justify icon justify icon text alignment icon horizontal alignment icon align justify",
      icon: "234",
      color: false,
   },
   {
      name: "list1",
      keywords: "list bulleted list unordered list items points index listing list icon bulleted list icon unordered list icon",
      icon: "235",
      color: false,
   },
   {
      name: "dedent",
      keywords: "dedent outdent decrease indent remove indent reduce indent dedent icon outdent icon decrease indent icon remove indent icon reduce indent icon",
      icon: "236",
      color: false,
   },
   {
      name: "outdent",
      keywords: "outdent dedent decrease indent remove indent reduce indent outdent icon dedent icon decrease indent icon remove indent icon reduce indent icon",
      icon: "236",
      color: false,
   },
   {
      name: "indent",
      keywords: "indent increase indent add indent indentation expand indent indent icon increase indent icon add indent icon indentation icon expand indent icon",
      icon: "237",
      color: false,
   },
   {
      name: "video camera1",
      keywords: "video camera video movie film cinema camera recording video camera icon video icon movie icon",
      icon: "238",
      color: false,
   },
   {
      name: "image1",
      keywords: "image picture photo photograph graphic visual image icon picture icon photo icon photograph icon",
      icon: "239",
      color: false,
   },
   {
      name: "photo",
      keywords: "photo image picture photograph graphic visual photo icon image icon picture icon photograph icon",
      icon: "239",
      color: false,
   },
   {
      name: "picture o",
      keywords: "picture o image photo photograph graphic visual picture icon image icon photo icon photograph icon",
      icon: "239",
      color: false,
   },
   {
      name: "pencil1",
      keywords: "pencil write draw sketch edit pencil icon write icon draw icon sketch icon edit icon",
      icon: "23a",
      color: false,
   },
   {
      name: "map marker",
      keywords: "map marker location pin map pin navigation directions map marker icon location icon pin icon map pin icon",
      icon: "23b",
      color: false,
   },
   {
      name: "adjust",
      keywords: "adjust settings configure modify adapt tune adjust icon settings icon configure icon modify icon",
      icon: "23c",
      color: false,
   },
   {
      name: "tint",
      keywords: "tint color shade hue tone dye tint icon color icon shade icon hue icon",
      icon: "23d",
      color: false,
   },
   {
      name: "edit",
      keywords: "edit pencil modify change revise edit icon pencil icon modify icon change icon revise icon",
      icon: "23e",
      color: false,
   },
   {
      name: "pencil square o",
      keywords: "pencil square o edit modify change revise edit icon modify icon change icon revise icon pencil square o icon",
      icon: "23e",
      color: false,
   },
   {
      name: "share square o",
      keywords: "share square o share send forward distribute broadcast share icon send icon forward icon distribute icon",
      icon: "23f",
      color: false,
   },
   {
      name: "check square o",
      keywords: "check square o check tick mark verified correct true complete checkmark check icon",
      icon: "240",
      color: false,
   },
   {
      name: "arrows",
      keywords: "arrows directions navigation pointers indicators arrows icon directions icon navigation icon pointers icon indicators icon",
      icon: "241",
      color: false,
   },
   {
      name: "step backward",
      keywords: "step backward back rewind previous reverse step backward icon back icon rewind icon previous icon reverse icon",
      icon: "242",
      color: false,
   },
   {
      name: "fast backward",
      keywords: "fast backward back rewind previous reverse fast backward icon back icon rewind icon previous icon reverse icon",
      icon: "243",
      color: false,
   },
   {
      name: "backward1",
      keywords: "backward back rewind previous reverse backward icon back icon rewind icon previous icon reverse icon",
      icon: "244",
      color: false,
   },
   {
      name: "play1",
      keywords: "play start begin launch go play icon start icon begin icon launch icon go icon",
      icon: "245",
      color: false,
   },
   {
      name: "pause1",
      keywords: "pause stop hold wait pause icon stop icon hold icon wait icon pause button",
      icon: "246",
      color: false,
   },
   {
      name: "stop1",
      keywords: "stop halt end terminate stop icon halt icon end icon terminate icon stop button",
      icon: "247",
      color: false,
   },
   {
      name: "forward1",
      keywords: "forward next advance forward icon next icon advance icon forward button next button advance button",
      icon: "248",
      color: false,
   },
   {
      name: "fast forward",
      keywords: "fast forward forward next advance fast forward icon forward icon next icon advance icon fast forward button",
      icon: "249",
      color: false,
   },
   {
      name: "step forward",
      keywords: "step forward forward next advance step forward icon forward icon next icon advance icon step forward button",
      icon: "24a",
      color: false,
   },
   {
      name: "eject1",
      keywords: "eject remove extract eject icon remove icon extract icon eject button remove button extract button",
      icon: "24b",
      color: false,
   },
   {
      name: "chevron left",
      keywords: "chevron left arrow left backward previous return chevron left icon arrow left icon backward icon previous icon return icon",
      icon: "24c",
      color: false,
   },
   {
      name: "chevron right",
      keywords: "chevron right arrow right forward next advance chevron right icon arrow right icon forward icon next icon advance icon",
      icon: "24d",
      color: false,
   },
   {
      name: "plus circle",
      keywords: "plus circle add circle addition circle add icon addition symbol plus sign add circle icon add circle symbol plus symbol circle with plus",
      icon: "24e",
      color: false,
   },
   {
      name: "minus circle",
      keywords: "minus circle subtract circle subtraction circle minus icon subtraction symbol minus sign minus circle icon minus circle symbol subtract circle icon circle with minus",
      icon: "24f",
      color: false,
   },
   {
      name: "times circle",
      keywords: "times circle multiply circle multiplication circle times icon multiplication symbol times circle icon times circle symbol multiply circle icon circle with times cross circle",
      icon: "250",
      color: false,
   },
   {
      name: "check circle",
      keywords: "check circle tick circle checkmark circle check icon tick icon checkmark icon check circle icon check circle symbol tick circle icon circle with checkmark",
      icon: "251",
      color: false,
   },
   {
      name: "question circle",
      keywords: "question circle help circle query circle question icon help icon query icon question circle icon question circle symbol help circle icon circle with question mark",
      icon: "252",
      color: false,
   },
   {
      name: "info circle",
      keywords: "info circle information circle info icon information icon info circle icon info circle symbol information circle icon information circle symbol circle with information info symbol",
      icon: "253",
      color: false,
   },
   {
      name: "crosshairs",
      keywords: "crosshairs target aim crosshair icon target icon aiming icon crosshairs icon target symbol aim symbol crosshair symbol",
      icon: "254",
      color: false,
   },
   {
      name: "times circle o",
      keywords: "times circle o remove circle delete circle times circle outline times circle icon remove circle icon delete circle icon times circle outline icon circle with cross cross circle outline",
      icon: "255",
      color: false,
   },
   {
      name: "check circle o",
      keywords: "check circle o tick circle o checkmark circle o check circle outline checkmark circle outline check circle icon tick circle icon checkmark circle icon checkmark circle outline icon circle with tick",
      icon: "256",
      color: false,
   },
   {
      name: "ban",
      keywords: "ban prohibition forbidden ban icon prohibition icon forbidden icon ban symbol prohibition symbol forbidden symbol restricted",
      icon: "257",
      color: false,
   },
   {
      name: "arrow left1",
      keywords: "arrow left1 left arrow back arrow left direction previous left arrow icon back arrow icon left direction icon previous icon leftward",
      icon: "258",
      color: false,
   },
   {
      name: "arrow right1",
      keywords: "arrow right1 right arrow forward arrow right direction next right arrow icon forward arrow icon right direction icon next icon rightward",
      icon: "259",
      color: false,
   },
   {
      name: "arrow up1",
      keywords: "arrow up1 up arrow upward arrow direction up arrow up icon upward arrow icon direction up icon up arrow symbol upward arrow symbol ascend",
      icon: "25a",
      color: false,
   },
   {
      name: "arrow down1",
      keywords: "arrow down1 down arrow downward arrow direction down arrow down icon downward arrow icon direction down icon down arrow symbol downward arrow symbol descend",
      icon: "25b",
      color: false,
   },
   {
      name: "mail forward",
      keywords: "mail forward forward email forward message email forward forward mail forward icon mail forward icon forward email icon forward message icon email forward icon",
      icon: "25c",
      color: false,
   },
   {
      name: "share1",
      keywords: "share1 share social share share icon social sharing share symbol share button social media share share icon share button",
      icon: "25c",
      color: false,
   },
   {
      name: "expand",
      keywords: "expand enlarge extend expand icon enlarge icon expand symbol expand button enlarge button maximize fullscreen",
      icon: "25d",
      color: false,
   },
   {
      name: "compress",
      keywords: "compress shrink reduce compress icon shrink icon compress symbol compress button shrink button minimize collapse",
      icon: "25e",
      color: false,
   },
   {
      name: "exclamation circle",
      keywords: "exclamation circle warning circle alert circle exclamation icon warning icon alert icon exclamation circle icon exclamation circle symbol warning circle icon alert circle icon",
      icon: "25f",
      color: false,
   },
   {
      name: "gift1",
      keywords: "gift1 gift present gift box gift icon present icon gift symbol present symbol wrapped gift gift box icon",
      icon: "260",
      color: false,
   },
   {
      name: "leaf1",
      keywords: "leaf1 leaf foliage nature leaf icon plant icon nature icon leaf symbol plant symbol green leaf",
      icon: "261",
      color: false,
   },
   {
      name: "fire1",
      keywords: "fire1 fire flame burn fire icon flame icon burn icon fire symbol flame symbol burning",
      icon: "262",
      color: false,
   },
   {
      name: "eye1",
      keywords: "eye1 eye view sight see eye icon view icon eye symbol see icon sight icon",
      icon: "263",
      color: false,
   },
   {
      name: "eye slash",
      keywords: "eye slash hide conceal invisible hide icon conceal icon invisible icon slash through eye slash eye no visibility",
      icon: "264",
      color: false,
   },
   {
      name: "exclamation triangle",
      keywords: "exclamation triangle warning triangle alert triangle exclamation mark warning sign alert symbol exclamation triangle icon warning triangle icon alert triangle icon triangle with exclamation",
      icon: "265",
      color: false,
   },
   {
      name: "warning1",
      keywords: "warning1 warning alert caution danger warning icon alert icon caution icon danger icon attention",
      icon: "265",
      color: false,
   },
   {
      name: "plane",
      keywords: "plane airplane fly flight travel plane icon airplane icon fly icon flight icon travel icon",
      icon: "266",
      color: false,
   },
   {
      name: "calendar1",
      keywords: "calendar1 calendar date schedule appointment calendar icon date icon schedule icon appointment icon event",
      icon: "267",
      color: false,
   },
   {
      name: "random",
      keywords: "random shuffle mix randomize random icon shuffle icon mix icon shuffle button mix button random order",
      icon: "268",
      color: false,
   },
   {
      name: "comment",
      keywords: "comment discussion feedback chat conversation comment icon discussion icon feedback icon chat icon comment symbol",
      icon: "269",
      color: false,
   },
   {
      name: "magnet1",
      keywords: "magnet1 magnet attraction magnetic magnet icon attraction icon magnetic icon magnet symbol attraction symbol magnetic field",
      icon: "26a",
      color: false,
   },
   {
      name: "chevron up",
      keywords: "chevron up up chevron arrow up upward chevron chevron icon up arrow upward arrow chevron symbol up arrow icon upward arrow icon",
      icon: "26b",
      color: false,
   },
   {
      name: "chevron down",
      keywords: "chevron down down chevron arrow down downward chevron chevron icon down arrow downward arrow chevron symbol down arrow icon downward arrow icon",
      icon: "26c",
      color: false,
   },
   {
      name: "retweet",
      keywords: "retweet share again repeat refresh retweet icon share again icon repeat icon refresh icon retweet button share again button",
      icon: "26d",
      color: false,
   },
   {
      name: "shopping cart",
      keywords: "shopping cart cart purchase buy shopping shopping cart icon cart icon purchase icon buy icon shopping icon",
      icon: "26e",
      color: false,
   },
   {
      name: "folder1",
      keywords: "folder1 folder directory file directory icon folder icon file icon open folder closed folder directory symbol",
      icon: "26f",
      color: false,
   },
   {
      name: "folder open1",
      keywords: "folder open1 open folder unhide folder reveal folder open directory open folder icon unhide folder icon reveal folder icon open directory icon folder symbol",
      icon: "270",
      color: false,
   },
   {
      name: "arrows v",
      keywords: "arrows v vertical arrows vertical direction up down arrows vertical movement arrows v icon vertical arrows icon vertical direction icon up down arrows icon vertical movement icon",
      icon: "271",
      color: false,
   },
   {
      name: "arrows h",
      keywords: "arrows h horizontal arrows horizontal direction left right arrows horizontal movement arrows h icon horizontal arrows icon horizontal direction icon left right arrows icon horizontal movement icon",
      icon: "272",
      color: false,
   },
   {
      name: "bar chart",
      keywords: "bar chart bar graph column chart bar chart icon bar graph icon column chart icon bar graph symbol bar chart symbol column chart symbol vertical bar chart",
      icon: "273",
      color: false,
   },
   {
      name: "bar chart o",
      keywords: "bar chart o bar graph o column chart o empty bar chart bar chart outline bar chart icon bar graph icon column chart icon empty bar chart icon bar chart symbol",
      icon: "273",
      color: false,
   },
   {
      name: "twitter square",
      keywords: "twitter square twitter tweet social media twitter icon tweet icon social media icon twitter symbol tweet symbol bird",
      icon: "274",
      color: false,
   },
   {
      name: "facebook square",
      keywords: "facebook square facebook social network facebook icon social media facebook symbol facebook button social network icon facebook logo fb",
      icon: "275",
      color: false,
   },
   {
      name: "camera retro",
      keywords: "camera retro old camera vintage camera camera icon retro camera vintage camera icon antique camera old camera icon retro camera icon vintage camera symbol",
      icon: "276",
      color: false,
   },
   {
      name: "key1",
      keywords: "key1 key password lock key icon password icon lock icon key symbol password symbol unlock",
      icon: "277",
      color: false,
   },
   {
      name: "cogs1",
      keywords: "cogs1 cogs gears settings config cogs icon gears icon settings icon config icon cogs symbol",
      icon: "278",
      color: false,
   },
   {
      name: "gears",
      keywords: "gears cogs mechanism machinery gear icon cogs icon mechanism icon machinery icon gear symbol cogs symbol",
      icon: "278",
      color: false,
   },
   {
      name: "comments",
      keywords: "comments discussion feedback chat conversation comments icon discussion icon feedback icon chat icon comments symbol",
      icon: "279",
      color: false,
   },
   {
      name: "thumbs o up",
      keywords: "thumbs o up approve like thumbs up upvote thumbs o up icon approve icon like icon thumbs up icon upvote icon",
      icon: "27a",
      color: false,
   },
   {
      name: "thumbs o down",
      keywords: "thumbs o down disapprove unlike thumbs down downvote thumbs o down icon disapprove icon unlike icon thumbs down icon downvote icon",
      icon: "27b",
      color: false,
   },
   {
      name: "star half1",
      keywords: "star half1 half star half filled star star half icon half star icon half filled star icon half filled star symbol star half symbol half star symbol partially filled star",
      icon: "27c",
      color: false,
   },
   {
      name: "heart o",
      keywords: "heart o empty heart outline heart heart o icon empty heart icon outline heart icon heart o symbol empty heart symbol outline heart symbol heart outline",
      icon: "27d",
      color: false,
   },
   {
      name: "sign out",
      keywords: "sign out logout exit leave sign out icon logout icon exit icon leave icon log out sign off",
      icon: "27e",
      color: false,
   },
   {
      name: "linkedin square",
      keywords: "linkedin square linkedin professional network linkedin icon business network linkedin symbol professional network icon linkedin logo linkedin button linkedin square icon",
      icon: "27f",
      color: false,
   },
   {
      name: "thumb tack",
      keywords: "thumb tack pin tack nail thumb tack icon pin icon tack icon nail icon thumb tack symbol pin symbol",
      icon: "280",
      color: false,
   },
   {
      name: "external link",
      keywords: "external link link external redirect external link icon link icon external icon redirect icon external link symbol link symbol",
      icon: "281",
      color: false,
   },
   {
      name: "sign in",
      keywords: "sign in login log in enter sign in icon login icon log in icon enter icon sign on authenticate",
      icon: "282",
      color: false,
   },
   {
      name: "trophy1",
      keywords: "trophy1 trophy achievement award trophy icon achievement icon award icon trophy symbol achievement symbol award symbol",
      icon: "283",
      color: false,
   },
   {
      name: "github square",
      keywords: "github square github code repository github icon code hosting github symbol code repository icon github logo github button github square icon",
      icon: "284",
      color: false,
   },
   {
      name: "upload1",
      keywords: "upload1 upload import send upload icon import icon send icon upload symbol import symbol send symbol",
      icon: "285",
      color: false,
   },
   {
      name: "lemon o",
      keywords: "lemon o lemon citrus lemon slice lemon o icon lemon icon citrus icon lemon slice icon lemon symbol citrus symbol",
      icon: "286",
      color: false,
   },
   {
      name: "phone1",
      keywords: "phone1 phone telephone call phone icon telephone icon call icon phone symbol telephone symbol call symbol",
      icon: "287",
      color: false,
   },
   {
      name: "square o",
      keywords: "square o empty square outline square square o icon empty square icon outline square icon square o symbol empty square symbol outline square symbol empty box",
      icon: "288",
      color: false,
   },
   {
      name: "bookmark o",
      keywords: "bookmark o empty bookmark outline bookmark bookmark o icon empty bookmark icon outline bookmark icon bookmark o symbol empty bookmark symbol outline bookmark symbol bookmark outline",
      icon: "289",
      color: false,
   },
   {
      name: "phone square",
      keywords: "phone square phone telephone call phone icon telephone icon call icon phone symbol telephone symbol call symbol",
      icon: "28a",
      color: false,
   },
   {
      name: "twitter1",
      keywords: "twitter1 twitter tweet social media twitter icon tweet icon social media icon twitter symbol tweet symbol bird",
      icon: "28b",
      color: false,
   },
   {
      name: "facebook1",
      keywords: "facebook1 facebook social network facebook icon social media facebook symbol facebook button social network icon facebook logo fb",
      icon: "28c",
      color: false,
   },
   {
      name: "facebook f",
      keywords: "facebook f facebook social network facebook icon social media facebook symbol facebook button social network icon facebook logo fb",
      icon: "28c",
      color: false,
   },
   {
      name: "github1",
      keywords: "github1 github code repository github icon code hosting github symbol code repository icon github logo github button github symbol",
      icon: "28d",
      color: false,
   },
   {
      name: "unlock",
      keywords: "unlock open release unlock icon open icon release icon unlock symbol open symbol release symbol unseal",
      icon: "28e",
      color: false,
   },
   {
      name: "credit card1",
      keywords: "credit card1 credit card payment buy credit card icon payment icon buy icon credit card symbol payment symbol buy symbol",
      icon: "28f",
      color: false,
   },
   {
      name: "feed1",
      keywords: "feed1 feed rss subscribe feed icon rss icon subscribe icon feed symbol rss symbol subscribe symbol",
      icon: "290",
      color: false,
   },
   {
      name: "rss1",
      keywords: "rss1 rss feed subscribe rss icon feed icon subscribe icon rss symbol feed symbol subscribe symbol",
      icon: "290",
      color: false,
   },
   {
      name: "hdd o",
      keywords: "hdd o hdd hard drive storage hdd o icon hdd icon hard drive icon storage icon hdd symbol hard drive symbol",
      icon: "291",
      color: false,
   },
   {
      name: "bullhorn1",
      keywords: "bullhorn1 bullhorn megaphone announcement bullhorn icon megaphone icon announcement icon bullhorn symbol megaphone symbol announcement symbol",
      icon: "292",
      color: false,
   },
   {
      name: "bell o",
      keywords: "bell o bell notification alarm bell o icon bell icon notification icon alarm icon bell symbol notification symbol",
      icon: "293",
      color: false,
   },
   {
      name: "certificate",
      keywords: "certificate award diploma certificate icon award icon diploma icon certificate symbol award symbol diploma symbol qualification",
      icon: "294",
      color: false,
   },
   {
      name: "hand o right",
      keywords: "hand o right point right finger right hand o icon pointing right finger icon hand pointing right pointing finger hand icon hand symbol",
      icon: "295",
      color: false,
   },
   {
      name: "hand o left",
      keywords: "hand o left point left finger left hand o icon pointing left finger icon hand pointing left pointing finger hand icon hand symbol",
      icon: "296",
      color: false,
   },
   {
      name: "hand o up",
      keywords: "hand o up point up finger up hand o icon pointing up finger icon hand pointing up pointing finger hand icon hand symbol",
      icon: "297",
      color: false,
   },
   {
      name: "hand o down",
      keywords: "hand o down point down finger down hand o icon pointing down finger icon hand pointing down pointing finger hand icon hand symbol",
      icon: "298",
      color: false,
   },
   {
      name: "arrow circle left",
      keywords: "arrow circle left arrow left circle turn left rotate left arrow circle left icon arrow left circle icon turn left icon rotate left icon counterclockwise left arrow circle",
      icon: "299",
      color: false,
   },
   {
      name: "arrow circle right",
      keywords: "arrow circle right arrow right circle turn right rotate right arrow circle right icon arrow right circle icon turn right icon rotate right icon clockwise right arrow circle",
      icon: "29a",
      color: false,
   },
   {
      name: "arrow circle up",
      keywords: "arrow circle up arrow up circle upwards rise arrow circle up icon arrow up circle icon upwards icon rise icon up arrow circle ascend circle",
      icon: "29b",
      color: false,
   },
   {
      name: "arrow circle down",
      keywords: "arrow circle down arrow down circle downwards fall arrow circle down icon arrow down circle icon downwards icon fall icon down arrow circle descend circle",
      icon: "29c",
      color: false,
   },
   {
      name: "globe",
      keywords: "globe world global earth globe icon world icon global icon earth icon globe symbol world symbol",
      icon: "29d",
      color: false,
   },
   {
      name: "wrench1",
      keywords: "wrench1 wrench tool settings config wrench icon tool icon settings icon config icon wrench symbol",
      icon: "29e",
      color: false,
   },
   {
      name: "tasks",
      keywords: "tasks to do checklist list tasks icon to do icon checklist icon list icon tasks symbol to do list",
      icon: "29f",
      color: false,
   },
   {
      name: "filter1",
      keywords: "filter1 filter sort search filter icon sort icon search icon filter symbol sort symbol filtering",
      icon: "2a0",
      color: false,
   },
   {
      name: "briefcase1",
      keywords: "briefcase1 briefcase portfolio work briefcase icon portfolio icon work icon briefcase symbol portfolio symbol work symbol",
      icon: "2a1",
      color: false,
   },
   {
      name: "arrows alt",
      keywords: "arrows alt alternate arrows change arrows swap arrows arrows alt icon alternate arrows icon change arrows icon swap arrows icon reverse arrows opposite arrows",
      icon: "2a2",
      color: false,
   },
   {
      name: "group",
      keywords: "group team community people group icon team icon community icon people icon group symbol team symbol",
      icon: "2a3",
      color: false,
   },
   {
      name: "users1",
      keywords: "users1 users community team users icon community icon team icon users symbol community symbol team symbol",
      icon: "2a3",
      color: false,
   },
   {
      name: "chain",
      keywords: "chain link connect join chain icon link icon connect icon join icon chain symbol link symbol",
      icon: "2a4",
      color: false,
   },
   {
      name: "link1",
      keywords: "link1 link hyperlink connect link icon hyperlink icon connect icon link symbol hyperlink symbol chain",
      icon: "2a4",
      color: false,
   },
   {
      name: "cloud1",
      keywords: "cloud1 cloud weather storage cloud icon weather icon storage icon cloud symbol weather symbol storage symbol",
      icon: "2a5",
      color: false,
   },
   {
      name: "flask",
      keywords: "flask experiment chemistry science flask icon experiment icon chemistry icon science icon flask symbol experiment symbol",
      icon: "2a6",
      color: false,
   },
   {
      name: "cut",
      keywords: "cut scissors delete cutting cut icon scissors icon delete icon cutting icon scissors symbol delete symbol",
      icon: "2a7",
      color: false,
   },
   {
      name: "scissors1",
      keywords: "scissors1 scissors cut shears scissors icon cut icon shears icon scissors symbol cut symbol shears symbol",
      icon: "2a7",
      color: false,
   },
   {
      name: "copy1",
      keywords: "copy1 copy duplicate replicate copy icon duplicate icon replicate icon copy symbol duplicate symbol replicate symbol",
      icon: "2a8",
      color: false,
   },
   {
      name: "files o",
      keywords: "files documents file icons file list file options file menu file interface file management file organization file folder",
      icon: "2a8",
      color: false,
   },
   {
      name: "paperclip",
      keywords: "paperclip attachment clip attach file attach document file attachment paper clip document clip clip icon paperclip symbol",
      icon: "2a9",
      color: false,
   },
   {
      name: "floppy o",
      keywords: "floppy save disk diskette storage save icon save symbol floppy disk disk icon storage icon",
      icon: "2aa",
      color: false,
   },
   {
      name: "save",
      keywords: "save save icon save button save symbol store keep preserve retain save file save document",
      icon: "2aa",
      color: false,
   },
   {
      name: "square",
      keywords: "square box shape square icon geometric shape square symbol four sides rectangle quadrilateral square graphic",
      icon: "2ab",
      color: false,
   },
   {
      name: "bars",
      keywords: "bars menu menu bars navigation menu icon menu symbol list menu list menu options menu interface",
      icon: "2ac",
      color: false,
   },
   {
      name: "navicon",
      keywords: "navicon navigation icon menu icon menu bars navigation bars menu symbol menu button navigation button navigation menu menu interface",
      icon: "2ac",
      color: false,
   },
   {
      name: "reorder",
      keywords: "reorder organize arrange sort rearrange adjust reorder icon reorder symbol change order order items",
      icon: "2ac",
      color: false,
   },
   {
      name: "list ul",
      keywords: "list ul unordered list bulleted list list items bullet points list symbol unordered items list interface ul list unordered bullet points",
      icon: "2ad",
      color: false,
   },
   {
      name: "list ol",
      keywords: "list ol ordered list numbered list list items numbered points list symbol ordered items list interface ol list ordered points",
      icon: "2ae",
      color: false,
   },
   {
      name: "strikethrough1",
      keywords: "strikethrough strike line through delete remove cross out strikethrough icon strikethrough symbol formatting text formatting",
      icon: "2af",
      color: false,
   },
   {
      name: "underline1",
      keywords: "underline underscore underscored underline icon underline symbol text formatting formatting emphasis highlight underline text",
      icon: "2b0",
      color: false,
   },
   {
      name: "table1",
      keywords: "table spreadsheet chart data grid table icon data table table symbol spreadsheet icon chart icon",
      icon: "2b1",
      color: false,
   },
   {
      name: "magic",
      keywords: "magic wizard magician magic wand sorcery enchantment spell magic icon magic symbol magic tool",
      icon: "2b2",
      color: false,
   },
   {
      name: "truck1",
      keywords: "truck delivery transport shipping vehicle truck icon truck symbol delivery truck transportation moving truck",
      icon: "2b3",
      color: false,
   },
   {
      name: "pinterest1",
      keywords: "pinterest social media networking pins image sharing pinterest icon pinterest symbol pinterest logo social network pinboard",
      icon: "2b4",
      color: false,
   },
   {
      name: "pinterest square",
      keywords: "pinterest square social media networking pins image sharing pinterest icon pinterest symbol pinterest logo social network pinboard",
      icon: "2b5",
      color: false,
   },
   {
      name: "google plus square",
      keywords: "google plus square google plus google social media networking google plus icon google plus symbol google plus logo social network google square",
      icon: "2b6",
      color: false,
   },
   {
      name: "google plus1",
      keywords: "google plus google social media networking google plus icon google plus symbol google plus logo social network google plus platform google icon",
      icon: "2b7",
      color: false,
   },
   {
      name: "money",
      keywords: "money currency cash finance payment money icon money symbol financial dollars money stack",
      icon: "2b8",
      color: false,
   },
   {
      name: "caret down",
      keywords: "caret down down arrow downwards expand drop down dropdown expand menu downward arrow caret icon caret symbol",
      icon: "2b9",
      color: false,
   },
   {
      name: "caret up",
      keywords: "caret up up arrow upwards collapse show less hide upward arrow caret icon caret symbol expand",
      icon: "2ba",
      color: false,
   },
   {
      name: "caret left",
      keywords: "caret left left arrow back previous backward move left caret icon caret symbol navigate leftward",
      icon: "2bb",
      color: false,
   },
   {
      name: "caret right",
      keywords: "caret right right arrow forward next move right navigate forward arrow caret icon caret symbol rightward",
      icon: "2bc",
      color: false,
   },
   {
      name: "columns",
      keywords: "columns layout format grid arrangement column layout column icon column symbol columnar multicolumn",
      icon: "2bd",
      color: false,
   },
   {
      name: "sort",
      keywords: "sort order arrange organize classify sort icon sort symbol sort items sort data sort interface",
      icon: "2be",
      color: false,
   },
   {
      name: "unsorted",
      keywords: "unsorted unordered random chaotic unorganized unordered list randomized unsorted icon unsorted symbol unordered data",
      icon: "2be",
      color: false,
   },
   {
      name: "sort desc",
      keywords: "sort desc sort descending descending order reverse order descending sort sort descending icon sort desc symbol descending sort order descending arrangement descending data",
      icon: "2bf",
      color: false,
   },
   {
      name: "sort down",
      keywords: "sort down sort descending descending order reverse order descending sort sort down icon sort down symbol descending sort order descending arrangement descending data",
      icon: "2bf",
      color: false,
   },
   {
      name: "sort asc",
      keywords: "sort asc sort ascending ascending order sort up ascending sort sort asc icon sort asc symbol ascending sort order ascending arrangement ascending data",
      icon: "2c0",
      color: false,
   },
   {
      name: "sort up",
      keywords: "sort up sort ascending ascending order sort asc ascending sort sort up icon sort up symbol ascending sort order ascending arrangement ascending data",
      icon: "2c0",
      color: false,
   },
   {
      name: "envelope",
      keywords: "envelope email message mail communication envelope icon envelope symbol letter mail icon email icon",
      icon: "2c1",
      color: false,
   },
   {
      name: "linkedin1",
      keywords: "linkedin social media networking linkedin icon linkedin symbol professional networking business networking linkedin logo linkedin platform linkedin profile",
      icon: "2c2",
      color: false,
   },
   {
      name: "rotate left",
      keywords: "rotate left rotate counterclockwise undo rotate turn left rotate left icon rotate left symbol rotate counterclockwise icon undo rotation counter rotate",
      icon: "2c3",
      color: false,
   },
   {
      name: "undo1",
      keywords: "undo revert back reverse cancel undo icon undo symbol undo action revert icon reverse action",
      icon: "2c3",
      color: false,
   },
   {
      name: "gavel",
      keywords: "gavel law justice court hammer legal gavel icon gavel symbol courtroom justice system",
      icon: "2c4",
      color: false,
   },
   {
      name: "legal",
      keywords: "legal law justice court legal icon legal symbol legal document law enforcement legal system legal representation",
      icon: "2c4",
      color: false,
   },
   {
      name: "dashboard",
      keywords: "dashboard control panel admin monitoring dashboard icon dashboard symbol interface user interface dashboard screen management",
      icon: "2c5",
      color: false,
   },
   {
      name: "tachometer",
      keywords: "tachometer speedometer gauge meter speed tachometer icon tachometer symbol dashboard gauge speed gauge instrument panel",
      icon: "2c5",
      color: false,
   },
   {
      name: "comment o",
      keywords: "comment conversation discussion chat message comment icon comment symbol comment bubble chat bubble speech bubble",
      icon: "2c6",
      color: false,
   },
   {
      name: "comments o",
      keywords: "comments conversation discussion chat messages comments icon comments symbol comment bubbles chat bubbles speech bubbles",
      icon: "2c7",
      color: false,
   },
   {
      name: "bolt",
      keywords: "bolt lightning electricity thunder power bolt icon bolt symbol lightning bolt electric bolt thunderbolt",
      icon: "2c8",
      color: false,
   },
   {
      name: "flash",
      keywords: "flash light camera flashlight bright flash icon flash symbol light symbol camera flash lightning",
      icon: "2c8",
      color: false,
   },
   {
      name: "sitemap",
      keywords: "sitemap map structure network hierarchy sitemap icon sitemap symbol organizational chart site map hierarchical structure",
      icon: "2c9",
      color: false,
   },
   {
      name: "umbrella",
      keywords: "umbrella rain protection shelter umbrella icon umbrella symbol weather rainy day rain protection rain umbrella",
      icon: "2ca",
      color: false,
   },
   {
      name: "clipboard1",
      keywords: "clipboard copy paste document clipboard icon clipboard symbol copy paste clipboard tool clipboard management clipboard interface",
      icon: "2cb",
      color: false,
   },
   {
      name: "paste1",
      keywords: "paste insert copy document paste icon paste symbol paste document insert document paste content insert content",
      icon: "2cb",
      color: false,
   },
   {
      name: "lightbulb o",
      keywords: "lightbulb idea innovation light solution lightbulb icon lightbulb symbol idea icon innovation icon idea symbol",
      icon: "2cc",
      color: false,
   },
   {
      name: "exchange",
      keywords: "exchange swap trade transfer exchange icon exchange symbol swap icon transfer icon trade icon exchange rate",
      icon: "2cd",
      color: false,
   },
   {
      name: "cloud download1",
      keywords: "cloud download download save cloud cloud icon cloud symbol download icon download symbol save icon cloud storage",
      icon: "2ce",
      color: false,
   },
   {
      name: "cloud upload1",
      keywords: "cloud upload upload save cloud cloud icon cloud symbol upload icon upload symbol save icon cloud storage",
      icon: "2cf",
      color: false,
   },
   {
      name: "user md",
      keywords: "user md doctor medical user icon user symbol medical user medical practitioner doctor icon doctor symbol medical professional",
      icon: "2d0",
      color: false,
   },
   {
      name: "stethoscope",
      keywords: "stethoscope medical doctor health stethoscope icon stethoscope symbol medical instrument healthcare doctor tool medical tool",
      icon: "2d1",
      color: false,
   },
   {
      name: "suitcase",
      keywords: "suitcase travel luggage bag suitcase icon suitcase symbol travel icon luggage icon travel symbol bag icon",
      icon: "2d2",
      color: false,
   },
   {
      name: "bell1",
      keywords: "bell alarm notification alert bell icon bell symbol alarm icon notification icon alert icon bell alarm",
      icon: "2d3",
      color: false,
   },
   {
      name: "coffee",
      keywords: "coffee drink beverage cup coffee icon coffee symbol beverage icon drink icon cup icon caffeine",
      icon: "2d4",
      color: false,
   },
   {
      name: "cutlery",
      keywords: "cutlery utensils fork knife spoon cutlery icon cutlery symbol eating utensils silverware dining",
      icon: "2d5",
      color: false,
   },
   {
      name: "file text o",
      keywords: "file text document file paper text file text icon file text symbol document icon file icon paper icon",
      icon: "2d6",
      color: false,
   },
   {
      name: "building o",
      keywords: "building office business company building icon building symbol office building business icon company icon corporate",
      icon: "2d7",
      color: false,
   },
   {
      name: "hospital o",
      keywords: "hospital medical healthcare clinic hospital icon hospital symbol medical facility healthcare icon clinic icon medical center",
      icon: "2d8",
      color: false,
   },
   {
      name: "ambulance",
      keywords: "ambulance emergency medical vehicle ambulance icon ambulance symbol emergency vehicle medical vehicle ambulance service rescue",
      icon: "2d9",
      color: false,
   },
   {
      name: "medkit",
      keywords: "medkit first aid medical emergency medkit icon medkit symbol first aid kit medical kit emergency kit health",
      icon: "2da",
      color: false,
   },
   {
      name: "fighter jet",
      keywords: "fighter jet jet plane aircraft fighter jet icon fighter jet symbol military aircraft fighter plane military jet fighter aircraft",
      icon: "2db",
      color: false,
   },
   {
      name: "beer",
      keywords: "beer drink beverage alcohol beer icon beer symbol drink icon beverage icon alcohol icon beer mug",
      icon: "2dc",
      color: false,
   },
   {
      name: "h square",
      keywords: "h square square h hospital healthcare h square icon h square symbol hospital icon healthcare icon medical",
      icon: "2dd",
      color: false,
   },
   {
      name: "plus square",
      keywords: "plus square add new plus plus icon plus symbol add icon add symbol new icon add item",
      icon: "2de",
      color: false,
   },
   {
      name: "angle double left",
      keywords: "angle double left angle double left arrow angle double left icon angle double left symbol angle arrow double arrow left arrow",
      icon: "2df",
      color: false,
   },
   {
      name: "angle double right",
      keywords: "angle double right angle double right arrow angle double right icon angle double right symbol angle arrow double arrow right arrow",
      icon: "2e0",
      color: false,
   },
   {
      name: "angle double up",
      keywords: "angle double up angle double up arrow angle double up icon angle double up symbol angle arrow double arrow up arrow",
      icon: "2e1",
      color: false,
   },
   {
      name: "angle double down",
      keywords: "angle double down angle double down arrow angle double down icon angle double down symbol angle arrow double arrow down arrow",
      icon: "2e2",
      color: false,
   },
   {
      name: "angle left",
      keywords: "angle left angle left arrow angle left icon angle left symbol angle arrow left arrow direction navigate",
      icon: "2e3",
      color: false,
   },
   {
      name: "angle right",
      keywords: "angle right angle right arrow angle right icon angle right symbol angle arrow right arrow direction navigate",
      icon: "2e4",
      color: false,
   },
   {
      name: "angle up",
      keywords: "angle up angle up arrow angle up icon angle up symbol angle arrow up arrow direction navigate",
      icon: "2e5",
      color: false,
   },
   {
      name: "angle down",
      keywords: "angle down angle down arrow angle down icon angle down symbol angle arrow down arrow direction navigate",
      icon: "2e6",
      color: false,
   },
   {
      name: "desktop",
      keywords: "desktop computer pc desktop computer desktop icon desktop symbol computer icon pc icon desktop interface desktop screen",
      icon: "2e7",
      color: false,
   },
   {
      name: "laptop1",
      keywords: "laptop computer notebook portable laptop icon laptop symbol computer icon notebook icon portable device laptop computer",
      icon: "2e8",
      color: false,
   },
   {
      name: "tablet1",
      keywords: "tablet device tablet computer mobile tablet icon tablet symbol device icon tablet device touchscreen portable device",
      icon: "2e9",
      color: false,
   },
   {
      name: "mobile1",
      keywords: "mobile phone smartphone cellphone mobile icon mobile symbol phone icon smartphone icon cellphone icon mobile device",
      icon: "2ea",
      color: false,
   },
   {
      name: "mobile phone",
      keywords: "mobile phone phone smartphone cellphone mobile icon mobile symbol phone icon smartphone icon cellphone icon mobile device",
      icon: "2ea",
      color: false,
   },
   {
      name: "circle o",
      keywords: "circle o circle icon circle symbol round circle shape empty circle hollow circle circle outline round icon",
      icon: "2eb",
      color: false,
   },
   {
      name: "quote left",
      keywords: "quote left quote quotation text quote icon quote symbol quotation icon quotation symbol text icon left quote",
      icon: "2ec",
      color: false,
   },
   {
      name: "quote right",
      keywords: "quote right quote quotation text quote icon quote symbol quotation icon quotation symbol text icon right quote",
      icon: "2ed",
      color: false,
   },
   {
      name: "spinner1",
      keywords: "spinner loading progress spinner icon spinner symbol loading icon progress icon spinner animation loading animation",
      icon: "2ee",
      color: false,
   },
   {
      name: "circle",
      keywords: "circle round oval circle icon circle symbol round shape circular circle graphic geometric shape circular icon",
      icon: "2ef",
      color: false,
   },
   {
      name: "mail reply",
      keywords: "mail reply email reply reply respond mail reply icon mail reply symbol email reply icon email reply symbol reply icon reply symbol",
      icon: "2f0",
      color: false,
   },
   {
      name: "reply1",
      keywords: "reply respond reply icon reply symbol reply to message reply to email reply to communication answer respond to message respond to email",
      icon: "2f0",
      color: false,
   },
   {
      name: "github alt",
      keywords: "github alt github alternative code version control software development repository github source code alternative github",
      icon: "2f1",
      color: false,
   },
   {
      name: "folder o",
      keywords: "folder o folder directory file storage organize folder icon open folder file directory folder outline",
      icon: "2f2",
      color: false,
   },
   {
      name: "folder open o",
      keywords: "folder open o folder open folder directory file storage organize folder icon expanded folder folder outline",
      icon: "2f3",
      color: false,
   },
   {
      name: "smile o",
      keywords: "smile o smile happy emoticon emoji face expression smiley smile icon happy face",
      icon: "2f4",
      color: false,
   },
   {
      name: "frown o",
      keywords: "frown o frown sad emoticon emoji face expression sad face frown icon unhappy",
      icon: "2f5",
      color: false,
   },
   {
      name: "meh o",
      keywords: "meh o meh neutral emoticon emoji face expression neutral face meh icon indifferent",
      icon: "2f6",
      color: false,
   },
   {
      name: "gamepad",
      keywords: "gamepad gamepad controller gaming video games console joystick game controller gamepad icon play",
      icon: "2f7",
      color: false,
   },
   {
      name: "keyboard o",
      keywords: "keyboard o keyboard typing computer input text write keyboard icon input device keyboard outline",
      icon: "2f8",
      color: false,
   },
   {
      name: "flag o",
      keywords: "flag o flag national patriotic symbol country emblem flag icon national flag flag outline",
      icon: "2f9",
      color: false,
   },
   {
      name: "flag checkered",
      keywords: "flag checkered flag checkered racing symbol winning victory flag icon race flag checkered flag",
      icon: "2fa",
      color: false,
   },
   {
      name: "terminal1",
      keywords: "terminal1 terminal command line console shell programming developer code computer terminal icon",
      icon: "2fb",
      color: false,
   },
   {
      name: "code",
      keywords: "code code programming development scripting software coding source code code icon write code",
      icon: "2fc",
      color: false,
   },
   {
      name: "mail reply all",
      keywords: "mail reply all mail email reply respond inbox communication message mail icon reply all",
      icon: "2fd",
      color: false,
   },
   {
      name: "reply all",
      keywords: "reply all respond answer react retort counter return reply button reply all reply arrow",
      icon: "2fd",
      color: false,
   },
   {
      name: "star half empty",
      keywords: "star half empty half star empty half empty star incomplete star partially filled star empty star half star icon rating",
      icon: "2fe",
      color: false,
   },
   {
      name: "star half full",
      keywords: "star half full half star full half full star semi filled star partially filled star filled half star star icon rating",
      icon: "2fe",
      color: false,
   },
   {
      name: "star half o",
      keywords: "star half o half star o half o star outlined half star half star outline half empty star outline star icon rating",
      icon: "2fe",
      color: false,
   },
   {
      name: "location arrow",
      keywords: "location arrow arrow location arrow pointing to location arrow to place navigation arrow map arrow direction arrow arrow icon map",
      icon: "2ff",
      color: false,
   },
   {
      name: "crop1",
      keywords: "crop1 crop resize adjust cut trim image crop crop tool cropping image editing",
      icon: "300",
      color: false,
   },
   {
      name: "code fork",
      keywords: "code fork fork code versioning code repository code branching development software development forked code code collaboration github",
      icon: "301",
      color: false,
   },
   {
      name: "chain broken",
      keywords: "chain broken broken chain broken link disconnect unlinked broken connection link broken broken chain icon unlink",
      icon: "302",
      color: false,
   },
   {
      name: "unlink",
      keywords: "unlink remove link detach disconnect remove connection unlink icon broken link unlinking remove attachment disconnecting",
      icon: "302",
      color: false,
   },
   {
      name: "info1",
      keywords: "info1 info information details help about info icon information icon informational learn more",
      icon: "303",
      color: false,
   },
   {
      name: "exclamation",
      keywords: "exclamation warning alert attention danger caution exclamation icon warning sign alert symbol warning icon",
      icon: "304",
      color: false,
   },
   {
      name: "superscript1",
      keywords: "superscript1 superscript exponent power index text formatting small text text exponent formatting text formatting",
      icon: "305",
      color: false,
   },
   {
      name: "subscript1",
      keywords: "subscript1 subscript index text formatting small text text formatting lower text text lower formatting",
      icon: "306",
      color: false,
   },
   {
      name: "eraser",
      keywords: "eraser rubber delete remove clear erase correction editing art drawing",
      icon: "307",
      color: false,
   },
   {
      name: "puzzle piece",
      keywords: "puzzle piece jigsaw puzzle game problem solving missing piece solution challenge puzzle icon game icon",
      icon: "308",
      color: false,
   },
   {
      name: "microphone",
      keywords: "microphone mic audio sound voice record microphone icon audio recording voice input sound recording",
      icon: "309",
      color: false,
   },
   {
      name: "microphone slash",
      keywords: "microphone slash mute disable microphone no sound mute mic no audio microphone off silent mic mute microphone microphone icon",
      icon: "30a",
      color: false,
   },
   {
      name: "shield1",
      keywords: "shield1 shield protection security defense safety guard armor shield icon safeguard",
      icon: "30b",
      color: false,
   },
   {
      name: "calendar o",
      keywords: "calendar o calendar outline calendar schedule date appointment event calendar icon calendar outline icon time",
      icon: "30c",
      color: false,
   },
   {
      name: "fire extinguisher",
      keywords: "fire extinguisher fire extinguish safety emergency firefighting safety equipment emergency equipment fire safety extinguisher icon",
      icon: "30d",
      color: false,
   },
   {
      name: "rocket1",
      keywords: "rocket1 rocket spacecraft launch space flight speed rocket icon rocket ship space travel",
      icon: "30e",
      color: false,
   },
   {
      name: "maxcdn",
      keywords: "maxcdn max content delivery speed fast maximum speedometer cloud cloud service website optimization",
      icon: "30f",
      color: false,
   },
   {
      name: "chevron circle left",
      keywords: "chevron circle left left chevron circle arrow circle left circle left arrow back previous navigate left back arrow chevron circle circle arrow",
      icon: "310",
      color: false,
   },
   {
      name: "chevron circle right",
      keywords: "chevron circle right right chevron circle arrow circle right circle right arrow forward next navigate right forward arrow chevron circle circle arrow",
      icon: "311",
      color: false,
   },
   {
      name: "chevron circle up",
      keywords: "chevron circle up up chevron circle arrow circle up circle up arrow scroll up navigate up up arrow chevron circle circle arrow",
      icon: "312",
      color: false,
   },
   {
      name: "chevron circle down",
      keywords: "chevron circle down down chevron circle arrow circle down circle down arrow scroll down navigate down down arrow chevron circle circle arrow",
      icon: "313",
      color: false,
   },
   {
      name: "html5",
      keywords: "html5 html web programming coding markup development web development html icon html language",
      icon: "314",
      color: false,
   },
   {
      name: "css31",
      keywords: "css31 css cascading style sheets web programming coding style development css icon css language",
      icon: "315",
      color: false,
   },
   {
      name: "anchor",
      keywords: "anchor ship boat nautical sailing sea ocean dock mooring anchor icon",
      icon: "316",
      color: false,
   },
   {
      name: "unlock alt",
      keywords: "unlock alt unlock open key access security unlocking lock unlocked unlock icon",
      icon: "317",
      color: false,
   },
   {
      name: "bullseye",
      keywords: "bullseye target aim goal accuracy focus objective bullseye icon target icon goal icon",
      icon: "318",
      color: false,
   },
   {
      name: "ellipsis h",
      keywords: "ellipsis h ellipsis horizontal ellipsis more options menu dots more options ellipsis icon horizontal ellipsis icon",
      icon: "319",
      color: false,
   },
   {
      name: "ellipsis v",
      keywords: "ellipsis v vertical ellipsis more options menu dots more options ellipsis icon vertical ellipsis icon",
      icon: "31a",
      color: false,
   },
   {
      name: "rss square",
      keywords: "rss square rss feed news update syndication rss icon rss feed news feed syndicated content",
      icon: "31b",
      color: false,
   },
   {
      name: "play circle",
      keywords: "play circle play start begin play button start button play icon circle play play symbol play circle icon",
      icon: "31c",
      color: false,
   },
   {
      name: "ticket1",
      keywords: "ticket1 ticket pass entry admission voucher ticket icon event ticket concert ticket admission ticket",
      icon: "31d",
      color: false,
   },
   {
      name: "minus square",
      keywords: "minus square subtract remove delete minus subtraction reduce minus icon square minus minus square icon",
      icon: "31e",
      color: false,
   },
   {
      name: "minus square o",
      keywords: "minus square o minus square outline minus square empty empty minus square outline square minus minus square icon square minus outline minus icon empty square minus",
      icon: "31f",
      color: false,
   },
   {
      name: "level up",
      keywords: "level up upgrade improve increase advance level up icon progress advance level level increase",
      icon: "320",
      color: false,
   },
   {
      name: "level down",
      keywords: "level down downgrade reduce decrease lower level down icon regress decrease level level decrease",
      icon: "321",
      color: false,
   },
   {
      name: "check square",
      keywords: "check square check tick mark done confirm approve checkmark checkbox checked",
      icon: "322",
      color: false,
   },
   {
      name: "pencil square",
      keywords: "pencil square edit write pencil modify update change pencil icon square edit edit icon",
      icon: "323",
      color: false,
   },
   {
      name: "external link square",
      keywords: "external link square link external link outbound link external open link navigate external link icon link icon square link",
      icon: "324",
      color: false,
   },
   {
      name: "share square",
      keywords: "share square share network social connect spread sharing share icon square share social share",
      icon: "325",
      color: false,
   },
   {
      name: "compass1",
      keywords: "compass1 compass direction navigation travel journey exploration compass icon travel icon direction icon",
      icon: "326",
      color: false,
   },
   {
      name: "caret square o down",
      keywords: "caret square o down down caret square down arrow square down square caret expand down drop down down arrow caret square square caret down downward arrow square",
      icon: "327",
      color: false,
   },
   {
      name: "toggle down",
      keywords: "toggle down expand down unfold down open down toggle arrow down toggle icon down toggle arrow down expand arrow unfold",
      icon: "327",
      color: false,
   },
   {
      name: "caret square o up",
      keywords: "caret square o up up caret square up arrow square up square caret expand up drop up up arrow caret square square caret up upward arrow square",
      icon: "328",
      color: false,
   },
   {
      name: "toggle up",
      keywords: "toggle up expand up unfold up open up toggle arrow up toggle icon up toggle arrow up expand arrow unfold",
      icon: "328",
      color: false,
   },
   {
      name: "caret square o right",
      keywords: "caret square o right right caret square right arrow square right square caret expand right drop right right arrow caret square square caret right rightward arrow square",
      icon: "329",
      color: false,
   },
   {
      name: "toggle right",
      keywords: "toggle right expand right unfold right open right toggle arrow right toggle icon right toggle arrow right expand arrow unfold",
      icon: "329",
      color: false,
   },
   {
      name: "eur",
      keywords: "eur euro currency european currency euro icon money finance european union eur currency euro symbol",
      icon: "32a",
      color: false,
   },
   {
      name: "euro",
      keywords: "euro euro currency europe money euro icon european currency euro symbol european money euro sign",
      icon: "32a",
      color: false,
   },
   {
      name: "gbp",
      keywords: "gbp british pound currency pound sterling money finance gbp icon british currency gb pound sterling pound",
      icon: "32b",
      color: false,
   },
   {
      name: "dollar",
      keywords: "dollar dollar currency money dollar icon american currency dollar symbol us currency dollar sign",
      icon: "32c",
      color: false,
   },
   {
      name: "usd",
      keywords: "usd dollar currency united states dollar money finance usd icon us currency dollar symbol american currency",
      icon: "32c",
      color: false,
   },
   {
      name: "inr",
      keywords: "inr rupee currency indian rupee money finance inr icon indian currency rupee symbol india currency",
      icon: "32d",
      color: false,
   },
   {
      name: "rupee",
      keywords: "rupee rupee currency money rupee icon indian currency rupee symbol indian money rupee sign",
      icon: "32d",
      color: false,
   },
   {
      name: "cny",
      keywords: "cny rmb chinese yuan currency renminbi chinese currency china currency cny icon chinese money yuan symbol",
      icon: "32e",
      color: false,
   },
   {
      name: "jpy",
      keywords: "jpy yen currency japanese yen money finance jpy icon japanese currency yen symbol",
      icon: "32e",
      color: false,
   },
   {
      name: "rmb",
      keywords: "rmb rmb currency money rmb icon chinese currency rmb symbol chinese money yuan sign",
      icon: "32e",
      color: false,
   },
   {
      name: "yen",
      keywords: "yen yen currency money yen icon japanese currency yen symbol japanese money yen sign",
      icon: "32e",
      color: false,
   },
   {
      name: "rouble",
      keywords: "rouble rouble currency money rouble icon russian currency rouble symbol russian money rouble sign",
      icon: "32f",
      color: false,
   },
   {
      name: "rub",
      keywords: "rub rub currency money rub icon russian currency rub symbol russian money rub sign",
      icon: "32f",
      color: false,
   },
   {
      name: "ruble",
      keywords: "ruble ruble currency money ruble icon russian currency ruble symbol russian money ruble sign",
      icon: "32f",
      color: false,
   },
   {
      name: "krw",
      keywords: "krw won currency south korean won money finance krw icon south korean currency won symbol",
      icon: "330",
      color: false,
   },
   {
      name: "won",
      keywords: "won won currency money won icon south korean currency won symbol korean money won sign",
      icon: "330",
      color: false,
   },
   {
      name: "bitcoin",
      keywords: "bitcoin btc cryptocurrency digital currency crypto currency bitcoin icon btc icon bitcoin symbol virtual currency",
      icon: "331",
      color: false,
   },
   {
      name: "btc",
      keywords: "btc btc currency money bitcoin cryptocurrency btc icon digital currency bitcoin symbol bitcoin sign",
      icon: "331",
      color: false,
   },
   {
      name: "file",
      keywords: "file document paper file icon file type data information file format file extension document icon",
      icon: "332",
      color: false,
   },
   {
      name: "file text1",
      keywords: "file text1 text file document file text document file text text icon document icon file extension file format",
      icon: "333",
      color: false,
   },
   {
      name: "sort alpha asc1",
      keywords: "sort alpha asc1 sort alphabetically ascending sort ascending ascending order alphabetical order sort a to z sort alpha asc alphabetical sorting ascending sorting sort icon",
      icon: "334",
      color: false,
   },
   {
      name: "sort alpha desc1",
      keywords: "sort alpha desc1 sort alphabetically descending sort descending descending order reverse alphabetical order sort z to a sort alpha desc reverse alphabetical sorting descending sorting sort icon",
      icon: "335",
      color: false,
   },
   {
      name: "sort amount asc1",
      keywords: "sort amount asc1 sort by amount ascending sort ascending ascending order numerical order sort low to high sort amount asc ascending sorting numerical sorting sort icon",
      icon: "336",
      color: false,
   },
   {
      name: "sort amount desc1",
      keywords: "sort amount desc1 sort by amount descending sort descending descending order reverse numerical order sort high to low sort amount desc descending sorting numerical sorting sort icon",
      icon: "337",
      color: false,
   },
   {
      name: "sort numeric asc1",
      keywords: "sort numeric asc1 sort numerically ascending sort ascending ascending order numerical order sort low to high sort numeric asc ascending sorting numerical sorting sort icon",
      icon: "338",
      color: false,
   },
   {
      name: "sort numeric desc",
      keywords: "sort numeric desc sort numeric descending order arrange sorting numeric sorting descending order sort icon",
      icon: "339",
      color: false,
   },
   {
      name: "thumbs up",
      keywords: "thumbs up like approval positive agree thumbs up icon positive feedback approval icon approve",
      icon: "33a",
      color: false,
   },
   {
      name: "thumbs down",
      keywords: "thumbs down dislike disapproval negative disagree thumbs down icon negative feedback disapproval icon disapprove",
      icon: "33b",
      color: false,
   },
   {
      name: "youtube square",
      keywords: "youtube square youtube video streaming media youtube icon video platform youtube logo video sharing youtube symbol",
      icon: "33c",
      color: false,
   },
   {
      name: "youtube1",
      keywords: "youtube1 youtube video streaming media youtube icon video platform youtube logo video sharing youtube symbol",
      icon: "33d",
      color: false,
   },
   {
      name: "xing1",
      keywords: "xing1 xing social media networking xing icon business network xing logo xing symbol xing platform xing website",
      icon: "33e",
      color: false,
   },
   {
      name: "xing square",
      keywords: "xing square xing social media networking xing icon business network xing logo xing symbol xing platform xing website",
      icon: "33f",
      color: false,
   },
   {
      name: "youtube play",
      keywords: "youtube play play start begin play button start button youtube icon play video play symbol play button",
      icon: "340",
      color: false,
   },
   {
      name: "dropbox1",
      keywords: "dropbox1 dropbox cloud storage file sharing dropbox icon cloud icon dropbox logo cloud service file storage",
      icon: "341",
      color: false,
   },
   {
      name: "stack overflow",
      keywords: "stack overflow stackoverflow programming coding development question answer stack overflow icon programming community developer community",
      icon: "342",
      color: false,
   },
   {
      name: "instagram1",
      keywords: "instagram1 instagram photo social media sharing instagram icon social network instagram logo picture sharing image sharing",
      icon: "343",
      color: false,
   },
   {
      name: "flickr1",
      keywords: "flickr1 flickr photo sharing social media flickr icon photo sharing flickr logo image sharing picture sharing",
      icon: "344",
      color: false,
   },
   {
      name: "adn",
      keywords: "adn app.net social media networking adn icon adn logo adn symbol app.net logo app.net symbol app.net platform",
      icon: "345",
      color: false,
   },
   {
      name: "bitbucket",
      keywords: "bitbucket bitbucket icon coding programming development version control code repository bitbucket logo versioning source control",
      icon: "346",
      color: false,
   },
   {
      name: "bitbucket square",
      keywords: "bitbucket square bitbucket icon coding programming development version control code repository bitbucket logo versioning source control",
      icon: "347",
      color: false,
   },
   {
      name: "tumblr1",
      keywords: "tumblr1 tumblr blog social media tumblr icon tumblr logo tumblr symbol microblogging blogging platform tumblr platform",
      icon: "348",
      color: false,
   },
   {
      name: "tumblr square",
      keywords: "tumblr square tumblr blog social media tumblr icon tumblr logo tumblr symbol microblogging blogging platform tumblr platform",
      icon: "349",
      color: false,
   },
   {
      name: "long arrow down",
      keywords: "long arrow down arrow down downward arrow scroll down long down arrow arrow icon navigation arrow long arrow down arrow downward arrow",
      icon: "34a",
      color: false,
   },
   {
      name: "long arrow up",
      keywords: "long arrow up arrow up upward arrow scroll up long up arrow arrow icon navigation arrow long arrow up arrow upward arrow",
      icon: "34b",
      color: false,
   },
   {
      name: "long arrow left",
      keywords: "long arrow left arrow left leftward arrow scroll left long left arrow arrow icon navigation arrow long arrow left arrow leftward arrow",
      icon: "34c",
      color: false,
   },
   {
      name: "long arrow right",
      keywords: "long arrow right arrow right rightward arrow scroll right long right arrow arrow icon navigation arrow long arrow right arrow rightward arrow",
      icon: "34d",
      color: false,
   },
   {
      name: "apple",
      keywords: "apple apple logo fruit mac technology apple icon macintosh apple brand apple symbol apple device",
      icon: "34e",
      color: false,
   },
   {
      name: "windows1",
      keywords: "windows1 windows microsoft operating system computer windows icon windows logo windows brand windows symbol windows device",
      icon: "34f",
      color: false,
   },
   {
      name: "android1",
      keywords: "android1 android google operating system mobile android icon android logo android brand android symbol android device",
      icon: "350",
      color: false,
   },
   {
      name: "linux",
      keywords: "linux penguin operating system opensource software linux icon linux logo linux brand linux symbol linux device",
      icon: "351",
      color: false,
   },
   {
      name: "dribbble1",
      keywords: "dribbble design shot graphic art portfolio creative illustration social platform",
      icon: "352",
      color: false,
   },
   {
      name: "skype1",
      keywords: "skype communication chat call video messaging telecommunication voip conversation skype icon",
      icon: "353",
      color: false,
   },
   {
      name: "foursquare1",
      keywords: "foursquare location check in venue social map navigation geolocation places foursquare icon",
      icon: "354",
      color: false,
   },
   {
      name: "trello1",
      keywords: "trello organization board task project management collaboration workflow productivity trello icon",
      icon: "355",
      color: false,
   },
   {
      name: "female",
      keywords: "female woman girl gender feminine lady avatar profile person female icon",
      icon: "356",
      color: false,
   },
   {
      name: "male",
      keywords: "male man boy gender masculine gentleman avatar profile person male icon",
      icon: "357",
      color: false,
   },
   {
      name: "gittip",
      keywords: "gittip gratipay tip donate support contribution crowdfunding generosity gratitude gittip icon",
      icon: "358",
      color: false,
   },
   {
      name: "gratipay",
      keywords: "gratipay gittip tip donate support contribution crowdfunding generosity gratitude gratipay icon",
      icon: "358",
      color: false,
   },
   {
      name: "sun o",
      keywords: "sun sunlight day sunny weather light bright shine daytime sun icon",
      icon: "359",
      color: false,
   },
   {
      name: "moon o",
      keywords: "moon night dark lunar nighttime moonlight sky evening celestial moon icon",
      icon: "35a",
      color: false,
   },
   {
      name: "archive",
      keywords: "archive storage files records data backup store collection archive icon archiving",
      icon: "35b",
      color: false,
   },
   {
      name: "bug1",
      keywords: "bug error problem issue glitch defect debug insect coding bug icon",
      icon: "35c",
      color: false,
   },
   {
      name: "vk1",
      keywords: "vk vkontakte social network russian communication platform community website vk icon",
      icon: "35d",
      color: false,
   },
   {
      name: "weibo",
      keywords: "weibo chinese microblogging social network china platform communication weibo icon sina weibo",
      icon: "35e",
      color: false,
   },
   {
      name: "renren1",
      keywords: "renren chinese social network china platform communication renren icon renren network",
      icon: "35f",
      color: false,
   },
   {
      name: "pagelines",
      keywords: "pagelines eco environment green nature sustainability plant organic ecology pagelines icon",
      icon: "360",
      color: false,
   },
   {
      name: "stack exchange",
      keywords: "stack exchange stack exchange forum questions answers community knowledge support stack exchange icon",
      icon: "361",
      color: false,
   },
   {
      name: "arrow circle o right",
      keywords: "arrow circle o right arrow circle right direction navigation move pointer arrow circle icon circular arrow",
      icon: "362",
      color: false,
   },
   {
      name: "arrow circle o left",
      keywords: "arrow circle o left arrow circle left direction navigation move pointer arrow circle icon circular arrow",
      icon: "363",
      color: false,
   },
   {
      name: "caret square o left",
      keywords: "caret square o left caret square left direction navigation move pointer caret square icon circular caret",
      icon: "364",
      color: false,
   },
   {
      name: "toggle left",
      keywords: "toggle left toggle switch button control activate enable toggle icon toggle left arrow toggle switch",
      icon: "364",
      color: false,
   },
   {
      name: "dot circle o",
      keywords: "dot circle o dot circle point marker indicator bullet dot circle icon circular dot round point",
      icon: "365",
      color: false,
   },
   {
      name: "wheelchair",
      keywords: "wheelchair accessibility disabled handicap mobility movement assistance wheelchair icon disabled access accessible",
      icon: "366",
      color: false,
   },
   {
      name: "vimeo square",
      keywords: "vimeo square vimeo video platform social media streaming vimeo icon vimeo logo vimeo video",
      icon: "367",
      color: false,
   },
   {
      name: "try",
      keywords: "try turkish lira currency turkey money finance economy turkish currency try icon turkish lira symbol",
      icon: "368",
      color: false,
   },
   {
      name: "turkish lira",
      keywords: "turkish lira try currency turkey money finance economy turkish currency try icon turkish lira symbol",
      icon: "368",
      color: false,
   },
   {
      name: "plus square o",
      keywords: "plus square o plus add sum increase expand more plus square icon addition plus sign",
      icon: "369",
      color: false,
   },
   {
      name: "space shuttle",
      keywords: "space shuttle spacecraft spaceship rocket space nasa astronomy exploration space shuttle icon space travel",
      icon: "36a",
      color: false,
   },
   {
      name: "slack",
      keywords: "slack communication messaging collaboration teamwork business office slack icon slack logo slack platform",
      icon: "36b",
      color: false,
   },
   {
      name: "envelope square",
      keywords: "envelope square envelope mail message communication email letter send envelope icon mail icon",
      icon: "36c",
      color: false,
   },
   {
      name: "wordpress1",
      keywords: "wordpress wordpress logo blog website cms content management platform wordpress icon wordpress platform wordpress symbol",
      icon: "36d",
      color: false,
   },
   {
      name: "openid",
      keywords: "openid authentication login security identity openid icon openid logo openid symbol open authentication identity provider",
      icon: "36e",
      color: false,
   },
   {
      name: "bank",
      keywords: "bank finance financial institution money business banking bank icon bank symbol banking institution",
      icon: "36f",
      color: false,
   },
   {
      name: "institution",
      keywords: "institution organization company establishment academy facility institute institution icon institution symbol educational institution",
      icon: "36f",
      color: false,
   },
   {
      name: "university",
      keywords: "university college school education academia learning degree higher education university icon university symbol",
      icon: "36f",
      color: false,
   },
   {
      name: "graduation cap",
      keywords: "graduation cap education graduate achievement academia degree cap and gown graduation graduation cap icon academic hat",
      icon: "370",
      color: false,
   },
   {
      name: "mortar board",
      keywords: "mortar board graduation cap hat education graduate achievement academia mortar board icon academic cap",
      icon: "370",
      color: false,
   },
   {
      name: "yahoo1",
      keywords: "yahoo yahoo logo search engine internet web yahoo icon yahoo symbol yahoo platform yahoo search",
      icon: "371",
      color: false,
   },
   {
      name: "google1",
      keywords: "google google logo search engine internet web google icon google symbol google platform google search",
      icon: "372",
      color: false,
   },
   {
      name: "reddit1",
      keywords: "reddit reddit logo social network community forum reddit icon reddit symbol reddit platform reddit logo",
      icon: "373",
      color: false,
   },
   {
      name: "reddit square",
      keywords: "reddit square reddit social network community forum reddit icon reddit symbol reddit platform reddit logo",
      icon: "374",
      color: false,
   },
   {
      name: "stumbleupon circle",
      keywords: "stumbleupon circle stumbleupon social network discovery website stumbleupon icon stumbleupon symbol stumbleupon platform stumbleupon logo",
      icon: "375",
      color: false,
   },
   {
      name: "stumbleupon1",
      keywords: "stumbleupon social network discovery website stumbleupon icon stumbleupon symbol stumbleupon platform stumbleupon logo stumble",
      icon: "376",
      color: false,
   },
   {
      name: "delicious1",
      keywords: "delicious social bookmarking website delicious icon delicious logo delicious platform save bookmark",
      icon: "377",
      color: false,
   },
   {
      name: "digg",
      keywords: "digg social news website community digg icon digg platform digg logo share vote",
      icon: "378",
      color: false,
   },
   {
      name: "pied piper pp",
      keywords: "pied piper pp pied piper music platform pied piper logo pied piper pp icon pied piper platform pied piper symbol pied piper pp logo",
      icon: "379",
      color: false,
   },
   {
      name: "pied piper alt",
      keywords: "pied piper alt pied piper music platform pied piper logo pied piper alt icon pied piper platform pied piper symbol pied piper alt logo",
      icon: "37a",
      color: false,
   },
   {
      name: "drupal",
      keywords: "drupal cms content management system web development drupal icon drupal logo drupal platform drupal symbol",
      icon: "37b",
      color: false,
   },
   {
      name: "joomla1",
      keywords: "joomla cms content management system web development joomla icon joomla logo joomla platform joomla symbol",
      icon: "37c",
      color: false,
   },
   {
      name: "language",
      keywords: "language translation world globe communication localization language icon language symbol speak translate",
      icon: "37d",
      color: false,
   },
   {
      name: "fax",
      keywords: "fax communication document fax machine transmission office fax icon fax machine icon send fax faxing",
      icon: "37e",
      color: false,
   },
   {
      name: "building",
      keywords: "building architecture structure construction office business building icon building symbol urban real estate",
      icon: "37f",
      color: false,
   },
   {
      name: "child",
      keywords: "child kid baby young offspring youth childhood child icon child symbol children",
      icon: "380",
      color: false,
   },
   {
      name: "paw",
      keywords: "paw animal footprint pet cat dog paw print paw icon animal paw foot",
      icon: "381",
      color: false,
   },
   {
      name: "spoon",
      keywords: "spoon utensil kitchen eat food spoon icon eating cooking silverware tableware",
      icon: "382",
      color: false,
   },
   {
      name: "cube",
      keywords: "cube 3d geometry shape block cuboid cube icon cube symbol 3d cube geometric",
      icon: "383",
      color: false,
   },
   {
      name: "cubes",
      keywords: "cubes 3d geometry shape blocks cuboids cube icon cube symbol 3d cubes geometric",
      icon: "384",
      color: false,
   },
   {
      name: "behance1",
      keywords: "behance behance logo portfolio creative design behance icon behance symbol behance platform art creative community",
      icon: "385",
      color: false,
   },
   {
      name: "behance square",
      keywords: "behance square behance behance logo portfolio creative design behance icon behance symbol behance platform art",
      icon: "386",
      color: false,
   },
   {
      name: "steam1",
      keywords: "steam steam logo gaming platform steam icon steam symbol steam platform videogames video games",
      icon: "387",
      color: false,
   },
   {
      name: "steam square",
      keywords: "steam square steam steam logo gaming platform steam icon steam symbol steam platform videogames video games",
      icon: "388",
      color: false,
   },
   {
      name: "recycle",
      keywords: "recycle renewable environment green sustainability ecology recycling recycle icon eco friendly reuse",
      icon: "389",
      color: false,
   },
   {
      name: "automobile",
      keywords: "automobile car vehicle auto transportation car icon automobile symbol car logo drive automotive",
      icon: "38a",
      color: false,
   },
   {
      name: "car",
      keywords: "car automobile vehicle auto transportation car icon car symbol car logo drive automotive",
      icon: "38a",
      color: false,
   },
   {
      name: "cab",
      keywords: "cab taxi car vehicle auto transportation taxi icon cab icon taxicab taxicar",
      icon: "38b",
      color: false,
   },
   {
      name: "taxi",
      keywords: "taxi cab car vehicle auto transportation taxi icon taxi symbol taxi logo cab",
      icon: "38b",
      color: false,
   },
   {
      name: "tree1",
      keywords: "tree nature forest environment plant tree icon tree symbol wood green ecology",
      icon: "38c",
      color: false,
   },
   {
      name: "spotify1",
      keywords: "spotify spotify logo music streaming platform spotify icon spotify symbol spotify platform audio spotify logo",
      icon: "38d",
      color: false,
   },
   {
      name: "deviantart1",
      keywords: "deviantart deviantart logo art community portfolio deviantart icon deviantart symbol deviantart platform creative design",
      icon: "38e",
      color: false,
   },
   {
      name: "soundcloud1",
      keywords: "soundcloud soundcloud logo music audio platform soundcloud icon soundcloud symbol soundcloud platform streaming sound",
      icon: "38f",
      color: false,
   },
   {
      name: "database1",
      keywords: "database data storage information server database icon database symbol database management digital database server",
      icon: "390",
      color: false,
   },
   {
      name: "file pdf o",
      keywords: "file pdf o file pdf document paper adobe file pdf icon pdf file pdf document pdf icon",
      icon: "391",
      color: false,
   },
   {
      name: "file word o",
      keywords: "file word o file word document paper microsoft file word icon word file word document word icon",
      icon: "392",
      color: false,
   },
   {
      name: "file excel o",
      keywords: "file excel o file excel spreadsheet document paper microsoft file excel icon excel file excel document",
      icon: "393",
      color: false,
   },
   {
      name: "file powerpoint o",
      keywords: "file powerpoint o file powerpoint presentation document paper microsoft file powerpoint icon powerpoint file powerpoint document",
      icon: "394",
      color: false,
   },
   {
      name: "file image o",
      keywords: "file image o file image photo picture photography file image icon image file image document image icon",
      icon: "395",
      color: false,
   },
   {
      name: "file photo o",
      keywords: "file photo o file photo image picture photography file photo icon photo file photo document photo icon",
      icon: "395",
      color: false,
   },
   {
      name: "file picture o",
      keywords: "file picture o file picture image photo photography file picture icon picture file picture document picture icon",
      icon: "395",
      color: false,
   },
   {
      name: "file archive o",
      keywords: "file archive o file archive zip compressed document paper file archive icon archive file archive document",
      icon: "396",
      color: false,
   },
   {
      name: "file zip o",
      keywords: "file zip o file zip compressed archive document paper file zip icon zip file zip document",
      icon: "396",
      color: false,
   },
   {
      name: "file audio o",
      keywords: "file audio o file audio music sound file audio icon audio file audio document audio icon",
      icon: "397",
      color: false,
   },
   {
      name: "file sound o",
      keywords: "file sound o file sound audio music file sound icon sound file sound document sound icon",
      icon: "397",
      color: false,
   },
   {
      name: "file movie o",
      keywords: "file movie o file movie video film cinema file movie icon movie file movie document movie icon",
      icon: "398",
      color: false,
   },
   {
      name: "file video o",
      keywords: "file video o file video movie film cinema file video icon video file video document video icon",
      icon: "398",
      color: false,
   },
   {
      name: "file code o",
      keywords: "file code o file code programming development script coding file code icon code file code document",
      icon: "399",
      color: false,
   },
   {
      name: "vine1",
      keywords: "vine vine logo social video platform vine icon vine symbol vine platform short video vine logo",
      icon: "39a",
      color: false,
   },
   {
      name: "codepen1",
      keywords: "codepen codepen logo coding development platform codepen icon codepen symbol codepen platform codepen logo codepen logo",
      icon: "39b",
      color: false,
   },
   {
      name: "jsfiddle",
      keywords: "jsfiddle coding development sandbox platform jsfiddle icon jsfiddle symbol jsfiddle platform jsfiddle logo jsfiddle logo",
      icon: "39c",
      color: false,
   },
   {
      name: "life bouy",
      keywords: "life bouy life buoy life ring life preserver safety emergency life bouy icon life buoy icon life ring icon life preserver icon",
      icon: "39d",
      color: false,
   },
   {
      name: "life buoy",
      keywords: "life buoy life bouy life ring life preserver safety emergency life buoy icon life bouy icon life ring icon life preserver icon",
      icon: "39d",
      color: false,
   },
   {
      name: "life ring",
      keywords: "life ring life bouy life buoy life preserver safety emergency life ring icon life bouy icon life buoy icon life preserver icon",
      icon: "39d",
      color: false,
   },
   {
      name: "life saver",
      keywords: "life saver life bouy life buoy life ring life preserver safety emergency life saver icon life bouy icon life buoy icon",
      icon: "39d",
      color: false,
   },
   {
      name: "support",
      keywords: "support help assistance aid care support icon helping hand supporting supportive support symbol",
      icon: "39d",
      color: false,
   },
   {
      name: "circle o notch",
      keywords: "circle o notch circle round notch gap hole circle notch icon circle o icon round notch open circle",
      icon: "39e",
      color: false,
   },
   {
      name: "ra",
      keywords: "ra ra symbol egyptian sun god egypt mythology ra icon ra god egyptian god sun deity",
      icon: "39f",
      color: false,
   },
   {
      name: "rebel",
      keywords: "rebel rebellion resistance fight war star wars rebel alliance rebel icon rebel symbol rebel flag",
      icon: "39f",
      color: false,
   },
   {
      name: "resistance",
      keywords: "resistance rebellion rebel fight war protest resistance icon resistance symbol rebel resistance movement",
      icon: "39f",
      color: false,
   },
   {
      name: "empire",
      keywords: "empire emperor imperial dominance control power empire icon empire symbol empire flag roman empire",
      icon: "3a0",
      color: false,
   },
   {
      name: "ge",
      keywords: "ge ge logo general electric company corporation brand ge icon ge symbol ge platform ge logo",
      icon: "3a0",
      color: false,
   },
   {
      name: "git square",
      keywords: "git square git version control code repository git repository software development git icon git symbol git square icon",
      icon: "3a1",
      color: false,
   },
   {
      name: "git1",
      keywords: "git version control source control code management git icon code repository software development versioning system git logo git command",
      icon: "3a2",
      color: false,
   },
   {
      name: "hacker news",
      keywords: "hacker news news aggregator technology news startup news hacking community tech updates internet forum tech discussion hn tech news",
      icon: "3a3",
      color: false,
   },
   {
      name: "y combinator square",
      keywords: "y combinator square y combinator y combinator startup accelerator entrepreneurship tech incubator y combinator logo yc startup funding tech startups",
      icon: "3a3",
      color: false,
   },
   {
      name: "yc square",
      keywords: "yc square y combinator square y combinator startup accelerator entrepreneurship tech incubator yc startup funding tech startups y combinator logo",
      icon: "3a3",
      color: false,
   },
   {
      name: "tencent weibo",
      keywords: "tencent weibo tencent social media microblogging chinese social network tencent weibo logo weibo weibo icon chinese microblogging tencent social platform",
      icon: "3a4",
      color: false,
   },
   {
      name: "qq",
      keywords: "qq tencent qq instant messaging chinese social network qq messenger qq icon chat app qq logo tencent chat chinese messaging app",
      icon: "3a5",
      color: false,
   },
   {
      name: "wechat",
      keywords: "wechat wechat instant messaging chinese social network wechat messenger wechat icon chat app wechat logo tencent chat chinese messaging app",
      icon: "3a6",
      color: false,
   },
   {
      name: "weixin",
      keywords: "weixin wechat instant messaging chinese social network wechat messenger wechat icon chat app wechat logo tencent chat chinese messaging app",
      icon: "3a6",
      color: false,
   },
   {
      name: "paper plane",
      keywords: "paper plane send send message message email send email paper plane icon communication flight send icon",
      icon: "3a7",
      color: false,
   },
   {
      name: "send",
      keywords: "send send message message paper plane email send email send icon communication send button send symbol",
      icon: "3a7",
      color: false,
   },
   {
      name: "paper plane o",
      keywords: "paper plane o send send message message email send email paper plane icon communication flight send icon",
      icon: "3a8",
      color: false,
   },
   {
      name: "send o",
      keywords: "send o send send message message paper plane email send email send icon communication send button",
      icon: "3a8",
      color: false,
   },
   {
      name: "history1",
      keywords: "history1 history recent record past activity timeline log browse history history icon",
      icon: "3a9",
      color: false,
   },
   {
      name: "circle thin",
      keywords: "circle thin circle outline round shape geometry empty circle circle icon circle border hollow circle",
      icon: "3aa",
      color: false,
   },
   {
      name: "header",
      keywords: "header title heading headline banner section title page title header icon website header webpage title",
      icon: "3ab",
      color: false,
   },
   {
      name: "paragraph",
      keywords: "paragraph text writing content section passage article body text paragraph icon writing icon",
      icon: "3ac",
      color: false,
   },
   {
      name: "sliders",
      keywords: "sliders settings controls adjustments options preferences sliders icon controls icon settings icon adjustment icon",
      icon: "3ad",
      color: false,
   },
   {
      name: "share alt",
      keywords: "share alt share alternative share share options sharing share icon social sharing share alternative alternate share alternative sharing",
      icon: "3ae",
      color: false,
   },
   {
      name: "share alt square",
      keywords: "share alt square share alternative share share options sharing share icon social sharing share alternative alternate share alternative sharing",
      icon: "3af",
      color: false,
   },
   {
      name: "bomb",
      keywords: "bomb explosion danger dangerous terrorism war destructive bomb icon explosive attack",
      icon: "3b0",
      color: false,
   },
   {
      name: "futbol o",
      keywords: "futbol o soccer football sports football icon soccer ball soccer icon football game soccer match soccer ball icon",
      icon: "3b1",
      color: false,
   },
   {
      name: "soccer ball o",
      keywords: "soccer ball o soccer football sports football icon soccer ball soccer icon football game soccer match soccer ball icon",
      icon: "3b1",
      color: false,
   },
   {
      name: "tty",
      keywords: "tty teletypewriter text telephone textphone communication device tty icon telecommunication assistive technology deaf communication text messaging",
      icon: "3b2",
      color: false,
   },
   {
      name: "binoculars1",
      keywords: "binoculars1 binoculars observation search explore spy binoculars icon exploration view magnification",
      icon: "3b3",
      color: false,
   },
   {
      name: "plug",
      keywords: "plug electric plug power plug socket electricity energy plug icon power connect electric socket",
      icon: "3b4",
      color: false,
   },
   {
      name: "slideshare",
      keywords: "slideshare slideshare presentation sharing slides slideshare icon business presentation document sharing knowledge sharing presentation platform",
      icon: "3b5",
      color: false,
   },
   {
      name: "twitch1",
      keywords: "twitch1 twitch live streaming video game streaming online gaming twitch icon gaming platform streaming service twitch logo gamer community",
      icon: "3b6",
      color: false,
   },
   {
      name: "yelp1",
      keywords: "yelp1 yelp restaurant review local business yelp icon customer reviews yelp logo yelp rating restaurant rating local reviews",
      icon: "3b7",
      color: false,
   },
   {
      name: "newspaper o",
      keywords: "newspaper o newspaper news press journalism newspaper icon media article publication news story",
      icon: "3b8",
      color: false,
   },
   {
      name: "wifi",
      keywords: "wifi wireless internet network wifi signal wifi icon internet connection wifi symbol wireless internet wifi network",
      icon: "3b9",
      color: false,
   },
   {
      name: "calculator1",
      keywords: "calculator1 calculator math arithmetic calculation mathematics calculator icon math tool addition subtraction",
      icon: "3ba",
      color: false,
   },
   {
      name: "paypal1",
      keywords: "paypal1 paypal payment online payment paypal icon money transfer online transaction secure payment digital payment paypal logo",
      icon: "3bb",
      color: false,
   },
   {
      name: "google wallet",
      keywords: "google wallet google wallet payment online payment google wallet icon money transfer online transaction secure payment digital payment google wallet logo",
      icon: "3bc",
      color: false,
   },
   {
      name: "cc visa",
      keywords: "cc visa visa credit card payment visa card visa logo credit card icon payment method financial visa credit card",
      icon: "3bd",
      color: false,
   },
   {
      name: "cc mastercard",
      keywords: "cc mastercard mastercard credit card payment mastercard icon mastercard logo credit card icon payment method financial mastercard credit card",
      icon: "3be",
      color: false,
   },
   {
      name: "cc discover",
      keywords: "cc discover discover credit card payment discover card discover logo credit card icon payment method financial discover credit card",
      icon: "3bf",
      color: false,
   },
   {
      name: "cc amex",
      keywords: "cc amex american express credit card payment american express card american express logo credit card icon payment method financial american express credit card",
      icon: "3c0",
      color: false,
   },
   {
      name: "cc paypal",
      keywords: "cc paypal paypal payment online payment paypal icon money transfer online transaction secure payment digital payment paypal logo",
      icon: "3c1",
      color: false,
   },
   {
      name: "cc stripe",
      keywords: "cc stripe stripe credit card payment stripe icon stripe logo credit card icon payment method financial stripe credit card",
      icon: "3c2",
      color: false,
   },
   {
      name: "bell slash",
      keywords: "bell slash mute notification off silent mode disable notification bell with slash notification muted notification off icon mute notification silent bell",
      icon: "3c3",
      color: false,
   },
   {
      name: "bell slash o",
      keywords: "bell slash o mute notification off silent mode disable notification bell with slash notification muted notification off icon mute notification silent bell",
      icon: "3c4",
      color: false,
   },
   {
      name: "trash",
      keywords: "trash delete remove bin garbage trash can trash icon discard waste delete icon",
      icon: "3c5",
      color: false,
   },
   {
      name: "copyright",
      keywords: "copyright rights intellectual property copyright symbol copyright icon author rights legal ownership copyright protection",
      icon: "3c6",
      color: false,
   },
   {
      name: "at",
      keywords: "at email contact email symbol at symbol contact info email address at sign email icon contact icon",
      icon: "3c7",
      color: false,
   },
   {
      name: "eyedropper1",
      keywords: "eyedropper1 eyedropper color picker color selection color tool color dropper eyedropper icon color sampling color picking color selection tool",
      icon: "3c8",
      color: false,
   },
   {
      name: "paint brush",
      keywords: "paint brush painting art creative drawing artistic brush painting tool art tool brush icon",
      icon: "3c9",
      color: false,
   },
   {
      name: "birthday cake",
      keywords: "birthday cake cake celebration birthday party birthday icon cake icon dessert celebrate birthday party",
      icon: "3ca",
      color: false,
   },
   {
      name: "area chart",
      keywords: "area chart chart graph data visualization statistics area graph trend analysis plot data",
      icon: "3cb",
      color: false,
   },
   {
      name: "pie chart1",
      keywords: "pie chart1 pie chart chart graph data visualization statistics circle chart pie graph data pie chart icon",
      icon: "3cc",
      color: false,
   },
   {
      name: "line chart",
      keywords: "line chart chart graph data visualization statistics line graph trend analysis plot data",
      icon: "3cd",
      color: false,
   },
   {
      name: "lastfm1",
      keywords: "lastfm1 last.fm music streaming music icon last.fm icon music service online radio music app music platform",
      icon: "3ce",
      color: false,
   },
   {
      name: "lastfm square",
      keywords: "lastfm square last.fm music streaming music icon last.fm icon music service online radio music app music platform",
      icon: "3cf",
      color: false,
   },
   {
      name: "toggle off",
      keywords: "toggle off switch off turn off disable off switch toggle switch toggle off icon power off toggle off icon",
      icon: "3d0",
      color: false,
   },
   {
      name: "toggle on",
      keywords: "toggle on switch on turn on enable on switch toggle switch toggle on icon power on toggle on icon",
      icon: "3d1",
      color: false,
   },
   {
      name: "bicycle",
      keywords: "bicycle bike cycling transportation exercise bicycle icon ride cycle biking bicycle symbol",
      icon: "3d2",
      color: false,
   },
   {
      name: "bus",
      keywords: "bus public transport transportation vehicle travel bus icon commute bus stop bus station public bus",
      icon: "3d3",
      color: false,
   },
   {
      name: "ioxhost",
      keywords: "ioxhost ioxhost hosting web hosting cloud hosting ioxhost icon hosting service server hosting ioxhost logo web server",
      icon: "3d4",
      color: false,
   },
   {
      name: "angellist",
      keywords: "angellist angellist startup venture capital angellist icon investment angellist logo startup funding entrepreneurship angellist platform",
      icon: "3d5",
      color: false,
   },
   {
      name: "cc",
      keywords: "cc creative commons copyright license creativecommons.org cc license creative commons icon open source creativecommons.org logo cc logo",
      icon: "3d6",
      color: false,
   },
   {
      name: "ils",
      keywords: "ils israeli shekel currency israeli currency money currency symbol israeli shekel symbol shekel ils israeli money",
      icon: "3d7",
      color: false,
   },
   {
      name: "shekel",
      keywords: "shekel israeli shekel currency israeli currency money currency symbol israeli shekel symbol shekel ils israeli money",
      icon: "3d7",
      color: false,
   },
   {
      name: "sheqel",
      keywords: "sheqel israeli shekel currency israeli currency money currency symbol israeli shekel symbol shekel ils israeli money",
      icon: "3d7",
      color: false,
   },
   {
      name: "meanpath",
      keywords: "meanpath meanpath analytics data analysis meanpath icon analytics platform data insights meanpath logo analytics tool analysis",
      icon: "3d8",
      color: false,
   },
   {
      name: "buysellads",
      keywords: "buysellads buysellads advertising advertisement marketing buysellads icon online advertising ad platform buysellads logo ad network",
      icon: "3d9",
      color: false,
   },
   {
      name: "connectdevelop",
      keywords: "connectdevelop connectdevelop development developer coding connectdevelop icon connectdevelop logo connectdevelop platform connectdevelop network connectdevelop community",
      icon: "3da",
      color: false,
   },
   {
      name: "dashcube",
      keywords: "dashcube dashcube cube geometry cube icon dashcube icon cube shape dashcube logo 3d cube square",
      icon: "3db",
      color: false,
   },
   {
      name: "forumbee",
      keywords: "forumbee forumbee forum community discussion forumbee icon forumbee logo forum platform community discussion online forum",
      icon: "3dc",
      color: false,
   },
   {
      name: "leanpub",
      keywords: "leanpub leanpub book self publishing leanpub icon book publishing self publishing platform leanpub logo book platform author",
      icon: "3dd",
      color: false,
   },
   {
      name: "sellsy",
      keywords: "sellsy sellsy sales saas sellsy icon business sellsy logo crm sales management saas platform",
      icon: "3de",
      color: false,
   },
   {
      name: "shirtsinbulk",
      keywords: "shirtsinbulk shirtsinbulk clothing apparel shirt shirtsinbulk icon bulk clothing shirtsinbulk logo bulk apparel wholesale",
      icon: "3df",
      color: false,
   },
   {
      name: "simplybuilt",
      keywords: "simplybuilt simplybuilt website web design simplybuilt icon website building simplybuilt logo web development web design platform website builder",
      icon: "3e0",
      color: false,
   },
   {
      name: "skyatlas",
      keywords: "skyatlas skyatlas atlas map navigation skyatlas icon map icon skyatlas logo world map location",
      icon: "3e1",
      color: false,
   },
   {
      name: "cart plus",
      keywords: "cart plus add to cart shopping cart shopping cart add item cart plus icon online shopping buy shopping bag",
      icon: "3e2",
      color: false,
   },
   {
      name: "cart arrow down",
      keywords: "cart arrow down shopping cart move down down arrow cart down cart arrow down icon downward shopping bag downward arrow drop down",
      icon: "3e3",
      color: false,
   },
   {
      name: "diamond",
      keywords: "diamond gem jewelry precious luxury diamond icon gemstone diamond shape diamond symbol bling",
      icon: "3e4",
      color: false,
   },
   {
      name: "ship",
      keywords: "ship boat shipping vessel cargo ship icon delivery marine ocean transport",
      icon: "3e5",
      color: false,
   },
   {
      name: "user secret",
      keywords: "user secret private hidden confidential secret user icon privacy mask incognito anonymous",
      icon: "3e6",
      color: false,
   },
   {
      name: "motorcycle",
      keywords: "motorcycle bike motorbike transportation vehicle motorcycle icon bike icon ride motorbike icon biking",
      icon: "3e7",
      color: false,
   },
   {
      name: "street view",
      keywords: "street view city urban street streetscape street view icon cityscape landscape urban view urban landscape",
      icon: "3e8",
      color: false,
   },
   {
      name: "heartbeat",
      keywords: "heartbeat heart rate health heartbeat icon pulse cardio fitness heart healthcare heart monitor",
      icon: "3e9",
      color: false,
   },
   {
      name: "venus",
      keywords: "venus female feminine venus symbol woman venus icon gender female gender femininity venus planet",
      icon: "3ea",
      color: false,
   },
   {
      name: "mars",
      keywords: "mars male masculine mars symbol man mars icon gender male gender masculinity mars planet",
      icon: "3eb",
      color: false,
   },
   {
      name: "mercury",
      keywords: "mercury planet mercury symbol planet symbol communication mercury icon planet icon science astronomy messenger",
      icon: "3ec",
      color: false,
   },
   {
      name: "intersex",
      keywords: "intersex gender intersex symbol gender identity lgbt intersex icon non binary gender symbol transgender sexual orientation",
      icon: "3ed",
      color: false,
   },
   {
      name: "transgender",
      keywords: "transgender gender transgender symbol gender identity lgbt transgender icon gender symbol transgender flag sexual orientation transgender pride",
      icon: "3ed",
      color: false,
   },
   {
      name: "transgender alt",
      keywords: "transgender alt gender transgender symbol gender identity lgbt transgender icon gender symbol transgender flag sexual orientation transgender pride",
      icon: "3ee",
      color: false,
   },
   {
      name: "venus double",
      keywords: "venus double dual female dual gender female venus symbol dual venus dual female gender venus double icon gender double female",
      icon: "3ef",
      color: false,
   },
   {
      name: "mars double",
      keywords: "mars double dual male dual gender male mars symbol dual mars dual male gender mars double icon gender double male",
      icon: "3f0",
      color: false,
   },
   {
      name: "venus mars",
      keywords: "venus mars gender venus and mars female and male dual gender gender symbol venus mars icon venus and mars symbol gender balance femininity and masculinity",
      icon: "3f1",
      color: false,
   },
   {
      name: "mars stroke",
      keywords: "mars stroke male gender masculinity mars symbol manly man mars stroke icon mars icon gender symbol male",
      icon: "3f2",
      color: false,
   },
   {
      name: "mars stroke v",
      keywords: "mars stroke v male gender masculinity mars symbol manly man mars stroke v icon mars icon gender symbol male",
      icon: "3f3",
      color: false,
   },
   {
      name: "mars stroke h",
      keywords: "mars stroke h male gender masculinity mars symbol manly man mars stroke h icon mars icon gender symbol male",
      icon: "3f4",
      color: false,
   },
   {
      name: "neuter",
      keywords: "neuter gender neuter symbol gender identity lgbt neuter icon gender symbol neuter gender sexual orientation neuter pride",
      icon: "3f5",
      color: false,
   },
   {
      name: "genderless",
      keywords: "genderless gender genderless symbol gender identity lgbt genderless icon gender symbol gender neutral sexual orientation genderless pride",
      icon: "3f6",
      color: false,
   },
   {
      name: "facebook official",
      keywords: "facebook official facebook social media facebook icon facebook logo social network facebook official icon facebook brand facebook page official facebook",
      icon: "3f7",
      color: false,
   },
   {
      name: "pinterest p",
      keywords: "pinterest p pinterest social media pinterest icon pinterest logo social network pinterest p icon pinterest brand pinterest page p symbol",
      icon: "3f8",
      color: false,
   },
   {
      name: "whatsapp1",
      keywords: "whatsapp1 whatsapp messaging chat whatsapp icon whatsapp logo messaging app whatsapp chat whatsapp messenger whatsapp symbol",
      icon: "3f9",
      color: false,
   },
   {
      name: "server",
      keywords: "server data computer server icon network server room it data center technology hosting",
      icon: "3fa",
      color: false,
   },
   {
      name: "user plus1",
      keywords: "user plus1 add user new user user plus user add plus user icon add user icon new member",
      icon: "3fb",
      color: false,
   },
   {
      name: "user times",
      keywords: "user times remove user delete user user remove user remove delete user icon remove user icon remove member",
      icon: "3fc",
      color: false,
   },
   {
      name: "bed",
      keywords: "bed sleep rest bedroom furniture hotel accommodation mattress pillow sleeping",
      icon: "3fd",
      color: false,
   },
   {
      name: "hotel",
      keywords: "hotel accommodation lodging inn stay travel hospitality resort room booking",
      icon: "3fd",
      color: false,
   },
   {
      name: "viacoin",
      keywords: "viacoin cryptocurrency digital currency virtual money blockchain crypto finance viacoin logo cryptocurrency icon viacoin symbol",
      icon: "3fe",
      color: false,
   },
   {
      name: "train",
      keywords: "train railway railroad transportation travel commute locomotive public transport passenger train train station",
      icon: "3ff",
      color: false,
   },
   {
      name: "subway",
      keywords: "subway metro underground train public transport commute subway train subway station urban transport subway icon",
      icon: "400",
      color: false,
   },
   {
      name: "medium",
      keywords: "medium blogging writing platform content articles publishing online blog medium logo",
      icon: "401",
      color: false,
   },
   {
      name: "y combinator",
      keywords: "y combinator yc startup accelerator investor venture capital incubator tech entrepreneurship y combinator logo",
      icon: "402",
      color: false,
   },
   {
      name: "yc",
      keywords: "yc y combinator startup accelerator investor venture capital incubator tech entrepreneurship yc logo",
      icon: "402",
      color: false,
   },
   {
      name: "optin monster",
      keywords: "optin monster marketing email lead generation conversion website tool optin monster logo optin monster icon subscribe",
      icon: "403",
      color: false,
   },
   {
      name: "opencart",
      keywords: "opencart ecommerce shopping online store platform opencart logo opencart icon cart retail store",
      icon: "404",
      color: false,
   },
   {
      name: "expeditedssl",
      keywords: "expeditedssl ssl security certificate website encryption https secure online expeditedssl logo",
      icon: "405",
      color: false,
   },
   {
      name: "battery",
      keywords: "battery power energy charge cell electrical device battery icon battery level battery status",
      icon: "406",
      color: false,
   },
   {
      name: "battery 4",
      keywords: "battery 4 battery full battery 100% battery fully charged battery level battery status battery icon battery four full charge",
      icon: "406",
      color: false,
   },
   {
      name: "battery full",
      keywords: "battery full battery full battery 100% battery fully charged battery level battery status battery icon full charge battery filled",
      icon: "406",
      color: false,
   },
   {
      name: "battery 3",
      keywords: "battery 3 battery three quarters battery 75% battery battery level battery status battery icon three quarter charge battery three three bars",
      icon: "407",
      color: false,
   },
   {
      name: "battery three quarters",
      keywords: "battery three quarters battery three quarters battery 75% battery battery level battery status three quarter charge battery three three bars battery icon",
      icon: "407",
      color: false,
   },
   {
      name: "battery 2",
      keywords: "battery 2 battery half battery 50% battery battery level battery status battery icon half charge battery two two bars",
      icon: "408",
      color: false,
   },
   {
      name: "battery half",
      keywords: "battery half battery half battery 50% battery battery level battery status half charge battery icon two bars battery filled",
      icon: "408",
      color: false,
   },
   {
      name: "battery 1",
      keywords: "battery 1 battery quarter battery 25% battery battery level battery status battery icon quarter charge one bar battery one",
      icon: "409",
      color: false,
   },
   {
      name: "battery quarter",
      keywords: "battery quarter battery quarter battery 25% battery battery level battery status quarter charge one bar battery icon battery filled",
      icon: "409",
      color: false,
   },
   {
      name: "battery 0",
      keywords: "battery 0 battery empty battery battery drained battery level battery status battery icon no charge zero bars battery empty",
      icon: "40a",
      color: false,
   },
   {
      name: "battery empty",
      keywords: "battery empty battery empty battery battery drained battery level battery status no charge battery icon zero bars battery filled",
      icon: "40a",
      color: false,
   },
   {
      name: "mouse pointer",
      keywords: "mouse pointer mouse pointer cursor click arrow computer device interface mouse icon",
      icon: "40b",
      color: false,
   },
   {
      name: "i cursor",
      keywords: "i cursor cursor i beam text cursor typing editing text selection input text field cursor icon",
      icon: "40c",
      color: false,
   },
   {
      name: "object group",
      keywords: "object group group combine merge unify elements objects arrange grouping objects icon",
      icon: "40d",
      color: false,
   },
   {
      name: "object ungroup",
      keywords: "object ungroup ungroup separate split disassemble divide elements objects ungrouping objects icon",
      icon: "40e",
      color: false,
   },
   {
      name: "sticky note",
      keywords: "sticky note note reminder memo post it message paper notebook sticky note icon sticky",
      icon: "40f",
      color: false,
   },
   {
      name: "sticky note o",
      keywords: "sticky note o note reminder memo post it message paper notebook sticky note icon sticky outline",
      icon: "410",
      color: false,
   },
   {
      name: "cc jcb",
      keywords: "cc jcb credit card payment finance credit banking jcb card credit card icon jcb payment method",
      icon: "411",
      color: false,
   },
   {
      name: "cc diners club",
      keywords: "cc diners club credit card payment finance credit banking diners club credit card icon diners club logo payment method",
      icon: "412",
      color: false,
   },
   {
      name: "clone",
      keywords: "clone copy duplicate replicate twin image mimic reproduction clone icon cloning",
      icon: "413",
      color: false,
   },
   {
      name: "balance scale",
      keywords: "balance scale scale justice law equality fairness weighing measurement balance scale icon",
      icon: "414",
      color: false,
   },
   {
      name: "hourglass o",
      keywords: "hourglass o hourglass waiting time clock sand countdown hourglass icon empty hourglass hourglass outline",
      icon: "415",
      color: false,
   },
   {
      name: "hourglass 1",
      keywords: "hourglass 1 hourglass one minute 60 seconds time clock sand countdown hourglass icon one minute timer",
      icon: "416",
      color: false,
   },
   {
      name: "hourglass start",
      keywords: "hourglass start hourglass waiting time clock sand countdown hourglass icon start timer begin",
      icon: "416",
      color: false,
   },
   {
      name: "hourglass 2",
      keywords: "hourglass 2 hourglass two minutes 120 seconds time clock sand countdown hourglass icon two minutes timer",
      icon: "417",
      color: false,
   },
   {
      name: "hourglass half",
      keywords: "hourglass half hourglass halfway waiting time clock sand countdown hourglass icon halfway timer",
      icon: "417",
      color: false,
   },
   {
      name: "hourglass 3",
      keywords: "hourglass 3 hourglass three minutes 180 seconds time clock sand countdown hourglass icon three minutes timer",
      icon: "418",
      color: false,
   },
   {
      name: "hourglass end",
      keywords: "hourglass end hourglass waiting time clock sand countdown hourglass icon end timer finish",
      icon: "418",
      color: false,
   },
   {
      name: "hourglass",
      keywords: "hourglass waiting time clock sand countdown hourglass icon timer sand clock sand timer",
      icon: "419",
      color: false,
   },
   {
      name: "hand grab o",
      keywords: "hand grab o hand grab take hold pick up gesture hand icon grabbing hand hand grab outline",
      icon: "41a",
      color: false,
   },
   {
      name: "hand rock o",
      keywords: "hand rock o hand rock gesture signal symbol hand icon rock hand rock gesture rock outline",
      icon: "41a",
      color: false,
   },
   {
      name: "hand paper o",
      keywords: "hand paper o hand paper gesture signal symbol hand icon paper hand paper gesture paper outline",
      icon: "41b",
      color: false,
   },
   {
      name: "hand stop o",
      keywords: "hand stop o hand stop gesture halt no forbidden hand icon stop hand stop gesture",
      icon: "41b",
      color: false,
   },
   {
      name: "hand scissors o",
      keywords: "hand scissors o hand scissors gesture signal symbol hand icon scissors hand scissors gesture scissors outline",
      icon: "41c",
      color: false,
   },
   {
      name: "hand lizard o",
      keywords: "hand lizard o hand lizard gesture signal symbol hand icon lizard hand lizard gesture lizard outline",
      icon: "41d",
      color: false,
   },
   {
      name: "hand spock o",
      keywords: "hand spock o hand spock gesture signal symbol hand icon spock hand spock gesture spock outline",
      icon: "41e",
      color: false,
   },
   {
      name: "hand pointer o",
      keywords: "hand pointer o hand pointer gesture cursor click hand icon pointer hand pointer gesture pointer outline",
      icon: "41f",
      color: false,
   },
   {
      name: "hand peace o",
      keywords: "hand peace o hand peace gesture symbol unity hand icon peace hand peace gesture peace outline",
      icon: "420",
      color: false,
   },
   {
      name: "trademark",
      keywords: "trademark tm brand logo copyright symbol trademark icon branding legal registered trademark",
      icon: "421",
      color: false,
   },
   {
      name: "registered",
      keywords: "registered r brand logo copyright symbol registered icon branding legal registered trademark",
      icon: "422",
      color: false,
   },
   {
      name: "creative commons",
      keywords: "creative commons cc copyright license attribution share alike creative commons license cc license cc symbol cc logo",
      icon: "423",
      color: false,
   },
   {
      name: "gg",
      keywords: "gg gg icon gg logo letter g g symbol double g initials gg sign gg letter gg emblem",
      icon: "424",
      color: false,
   },
   {
      name: "gg circle",
      keywords: "gg circle gg icon gg logo letter g g symbol double g initials gg sign gg letter gg emblem",
      icon: "425",
      color: false,
   },
   {
      name: "tripadvisor",
      keywords: "tripadvisor travel reviews hotel restaurant ratings tourism tripadvisor logo tripadvisor icon trip",
      icon: "426",
      color: false,
   },
   {
      name: "odnoklassniki",
      keywords: "odnoklassniki social media network communication friends community odnoklassniki logo odnoklassniki icon ok",
      icon: "427",
      color: false,
   },
   {
      name: "odnoklassniki square",
      keywords: "odnoklassniki square social media network communication friends community odnoklassniki logo odnoklassniki icon ok",
      icon: "428",
      color: false,
   },
   {
      name: "get pocket",
      keywords: "get pocket save read later bookmark article web pocket logo pocket icon read",
      icon: "429",
      color: false,
   },
   {
      name: "wikipedia w",
      keywords: "wikipedia w encyclopedia knowledge information online learning wikipedia logo wikipedia icon wiki",
      icon: "42a",
      color: false,
   },
   {
      name: "safari1",
      keywords: "safari1 browser web internet apple safari logo safari icon safari browser safari app",
      icon: "42b",
      color: false,
   },
   {
      name: "chrome1",
      keywords: "chrome1 browser web internet google chrome logo chrome icon chrome browser chrome app",
      icon: "42c",
      color: false,
   },
   {
      name: "firefox1",
      keywords: "firefox1 browser web internet mozilla firefox logo firefox icon firefox browser firefox app",
      icon: "42d",
      color: false,
   },
   {
      name: "opera1",
      keywords: "opera1 browser web internet opera software opera logo opera icon opera browser opera app",
      icon: "42e",
      color: false,
   },
   {
      name: "internet explorer",
      keywords: "internet explorer browser web internet microsoft ie internet explorer logo internet explorer icon internet explorer browser ie browser",
      icon: "42f",
      color: false,
   },
   {
      name: "television",
      keywords: "television tv screen monitor display entertainment television icon tv screen tv monitor watch",
      icon: "430",
      color: false,
   },
   {
      name: "tv1",
      keywords: "tv1 television tv screen monitor display entertainment television icon tv screen tv monitor",
      icon: "430",
      color: false,
   },
   {
      name: "contao",
      keywords: "contao cms web content management system website platform contao logo contao icon contao cms contao symbol",
      icon: "431",
      color: false,
   },
   {
      name: "500px1",
      keywords: "500px1 photography photo image portfolio social media 500px logo 500px icon 500px network 500px app",
      icon: "432",
      color: false,
   },
   {
      name: "amazon1",
      keywords: "amazon1 shopping ecommerce online store retail amazon logo amazon icon amazon marketplace amazon app",
      icon: "433",
      color: false,
   },
   {
      name: "calendar plus o",
      keywords: "calendar plus o calendar date event schedule add new calendar icon plus add event",
      icon: "434",
      color: false,
   },
   {
      name: "calendar minus o",
      keywords: "calendar minus o calendar date event schedule remove delete calendar icon minus remove event",
      icon: "435",
      color: false,
   },
   {
      name: "calendar times o",
      keywords: "calendar times o calendar date event schedule cancel close calendar icon times cancel event",
      icon: "436",
      color: false,
   },
   {
      name: "calendar check o",
      keywords: "calendar check o calendar date event schedule confirm check calendar icon checkmark confirm event",
      icon: "437",
      color: false,
   },
   {
      name: "industry",
      keywords: "industry factory manufacturing production economy industrial industry icon manufacture industrial sector industry symbol",
      icon: "438",
      color: false,
   },
   {
      name: "map pin",
      keywords: "map pin pin location marker navigation map map pin icon place destination pinpoint",
      icon: "439",
      color: false,
   },
   {
      name: "map signs",
      keywords: "map signs navigation direction location map signs road map signs icon travel guide",
      icon: "43a",
      color: false,
   },
   {
      name: "map o",
      keywords: "map o map navigation location guide world globe map icon atlas map outline",
      icon: "43b",
      color: false,
   },
   {
      name: "map1",
      keywords: "map1 map navigation location guide world globe map icon atlas map symbol",
      icon: "43c",
      color: false,
   },
   {
      name: "commenting",
      keywords: "commenting comments conversation discussion chat talk commenting icon speak exchange feedback",
      icon: "43d",
      color: false,
   },
   {
      name: "commenting o",
      keywords: "commenting o comments conversation discussion chat talk commenting icon speak exchange feedback outline",
      icon: "43e",
      color: false,
   },
   {
      name: "houzz",
      keywords: "houzz interior design home decor ideas architecture houzz logo houzz icon home decor design",
      icon: "43f",
      color: false,
   },
   {
      name: "vimeo1",
      keywords: "vimeo1 video media streaming vimeo logo vimeo icon vimeo player vimeo app vimeo network",
      icon: "440",
      color: false,
   },
   {
      name: "black tie",
      keywords: "black tie suit formal attire fashion event black tie event elegant tuxedo party",
      icon: "441",
      color: false,
   },
   {
      name: "fonticons",
      keywords: "fonticons font icon symbols typography design fonticons logo fonticons icon fonticons symbol fonticons font",
      icon: "442",
      color: false,
   },
   {
      name: "reddit alien",
      keywords: "reddit alien reddit social media community forum reddit logo reddit icon reddit mascot reddit symbol",
      icon: "443",
      color: false,
   },
   {
      name: "edge1",
      keywords: "edge1 browser web internet microsoft edge edge logo edge icon edge browser edge app",
      icon: "444",
      color: false,
   },
   {
      name: "credit card alt",
      keywords: "credit card alt credit card payment finance banking credit credit card icon alternate credit card alternative payment credit card alternative",
      icon: "445",
      color: false,
   },
   {
      name: "codiepie",
      keywords: "codiepie developer coder programming code coding codiepie logo codiepie icon code pie coding pie",
      icon: "446",
      color: false,
   },
   {
      name: "modx",
      keywords: "modx cms web content management system platform modx logo modx icon modx cms modx symbol modx framework",
      icon: "447",
      color: false,
   },
   {
      name: "fort awesome",
      keywords: "fort awesome font icon symbols typography design fort awesome logo fort awesome icon fort awesome symbol fort awesome font",
      icon: "448",
      color: false,
   },
   {
      name: "usb",
      keywords: "usb plug port connection computer device usb icon usb plug usb port usb symbol",
      icon: "449",
      color: false,
   },
   {
      name: "product hunt",
      keywords: "product hunt startup tech new innovation product product hunt logo product hunt icon product discovery product showcase",
      icon: "44a",
      color: false,
   },
   {
      name: "mixcloud",
      keywords: "mixcloud music audio streaming mix mixcloud logo mixcloud icon mixcloud player music platform music streaming",
      icon: "44b",
      color: false,
   },
   {
      name: "scribd",
      keywords: "scribd books reading writing documents scribd logo scribd icon document sharing ebooks scribd app",
      icon: "44c",
      color: false,
   },
   {
      name: "pause circle",
      keywords: "pause circle pause music video media pause icon pause symbol pause circle icon pause circle button pause media",
      icon: "44d",
      color: false,
   },
   {
      name: "pause circle o",
      keywords: "pause circle o pause music video media pause icon pause symbol pause circle icon pause circle outline pause media",
      icon: "44e",
      color: false,
   },
   {
      name: "stop circle",
      keywords: "stop circle stop music video media stop icon stop symbol stop circle icon stop circle button stop media",
      icon: "44f",
      color: false,
   },
   {
      name: "stop circle o",
      keywords: "stop circle o stop music video media stop icon stop symbol stop circle icon stop circle outline stop media",
      icon: "450",
      color: false,
   },
   {
      name: "shopping bag",
      keywords: "shopping bag bag purchase buy store shopping shopping bag icon shopping bag symbol shopping cart shopping basket",
      icon: "451",
      color: false,
   },
   {
      name: "shopping basket",
      keywords: "shopping basket basket shopping cart groceries store purchase buy shop shopping icon",
      icon: "452",
      color: false,
   },
   {
      name: "hashtag",
      keywords: "hashtag tag pound hash social media trending topic conversation hashtag icon number sign",
      icon: "453",
      color: false,
   },
   {
      name: "bluetooth",
      keywords: "bluetooth wireless technology connection communication bluetooth icon bluetooth symbol device bluetooth logo bluetooth connectivity",
      icon: "454",
      color: false,
   },
   {
      name: "bluetooth b",
      keywords: "bluetooth b bluetooth wireless technology connection communication bluetooth icon bluetooth symbol device bluetooth logo",
      icon: "455",
      color: false,
   },
   {
      name: "percent",
      keywords: "percent percentage rate portion fraction symbol percentage icon percent sign math statistics",
      icon: "456",
      color: false,
   },
   {
      name: "gitlab",
      keywords: "gitlab git version control repository code development gitlab icon programming software source control",
      icon: "457",
      color: false,
   },
   {
      name: "wpbeginner",
      keywords: "wpbeginner wordpress beginner wordpress wp beginner wordpress tutorial wordpress guide wordpress advice wordpress help wordpress learning",
      icon: "458",
      color: false,
   },
   {
      name: "wpforms",
      keywords: "wpforms wordpress forms wordpress wp forms form builder form plugin wordpress plugin wpforms icon form creation",
      icon: "459",
      color: false,
   },
   {
      name: "envira",
      keywords: "envira envira gallery gallery photo gallery image gallery envira icon wordpress gallery wp gallery envira plugin envira wordpress",
      icon: "45a",
      color: false,
   },
   {
      name: "universal access",
      keywords: "universal access accessibility inclusive disabled wheelchair diversity access universal design equal access universal access icon",
      icon: "45b",
      color: false,
   },
   {
      name: "wheelchair alt",
      keywords: "wheelchair alt wheelchair disabled accessibility handicap mobility wheelchair icon disabled icon accessibility symbol accessible",
      icon: "45c",
      color: false,
   },
   {
      name: "question circle o",
      keywords: "question circle o question help information circle faq query doubt question icon help icon",
      icon: "45d",
      color: false,
   },
   {
      name: "blind",
      keywords: "blind blindness visually impaired vision loss disabled disability accessibility blind icon blind person low vision",
      icon: "45e",
      color: false,
   },
   {
      name: "audio description",
      keywords: "audio description audio description accessibility blind visual impairment audio icon audio assistance audio aid descriptive audio",
      icon: "45f",
      color: false,
   },
   {
      name: "volume control phone",
      keywords: "volume control phone volume control phone sound audio volume control phone volume volume adjust volume control icon",
      icon: "460",
      color: false,
   },
   {
      name: "braille",
      keywords: "braille braille alphabet blind tactile touch communication braille icon braille system braille writing text",
      icon: "461",
      color: false,
   },
   {
      name: "assistive listening systems",
      keywords: "assistive listening systems assistive technology hearing aid deaf hard of hearing auditory hearing assistive listening icon assistive listening devices listening devices",
      icon: "462",
      color: false,
   },
   {
      name: "american sign language interpreting",
      keywords: "american sign language interpreting asl interpreting sign language asl deaf communication interpreter signing sign language interpreting asl icon",
      icon: "463",
      color: false,
   },
   {
      name: "asl interpreting",
      keywords: "asl interpreting sign language asl deaf communication interpreter signing sign language interpreting asl icon american sign language interpreting",
      icon: "463",
      color: false,
   },
   {
      name: "deaf",
      keywords: "deaf hearing impaired hard of hearing disabled deafness hearing loss deaf icon deaf person hearing impairment deaf community",
      icon: "464",
      color: false,
   },
   {
      name: "deafness",
      keywords: "deafness hearing impaired hard of hearing disabled deaf hearing loss deafness icon hearing impairment deaf person deaf community",
      icon: "464",
      color: false,
   },
   {
      name: "hard of hearing",
      keywords: "hard of hearing hearing impaired deaf hearing loss disabled hearing aid hard of hearing icon hearing impairment hearing device hearing assistance",
      icon: "464",
      color: false,
   },
   {
      name: "glide",
      keywords: "glide gliding social media communication chat video call glide app glide icon glide logo",
      icon: "465",
      color: false,
   },
   {
      name: "glide g",
      keywords: "glide g glide gliding social media communication chat video call glide app glide icon",
      icon: "466",
      color: false,
   },
   {
      name: "sign language",
      keywords: "sign language signing asl american sign language communication deaf language hand gestures sign language icon sign language interpretation",
      icon: "467",
      color: false,
   },
   {
      name: "signing",
      keywords: "signing sign language asl american sign language communication deaf language hand gestures signing icon sign language interpretation",
      icon: "467",
      color: false,
   },
   {
      name: "low vision",
      keywords: "low vision visual impairment visually impaired blind vision loss eye sight sight impairment low vision icon low vision aid low vision assistance",
      icon: "468",
      color: false,
   },
   {
      name: "viadeo",
      keywords: "viadeo professional network business social media networking career viadeo icon viadeo logo viadeo square viadeo profile",
      icon: "469",
      color: false,
   },
   {
      name: "viadeo square",
      keywords: "viadeo square viadeo professional network business social media networking career viadeo icon viadeo logo viadeo profile",
      icon: "46a",
      color: false,
   },
   {
      name: "snapchat",
      keywords: "snapchat social media chat messaging snap snapchat icon snapchat logo snapchat app snapchat ghost snapchat square",
      icon: "46b",
      color: false,
   },
   {
      name: "snapchat ghost",
      keywords: "snapchat ghost snapchat social media chat messaging snap snapchat icon snapchat logo snapchat app snapchat square",
      icon: "46c",
      color: false,
   },
   {
      name: "snapchat square",
      keywords: "snapchat square snapchat social media chat messaging snap snapchat icon snapchat logo snapchat app snapchat ghost",
      icon: "46d",
      color: false,
   },
   {
      name: "pied piper",
      keywords: "pied piper pied piper logo pied piper icon pied piper cryptocurrency pied piper coin pied piper square pied piper symbol silicon valley pied piper app tech company",
      icon: "46e",
      color: false,
   },
   {
      name: "first order",
      keywords: "first order star wars first order logo first order icon first order stormtrooper kylo ren star wars logo star wars symbol first order army dark side",
      icon: "46f",
      color: false,
   },
   {
      name: "yoast",
      keywords: "yoast seo wordpress seo wordpress plugin yoast seo yoast icon wordpress optimization wordpress seo plugin seo plugin yoast logo",
      icon: "470",
      color: false,
   },
   {
      name: "themeisle",
      keywords: "themeisle wordpress themes wordpress wp themes themeisle icon wordpress design wp themes themeisle logo wordpress theme provider",
      icon: "471",
      color: false,
   },
   {
      name: "google plus circle",
      keywords: "google plus circle google plus social media google google plus icon google plus logo google circle google plus symbol google plus app google plus network",
      icon: "472",
      color: false,
   },
   {
      name: "google plus official",
      keywords: "google plus official google plus social media google google plus icon google plus logo google plus symbol google plus app google plus network google plus page",
      icon: "472",
      color: false,
   },
   {
      name: "fa",
      keywords: "fa font awesome font icon library font awesome icon fa icon fa library font awesome library font icon",
      icon: "473",
      color: false,
   },
   {
      name: "font awesome",
      keywords: "font awesome font icon library font awesome icon fa font awesome library icon library font icon fa icon",
      icon: "473",
      color: false,
   },
   {
      name: "handshake o",
      keywords: "handshake o handshake agreement deal partnership hand shake business handshake icon agreement icon",
      icon: "474",
      color: false,
   },
   {
      name: "envelope open",
      keywords: "envelope open envelope mail email open message communication envelope icon email icon mail icon",
      icon: "475",
      color: false,
   },
   {
      name: "envelope open o",
      keywords: "envelope open o envelope mail email open message communication envelope icon email icon mail icon",
      icon: "476",
      color: false,
   },
   {
      name: "linode",
      keywords: "linode cloud hosting web hosting server linode icon linode logo cloud server linode server linux hosting web server",
      icon: "477",
      color: false,
   },
   {
      name: "address book1",
      keywords: "address book1 address book contact contacts phone book directory address book icon address book symbol contact book contact list",
      icon: "478",
      color: false,
   },
   {
      name: "address book o",
      keywords: "address book o address book contact contacts phone book directory address book icon address book symbol contact book contact list",
      icon: "479",
      color: false,
   },
   {
      name: "address card",
      keywords: "address card address card contact information identity address card icon contact card business card personal information",
      icon: "47a",
      color: false,
   },
   {
      name: "vcard",
      keywords: "vcard vcard address card contact information identity vcard icon contact card business card",
      icon: "47a",
      color: false,
   },
   {
      name: "address card o",
      keywords: "address card o address card contact information identity address card icon contact card business card personal information",
      icon: "47b",
      color: false,
   },
   {
      name: "vcard o",
      keywords: "vcard o vcard address card contact information identity vcard icon contact card business card",
      icon: "47b",
      color: false,
   },
   {
      name: "user circle",
      keywords: "user circle user profile person avatar account user circle icon user icon user profile user avatar",
      icon: "47c",
      color: false,
   },
   {
      name: "user circle o",
      keywords: "user circle o user profile person avatar account user circle icon user icon user profile user avatar",
      icon: "47d",
      color: false,
   },
   {
      name: "user o",
      keywords: "user o user profile person avatar account user icon user profile user avatar user circle",
      icon: "47e",
      color: false,
   },
   {
      name: "id badge",
      keywords: "id badge id badge identification identity card id badge icon security access credential",
      icon: "47f",
      color: false,
   },
   {
      name: "drivers license",
      keywords: "drivers license license driver driving identity identification id drivers license icon driving license driver license",
      icon: "480",
      color: false,
   },
   {
      name: "id card",
      keywords: "id card id card identification identity credential id card icon security access id badge",
      icon: "480",
      color: false,
   },
   {
      name: "drivers license o",
      keywords: "drivers license o license driver driving identity identification id drivers license icon driving license driver license",
      icon: "481",
      color: false,
   },
   {
      name: "id card o",
      keywords: "id card o id card identification identity credential id card icon security access id badge",
      icon: "481",
      color: false,
   },
   {
      name: "quora",
      keywords: "quora question answers q&a forum quora icon quora logo quora app knowledge quora platform",
      icon: "482",
      color: false,
   },
   {
      name: "free code camp",
      keywords: "free code camp programming coding education free camp development free code camp icon learn to code code camp",
      icon: "483",
      color: false,
   },
   {
      name: "telegram1",
      keywords: "telegram1 telegram chat messaging communication telegram icon telegram logo telegram app telegram square telegram symbol",
      icon: "484",
      color: false,
   },
   {
      name: "thermometer",
      keywords: "thermometer temperature weather thermostat measurement hot cold thermometer icon health clinical",
      icon: "485",
      color: false,
   },
   {
      name: "thermometer 4",
      keywords: "thermometer 4 thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "485",
      color: false,
   },
   {
      name: "thermometer full",
      keywords: "thermometer full thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "485",
      color: false,
   },
   {
      name: "thermometer 3",
      keywords: "thermometer 3 thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "486",
      color: false,
   },
   {
      name: "thermometer three quarters",
      keywords: "thermometer three quarters thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "486",
      color: false,
   },
   {
      name: "thermometer 2",
      keywords: "thermometer 2 thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "487",
      color: false,
   },
   {
      name: "thermometer half",
      keywords: "thermometer half thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "487",
      color: false,
   },
   {
      name: "thermometer 1",
      keywords: "thermometer 1 thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "488",
      color: false,
   },
   {
      name: "thermometer quarter",
      keywords: "thermometer quarter thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "488",
      color: false,
   },
   {
      name: "thermometer 0",
      keywords: "thermometer 0 thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "489",
      color: false,
   },
   {
      name: "thermometer empty",
      keywords: "thermometer empty thermometer temperature weather thermostat measurement hot cold thermometer icon health",
      icon: "489",
      color: false,
   },
   {
      name: "shower",
      keywords: "shower bathroom clean hygiene water refresh shower icon shower head bathing shower room",
      icon: "48a",
      color: false,
   },
   {
      name: "bath",
      keywords: "bath bathtub bathroom relax soak water tub bath icon bathing bathroom icon",
      icon: "48b",
      color: false,
   },
   {
      name: "bathtub",
      keywords: "bathtub bath bathroom relax soak water tub bathtub icon bathing bathroom icon",
      icon: "48b",
      color: false,
   },
   {
      name: "s15",
      keywords: "s15 s 15 letter alphabet symbol s icon alphabet icon letter icon text",
      icon: "48b",
      color: false,
   },
   {
      name: "podcast1",
      keywords: "podcast1 podcast audio listening show talk podcast icon podcast symbol podcast app podcasting",
      icon: "48c",
      color: false,
   },
   {
      name: "window maximize",
      keywords: "window maximize window maximize expand enlarge full screen window icon maximize icon screen view",
      icon: "48d",
      color: false,
   },
   {
      name: "window minimize",
      keywords: "window minimize window minimize collapse shrink restore window icon minimize icon screen view",
      icon: "48e",
      color: false,
   },
   {
      name: "window restore",
      keywords: "window restore window restore resize window icon restore icon screen view window maximize",
      icon: "48f",
      color: false,
   },
   {
      name: "times rectangle",
      keywords: "times rectangle times close cancel remove exit delete times icon close icon cancel icon",
      icon: "490",
      color: false,
   },
   {
      name: "window close",
      keywords: "window close window close exit terminate end window icon close icon exit icon cancel",
      icon: "490",
      color: false,
   },
   {
      name: "times rectangle o",
      keywords: "times rectangle o times close cancel remove exit delete times icon close icon cancel icon",
      icon: "491",
      color: false,
   },
   {
      name: "window close o",
      keywords: "window close o window close exit terminate end window icon close icon exit icon cancel",
      icon: "491",
      color: false,
   },
   {
      name: "bandcamp",
      keywords: "bandcamp music band artist album bandcamp icon bandcamp logo bandcamp symbol music streaming music platform",
      icon: "492",
      color: false,
   },
   {
      name: "grav",
      keywords: "grav cms content management system grav cms web development grav icon grav logo web design cms platform open source",
      icon: "493",
      color: false,
   },
   {
      name: "etsy",
      keywords: "etsy handmade crafts vintage art etsy icon etsy logo etsy symbol online marketplace etsy shop",
      icon: "494",
      color: false,
   },
   {
      name: "imdb",
      keywords: "imdb movie film cinema tv imdb icon imdb logo imdb symbol internet movie database imdb app",
      icon: "495",
      color: false,
   },
   {
      name: "ravelry",
      keywords: "ravelry knitting crochet yarn crafts ravelry icon ravelry logo ravelry symbol knitting community ravelry app",
      icon: "496",
      color: false,
   },
   {
      name: "eercast",
      keywords: "eercast audio podcast listening show talk eercast icon eercast logo eercast symbol podcasting",
      icon: "497",
      color: false,
   },
   {
      name: "microchip",
      keywords: "microchip chip processor computer hardware microchip icon microchip symbol integrated circuit microprocessor electronic",
      icon: "498",
      color: false,
   },
   {
      name: "snowflake o",
      keywords: "snowflake o snowflake cold winter frost ice weather snowflake icon snow weather icon",
      icon: "499",
      color: false,
   },
   {
      name: "superpowers",
      keywords: "superpowers superhero super power hero superpowers icon superpowers logo superpowers symbol superhero icon superpower",
      icon: "49a",
      color: false,
   },
   {
      name: "wpexplorer",
      keywords: "wpexplorer wordpress explorer wordpress wp explorer wpexplorer icon wordpress icon wp icon wordpress explorer icon wpexplorer logo",
      icon: "49b",
      color: false,
   },
   {
      name: "meetup",
      keywords: "meetup social networking meet gathering meetup icon meetup logo meetup symbol social meetup meetup app",
      icon: "49c",
      color: false,
   },
   {
      name: "abstract",
      keywords: "abstract art abstract art design abstract icon abstract symbol artistic abstract design abstract pattern modern art",
      icon: "4a1",
      color: false,
   },
   {
      name: "academia",
      keywords: "academia education learning school college university academic research scholarship studies",
      icon: "4a2",
      color: false,
   },
   {
      name: "airplayaudio",
      keywords: "airplay audio airplay audio streaming apple wireless music airplay audio logo sound speaker",
      icon: "4b6",
      color: false,
   },
   {
      name: "airplayvideo",
      keywords: "airplay video airplay video streaming apple wireless tv airplay video logo screen mirroring television",
      icon: "4b7",
      color: false,
   },
   {
      name: "amazonaws",
      keywords: "amazon aws aws cloud computing amazon amazon web services amazon aws logo cloud server hosting infrastructure",
      icon: "4bc",
      color: false,
   },
   {
      name: "analogue",
      keywords: "analogue analogue logo retro vintage gaming video games console hardware old school retro gaming",
      icon: "4c0",
      color: false,
   },
   {
      name: "angellist1",
      keywords: "angellist angellist logo startup investing venture capital angel investing entrepreneurship angel list funding angel",
      icon: "4c3",
      color: false,
   },
   {
      name: "apachekafka",
      keywords: "apache kafka kafka message queue streaming apache messaging data apache kafka logo pubsub real time",
      icon: "4cb",
      color: false,
   },
   {
      name: "applemusic",
      keywords: "apple music music streaming itunes apple applemusic logo audio apple music icon listen songs",
      icon: "4d1",
      color: false,
   },
   {
      name: "applepay",
      keywords: "apple pay apple payment mobile payment wallet applepay logo apple pay icon nfc transaction apple wallet",
      icon: "4d2",
      color: false,
   },
   {
      name: "asana",
      keywords: "asana task management project management asana logo organization productivity teamwork collaboration to do project",
      icon: "4db",
      color: false,
   },
   {
      name: "bigcartel",
      keywords: "big cartel big cartel logo ecommerce store bigcartel icon online shop artist shopping sell marketplace",
      icon: "4f6",
      color: false,
   },
   {
      name: "blackberry",
      keywords: "blackberry blackberry logo mobile phone smartphone blackberry icon blackberry smartphone mobile phone blackberry.com technology",
      icon: "4fe",
      color: false,
   },
   {
      name: "circleci",
      keywords: "circleci continuous integration ci cd automation circleci logo devops software development build testing",
      icon: "51d",
      color: false,
   },
   {
      name: "cirrusci",
      keywords: "cirrusci continuous integration ci cd automation cirrusci logo devops software development build testing",
      icon: "51e",
      color: false,
   },
   {
      name: "codacy",
      keywords: "codacy code quality linting code review codacy logo development software code analysis code scanning codacy icon",
      icon: "527",
      color: false,
   },
   {
      name: "codeclimate",
      keywords: "codeclimate code quality code review analysis codeclimate logo development software code analysis codeclimate icon linting",
      icon: "52a",
      color: false,
   },
   {
      name: "codepen2",
      keywords: "codepen code pen web development coding codepen logo web design development frontend codepen icon",
      icon: "52f",
      color: false,
   },
   {
      name: "codesandbox",
      keywords: "codesandbox web development coding sandbox ide codesandbox logo development frontend coding environment codesandbox icon",
      icon: "531",
      color: false,
   },
   {
      name: "coffeescript",
      keywords: "coffeescript programming language coding code coffeescript logo development software javascript coffeescript language",
      icon: "535",
      color: false,
   },
   {
      name: "conda forge",
      keywords: "conda forge python package manager conda conda forge logo dependency python package conda package conda icon python dependency manager",
      icon: "53a",
      color: false,
   },
   {
      name: "confluence",
      keywords: "confluence collaboration wiki knowledge confluence logo team communication confluence icon documentation teamwork",
      icon: "53c",
      color: false,
   },
   {
      name: "cryengine",
      keywords: "cryengine game engine cryengine logo gaming development crytek video games engine 3d crysis",
      icon: "546",
      color: false,
   },
   {
      name: "curl",
      keywords: "curl command line tool curl logo http request curl command curl icon http request terminal",
      icon: "54a",
      color: false,
   },
   {
      name: "deno",
      keywords: "deno javascript runtime deno logo typescript deno icon server deno runtime deno javascript javascript runtime",
      icon: "558",
      color: false,
   },
   {
      name: "dev dot to",
      keywords: "dev.to development blog community dev.to logo programming web development dev.to icon software development code",
      icon: "55b",
      color: false,
   },
   {
      name: "diaspora",
      keywords: "diaspora social network community diaspora logo social media diaspora icon communication social network diaspora project",
      icon: "55e",
      color: false,
   },
   {
      name: "digg1",
      keywords: "digg news media community digg logo digg icon digg.com social digg button content",
      icon: "55f",
      color: false,
   },
   {
      name: "directus",
      keywords: "directus cms content management directus logo database api directus icon headless cms content directus project",
      icon: "561",
      color: false,
   },
   {
      name: "discourse",
      keywords: "discourse forum discussion community discourse logo discourse icon discussion forum discussion platform community forum conversation",
      icon: "563",
      color: false,
   },
   {
      name: "django",
      keywords: "django python web framework django logo web development django icon development web framework python web",
      icon: "567",
      color: false,
   },
   {
      name: "dolby",
      keywords: "dolby audio sound audio technology surround sound cinema entertainment audio engineering sound system dolby audio",
      icon: "56b",
      color: false,
   },
   {
      name: "drone",
      keywords: "drone unmanned aerial vehicle uav aerial quadcopter flying remote control aerial photography drone technology drone icon",
      icon: "56f",
      color: false,
   },
   {
      name: "eleventy",
      keywords: "eleventy 11ty static site generator web development javascript html css website builder eleventy icon eleventy logo",
      icon: "57f",
      color: false,
   },
   {
      name: "ello1",
      keywords: "ello1 ello social network art creative community design ello icon ello logo ello social network",
      icon: "580",
      color: false,
   },
   {
      name: "epicgames",
      keywords: "epicgames epic games videogames gaming fortnite game development gaming industry epicgames icon epicgames logo",
      icon: "587",
      color: false,
   },
   {
      name: "ethereum",
      keywords: "ethereum ethereum blockchain crypto cryptocurrency smart contracts decentralized ethereum icon ethereum logo",
      icon: "58b",
      color: false,
   },
   {
      name: "expo",
      keywords: "expo expo react native mobile app development javascript sdk expo icon expo logo expo framework",
      icon: "594",
      color: false,
   },
   {
      name: "eyeem",
      keywords: "eyeem eyeem photography photo sharing stock photos social network photographers eyeem icon eyeem logo",
      icon: "595",
      color: false,
   },
   {
      name: "flask1",
      keywords: "flask1 flask python web framework microframework api development flask1 icon flask1 logo",
      icon: "5a5",
      color: false,
   },
   {
      name: "flattr2",
      keywords: "flattr2 flattr crowdfunding support donate micropayments content creators flattr2 icon flattr2 logo",
      icon: "5a6",
      color: false,
   },
   {
      name: "github3",
      keywords: "github3 github version control code hosting software development collaboration github icon github logo",
      icon: "5c2",
      color: false,
   },
   {
      name: "gradle",
      keywords: "gradle build automation build tool software development java android dependency management software build software engineering gradle build tool",
      icon: "5e2",
      color: false,
   },
   {
      name: "grav1",
      keywords: "grav cms content management system website web development open source php grav cms website builder content creation",
      icon: "5e6",
      color: false,
   },
   {
      name: "gutenberg",
      keywords: "gutenberg wordpress editor block editor content editor wordpress editor gutenberg editor website builder wordpress gutenberg wordpress blocks",
      icon: "5ef",
      color: false,
   },
   {
      name: "hackaday",
      keywords: "hackaday hacking diy electronics projects hardware engineering technology hackaday.com hacker projects",
      icon: "5f1",
      color: false,
   },
   {
      name: "hootsuite",
      keywords: "hootsuite social media social media management social media marketing smm social networking social media tool hootsuite platform social media scheduler social media monitoring",
      icon: "606",
      color: false,
   },
   {
      name: "inkscape",
      keywords: "inkscape design vector graphics illustration graphic design open source svg inkscape software art inkscape editor",
      icon: "61e",
      color: false,
   },
   {
      name: "instapaper",
      keywords: "instapaper reading save for later bookmarking articles read later offline reading read it later instapaper.com read",
      icon: "621",
      color: false,
   },
   {
      name: "intellijidea",
      keywords: "intellij idea ide development java programming software jetbrains java ide coding intellij idea software",
      icon: "623",
      color: false,
   },
   {
      name: "internetarchive",
      keywords: "internet archive archive digital library history web archive books videos internet archive website internet archive project archive.org",
      icon: "625",
      color: false,
   },
   {
      name: "invoiceninja",
      keywords: "invoice ninja invoicing billing freelancing business accounting invoices invoice ninja platform payments invoice ninja software",
      icon: "628",
      color: false,
   },
   {
      name: "ios",
      keywords: "ios apple iphone ipad ios development ios apps ios software ios operating system apple ios ios platform",
      icon: "62a",
      color: false,
   },
   {
      name: "jetbrains",
      keywords: "jetbrains integrated development environment ide software development coding programming tools jetbrains products developer tools software",
      icon: "636",
      color: false,
   },
   {
      name: "jira",
      keywords: "jira issue tracking project management software development agile tickets tasks bug tracking collaboration atlassian",
      icon: "638",
      color: false,
   },
   {
      name: "json",
      keywords: "json javascript object notation data format serialization data interchange programming web development file format json format data",
      icon: "63d",
      color: false,
   },
   {
      name: "known",
      keywords: "known social networking blogging community platform cms open source content management system indieweb publishing",
      icon: "64d",
      color: false,
   },
   {
      name: "laravelnova",
      keywords: "laravelnova laravel nova php admin panel laravel nova backend development programming laravel admin",
      icon: "656",
      color: false,
   },
   {
      name: "librarything",
      keywords: "librarything books reading library bookshelf catalog literature book lovers community book recommendations",
      icon: "661",
      color: false,
   },
   {
      name: "llvm",
      keywords: "llvm compiler development programming software tools compiler framework llvm icon programming language opensource",
      icon: "66c",
      color: false,
   },
   {
      name: "mapbox",
      keywords: "mapbox mapping maps gis geolocation location mapping platform mapping technology mapbox logo map",
      icon: "67b",
      color: false,
   },
   {
      name: "markdown",
      keywords: "markdown markup language text writing formatting markdown language development writing tool documentation text editing",
      icon: "67c",
      color: false,
   },
   {
      name: "matrix",
      keywords: "matrix chat communication decentralized messaging matrix protocol instant messaging encryption open source collaboration",
      icon: "682",
      color: false,
   },
   {
      name: "matternet",
      keywords: "matternet delivery drones logistics transportation drone delivery technology matternet logo aircraft innovation",
      icon: "684",
      color: false,
   },
   {
      name: "mdnwebdocs",
      keywords: "mdnwebdocs mdn web docs mozilla documentation web development frontend mozilla developer network developer tools mdn coding",
      icon: "686",
      color: false,
   },
   {
      name: "mediatemple",
      keywords: "mediatemple hosting web hosting cloud servers domain mediatemple logo website hosting wordpress internet",
      icon: "688",
      color: false,
   },
   {
      name: "medium1",
      keywords: "medium1 medium blogging writing publishing platform medium icon articles medium logo content",
      icon: "689",
      color: false,
   },
   {
      name: "mercedes",
      keywords: "mercedes automotive cars luxury mercedes benz vehicle auto mercedes logo transportation car",
      icon: "68d",
      color: false,
   },
   {
      name: "monzo",
      keywords: "monzo banking app monzo bank digital bank monzo icon mobile bank monzo logo online bank monzo app challenger bank",
      icon: "6ab",
      color: false,
   },
   {
      name: "mozilla",
      keywords: "mozilla mozilla foundation mozilla corporation open source software mozilla icon firefox creator mozilla logo internet organization mozilla app mozilla browser",
      icon: "6ad",
      color: false,
   },
   {
      name: "mxlinux",
      keywords: "mx linux linux distribution mx linux os operating system mx linux icon linux distro mx linux logo mx linux distribution mx linux software debian based linux",
      icon: "6b0",
      color: false,
   },
   {
      name: "myspace",
      keywords: "myspace social networking myspace platform social media myspace icon vintage social network myspace logo myspace app retro social media social networking site",
      icon: "6b1",
      color: false,
   },
   {
      name: "next dot js",
      keywords: "next.js next.js framework react framework next.js icon next.js logo next.js app next.js development next.js web development next.js tool next.js application",
      icon: "6b8",
      color: false,
   },
   {
      name: "notion",
      keywords: "notion productivity tool notion app notion platform notion icon notion logo notion software notion workspace notion organization notion note taking",
      icon: "6c5",
      color: false,
   },
   {
      name: "notist",
      keywords: "notist conference platform notist icon notist logo presentation tool conference tool notist app speaker platform notist website presentation management",
      icon: "6c6",
      color: false,
   },
   {
      name: "obsstudio",
      keywords: "obs studio streaming software obs studio icon obs studio logo live streaming obs studio app video recording open broadcaster software obs software obs tool",
      icon: "6cd",
      color: false,
   },
   {
      name: "oculus",
      keywords: "oculus vr headset oculus vr oculus icon virtual reality oculus logo oculus rift oculus vr headset oculus app vr technology",
      icon: "6d1",
      color: false,
   },
   {
      name: "opsgenie",
      keywords: "opsgenie incident management opsgenie icon opsgenie logo alerting tool opsgenie app incident response opsgenie software monitoring tool opsgenie platform",
      icon: "6dd",
      color: false,
   },
   {
      name: "osmc",
      keywords: "osmc open source media center osmc icon osmc logo media player kodi operating system kodi software kodi platform osmc media center media center software",
      icon: "6e1",
      color: false,
   },
   {
      name: "pagekit",
      keywords: "pagekit cms content management system pagekit icon pagekit logo website builder pagekit platform web development pagekit app cms software",
      icon: "6e5",
      color: false,
   },
   {
      name: "palantir",
      keywords: "palantir data analytics palantir technologies palantir icon palantir logo big data data visualization palantir platform analytics software palantir app",
      icon: "6e6",
      color: false,
   },
   {
      name: "purescript",
      keywords: "purescript functional programming language javascript compile typescript development code functional purescript language",
      icon: "714",
      color: false,
   },
   {
      name: "quantcast",
      keywords: "quantcast analytics data audience measure marketing insights quantitative quantcast analytics quantitative data",
      icon: "71d",
      color: false,
   },
   {
      name: "rust",
      keywords: "rust programming language systems development code rustlang systems programming rust programming rust compiler",
      icon: "745",
      color: false,
   },
   {
      name: "safari2",
      keywords: "safari browser apple web internet safari icon safari logo safari app safari browser apple safari",
      icon: "746",
      color: false,
   },
   {
      name: "simpleicons",
      keywords: "simpleicons icons branding logos simple minimal design vector graphics simpleicons logo",
      icon: "760",
      color: false,
   },
   {
      name: "society6",
      keywords: "society6 society6 art design shop marketplace prints clothing home decor society6 logo",
      icon: "770",
      color: false,
   },
   {
      name: "socket dot io",
      keywords: "socket dot io socket.io socket real time communication web development technology socket dot io logo chat",
      icon: "771",
      color: false,
   },
   {
      name: "sonos",
      keywords: "sonos sonos audio speakers sound system music streaming home sonos logo wireless speakers",
      icon: "77a",
      color: false,
   },
   {
      name: "square1",
      keywords: "square1 square shapes geometry square icon box symbol shape square1 logo geometric",
      icon: "78b",
      color: false,
   },
   {
      name: "squarespace",
      keywords: "squarespace squarespace website builder design web platform squarespace logo website builder",
      icon: "78c",
      color: false,
   },
   {
      name: "stackpath",
      keywords: "stackpath stackpath cloud edge computing cdn network infrastructure stackpath logo cloud computing",
      icon: "790",
      color: false,
   },
   {
      name: "statamic",
      keywords: "statamic statamic statamic cms cms content management system web development statamic logo cms icon",
      icon: "793",
      color: false,
   },
   {
      name: "staticman",
      keywords: "staticman staticman static site comments content automation development staticman logo website",
      icon: "794",
      color: false,
   },
   {
      name: "statuspage",
      keywords: "statuspage statuspage status service monitoring incident communication statuspage logo status page",
      icon: "795",
      color: false,
   },
   {
      name: "steam3",
      keywords: "steam3 steam gaming video games platform store steam logo gaming icon pc gaming",
      icon: "796",
      color: false,
   },
   {
      name: "steamworks",
      keywords: "steamworks steamworks steam game development developer tools api steamworks logo game dev",
      icon: "797",
      color: false,
   },
   {
      name: "stitcher",
      keywords: "stitcher stitcher podcasts radio audio listening app stitcher logo podcast icon",
      icon: "79c",
      color: false,
   },
   {
      name: "styleshare",
      keywords: "styleshare styleshare styleshare styleshare logo styleshare icon fashion clothing apparel style",
      icon: "7a5",
      color: false,
   },
   {
      name: "stylus",
      keywords: "stylus stylus stylus stylus logo stylus icon css preprocessor styling web development",
      icon: "7a6",
      color: false,
   },
   {
      name: "symfony",
      keywords: "symfony symfony symfony symfony logo symfony icon php framework development web",
      icon: "7b1",
      color: false,
   },
   {
      name: "tidal",
      keywords: "tidal music streaming jay z audio quality hi fi music streaming service spotify alternative music platform music app",
      icon: "7c4",
      color: false,
   },
   {
      name: "tiktok",
      keywords: "tiktok social media short videos entertainment creative trending viral video app musical.ly social network",
      icon: "7c5",
      color: false,
   },
   {
      name: "uber",
      keywords: "uber ridesharing transportation taxi ride hailing app transport uber logo car service ride",
      icon: "7df",
      color: false,
   },
   {
      name: "ubisoft",
      keywords: "ubisoft gaming video games game development ubisoft logo ubisoft games assassin's creed far cry watch dogs gaming company",
      icon: "7e1",
      color: false,
   },
   {
      name: "unity",
      keywords: "unity game development gaming unity logo unity engine unity3d unity games development unity software virtual reality",
      icon: "7e8",
      color: false,
   },
   {
      name: "unrealengine",
      keywords: "unrealengine game development gaming unreal engine unreal engine logo development virtual reality ue4 unreal unreal engine games",
      icon: "7e9",
      color: false,
   },
   {
      name: "unsplash",
      keywords: "unsplash photography stock photos images free unsplash logo high quality photos inspiration photographers",
      icon: "7ea",
      color: false,
   },
   {
      name: "vsco",
      keywords: "vsco photography photo editing vsco app vsco logo vsco filters vsco cam editing filters photo app",
      icon: "801",
      color: false,
   },
   {
      name: "webstorm",
      keywords: "webstorm ide development web development jetbrains webstorm logo programming javascript webstorm icon javascript ide",
      icon: "80b",
      color: false,
   },
   {
      name: "wikipedia1",
      keywords: "wikipedia encyclopedia knowledge wiki information wikipedia logo reference online encyclopedia education research",
      icon: "812",
      color: false,
   },
   {
      name: "wire",
      keywords: "wire messaging communication privacy wire logo secure wire app encrypted chat video calls",
      icon: "814",
      color: false,
   },
   {
      name: "workplace",
      keywords: "workplace work office business collaboration communication facebook workplace workplace logo team teamwork",
      icon: "81c",
      color: false,
   },
   {
      name: "zeit",
      keywords: "zeit zeit zeit now deployment hosting platform serverless zeit logo zeit icon cloud",
      icon: "837",
      color: false,
   },
   {
      name: "zendesk",
      keywords: "zendesk zendesk customer service software crm support zendesk logo zendesk icon customer support",
      icon: "839",
      color: false,
   },
   {
      name: "home2",
      keywords: "home2 home house residence dwelling homepage home icon house icon residential",
      icon: "e901",
      color: false,
   },
   {
      name: "home3",
      keywords: "home3 home house residence dwelling homepage home icon house icon residential",
      icon: "e902",
      color: false,
   },
   {
      name: "office",
      keywords: "office office workplace workspace business building office icon workplace icon business location",
      icon: "e903",
      color: false,
   },
   {
      name: "newspaper",
      keywords: "newspaper newspaper news press media journalism newspaper icon news icon press icon",
      icon: "e904",
      color: false,
   },
   {
      name: "pencil",
      keywords: "pencil pencil write draw sketch art pencil icon write icon drawing",
      icon: "e905",
      color: false,
   },
   {
      name: "pencil2",
      keywords: "pencil2 pencil write draw sketch art pencil icon write icon drawing",
      icon: "e906",
      color: false,
   },
   {
      name: "quill",
      keywords: "quill quill write feather ink pen quill icon write icon drawing",
      icon: "e907",
      color: false,
   },
   {
      name: "pen",
      keywords: "pen pen write draw ink instrument pen icon write icon drawing",
      icon: "e908",
      color: false,
   },
   {
      name: "blog",
      keywords: "blog blog article post write web blog icon article icon write icon",
      icon: "e909",
      color: false,
   },
   {
      name: "eyedropper",
      keywords: "eyedropper eyedropper color picker tool design eyedropper icon color icon design tool",
      icon: "e90a",
      color: false,
   },
   {
      name: "droplet",
      keywords: "droplet droplet water drop liquid dew droplet icon water icon liquid icon",
      icon: "e90b",
      color: false,
   },
   {
      name: "paint format",
      keywords: "paint format paint format painting brush design paint format icon painting icon design tool",
      icon: "e90c",
      color: false,
   },
   {
      name: "image",
      keywords: "image image picture photo photography art image icon picture icon photo icon",
      icon: "e90d",
      color: false,
   },
   {
      name: "images",
      keywords: "images images pictures photos photography art images icon pictures icon photo icon",
      icon: "e90e",
      color: false,
   },
   {
      name: "camera",
      keywords: "camera camera photography photo picture capture camera icon photography icon photo icon",
      icon: "e90f",
      color: false,
   },
   {
      name: "headphones",
      keywords: "headphones headphones audio music sound listening headphones icon audio icon music icon",
      icon: "e910",
      color: false,
   },
   {
      name: "music",
      keywords: "music music audio sound notes listening music icon audio icon sound icon",
      icon: "e911",
      color: false,
   },
   {
      name: "play",
      keywords: "play play start begin triangle play button play icon start icon begin icon",
      icon: "e912",
      color: false,
   },
   {
      name: "film",
      keywords: "film film movie cinema video play film icon movie icon cinema icon",
      icon: "e913",
      color: false,
   },
   {
      name: "video camera",
      keywords: "video camera video camera film movie cinema record video camera icon film icon movie icon",
      icon: "e914",
      color: false,
   },
   {
      name: "dice",
      keywords: "dice dice game random luck roll dice icon game icon random icon",
      icon: "e915",
      color: false,
   },
   {
      name: "pacman",
      keywords: "pacman pacman game arcade classic retro pacman icon game icon arcade icon",
      icon: "e916",
      color: false,
   },
   {
      name: "spades",
      keywords: "spades spades playing card card game suit spades icon playing card icon card game",
      icon: "e917",
      color: false,
   },
   {
      name: "clubs",
      keywords: "clubs clubs playing card card game suit clubs icon playing card icon card game",
      icon: "e918",
      color: false,
   },
   {
      name: "diamonds",
      keywords: "diamonds diamonds playing card card game suit diamonds icon playing card icon card game",
      icon: "e919",
      color: false,
   },
   {
      name: "bullhorn",
      keywords: "bullhorn bullhorn loudspeaker announcement megaphone advertising bullhorn icon announcement icon megaphone icon",
      icon: "e91a",
      color: false,
   },
   {
      name: "connection",
      keywords: "connection connection link network communication connect connection icon link icon network icon",
      icon: "e91b",
      color: false,
   },
   {
      name: "podcast",
      keywords: "podcast podcast audio broadcast show radio podcast icon audio icon broadcast icon",
      icon: "e91c",
      color: false,
   },
   {
      name: "feed",
      keywords: "feed feed rss subscribe news update feed icon rss icon subscribe icon",
      icon: "e91d",
      color: false,
   },
   {
      name: "mic",
      keywords: "mic microphone audio sound record mic icon microphone icon audio icon",
      icon: "e91e",
      color: false,
   },
   {
      name: "book",
      keywords: "book book reading literature study knowledge book icon reading icon literature icon",
      icon: "e91f",
      color: false,
   },
   {
      name: "books",
      keywords: "books books reading literature study knowledge books icon reading icon literature icon",
      icon: "e920",
      color: false,
   },
   {
      name: "library",
      keywords: "library library books study knowledge education library icon books icon study icon",
      icon: "e921",
      color: false,
   },
   {
      name: "file text",
      keywords: "file text file text document page sheet file text icon file icon document icon",
      icon: "e922",
      color: false,
   },
   {
      name: "profile",
      keywords: "profile profile person user account avatar profile icon person icon user icon",
      icon: "e923",
      color: false,
   },
   {
      name: "file empty",
      keywords: "file empty file empty blank document page file empty icon file icon document icon",
      icon: "e924",
      color: false,
   },
   {
      name: "files empty",
      keywords: "files empty files empty blank documents pages files empty icon files icon documents icon",
      icon: "e925",
      color: false,
   },
   {
      name: "file text2",
      keywords: "file text2 file text document page sheet file text2 icon file icon document icon",
      icon: "e926",
      color: false,
   },
   {
      name: "file picture",
      keywords: "file picture file picture image photo document file picture icon file icon image icon",
      icon: "e927",
      color: false,
   },
   {
      name: "file music",
      keywords: "file music file music audio song document file music icon file icon audio icon",
      icon: "e928",
      color: false,
   },
   {
      name: "file play",
      keywords: "file play file play start begin document file play icon file icon start icon",
      icon: "e929",
      color: false,
   },
   {
      name: "file video",
      keywords: "file video file video movie film document file video icon file icon movie icon",
      icon: "e92a",
      color: false,
   },
   {
      name: "file zip",
      keywords: "file zip file zip compressed archive document file zip icon file icon compressed icon",
      icon: "e92b",
      color: false,
   },
   {
      name: "copy",
      keywords: "copy copy duplicate clone replicate copy icon duplicate icon clone icon",
      icon: "e92c",
      color: false,
   },
   {
      name: "paste",
      keywords: "paste paste insert copy clipboard paste icon insert icon copy icon",
      icon: "e92d",
      color: false,
   },
   {
      name: "stack",
      keywords: "stack stack pile group arrange stack icon pile icon group icon",
      icon: "e92e",
      color: false,
   },
   {
      name: "folder",
      keywords: "folder folder directory file storage archive folder icon directory icon file icon",
      icon: "e92f",
      color: false,
   },
   {
      name: "folder open",
      keywords: "folder open folder open directory file storage folder open icon directory icon file icon",
      icon: "e930",
      color: false,
   },
   {
      name: "folder plus",
      keywords: "folder plus folder add create directory file folder plus icon add icon directory icon",
      icon: "e931",
      color: false,
   },
   {
      name: "folder minus",
      keywords: "folder minus folder remove delete directory file folder minus icon remove icon directory icon",
      icon: "e932",
      color: false,
   },
   {
      name: "folder download",
      keywords: "folder download folder download save directory file folder download icon download icon directory icon",
      icon: "e933",
      color: false,
   },
   {
      name: "folder upload",
      keywords: "folder upload folder upload send directory file folder upload icon upload icon directory icon",
      icon: "e934",
      color: false,
   },
   {
      name: "price tag",
      keywords: "price tag price tag label cost price tag icon price icon tag icon",
      icon: "e935",
      color: false,
   },
   {
      name: "price tags",
      keywords: "price tags price tags labels costs price tags icon price icon tags icon",
      icon: "e936",
      color: false,
   },
   {
      name: "barcode",
      keywords: "barcode barcode code scan product barcode icon code icon scan icon",
      icon: "e937",
      color: false,
   },
   {
      name: "qrcode",
      keywords: "qrcode qr code code scan matrix qrcode icon qr code icon scan icon",
      icon: "e938",
      color: false,
   },
   {
      name: "ticket",
      keywords: "ticket ticket pass admission entry ticket icon pass icon admission icon",
      icon: "e939",
      color: false,
   },
   {
      name: "cart",
      keywords: "cart cart shopping trolley buy cart icon shopping icon trolley icon",
      icon: "e93a",
      color: false,
   },
   {
      name: "coin dollar",
      keywords: "coin dollar coin dollar currency money coin dollar icon coin icon currency icon",
      icon: "e93b",
      color: false,
   },
   {
      name: "coin euro",
      keywords: "coin euro coin euro currency money coin euro icon coin icon currency icon",
      icon: "e93c",
      color: false,
   },
   {
      name: "coin pound",
      keywords: "coin pound coin pound currency money coin pound icon coin icon currency icon",
      icon: "e93d",
      color: false,
   },
   {
      name: "coin yen",
      keywords: "coin yen coin yen currency money coin yen icon coin icon currency icon",
      icon: "e93e",
      color: false,
   },
   {
      name: "credit card",
      keywords: "credit card credit card payment finance money credit card icon payment icon money icon",
      icon: "e93f",
      color: false,
   },
   {
      name: "calculator",
      keywords: "calculator calculator math numbers count calculator icon math icon numbers icon",
      icon: "e940",
      color: false,
   },
   {
      name: "lifebuoy",
      keywords: "lifebuoy lifebuoy float safety rescue lifebuoy icon float icon safety icon",
      icon: "e941",
      color: false,
   },
   {
      name: "phone",
      keywords: "phone phone call telephone communication phone icon call icon telephone icon",
      icon: "e942",
      color: false,
   },
   {
      name: "phone hang up",
      keywords: "phone hang up phone hang up end call telephone phone hang up icon end call icon telephone icon",
      icon: "e943",
      color: false,
   },
   {
      name: "address book",
      keywords: "address book address book contacts directory phone book address book icon contacts icon directory icon",
      icon: "e944",
      color: false,
   },
   {
      name: "envelop",
      keywords: "envelop envelope mail letter post envelop icon envelope icon mail icon",
      icon: "e945",
      color: false,
   },
   {
      name: "pushpin",
      keywords: "pushpin pin location pin thumbtack place marker tag marker pin icon pinpoint pinning",
      icon: "e946",
      color: false,
   },
   {
      name: "location",
      keywords: "location place map pin position address locale area destination whereabouts",
      icon: "e947",
      color: false,
   },
   {
      name: "location2",
      keywords: "location2 place map pin position address locale area destination whereabouts",
      icon: "e948",
      color: false,
   },
   {
      name: "compass",
      keywords: "compass direction navigation north exploration orientation compass rose magnetic guide compass icon",
      icon: "e949",
      color: false,
   },
   {
      name: "compass2",
      keywords: "compass2 direction navigation north exploration orientation compass rose magnetic guide compass icon",
      icon: "e94a",
      color: false,
   },
   {
      name: "map",
      keywords: "map location world cartography navigation geography atlas map icon mapping globe",
      icon: "e94b",
      color: false,
   },
   {
      name: "map2",
      keywords: "map2 location world cartography navigation geography atlas map icon mapping globe",
      icon: "e94c",
      color: false,
   },
   {
      name: "history",
      keywords: "history past timeline records events heritage historical past events timeline icon recorded",
      icon: "e94d",
      color: false,
   },
   {
      name: "clock",
      keywords: "clock time watch hour minute alarm timepiece chronometer clock icon timekeeping",
      icon: "e94e",
      color: false,
   },
   {
      name: "clock2",
      keywords: "clock2 time watch hour minute alarm timepiece chronometer clock icon timekeeping",
      icon: "e94f",
      color: false,
   },
   {
      name: "alarm",
      keywords: "alarm clock alert reminder wake up siren notification alarm clock wake up call time alert",
      icon: "e950",
      color: false,
   },
   {
      name: "bell",
      keywords: "bell alarm notification ring alert chime ding doorbell bell icon ringing",
      icon: "e951",
      color: false,
   },
   {
      name: "stopwatch",
      keywords: "stopwatch timer clock chronometer watch countdown stopwatch icon timekeeping timepiece timekeeper",
      icon: "e952",
      color: false,
   },
   {
      name: "calendar",
      keywords: "calendar date schedule event agenda planner month calendar icon timekeeping appointment",
      icon: "e953",
      color: false,
   },
   {
      name: "printer",
      keywords: "printer print copy output document machine printer icon printing scanner office",
      icon: "e954",
      color: false,
   },
   {
      name: "keyboard",
      keywords: "keyboard type input keys computer typing keyboard icon computer peripheral keypad typing device",
      icon: "e955",
      color: false,
   },
   {
      name: "display",
      keywords: "display screen monitor visual output display icon device display screen display monitor screen display",
      icon: "e956",
      color: false,
   },
   {
      name: "laptop",
      keywords: "laptop computer notebook portable device laptop icon laptop computer portable computer personal computer pc",
      icon: "e957",
      color: false,
   },
   {
      name: "mobile",
      keywords: "mobile cellphone phone device mobile device smartphone mobile icon cellular handheld cell phone",
      icon: "e958",
      color: false,
   },
   {
      name: "mobile2",
      keywords: "mobile2 cellphone phone device mobile device smartphone mobile icon cellular handheld cell phone",
      icon: "e959",
      color: false,
   },
   {
      name: "tablet",
      keywords: "tablet device pad computer tablet device touchscreen tablet icon mobile device portable device tablet computer",
      icon: "e95a",
      color: false,
   },
   {
      name: "tv",
      keywords: "tv television screen entertainment display tv icon monitor tv screen television screen television icon",
      icon: "e95b",
      color: false,
   },
   {
      name: "drawer",
      keywords: "drawer cabinet storage closet furniture drawer icon storage space cupboard organizer drawers",
      icon: "e95c",
      color: false,
   },
   {
      name: "drawer2",
      keywords: "drawer2 cabinet storage closet furniture drawer icon storage space cupboard organizer drawers",
      icon: "e95d",
      color: false,
   },
   {
      name: "box add",
      keywords: "box add add box add plus create box new append box with plus add container",
      icon: "e95e",
      color: false,
   },
   {
      name: "box remove",
      keywords: "box remove remove box delete minus erase box remove box with minus box with delete subtract box",
      icon: "e95f",
      color: false,
   },
   {
      name: "download",
      keywords: "download save arrow down get receive download icon retrieve fetch download file",
      icon: "e960",
      color: false,
   },
   {
      name: "upload",
      keywords: "upload send arrow up share submit upload icon transfer send file post",
      icon: "e961",
      color: false,
   },
   {
      name: "floppy disk",
      keywords: "floppy disk save storage memory disk data floppy disk icon computer save icon vintage",
      icon: "e962",
      color: false,
   },
   {
      name: "drive",
      keywords: "drive storage disk device hard drive drive icon computer drive data storage storage device computer disk",
      icon: "e963",
      color: false,
   },
   {
      name: "database",
      keywords: "database data storage information repository database icon record database server data storage database management",
      icon: "e964",
      color: false,
   },
   {
      name: "undo",
      keywords: "undo back reverse arrow left previous undo icon cancel erase go back",
      icon: "e965",
      color: false,
   },
   {
      name: "redo",
      keywords: "redo forward arrow right next redo icon restore repeat return redo action",
      icon: "e966",
      color: false,
   },
   {
      name: "undo2",
      keywords: "undo2 back reverse arrow left previous undo icon cancel erase go back",
      icon: "e967",
      color: false,
   },
   {
      name: "redo2",
      keywords: "redo2 forward arrow right next redo icon restore repeat return redo action",
      icon: "e968",
      color: false,
   },
   {
      name: "forward",
      keywords: "forward arrow right next forward icon advance move forward go ahead forward motion progress",
      icon: "e969",
      color: false,
   },
   {
      name: "reply",
      keywords: "reply respond answer message email reply icon respond to react correspond reply back",
      icon: "e96a",
      color: false,
   },
   {
      name: "bubble",
      keywords: "bubble chat message talk speech bubble icon dialogue conversation text bubble comment",
      icon: "e96b",
      color: false,
   },
   {
      name: "bubbles",
      keywords: "bubbles chat message talk speech bubble icon dialogue conversation text bubbles comments",
      icon: "e96c",
      color: false,
   },
   {
      name: "bubbles2",
      keywords: "bubbles2 chat message talk speech bubble icon dialogue conversation text bubbles comments",
      icon: "e96d",
      color: false,
   },
   {
      name: "bubble2",
      keywords: "bubble2 chat message talk speech bubble icon dialogue conversation text bubble comment",
      icon: "e96e",
      color: false,
   },
   {
      name: "bubbles3",
      keywords: "bubbles3 chat message talk speech bubble icon dialogue conversation text bubbles comments",
      icon: "e96f",
      color: false,
   },
   {
      name: "bubbles4",
      keywords: "bubbles4 chat message talk speech bubble icon dialogue conversation text bubbles comments",
      icon: "e970",
      color: false,
   },
   {
      name: "user",
      keywords: "user person profile avatar account user icon human user profile identity user account",
      icon: "e971",
      color: false,
   },
   {
      name: "users",
      keywords: "users people group team community users icon audience crowd user group team members",
      icon: "e972",
      color: false,
   },
   {
      name: "user plus",
      keywords: "user plus add user new user invite add member add user with plus plus user user addition add user icon",
      icon: "e973",
      color: false,
   },
   {
      name: "user minus",
      keywords: "user minus remove user delete user user remove remove member subtract user minus user user deletion remove user icon delete",
      icon: "e974",
      color: false,
   },
   {
      name: "user check",
      keywords: "user check check user verify user approve user confirm user user verify check mark user user accept user validation check user icon",
      icon: "e975",
      color: false,
   },
   {
      name: "user tie",
      keywords: "user tie user business professional executive employee office tie user with tie businessman",
      icon: "e976",
      color: false,
   },
   {
      name: "quotes left",
      keywords: "quotes left quote quotation quote mark text quotation mark left quotes text quotes speech speech bubble",
      icon: "e977",
      color: false,
   },
   {
      name: "quotes right",
      keywords: "quotes right quote quotation quote mark text quotation mark right quotes text quotes speech speech bubble",
      icon: "e978",
      color: false,
   },
   {
      name: "hour glass",
      keywords: "hour glass time clock timer wait hour glass icon sand timer countdown timepiece chronometer",
      icon: "e979",
      color: false,
   },
   {
      name: "spinner",
      keywords: "spinner loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97a",
      color: false,
   },
   {
      name: "spinner2",
      keywords: "spinner2 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97b",
      color: false,
   },
   {
      name: "spinner3",
      keywords: "spinner3 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97c",
      color: false,
   },
   {
      name: "spinner4",
      keywords: "spinner4 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97d",
      color: false,
   },
   {
      name: "spinner5",
      keywords: "spinner5 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97e",
      color: false,
   },
   {
      name: "spinner6",
      keywords: "spinner6 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e97f",
      color: false,
   },
   {
      name: "spinner7",
      keywords: "spinner7 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e980",
      color: false,
   },
   {
      name: "spinner8",
      keywords: "spinner8 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e981",
      color: false,
   },
   {
      name: "spinner9",
      keywords: "spinner9 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e982",
      color: false,
   },
   {
      name: "spinner10",
      keywords: "spinner10 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e983",
      color: false,
   },
   {
      name: "spinner11",
      keywords: "spinner11 loading wait circle spin spinner icon loading icon progress activity spinner animation",
      icon: "e984",
      color: false,
   },
   {
      name: "binoculars",
      keywords: "binoculars search explore zoom observation binoculars icon field glasses spy binocular vision view",
      icon: "e985",
      color: false,
   },
   {
      name: "search",
      keywords: "search find magnifying glass look up explore search icon lookup searching hunt research",
      icon: "e986",
      color: false,
   },
   {
      name: "zoom in",
      keywords: "zoom in magnify enlarge expand zoom in icon focus magnifying glass close up zoom out enlarge icon",
      icon: "e987",
      color: false,
   },
   {
      name: "zoom out",
      keywords: "zoom out minimize shrink reduce zoom out icon magnifying glass decrease zoom in shrink icon reduce icon",
      icon: "e988",
      color: false,
   },
   {
      name: "enlarge",
      keywords: "enlarge zoom expand stretch enlarge icon magnify expand icon resize scale up increase",
      icon: "e989",
      color: false,
   },
   {
      name: "shrink",
      keywords: "shrink reduce minimize contract shrink icon decrease reduce icon scale down compress shrinkage",
      icon: "e98a",
      color: false,
   },
   {
      name: "enlarge2",
      keywords: "enlarge2 zoom expand stretch enlarge icon magnify expand icon resize scale up increase",
      icon: "e98b",
      color: false,
   },
   {
      name: "shrink2",
      keywords: "shrink2 reduce minimize contract shrink icon decrease reduce icon scale down compress shrinkage",
      icon: "e98c",
      color: false,
   },
   {
      name: "key",
      keywords: "key unlock lock password access key icon security entry keyhole keyhole icon",
      icon: "e98d",
      color: false,
   },
   {
      name: "key2",
      keywords: "key2 unlock lock password access key icon security entry keyhole keyhole icon",
      icon: "e98e",
      color: false,
   },
   {
      name: "lock",
      keywords: "lock secure protect key padlock lock icon security safe privacy locked",
      icon: "e98f",
      color: false,
   },
   {
      name: "unlocked",
      keywords: "unlocked unlock open access free unlocked icon unseal unlocking unsecured unlocked padlock",
      icon: "e990",
      color: false,
   },
   {
      name: "wrench",
      keywords: "wrench tool repair fix adjust wrench icon settings maintenance spanner mechanic",
      icon: "e991",
      color: false,
   },
   {
      name: "equalizer",
      keywords: "equalizer sound audio equalizer icon music settings audio settings equalization volume frequency",
      icon: "e992",
      color: false,
   },
   {
      name: "equalizer2",
      keywords: "equalizer2 sound audio equalizer icon music settings audio settings equalization volume frequency",
      icon: "e993",
      color: false,
   },
   {
      name: "cog",
      keywords: "cog gear settings options preferences cog icon configuration tool mechanism wheel",
      icon: "e994",
      color: false,
   },
   {
      name: "cogs",
      keywords: "cogs gears settings options preferences cog icon configuration tool mechanism wheel",
      icon: "e995",
      color: false,
   },
   {
      name: "hammer",
      keywords: "hammer tool construction repair building hammer icon mallet carpentry craft work",
      icon: "e996",
      color: false,
   },
   {
      name: "magic wand",
      keywords: "magic wand wand magic tool spell magic wand icon enchantment wizard magician sorcery",
      icon: "e997",
      color: false,
   },
   {
      name: "aid kit",
      keywords: "aid kit first aid emergency medical health aid kit icon help medicine safety rescue",
      icon: "e998",
      color: false,
   },
   {
      name: "bug",
      keywords: "bug insect error problem issue bug icon debugging glitch fault bug fix",
      icon: "e999",
      color: false,
   },
   {
      name: "pie chart",
      keywords: "pie chart chart graph statistics data pie chart icon diagram analysis visualization pie graph",
      icon: "e99a",
      color: false,
   },
   {
      name: "stats dots",
      keywords: "stats dots chart graph statistics data line chart stats dots icon plot data points line graph",
      icon: "e99b",
      color: false,
   },
   {
      name: "stats bars",
      keywords: "stats bars chart graph statistics data bar chart stats bars icon bars bar graph horizontal bars",
      icon: "e99c",
      color: false,
   },
   {
      name: "stats bars2",
      keywords: "stats bars2 chart graph statistics data bar chart stats bars icon bars bar graph horizontal bars",
      icon: "e99d",
      color: false,
   },
   {
      name: "trophy",
      keywords: "trophy award prize achievement winner trophy icon cup medal victory success",
      icon: "e99e",
      color: false,
   },
   {
      name: "gift",
      keywords: "gift present box surprise gift icon package celebration christmas giving holiday",
      icon: "e99f",
      color: false,
   },
   {
      name: "glass",
      keywords: "glass drink cup beverage glass icon wine water goblet liquid glassware",
      icon: "e9a0",
      color: false,
   },
   {
      name: "glass2",
      keywords: "glass2 drink cup beverage glass icon wine water goblet liquid glassware",
      icon: "e9a1",
      color: false,
   },
   {
      name: "mug",
      keywords: "mug cup drink beverage mug icon coffee tea container mugshot glass",
      icon: "e9a2",
      color: false,
   },
   {
      name: "spoon knife",
      keywords: "spoon knife utensils cutlery silverware spoon knife icon fork dining meal eating dinner",
      icon: "e9a3",
      color: false,
   },
   {
      name: "leaf",
      keywords: "leaf nature eco green environment leaf icon tree organic foliage botanical",
      icon: "e9a4",
      color: false,
   },
   {
      name: "rocket",
      keywords: "rocket space launch ship rocket icon spacecraft astronomy exploration flight space shuttle",
      icon: "e9a5",
      color: false,
   },
   {
      name: "meter",
      keywords: "meter gauge measurement meter icon indicator scale measuring meter gauge instrument meter reading",
      icon: "e9a6",
      color: false,
   },
   {
      name: "meter2",
      keywords: "meter2 gauge measurement meter icon indicator scale measuring meter gauge instrument meter reading",
      icon: "e9a7",
      color: false,
   },
   {
      name: "hammer2",
      keywords: "hammer2 tool construction repair building hammer icon mallet carpentry craft work",
      icon: "e9a8",
      color: false,
   },
   {
      name: "fire",
      keywords: "fire flame hot burn heat fire icon campfire fireplace blaze inferno",
      icon: "e9a9",
      color: false,
   },
   {
      name: "lab",
      keywords: "lab laboratory research experiment science chemistry scientist workplace lab icon lab equipment",
      icon: "e9aa",
      color: false,
   },
   {
      name: "magnet",
      keywords: "magnet attraction magnetic magnetism force magnetic field magnet icon magnetize magnetization magnetism",
      icon: "e9ab",
      color: false,
   },
   {
      name: "bin",
      keywords: "bin trash delete remove garbage waste discard bin icon trash can delete icon",
      icon: "e9ac",
      color: false,
   },
   {
      name: "bin2",
      keywords: "bin2 trash2 delete2 remove2 garbage2 waste2 discard2 bin2 icon trash can2 delete icon2",
      icon: "e9ad",
      color: false,
   },
   {
      name: "briefcase",
      keywords: "briefcase case portfolio business work job document briefcase icon business case work bag",
      icon: "e9ae",
      color: false,
   },
   {
      name: "airplane",
      keywords: "airplane plane flight travel transport aircraft aviation airplane icon flying jet",
      icon: "e9af",
      color: false,
   },
   {
      name: "truck",
      keywords: "truck delivery transportation vehicle cargo lorry truck icon haulage moving truck delivery",
      icon: "e9b0",
      color: false,
   },
   {
      name: "road",
      keywords: "road street highway path route direction roadway road icon journey travel",
      icon: "e9b1",
      color: false,
   },
   {
      name: "accessibility",
      keywords: "accessibility accessible disability handicap inclusive access wheelchair accessibility icon disabled ramp",
      icon: "e9b2",
      color: false,
   },
   {
      name: "target",
      keywords: "target goal aim objective bullseye target icon success focus mission targeted",
      icon: "e9b3",
      color: false,
   },
   {
      name: "shield",
      keywords: "shield protection security defense guard safeguard shield icon armour shielded protect",
      icon: "e9b4",
      color: false,
   },
   {
      name: "power",
      keywords: "power energy electricity battery source electric power icon on off switch",
      icon: "e9b5",
      color: false,
   },
   {
      name: "switch",
      keywords: "switch toggle turn on turn off change exchange switch icon flip swap shift",
      icon: "e9b6",
      color: false,
   },
   {
      name: "power cord",
      keywords: "power cord plug cable electricity charger power supply power cord icon electrical power cable cord",
      icon: "e9b7",
      color: false,
   },
   {
      name: "clipboard",
      keywords: "clipboard copy paste document clipboard icon notepad writing pad clipboard tool clipboard holder copy paste",
      icon: "e9b8",
      color: false,
   },
   {
      name: "list numbered",
      keywords: "list numbered numbered list enumerated list ordered list list with numbers list numbered icon numbered items numerical list list with numbers sequence",
      icon: "e9b9",
      color: false,
   },
   {
      name: "list",
      keywords: "list items tasks bullet points checklist agenda list icon listing enumeration index",
      icon: "e9ba",
      color: false,
   },
   {
      name: "list2",
      keywords: "list2 items2 tasks2 bullet points2 checklist2 agenda2 list icon2 listing2 enumeration2 index2",
      icon: "e9bb",
      color: false,
   },
   {
      name: "tree",
      keywords: "tree plant nature forest wood tree icon growth botany tree structure flora",
      icon: "e9bc",
      color: false,
   },
   {
      name: "menu",
      keywords: "menu options navigation list menu icon interface dropdown menu bar menu button menu items",
      icon: "e9bd",
      color: false,
   },
   {
      name: "menu2",
      keywords: "menu2 options2 navigation2 list2 menu icon2 interface2 dropdown2 menu bar2 menu button2 menu items2",
      icon: "e9be",
      color: false,
   },
   {
      name: "menu3",
      keywords: "menu3 options3 navigation3 list3 menu icon3 interface3 dropdown3 menu bar3 menu button3 menu items3",
      icon: "e9bf",
      color: false,
   },
   {
      name: "menu4",
      keywords: "menu4 options4 navigation4 list4 menu icon4 interface4 dropdown4 menu bar4 menu button4 menu items4",
      icon: "e9c0",
      color: false,
   },
   {
      name: "cloud",
      keywords: "cloud storage online data cloud computing weather cloud icon sky internet cloud storage",
      icon: "e9c1",
      color: false,
   },
   {
      name: "cloud download",
      keywords: "cloud download download from cloud retrieve get fetch save cloud download icon downloading download button save from cloud",
      icon: "e9c2",
      color: false,
   },
   {
      name: "cloud upload",
      keywords: "cloud upload upload to cloud store send uploading cloud upload icon upload button share cloud storage",
      icon: "e9c3",
      color: false,
   },
   {
      name: "cloud check",
      keywords: "cloud check cloud sync synchronized verify confirm cloud check icon synced cloud connection cloud status sync status",
      icon: "e9c4",
      color: false,
   },
   {
      name: "download2",
      keywords: "download2 save2 retrieve2 get2 fetch2 download2 icon downloading2 download button2 save2 button download arrow2",
      icon: "e9c5",
      color: false,
   },
   {
      name: "upload2",
      keywords: "upload2 store2 send2 upload2 icon uploading2 upload button2 share2 upload arrow2 upload to cloud2",
      icon: "e9c6",
      color: false,
   },
   {
      name: "download3",
      keywords: "download3 save3 retrieve3 get3 fetch3 download3 icon downloading3 download button3 save3 button download arrow3",
      icon: "e9c7",
      color: false,
   },
   {
      name: "upload3",
      keywords: "upload3 store3 send3 upload3 icon uploading3 upload button3 share3 upload arrow3 upload to cloud3",
      icon: "e9c8",
      color: false,
   },
   {
      name: "sphere",
      keywords: "sphere ball globe round circle sphere icon global 3d orb sphere shape",
      icon: "e9c9",
      color: false,
   },
   {
      name: "earth",
      keywords: "earth globe planet world earth icon global map planet earth world map geography",
      icon: "e9ca",
      color: false,
   },
   {
      name: "link",
      keywords: "link connection hyperlink url join link icon attach combine associate connect",
      icon: "e9cb",
      color: false,
   },
   {
      name: "flag",
      keywords: "flag banner mark signal symbol flag icon national pennant standard identification",
      icon: "e9cc",
      color: false,
   },
   {
      name: "attachment",
      keywords: "attachment file paperclip clip connect attachment icon attach connect link append",
      icon: "e9cd",
      color: false,
   },
   {
      name: "eye",
      keywords: "eye vision view watch sight eye icon look see observe sensory",
      icon: "e9ce",
      color: false,
   },
   {
      name: "eye plus",
      keywords: "eye plus add eye add view increase visibility see more expand vision eye plus icon vision enhancement eye with plus zoom in",
      icon: "e9cf",
      color: false,
   },
   {
      name: "eye minus",
      keywords: "eye minus subtract eye reduce visibility see less shrink vision eye minus icon vision reduction eye with minus zoom out",
      icon: "e9d0",
      color: false,
   },
   {
      name: "eye blocked",
      keywords: "eye blocked block eye hide conceal obscure private eye blocked icon eye with cross privacy visibility off",
      icon: "e9d1",
      color: false,
   },
   {
      name: "bookmark",
      keywords: "bookmark save flag marker bookmark icon favorite tag record bookmarking reference",
      icon: "e9d2",
      color: false,
   },
   {
      name: "bookmarks",
      keywords: "bookmarks saved flags markers bookmarks icon favorites tags records bookmarking references",
      icon: "e9d3",
      color: false,
   },
   {
      name: "sun",
      keywords: "sun solar day sunshine light sun icon heat sunny daylight sun rays",
      icon: "e9d4",
      color: false,
   },
   {
      name: "contrast",
      keywords: "contrast brightness contrast icon lightness darkness shades contrast adjustment brightness contrast visual contrast contrast levels",
      icon: "e9d5",
      color: false,
   },
   {
      name: "brightness contrast",
      keywords: "brightness contrast brightness contrast brightness contrast icon lightness darkness shades contrast adjustment visual contrast contrast levels",
      icon: "e9d6",
      color: false,
   },
   {
      name: "star empty",
      keywords: "star empty empty star star outline star rating star empty icon rate review star rating star shape",
      icon: "e9d7",
      color: false,
   },
   {
      name: "star half",
      keywords: "star half half star star part partial star star half icon star rating star shape rating review half filled star",
      icon: "e9d8",
      color: false,
   },
   {
      name: "star full",
      keywords: "star full full star filled star complete star star full icon star rating star shape rating review",
      icon: "e9d9",
      color: false,
   },
   {
      name: "heart",
      keywords: "heart love like heart icon favorite valentine romance affection heart shape",
      icon: "e9da",
      color: false,
   },
   {
      name: "heart broken",
      keywords: "heart broken broken heart heartbreak sad heart broken icon broken hearted hurt damaged heart heartache love lost",
      icon: "e9db",
      color: false,
   },
   {
      name: "man",
      keywords: "man male person human man icon guy male gender man symbol man avatar male person",
      icon: "e9dc",
      color: false,
   },
   {
      name: "woman",
      keywords: "woman female person human woman icon girl female gender woman symbol woman avatar female person",
      icon: "e9dd",
      color: false,
   },
   {
      name: "man woman",
      keywords: "man woman couple partners man and woman relationship man woman icon gender male and female pair together",
      icon: "e9de",
      color: false,
   },
   {
      name: "happy",
      keywords: "happy joy smile happiness happy icon joyful pleased delighted cheerful glad",
      icon: "e9df",
      color: false,
   },
   {
      name: "happy2",
      keywords: "happy2 joy2 smile2 happiness2 happy2 icon joyful2 pleased2 delighted2 cheerful2 glad2",
      icon: "e9e0",
      color: false,
   },
   {
      name: "smile",
      keywords: "smile smiling happy joy smile icon smiley grin smile face happy face cheerful",
      icon: "e9e1",
      color: false,
   },
   {
      name: "smile2",
      keywords: "smile2 smiling2 happy2 joy2 smile2 icon smiley2 grin2 smile face2 happy face2 cheerful2",
      icon: "e9e2",
      color: false,
   },
   {
      name: "tongue",
      keywords: "tongue playful fun cheeky tongue icon silly tease stick out tongue funny expression",
      icon: "e9e3",
      color: false,
   },
   {
      name: "tongue2",
      keywords: "tongue2 playful2 fun2 cheeky2 tongue2 icon silly2 tease2 stick out tongue2 funny2 expression2",
      icon: "e9e4",
      color: false,
   },
   {
      name: "sad",
      keywords: "sad unhappy cry tears sad icon depressed sorrow melancholy upset gloomy",
      icon: "e9e5",
      color: false,
   },
   {
      name: "sad2",
      keywords: "sad2 unhappy2 cry2 tears2 sad2 icon depressed2 sorrow2 melancholy2 upset2 gloomy2",
      icon: "e9e6",
      color: false,
   },
   {
      name: "wink",
      keywords: "wink flirt tease wink icon cheeky playful winking suggestive naughty eye wink",
      icon: "e9e7",
      color: false,
   },
   {
      name: "wink2",
      keywords: "wink2 flirt2 tease2 wink2 icon cheeky2 playful2 winking2 suggestive2 naughty2 eye wink2",
      icon: "e9e8",
      color: false,
   },
   {
      name: "grin",
      keywords: "grin laugh happy smile grin icon smiley joyful grinning cheerful glad",
      icon: "e9e9",
      color: false,
   },
   {
      name: "grin2",
      keywords: "grin2 laugh2 happy2 smile2 grin2 icon smiley2 joyful2 grinning2 cheerful2 glad2",
      icon: "e9ea",
      color: false,
   },
   {
      name: "cool",
      keywords: "cool chill cool icon relaxed calm composed cool dude cool symbol hip chill out",
      icon: "e9eb",
      color: false,
   },
   {
      name: "cool2",
      keywords: "cool2 chill2 cool2 icon relaxed2 calm2 composed2 cool dude2 cool symbol2 hip2 chill out2",
      icon: "e9ec",
      color: false,
   },
   {
      name: "angry",
      keywords: "angry mad irate angry icon upset furious rage temper angry face angry emoji",
      icon: "e9ed",
      color: false,
   },
   {
      name: "angry2",
      keywords: "angry2 mad2 irate2 angry2 icon upset2 furious2 rage2 temper2 angry face2 angry emoji2",
      icon: "e9ee",
      color: false,
   },
   {
      name: "evil",
      keywords: "evil villain wicked evil icon bad sinister dark malevolent evil grin devil",
      icon: "e9ef",
      color: false,
   },
   {
      name: "evil2",
      keywords: "evil2 villain2 wicked2 evil2 icon bad2 sinister2 dark2 malevolent2 evil grin2 devil2",
      icon: "e9f0",
      color: false,
   },
   {
      name: "shocked",
      keywords: "shocked surprised astonished shocked icon amazed startled dismayed shocked face shock emoji stunned",
      icon: "e9f1",
      color: false,
   },
   {
      name: "shocked2",
      keywords: "shocked2 surprised2 astonished2 shocked2 icon amazed2 startled2 dismayed2 shocked face2 shock emoji2 stunned2",
      icon: "e9f2",
      color: false,
   },
   {
      name: "baffled",
      keywords: "baffled perplexed confused baffled icon bewildered puzzled nonplussed confounded baffled expression baffled emoji",
      icon: "e9f3",
      color: false,
   },
   {
      name: "baffled2",
      keywords: "baffled2 perplexed2 confused2 baffled2 icon bewildered2 puzzled2 nonplussed2 confounded2 baffled expression2 baffled emoji2",
      icon: "e9f4",
      color: false,
   },
   {
      name: "confused",
      keywords: "confused uncertain puzzled confused icon doubtful bewildered confounded lost confusion bewildered",
      icon: "e9f5",
      color: false,
   },
   {
      name: "confused2",
      keywords: "confused2 uncertain2 puzzled2 confused2 icon doubtful2 bewildered2 confounded2 lost2 confusion2 bewildered2",
      icon: "e9f6",
      color: false,
   },
   {
      name: "neutral",
      keywords: "neutral indifferent neutral icon emotionless unbiased impartial dispassionate detached objective neutral face",
      icon: "e9f7",
      color: false,
   },
   {
      name: "neutral2",
      keywords: "neutral2 indifferent2 neutral2 icon emotionless2 unbiased2 impartial2 dispassionate2 detached2 objective2 neutral face2",
      icon: "e9f8",
      color: false,
   },
   {
      name: "hipster",
      keywords: "hipster trendy hipster icon cool alternative trendsetter hipster glasses hipster culture hipster style hipster fashion",
      icon: "e9f9",
      color: false,
   },
   {
      name: "hipster2",
      keywords: "hipster2 trendy2 hipster2 icon cool2 alternative2 trendsetter2 hipster glasses2 hipster culture2 hipster style2 hipster fashion2",
      icon: "e9fa",
      color: false,
   },
   {
      name: "wondering",
      keywords: "wondering curious pondering wondering icon thinking contemplating inquiring meditative thoughtful questioning",
      icon: "e9fb",
      color: false,
   },
   {
      name: "wondering2",
      keywords: "wondering2 curious2 pondering2 wondering2 icon thinking2 contemplating2 inquiring2 meditative2 thoughtful2 questioning2",
      icon: "e9fc",
      color: false,
   },
   {
      name: "sleepy",
      keywords: "sleepy tired sleepy icon exhausted weary fatigued drowsy dozy sleepy face sleepy emoji",
      icon: "e9fd",
      color: false,
   },
   {
      name: "sleepy2",
      keywords: "sleepy2 tired2 sleepy2 icon exhausted2 weary2 fatigued2 drowsy2 dozy2 sleepy face2 sleepy emoji2",
      icon: "e9fe",
      color: false,
   },
   {
      name: "frustrated",
      keywords: "frustrated annoyed frustrated icon irritated exasperated agitated vexed bothered frustration frustrated emoji",
      icon: "e9ff",
      color: false,
   },
   {
      name: "frustrated2",
      keywords: "frustrated2 annoyed2 frustrated2 icon irritated2 exasperated2 agitated2 vexed2 bothered2 frustration2 frustrated emoji2",
      icon: "ea00",
      color: false,
   },
   {
      name: "crying",
      keywords: "crying sad tears crying icon weeping sobbing bawling crying face tearful crying emoji",
      icon: "ea01",
      color: false,
   },
   {
      name: "crying2",
      keywords: "crying2 sad2 tears2 crying2 icon weeping2 sobbing2 bawling2 crying face2 tearful2 crying emoji2",
      icon: "ea02",
      color: false,
   },
   {
      name: "point up",
      keywords: "point up upward arrow up pointing up point up icon direction up move up upward arrow upwards navigate up",
      icon: "ea03",
      color: false,
   },
   {
      name: "point right",
      keywords: "point right rightward arrow right pointing right point right icon direction right move right rightward arrow rightwards navigate right",
      icon: "ea04",
      color: false,
   },
   {
      name: "point down",
      keywords: "point down downward arrow down pointing down point down icon direction down move down downward arrow downwards navigate down",
      icon: "ea05",
      color: false,
   },
   {
      name: "point left",
      keywords: "point left leftward arrow left pointing left point left icon direction left move left leftward arrow leftwards navigate left",
      icon: "ea06",
      color: false,
   },
   {
      name: "warning",
      keywords: "warning caution alert warning sign exclamation warning icon danger risk warning symbol attention",
      icon: "ea4",
      color: false,
   },
   {
      name: "notification",
      keywords: "notification alert message notification icon reminder announcement notification bell notification symbol notification badge notice",
      icon: "ea5",
      color: false,
   },
   {
      name: "question",
      keywords: "question query question mark question icon inquiry interrogation doubt enquiry puzzle problem",
      icon: "ea09",
      color: false,
   },
   {
      name: "plus",
      keywords: "plus add increase plus icon sum additional plus sign extra positive plus symbol",
      icon: "ea0a",
      color: false,
   },
   {
      name: "minus",
      keywords: "minus subtract remove minus icon minus sign deduct take away minus symbol negative decrease",
      icon: "ea0b",
      color: false,
   },
   {
      name: "info",
      keywords: "info information help info icon details about info sign informational helpful explanation",
      icon: "ea0c",
      color: false,
   },
   {
      name: "cancel circle",
      keywords: "cancel circle cancel close cross delete remove cancel circle icon dismiss abort end",
      icon: "ea0d",
      color: false,
   },
   {
      name: "blocked",
      keywords: "blocked forbidden restricted not allowed denied blocked icon prohibited barred banned access denied",
      icon: "ea0e",
      color: false,
   },
   {
      name: "cross",
      keywords: "cross x close delete remove cancel terminate exit cross icon cancel icon",
      icon: "ea0f",
      color: false,
   },
   {
      name: "checkmark",
      keywords: "checkmark tick mark confirm approve success check verified selected complete",
      icon: "ea10",
      color: false,
   },
   {
      name: "checkmark2",
      keywords: "checkmark2 tick2 mark2 confirm2 approve2 success2 check2 verified2 selected2 complete2",
      icon: "ea11",
      color: false,
   },
   {
      name: "spell check",
      keywords: "spell check spell check grammar proofread correction validate review spell check icon grammar check",
      icon: "ea12",
      color: false,
   },
   {
      name: "enter",
      keywords: "enter return submit confirm accept proceed enter key input press enter submit form",
      icon: "ea13",
      color: false,
   },
   {
      name: "exit",
      keywords: "exit leave quit close end exit icon leave page close window quit application exit program",
      icon: "ea14",
      color: false,
   },
   {
      name: "play2",
      keywords: "play2 play start begin resume play button start playback resume playback play2 icon playback",
      icon: "ea15",
      color: false,
   },
   {
      name: "pause",
      keywords: "pause pause halt stop break pause button pause icon suspend pause playback pause video",
      icon: "ea16",
      color: false,
   },
   {
      name: "stop",
      keywords: "stop stop end halt terminate stop button stop icon cease stop playback stop video",
      icon: "ea17",
      color: false,
   },
   {
      name: "previous",
      keywords: "previous previous back backward backtrack previous button backward button go back previous track skip back",
      icon: "ea18",
      color: false,
   },
   {
      name: "next",
      keywords: "next next forward skip advance next button forward button go forward next track skip forward",
      icon: "ea19",
      color: false,
   },
   {
      name: "backward",
      keywords: "backward backward back previous backtrack rewind backward icon reverse back button go back",
      icon: "ea1a",
      color: false,
   },
   {
      name: "forward2",
      keywords: "forward2 forward next advance skip forward icon fast forward forward button go forward forward2 icon",
      icon: "ea1b",
      color: false,
   },
   {
      name: "play3",
      keywords: "play3 play start begin resume play button start playback resume playback play3 icon playback",
      icon: "ea1c",
      color: false,
   },
   {
      name: "pause2",
      keywords: "pause2 pause halt stop break pause button pause icon suspend pause playback pause video",
      icon: "ea1d",
      color: false,
   },
   {
      name: "stop2",
      keywords: "stop2 stop end halt terminate stop button stop icon cease stop playback stop video",
      icon: "ea1e",
      color: false,
   },
   {
      name: "backward2",
      keywords: "backward2 backward back previous backtrack rewind backward icon reverse back button go back",
      icon: "ea1f",
      color: false,
   },
   {
      name: "forward3",
      keywords: "forward3 forward next advance skip forward icon fast forward forward button go forward forward3 icon",
      icon: "ea20",
      color: false,
   },
   {
      name: "first",
      keywords: "first first beginning start initial first page first position first icon start point begin",
      icon: "ea21",
      color: false,
   },
   {
      name: "last",
      keywords: "last last end final last page last position last icon end point terminate",
      icon: "ea22",
      color: false,
   },
   {
      name: "previous2",
      keywords: "previous2 previous back backward backtrack previous button backward button go back previous track skip back",
      icon: "ea23",
      color: false,
   },
   {
      name: "next2",
      keywords: "next2 next forward skip advance next button forward button go forward next track skip forward",
      icon: "ea24",
      color: false,
   },
   {
      name: "eject",
      keywords: "eject eject remove extract eject button remove device eject icon unload eject disk",
      icon: "ea25",
      color: false,
   },
   {
      name: "volume high",
      keywords: "volume high volume high loud maximum volume level volume icon loud volume volume high icon high volume",
      icon: "ea26",
      color: false,
   },
   {
      name: "volume medium",
      keywords: "volume medium volume medium moderate average volume level volume icon moderate volume volume medium icon medium volume",
      icon: "ea27",
      color: false,
   },
   {
      name: "volume low",
      keywords: "volume low volume low quiet minimum volume level volume icon quiet volume volume low icon low volume",
      icon: "ea28",
      color: false,
   },
   {
      name: "volume mute",
      keywords: "volume mute volume mute silence sound off mute volume volume off mute icon volume mute icon silent",
      icon: "ea29",
      color: false,
   },
   {
      name: "volume mute2",
      keywords: "volume mute2 volume mute silence sound off mute volume volume off mute icon volume mute2 icon silent",
      icon: "ea2a",
      color: false,
   },
   {
      name: "volume increase",
      keywords: "volume increase volume increase up raise volume up volume boost turn up volume increase icon increase volume",
      icon: "ea2b",
      color: false,
   },
   {
      name: "volume decrease",
      keywords: "volume decrease volume decrease down lower volume down volume reduce turn down volume decrease icon decrease volume",
      icon: "ea2c",
      color: false,
   },
   {
      name: "loop",
      keywords: "loop loop repeat cycle recurrence looping loop icon circular continuous cycle icon",
      icon: "ea2d",
      color: false,
   },
   {
      name: "loop2",
      keywords: "loop2 loop repeat cycle recurrence looping loop icon circular continuous cycle icon",
      icon: "ea2e",
      color: false,
   },
   {
      name: "infinite",
      keywords: "infinite infinite endless limitless infinity never ending eternal infinite icon infinity symbol forever",
      icon: "ea2f",
      color: false,
   },
   {
      name: "shuffle",
      keywords: "shuffle shuffle mix random disorder randomize shuffle icon mix up shuffle tracks random order",
      icon: "ea30",
      color: false,
   },
   {
      name: "arrow up left",
      keywords: "arrow up left arrow up left direction diagonal pointing arrow icon arrow up left icon up left",
      icon: "ea31",
      color: false,
   },
   {
      name: "arrow up",
      keywords: "arrow up arrow up direction pointing arrow icon upward arrow up icon move up rise",
      icon: "ea32",
      color: false,
   },
   {
      name: "arrow up right",
      keywords: "arrow up right arrow up right direction diagonal pointing arrow icon arrow up right icon up right",
      icon: "ea33",
      color: false,
   },
   {
      name: "arrow right",
      keywords: "arrow right arrow right direction pointing arrow icon forward arrow right icon move right east",
      icon: "ea34",
      color: false,
   },
   {
      name: "arrow down right",
      keywords: "arrow down right arrow down right direction diagonal pointing arrow icon arrow down right icon down right",
      icon: "ea35",
      color: false,
   },
   {
      name: "arrow down",
      keywords: "arrow down arrow down direction pointing arrow icon downward arrow down icon move down descend",
      icon: "ea36",
      color: false,
   },
   {
      name: "arrow down left",
      keywords: "arrow down left arrow down left direction diagonal pointing arrow icon arrow down left icon down left",
      icon: "ea37",
      color: false,
   },
   {
      name: "arrow left",
      keywords: "arrow left arrow left direction pointing arrow icon back arrow left icon move left west",
      icon: "ea38",
      color: false,
   },
   {
      name: "arrow up left2",
      keywords: "arrow up left2 arrow up left direction diagonal pointing arrow icon arrow up left2 icon up left",
      icon: "ea39",
      color: false,
   },
   {
      name: "arrow up2",
      keywords: "arrow up2 arrow up direction pointing arrow icon upward arrow up2 icon move up rise",
      icon: "ea3a",
      color: false,
   },
   {
      name: "arrow up right2",
      keywords: "arrow up right2 arrow up right direction diagonal pointing arrow icon arrow up right2 icon up right",
      icon: "ea3b",
      color: false,
   },
   {
      name: "arrow right2",
      keywords: "arrow right2 arrow right direction pointing arrow icon forward arrow right2 icon move right east",
      icon: "ea3c",
      color: false,
   },
   {
      name: "arrow down right2",
      keywords: "arrow down right2 arrow down right direction diagonal pointing arrow icon arrow down right2 icon down right",
      icon: "ea3d",
      color: false,
   },
   {
      name: "arrow down2",
      keywords: "arrow down2 arrow down direction pointing arrow icon downward arrow down2 icon move down descend",
      icon: "ea3e",
      color: false,
   },
   {
      name: "arrow down left2",
      keywords: "arrow down left2 arrow down left direction diagonal pointing arrow icon arrow down left2 icon down left",
      icon: "ea3f",
      color: false,
   },
   {
      name: "arrow left2",
      keywords: "arrow left2 arrow left direction pointing arrow icon back arrow left2 icon move left west",
      icon: "ea40",
      color: false,
   },
   {
      name: "circle up",
      keywords: "circle up circle up direction arrow pointing circle icon upward circle up icon rise",
      icon: "ea41",
      color: false,
   },
   {
      name: "circle right",
      keywords: "circle right circle right direction arrow pointing circle icon forward circle right icon east",
      icon: "ea42",
      color: false,
   },
   {
      name: "circle down",
      keywords: "circle down circle down direction arrow pointing circle icon downward circle down icon descend",
      icon: "ea43",
      color: false,
   },
   {
      name: "circle left",
      keywords: "circle left circle left direction arrow pointing circle icon back circle left icon west",
      icon: "ea44",
      color: false,
   },
   {
      name: "tab",
      keywords: "tab tab keyboard input navigation tab icon tab key select navigate tab button",
      icon: "ea45",
      color: false,
   },
   {
      name: "move up",
      keywords: "move up move up arrow direction move icon upward move up icon lift raise",
      icon: "ea46",
      color: false,
   },
   {
      name: "move down",
      keywords: "move down move down arrow direction move icon downward move down icon lower drop",
      icon: "ea47",
      color: false,
   },
   {
      name: "sort alpha asc",
      keywords: "sort alpha asc sort alpha ascending order alphabetical a z sort alphabetically sort alpha asc icon ascending order",
      icon: "ea48",
      color: false,
   },
   {
      name: "sort alpha desc",
      keywords: "sort alpha desc sort alpha descending order reverse z a sort alphabetically sort alpha desc icon descending order",
      icon: "ea49",
      color: false,
   },
   {
      name: "sort numeric asc",
      keywords: "sort numeric asc sort numeric ascending order number sort numerically sort numeric asc icon ascending order numerical order",
      icon: "ea4a",
      color: false,
   },
   {
      name: "sort numberic desc",
      keywords: "sort numberic desc sort numeric descending order number reverse sort numerically sort numberic desc icon descending order",
      icon: "ea4b",
      color: false,
   },
   {
      name: "sort amount asc",
      keywords: "sort amount asc sort amount ascending order quantity volume sort amount asc icon ascending order amount order",
      icon: "ea4c",
      color: false,
   },
   {
      name: "sort amount desc",
      keywords: "sort amount desc sort amount descending order reverse quantity volume sort amount desc icon descending order",
      icon: "ea4d",
      color: false,
   },
   {
      name: "command",
      keywords: "command command key keyboard shortcut function cmd command icon keyboard shortcut cmd key",
      icon: "ea4e",
      color: false,
   },
   {
      name: "shift",
      keywords: "shift shift key keyboard modify alter shift icon change shift key move",
      icon: "ea4f",
      color: false,
   },
   {
      name: "ctrl",
      keywords: "ctrl ctrl key keyboard control shortcut control icon keyboard shortcut control key",
      icon: "ea50",
      color: false,
   },
   {
      name: "opt",
      keywords: "opt opt key keyboard option shortcut alt option icon keyboard shortcut alt key",
      icon: "ea51",
      color: false,
   },
   {
      name: "checkbox checked",
      keywords: "checkbox checked checkbox checked tick mark confirm approve selected completed checkbox checked icon",
      icon: "ea52",
      color: false,
   },
   {
      name: "checkbox unchecked",
      keywords: "checkbox unchecked checkbox unchecked unselected incomplete not selected checkbox unchecked icon empty checkbox unchecked box unchecked icon",
      icon: "ea53",
      color: false,
   },
   {
      name: "radio checked",
      keywords: "radio checked radio button checked selected radio checked icon selected radio checked radio filled circle filled radio filled button",
      icon: "ea54",
      color: false,
   },
   {
      name: "radio checked2",
      keywords: "radio checked2 radio button checked selected radio checked2 icon selected radio checked radio filled circle filled radio filled button",
      icon: "ea55",
      color: false,
   },
   {
      name: "radio unchecked",
      keywords: "radio unchecked radio button unchecked unselected radio unchecked icon empty circle empty radio empty button unchecked radio unchecked button",
      icon: "ea56",
      color: false,
   },
   {
      name: "crop",
      keywords: "crop crop cut resize edit image crop icon image crop crop tool trim",
      icon: "ea57",
      color: false,
   },
   {
      name: "make group",
      keywords: "make group group combine collect assemble merge make group icon gather cluster bundle",
      icon: "ea58",
      color: false,
   },
   {
      name: "ungroup",
      keywords: "ungroup ungroup separate detach disassemble divide ungroup icon ungroup objects split break apart",
      icon: "ea59",
      color: false,
   },
   {
      name: "scissors",
      keywords: "scissors scissors cut tool shears scissors icon cutting craft cutting tool snip",
      icon: "ea5a",
      color: false,
   },
   {
      name: "filter",
      keywords: "filter filter refine sort search select filter icon filtering sieve strain",
      icon: "ea5b",
      color: false,
   },
   {
      name: "font",
      keywords: "font font type text style typography font icon text style character font type",
      icon: "ea5c",
      color: false,
   },
   {
      name: "ligature",
      keywords: "ligature ligature font typography connect joined ligature icon letters typographic ligature letters",
      icon: "ea5d",
      color: false,
   },
   {
      name: "ligature2",
      keywords: "ligature2 ligature font typography connect joined ligature2 icon letters typographic ligature letters",
      icon: "ea5e",
      color: false,
   },
   {
      name: "text height",
      keywords: "text height text height size font scale text height icon font size character size text size",
      icon: "ea5f",
      color: false,
   },
   {
      name: "text width",
      keywords: "text width text width size font scale text width icon font size character width text size",
      icon: "ea60",
      color: false,
   },
   {
      name: "font size",
      keywords: "font size font size text scale dimension font size icon character size text size type size",
      icon: "ea61",
      color: false,
   },
   {
      name: "bold",
      keywords: "bold bold font typeface weight thick bold icon text style bold text type bold",
      icon: "ea62",
      color: false,
   },
   {
      name: "underline",
      keywords: "underline underline font text style emphasis underline icon text style underline text emphasis text",
      icon: "ea63",
      color: false,
   },
   {
      name: "italic",
      keywords: "italic italic font typeface style cursive italic icon text style italic text cursive text",
      icon: "ea64",
      color: false,
   },
   {
      name: "strikethrough",
      keywords: "strikethrough strikethrough line font strike cross strikethrough icon text style cross out line through",
      icon: "ea65",
      color: false,
   },
   {
      name: "omega",
      keywords: "omega omega font text symbol omega icon character omega symbol greek last",
      icon: "ea66",
      color: false,
   },
   {
      name: "sigma",
      keywords: "sigma sigma font text symbol sigma icon character sigma symbol greek sum",
      icon: "ea67",
      color: false,
   },
   {
      name: "page break",
      keywords: "page break page break new page split separate page page break icon end of page section break break",
      icon: "ea68",
      color: false,
   },
   {
      name: "superscript",
      keywords: "superscript superscript text script type elevated superscript icon raised exponent super",
      icon: "ea69",
      color: false,
   },
   {
      name: "subscript",
      keywords: "subscript subscript text script type lowered subscript icon depressed index sub",
      icon: "ea6a",
      color: false,
   },
   {
      name: "superscript2",
      keywords: "superscript2 superscript text script type elevated superscript2 icon raised exponent super",
      icon: "ea6b",
      color: false,
   },
   {
      name: "subscript2",
      keywords: "subscript2 subscript text script type lowered subscript2 icon depressed index sub",
      icon: "ea6c",
      color: false,
   },
   {
      name: "text color",
      keywords: "text color text color font hue color palette text color icon text style font color text hue",
      icon: "ea6d",
      color: false,
   },
   {
      name: "pagebreak",
      keywords: "pagebreak page break new page split separate page pagebreak icon end of page section break break",
      icon: "ea6e",
      color: false,
   },
   {
      name: "clear formatting",
      keywords: "clear formatting clear remove erase delete formatting clear formatting icon clean undo unformat",
      icon: "ea6f",
      color: false,
   },
   {
      name: "table",
      keywords: "table table spreadsheet data grid table icon data table chart table format data grid",
      icon: "ea70",
      color: false,
   },
   {
      name: "table2",
      keywords: "table2 table spreadsheet data grid table2 icon data table chart table format data grid",
      icon: "ea71",
      color: false,
   },
   {
      name: "insert template",
      keywords: "insert template template insert document add form layout insertion template icon add template",
      icon: "ea72",
      color: false,
   },
   {
      name: "pilcrow",
      keywords: "pilcrow paragraph punctuation typography symbol text editor formatting pilcrow icon paragraph symbol",
      icon: "ea73",
      color: false,
   },
   {
      name: "ltr",
      keywords: "ltr left to right direction text writing language ltr icon left to right text text direction ltr writing",
      icon: "ea74",
      color: false,
   },
   {
      name: "rtl",
      keywords: "rtl right to left direction text writing language rtl icon right to left text text direction rtl writing",
      icon: "ea75",
      color: false,
   },
   {
      name: "section",
      keywords: "section division part segment block content section icon segmentation document section content section",
      icon: "ea76",
      color: false,
   },
   {
      name: "paragraph left",
      keywords: "paragraph left paragraph left alignment text writing paragraph alignment left paragraph paragraph icon left align",
      icon: "ea77",
      color: false,
   },
   {
      name: "paragraph center",
      keywords: "paragraph center paragraph center alignment text writing paragraph alignment center paragraph paragraph icon center align",
      icon: "ea78",
      color: false,
   },
   {
      name: "paragraph right",
      keywords: "paragraph right paragraph right alignment text writing paragraph alignment right paragraph paragraph icon right align",
      icon: "ea79",
      color: false,
   },
   {
      name: "paragraph justify",
      keywords: "paragraph justify paragraph justify alignment text writing paragraph alignment justified paragraph paragraph icon justify align",
      icon: "ea7a",
      color: false,
   },
   {
      name: "indent increase",
      keywords: "indent increase indent increase text writing paragraph text formatting increase indent indentation increase text",
      icon: "ea7b",
      color: false,
   },
   {
      name: "indent decrease",
      keywords: "indent decrease indent decrease text writing paragraph text formatting decrease indent outdent reduce indent",
      icon: "ea7c",
      color: false,
   },
   {
      name: "share",
      keywords: "share share icon share button social networking spread distribute communication share content share options",
      icon: "ea7d",
      color: false,
   },
   {
      name: "new tab",
      keywords: "new tab tab browser open window new window link internet new tab icon tab options",
      icon: "ea7e",
      color: false,
   },
   {
      name: "embed",
      keywords: "embed embed code code web website integration html webpage embed icon embed options",
      icon: "ea7f",
      color: false,
   },
   {
      name: "embed2",
      keywords: "embed2 embed code code web website integration html webpage embed icon embed options",
      icon: "ea80",
      color: false,
   },
   {
      name: "terminal",
      keywords: "terminal command line cmd shell console prompt terminal icon command prompt terminal window terminal app",
      icon: "ea81",
      color: false,
   },
   {
      name: "share2",
      keywords: "share2 share icon share button social networking spread distribute communication share content share options",
      icon: "ea82",
      color: false,
   },
   {
      name: "mail",
      keywords: "mail email envelope message communication send post inbox email icon mail icon",
      icon: "ea83",
      color: false,
   },
   {
      name: "mail2",
      keywords: "mail2 email envelope message communication send post inbox email icon mail icon",
      icon: "ea84",
      color: false,
   },
   {
      name: "mail3",
      keywords: "mail3 email envelope message communication send post inbox email icon mail icon",
      icon: "ea85",
      color: false,
   },
   {
      name: "mail4",
      keywords: "mail4 email envelope message communication send post inbox email icon mail icon",
      icon: "ea86",
      color: false,
   },
   {
      name: "amazon",
      keywords: "amazon shopping store ecommerce online shopping retail amazon icon amazon logo shopping icon amazon website",
      icon: "ea87",
      color: false,
   },
   {
      name: "google",
      keywords: "google search engine web internet google icon google logo search icon google search search engine",
      icon: "ea88",
      color: false,
   },
   {
      name: "google2",
      keywords: "google2 search engine web internet google icon google logo search icon google search search engine",
      icon: "ea89",
      color: false,
   },
   {
      name: "google3",
      keywords: "google3 search engine web internet google icon google logo search icon google search search engine",
      icon: "ea8a",
      color: false,
   },
   {
      name: "google plus",
      keywords: "google plus google plus social network google plus icon google plus logo social network google+ google plus website",
      icon: "ea8b",
      color: false,
   },
   {
      name: "google plus2",
      keywords: "google plus2 google plus social network google plus icon google plus logo social network google+ google plus website",
      icon: "ea8c",
      color: false,
   },
   {
      name: "google plus3",
      keywords: "google plus3 google plus social network google plus icon google plus logo social network google+ google plus website",
      icon: "ea8d",
      color: false,
   },
   {
      name: "hangouts",
      keywords: "hangouts chat video call messaging communication google google hangouts hangouts icon hangouts logo chat app",
      icon: "ea8e",
      color: false,
   },
   {
      name: "google drive",
      keywords: "google drive drive cloud storage file google google drive icon google drive logo cloud storage google file",
      icon: "ea8f",
      color: false,
   },
   {
      name: "facebook",
      keywords: "facebook social network social media facebook icon facebook logo facebook website facebook app facebook page",
      icon: "ea90",
      color: false,
   },
   {
      name: "facebook2",
      keywords: "facebook2 social network social media facebook icon facebook logo facebook website facebook app facebook page",
      icon: "ea91",
      color: false,
   },
   {
      name: "instagram",
      keywords: "instagram social network photo video instagram icon instagram logo instagram website instagram app instagram page",
      icon: "ea92",
      color: false,
   },
   {
      name: "whatsapp",
      keywords: "whatsapp messaging chat communication whatsapp icon whatsapp logo whatsapp app whatsapp website whatsapp chat",
      icon: "ea93",
      color: false,
   },
   {
      name: "spotify",
      keywords: "spotify music streaming audio spotify icon spotify logo spotify app spotify website music streaming",
      icon: "ea94",
      color: false,
   },
   {
      name: "telegram",
      keywords: "telegram messaging chat communication telegram icon telegram logo telegram app telegram website telegram chat",
      icon: "ea95",
      color: false,
   },
   {
      name: "twitter",
      keywords: "twitter social network microblogging tweet twitter icon twitter logo twitter website twitter app twitter page",
      icon: "ea96",
      color: false,
   },
   {
      name: "vine",
      keywords: "vine video social network short video vine icon vine logo vine website vine app vine page",
      icon: "ea97",
      color: false,
   },
   {
      name: "vk",
      keywords: "vk vkontakte social network russian vk icon vk logo vk website vk app vk page",
      icon: "ea98",
      color: false,
   },
   {
      name: "renren",
      keywords: "renren social network chinese renren icon renren logo renren website renren app renren page",
      icon: "ea99",
      color: false,
   },
   {
      name: "sina weibo",
      keywords: "sina weibo social network chinese weibo sina weibo icon sina weibo logo sina weibo website weibo app weibo page",
      icon: "ea9a",
      color: false,
   },
   {
      name: "rss",
      keywords: "rss feed subscribe rss icon rss feed news rss logo rss website rss feed icon rss subscription",
      icon: "ea9b",
      color: false,
   },
   {
      name: "rss2",
      keywords: "rss2 feed subscribe rss icon rss feed news rss logo rss website rss feed icon rss subscription",
      icon: "ea9c",
      color: false,
   },
   {
      name: "youtube",
      keywords: "youtube video youtube icon youtube logo youtube website youtube app video sharing youtube channel youtube page",
      icon: "ea9d",
      color: false,
   },
   {
      name: "youtube2",
      keywords: "youtube2 video youtube icon youtube logo youtube website youtube app video sharing youtube channel youtube page",
      icon: "ea9e",
      color: false,
   },
   {
      name: "twitch",
      keywords: "twitch video streaming gaming twitch icon twitch logo twitch website twitch app twitch channel",
      icon: "ea9f",
      color: false,
   },
   {
      name: "vimeo",
      keywords: "vimeo video vimeo icon vimeo logo vimeo website vimeo app video sharing vimeo channel vimeo page",
      icon: "eaa0",
      color: false,
   },
   {
      name: "vimeo2",
      keywords: "vimeo2 video vimeo icon vimeo logo vimeo website vimeo app video sharing vimeo channel vimeo page",
      icon: "eaa1",
      color: false,
   },
   {
      name: "lanyrd",
      keywords: "lanyrd event conference lanyrd icon lanyrd logo lanyrd website lanyrd app event management conference management",
      icon: "eaa2",
      color: false,
   },
   {
      name: "flickr",
      keywords: "flickr photo image sharing flickr icon flickr logo flickr website flickr app photo sharing",
      icon: "eaa3",
      color: false,
   },
   {
      name: "flickr2",
      keywords: "flickr2 photo image sharing flickr icon flickr logo flickr website flickr app photo sharing",
      icon: "eaa4",
      color: false,
   },
   {
      name: "flickr3",
      keywords: "flickr3 photo image sharing flickr icon flickr logo flickr website flickr app photo sharing",
      icon: "eaa5",
      color: false,
   },
   {
      name: "flickr4",
      keywords: "flickr4 photo image sharing flickr icon flickr logo flickr website flickr app photo sharing",
      icon: "eaa6",
      color: false,
   },
   {
      name: "dribbble",
      keywords: "dribbble design portfolio dribbble icon dribbble logo dribbble website dribbble app designer design portfolio",
      icon: "eaa7",
      color: false,
   },
   {
      name: "behance",
      keywords: "behance design portfolio behance icon behance logo behance website behance app designer design portfolio",
      icon: "eaa8",
      color: false,
   },
   {
      name: "behance2",
      keywords: "behance2 design portfolio behance icon behance logo behance website behance app designer design portfolio",
      icon: "eaa9",
      color: false,
   },
   {
      name: "deviantart",
      keywords: "deviantart art portfolio deviantart icon deviantart logo deviantart website deviantart app artist art portfolio",
      icon: "eaaa",
      color: false,
   },
   {
      name: "500px",
      keywords: "500px photo image portfolio 500px icon 500px logo 500px website 500px app photo portfolio",
      icon: "eaab",
      color: false,
   },
   {
      name: "steam",
      keywords: "steam game gaming store steam icon steam logo steam website steam app game store",
      icon: "eaac",
      color: false,
   },
   {
      name: "steam2",
      keywords: "steam2 game gaming store steam icon steam logo steam website steam app game store",
      icon: "eaad",
      color: false,
   },
   {
      name: "dropbox",
      keywords: "dropbox cloud storage file dropbox icon dropbox logo dropbox website dropbox app cloud storage",
      icon: "eaae",
      color: false,
   },
   {
      name: "onedrive",
      keywords: "onedrive drive cloud storage file onedrive icon onedrive logo onedrive website onedrive app cloud storage",
      icon: "eaaf",
      color: false,
   },
   {
      name: "github",
      keywords: "github code repository version control github icon github logo github website github app code hosting",
      icon: "eab0",
      color: false,
   },
   {
      name: "npm",
      keywords: "npm node package manager npm icon npm logo npm website npm app node package manager",
      icon: "eab1",
      color: false,
   },
   {
      name: "basecamp",
      keywords: "basecamp project management basecamp icon basecamp logo basecamp website basecamp app project management",
      icon: "eab2",
      color: false,
   },
   {
      name: "trello",
      keywords: "trello project management trello icon trello logo trello website trello app project management",
      icon: "eab3",
      color: false,
   },
   {
      name: "wordpress",
      keywords: "wordpress blog website wordpress icon wordpress logo wordpress website wordpress app blogging",
      icon: "eab4",
      color: false,
   },
   {
      name: "joomla",
      keywords: "joomla cms website joomla icon joomla logo joomla website joomla app content management",
      icon: "eab5",
      color: false,
   },
   {
      name: "ello",
      keywords: "ello social network ello icon ello logo ello website ello app social media",
      icon: "eab6",
      color: false,
   },
   {
      name: "blogger",
      keywords: "blogger blog website blogger icon blogger logo blogger website blogger app blogging",
      icon: "eab7",
      color: false,
   },
   {
      name: "blogger2",
      keywords: "blogger2 blog website blogger icon blogger logo blogger website blogger app blogging",
      icon: "eab8",
      color: false,
   },
   {
      name: "tumblr",
      keywords: "tumblr blog website tumblr icon tumblr logo tumblr website tumblr app blogging",
      icon: "eab9",
      color: false,
   },
   {
      name: "tumblr2",
      keywords: "tumblr2 blog website tumblr icon tumblr logo tumblr website tumblr app blogging",
      icon: "eaba",
      color: false,
   },
   {
      name: "yahoo",
      keywords: "yahoo search email news yahoo icon yahoo logo yahoo website yahoo app yahoo search",
      icon: "eabb",
      color: false,
   },
   {
      name: "yahoo2",
      keywords: "yahoo2 search email news yahoo icon yahoo logo yahoo website yahoo app yahoo search",
      icon: "eabc",
      color: false,
   },
   {
      name: "tux",
      keywords: "tux linux penguin tux icon linux mascot linux logo linux operating system linux distro linux kernel",
      icon: "eabd",
      color: false,
   },
   {
      name: "appleinc",
      keywords: "appleinc apple mac iphone ipad apple icon apple logo apple inc macbook apple website",
      icon: "eabe",
      color: false,
   },
   {
      name: "finder",
      keywords: "finder mac osx finder icon mac finder mac operating system finder app macbook apple finder",
      icon: "eabf",
      color: false,
   },
   {
      name: "android",
      keywords: "android operating system android icon android logo android os google android mobile android device android phone",
      icon: "eac0",
      color: false,
   },
   {
      name: "windows",
      keywords: "windows operating system windows icon windows logo microsoft windows os pc microsoft windows windows desktop",
      icon: "eac1",
      color: false,
   },
   {
      name: "windows8",
      keywords: "windows8 operating system windows icon windows logo microsoft windows os pc microsoft windows windows desktop",
      icon: "eac2",
      color: false,
   },
   {
      name: "soundcloud",
      keywords: "soundcloud music streaming audio soundcloud icon soundcloud logo soundcloud website soundcloud app music streaming",
      icon: "eac3",
      color: false,
   },
   {
      name: "soundcloud2",
      keywords: "soundcloud2 music streaming audio soundcloud icon soundcloud logo soundcloud website soundcloud app music streaming",
      icon: "eac4",
      color: false,
   },
   {
      name: "skype",
      keywords: "skype chat video call messaging communication skype icon skype logo skype app skype website skype chat",
      icon: "eac5",
      color: false,
   },
   {
      name: "reddit",
      keywords: "reddit social network news discussion reddit icon reddit logo reddit website reddit app reddit community",
      icon: "eac6",
      color: false,
   },
   {
      name: "hackernews",
      keywords: "hackernews news tech hacker discussion hackernews icon hackernews logo hackernews website hackernews app hacker community",
      icon: "eac7",
      color: false,
   },
   {
      name: "wikipedia",
      keywords: "wikipedia encyclopedia knowledge wikipedia icon wikipedia logo wikipedia website wikipedia app information wiki",
      icon: "eac8",
      color: false,
   },
   {
      name: "linkedin",
      keywords: "linkedin professional network linkedin icon linkedin logo linkedin website linkedin app linkedin profile career",
      icon: "eac9",
      color: false,
   },
   {
      name: "linkedin2",
      keywords: "linkedin2 professional network linkedin icon linkedin logo linkedin website linkedin app linkedin profile career",
      icon: "eaca",
      color: false,
   },
   {
      name: "lastfm",
      keywords: "lastfm music streaming audio lastfm icon lastfm logo lastfm website lastfm app music streaming",
      icon: "eacb",
      color: false,
   },
   {
      name: "lastfm2",
      keywords: "lastfm2 music streaming audio lastfm icon lastfm logo lastfm website lastfm app music streaming",
      icon: "eacc",
      color: false,
   },
   {
      name: "delicious",
      keywords: "delicious bookmark social network delicious icon delicious logo delicious website delicious app bookmarking",
      icon: "eacd",
      color: false,
   },
   {
      name: "stumbleupon",
      keywords: "stumbleupon social network discovery stumbleupon icon stumbleupon logo stumbleupon website stumbleupon app stumble",
      icon: "eace",
      color: false,
   },
   {
      name: "stumbleupon2",
      keywords: "stumbleupon2 social network discovery stumbleupon icon stumbleupon logo stumbleupon website stumbleupon app stumble",
      icon: "eacf",
      color: false,
   },
   {
      name: "stackoverflow",
      keywords: "stackoverflow programming questions answers stackoverflow icon stackoverflow logo stackoverflow website stackoverflow app developer community",
      icon: "ead0",
      color: false,
   },
   {
      name: "pinterest",
      keywords: "pinterest social network pinterest icon pinterest logo pinterest website pinterest app pinning pinboard",
      icon: "ead1",
      color: false,
   },
   {
      name: "pinterest2",
      keywords: "pinterest2 social network pinterest icon pinterest logo pinterest website pinterest app pinning pinboard",
      icon: "ead2",
      color: false,
   },
   {
      name: "xing",
      keywords: "xing professional network xing icon xing logo xing website xing app xing profile xing community",
      icon: "ead3",
      color: false,
   },
   {
      name: "xing2",
      keywords: "xing2 professional network xing icon xing logo xing website xing app xing profile xing community",
      icon: "ead4",
      color: false,
   },
   {
      name: "flattr",
      keywords: "flattr support donate flattr icon flattr logo flattr website flattr app funding patronage",
      icon: "ead5",
      color: false,
   },
   {
      name: "foursquare",
      keywords: "foursquare location check in venue navigation social place map square geolocation",
      icon: "ead6",
      color: false,
   },
   {
      name: "yelp",
      keywords: "yelp review rating restaurant business service feedback local recommendation customer",
      icon: "ead7",
      color: false,
   },
   {
      name: "paypal",
      keywords: "paypal payment online transaction money secure e commerce financial digital payment gateway",
      icon: "ead8",
      color: false,
   },
   {
      name: "chrome",
      keywords: "chrome browser internet web google surfing online navigation software google chrome",
      icon: "ead9",
      color: false,
   },
   {
      name: "firefox",
      keywords: "firefox browser internet web mozilla surfing online navigation software mozilla firefox",
      icon: "eada",
      color: false,
   },
   {
      name: "ie",
      keywords: "ie internet explorer browser internet web microsoft surfing online navigation software",
      icon: "eadb",
      color: false,
   },
   {
      name: "edge",
      keywords: "edge microsoft edge browser internet web microsoft surfing online navigation software",
      icon: "eadc",
      color: false,
   },
   {
      name: "safari",
      keywords: "safari browser internet web apple surfing online navigation software apple safari",
      icon: "eadd",
      color: false,
   },
   {
      name: "opera",
      keywords: "opera browser internet web opera software surfing online navigation software opera browser",
      icon: "eade",
      color: false,
   },
   {
      name: "file pdf",
      keywords: "file pdf pdf document adobe acrobat portable document format pdf file file format pdf icon pdf document",
      icon: "eadf",
      color: false,
   },
   {
      name: "file openoffice",
      keywords: "file openoffice openoffice document open source apache office text spreadsheet presentation openoffice icon",
      icon: "eae0",
      color: false,
   },
   {
      name: "file word",
      keywords: "file word word document microsoft office text editor word processor doc docx",
      icon: "eae1",
      color: false,
   },
   {
      name: "file excel",
      keywords: "file excel excel spreadsheet microsoft office data table calculation excel sheet xls",
      icon: "eae2",
      color: false,
   },
   {
      name: "libreoffice",
      keywords: "libreoffice office suite open source document spreadsheet presentation word processor free libreoffice icon libreoffice writer",
      icon: "eae3",
      color: false,
   },
   {
      name: "html five",
      keywords: "html five html5 markup web language hypertext coding development website html5 icon",
      icon: "eae4",
      color: false,
   },
   {
      name: "html five2",
      keywords: "html five2 html5 markup web language hypertext coding development website html5 icon",
      icon: "eae5",
      color: false,
   },
   {
      name: "css3",
      keywords: "css3 css cascading style sheets web styling design coding development css3 icon web design",
      icon: "eae6",
      color: false,
   },
   {
      name: "git",
      keywords: "git version control software development repository code collaboration github commit branch git icon",
      icon: "eae7",
      color: false,
   },
   {
      name: "codepen",
      keywords: "codepen coding development web frontend sandbox playground code css javascript",
      icon: "eae8",
      color: false,
   },
   {
      name: "svg",
      keywords: "svg scalable vector graphics image vector format graphics web design svg icon vector image",
      icon: "eae9",
      color: false,
   },
   {
      name: "icomoon",
      keywords: "icomoon icon font library web icons symbol vector icomoon icon icon font",
      icon: "eaea",
      color: false,
   },
];

const COLOR_ICONS = [
   {
      name: "1password",
      keywords:
         "1password password security secure key 1password icon 1password logo 1password symbol password manager login",
      icon: "49d",
      color: "#0094f5",
   },
   {
      name: "500px3",
      keywords:
         "500px3 500px photography photo 500px icon 500px logo 500px symbol photo sharing 500px app",
      icon: "49e",
      color: "#0099e5",
   },
   {
      name: "abbrobotstudio",
      keywords:
         "abbrobotstudio robot automation manufacturing abb abb robot robotics abbrobotstudio icon abbrobotstudio logo abbrobotstudio symbol",
      icon: "49f",
      color: "#ff9e0f",
   },
   {
      name: "about dot me",
      keywords:
         "about dot me about me bio profile about.me about dot me icon about.me logo about.me symbol personal website",
      icon: "4a0",
      color: "#00a98f",
   },
   {
      name: "accusoft",
      keywords:
         "accusoft software technology development digital imaging document management OCR document processing image processing accusoft logo",
      icon: "4a3",
      color: "#ff7e4a",
   },
   {
      name: "acm",
      keywords:
         "acm association for computing machinery computing computer science technology research academic scientific acm logo association",
      icon: "4a4",
      color: "#0085ca",
   },
   {
      name: "addthis",
      keywords:
         "addthis social sharing share button bookmark web online community addthis logo social media",
      icon: "4a5",
      color: "#ff6550",
   },
   {
      name: "adguard",
      keywords:
         "adguard ad blocker privacy security online protection adguard logo browser extension advertisement",
      icon: "4a6",
      color: "#66b574",
   },
   {
      name: "adobe",
      keywords:
         "adobe software creative design digital media adobe systems creative cloud adobe logo tools",
      icon: "4a7",
      color: "#f00",
   },
   {
      name: "adobeacrobatreader",
      keywords:
         "adobe acrobat reader pdf reader adobe acrobat document viewer adobe acrobat reader logo pdf reader software",
      icon: "4a8",
      color: "#ee3f24",
   },
   {
      name: "adobeaftereffects",
      keywords:
         "adobe after effects after effects motion graphics video editing animation design adobe after effects logo video production visual effects",
      icon: "4a9",
      color: "#d291ff",
   },
   {
      name: "adobeaudition",
      keywords:
         "adobe audition audition audio editing sound design music production adobe adobe audition logo audio software digital audio workstation sound editing",
      icon: "4aa",
      color: "#00e4bb",
   },
   {
      name: "adobecreativecloud",
      keywords:
         "adobe creative cloud creative cloud adobe cloud subscription creative design adobe creative cloud logo software tools",
      icon: "4ab",
      color: "#d41818",
   },
   {
      name: "adobedreamweaver",
      keywords:
         "adobe dreamweaver dreamweaver web design web development html css adobe adobe dreamweaver logo website code editor",
      icon: "4ac",
      color: "#35fa00",
   },
   {
      name: "adobeillustrator",
      keywords:
         "adobe illustrator illustrator vector graphics design illustration adobe adobe illustrator logo graphic design drawing art",
      icon: "4ad",
      color: "#ff7c00",
   },
   {
      name: "adobeindesign",
      keywords:
         "adobe indesign indesign publishing layout design adobe adobe indesign logo desktop publishing print typesetting",
      icon: "4ae",
      color: "#fd3f93",
   },
   {
      name: "adobelightroomcc",
      keywords:
         "adobe lightroom cc lightroom photo editing photography adobe adobe lightroom cc logo digital photography image editing lightroom cc",
      icon: "4af",
      color: "#3df0f0",
   },
   {
      name: "adobelightroomclassic",
      keywords:
         "adobe lightroom classic lightroom photo editing photography adobe adobe lightroom classic logo digital photography image editing lightroom classic",
      icon: "4b0",
      color: "#add5ec",
   },
   {
      name: "adobephotoshop",
      keywords:
         "adobe photoshop photoshop image editing photo manipulation design adobe adobe photoshop logo graphic design digital art photo editing",
      icon: "4b1",
      color: "#00c8ff",
   },
   {
      name: "adobepremiere",
      keywords:
         "adobe premiere premiere video editing production adobe adobe premiere logo film adobe premiere pro video production editing",
      icon: "4b2",
      color: "#ea77ff",
   },
   {
      name: "adobetypekit",
      keywords:
         "adobe typekit typekit fonts typography adobe adobe typekit logo web fonts type font library font service",
      icon: "4b3",
      color: "#87ec00",
   },
   {
      name: "adobexd",
      keywords:
         "adobe xd xd ui design prototyping adobe adobe xd logo user interface design tool adobe experience design ui/ux",
      icon: "4b4",
      color: "#ff2bc2",
   },
   {
      name: "airbnb",
      keywords:
         "airbnb accommodation rental travel vacation home airbnb logo lodging housing hospitality",
      icon: "4b5",
      color: "#ff5a5f",
   },
   {
      name: "algolia",
      keywords:
         "algolia search search engine software development engine algolia logo indexing query data",
      icon: "4b8",
      color: "#5468ff",
   },
   {
      name: "alliedmodders",
      keywords:
         "alliedmodders alliedmodders logo gaming game development community modding game mods source engine game server",
      icon: "4b9",
      color: "#1578d3",
   },
   {
      name: "amazon2",
      keywords:
         "amazon amazon logo shopping online shopping ecommerce marketplace retail amazon.com internet web",
      icon: "4ba",
      color: "#f90",
   },
   {
      name: "amazonalexa",
      keywords:
         "amazon alexa alexa voice assistant amazon ai smart home amazon alexa logo virtual assistant amazon echo voice control",
      icon: "4bb",
      color: "#00caff",
   },
   {
      name: "amd",
      keywords:
         "amd advanced micro devices technology semiconductors hardware processor amd logo cpu gpu chip",
      icon: "4bd",
      color: "#ed1c24",
   },
   {
      name: "americanexpress",
      keywords:
         "american express american express logo credit card finance payment banking american express card american express icon credit shopping",
      icon: "4be",
      color: "#2e77bc",
   },
   {
      name: "anaconda",
      keywords:
         "anaconda python distribution software programming anaconda logo data science development package manager conda",
      icon: "4bf",
      color: "#42b029",
   },
   {
      name: "anchor2",
      keywords:
         "anchor anchor logo podcast podcasting audio hosting platform anchor.fm broadcast listen",
      icon: "4c1",
      color: "#8940fa",
   },
   {
      name: "android3",
      keywords:
         "android android logo google mobile operating system smartphone os android robot android icon google android",
      icon: "4c2",
      color: "#3ddc84",
   },
   {
      name: "angular",
      keywords:
         "angular angular logo javascript framework web development typescript angularjs google angular framework programming",
      icon: "4c4",
      color: "#dd0031",
   },
   {
      name: "angularuniversal",
      keywords:
         "angular universal angular universal web development server side rendering framework angular logo angularjs programming javascript",
      icon: "4c5",
      color: "#00acc1",
   },
   {
      name: "ansible",
      keywords:
         "ansible automation devops configuration management it ansible logo ansible tower software deployment automation tool",
      icon: "4c6",
      color: "#e00",
   },
   {
      name: "apache",
      keywords:
         "apache apache software foundation software foundation open source apache logo apache http server web server http server",
      icon: "4c7",
      color: "#d22128",
   },
   {
      name: "apacheairflow",
      keywords:
         "apache airflow airflow workflow automation apache data engineering data pipeline etl apache airflow logo big data",
      icon: "4c8",
      color: "#007a88",
   },
   {
      name: "apachecordova",
      keywords:
         "apache cordova cordova hybrid apps mobile development apache web development javascript framework cross platform",
      icon: "4c9",
      color: "#e8e8e8",
   },
   {
      name: "apacheflink",
      keywords:
         "apache flink flink stream processing big data apache data real time apache flink logo data processing streaming",
      icon: "4ca",
      color: "#e6526f",
   },
   {
      name: "apachenetbeanside",
      keywords:
         "apache netbeans ide netbeans ide java development apache apache netbeans ide logo programming integrated development environment netbeans ide",
      icon: "4cc",
      color: "#1b6ac6",
   },
   {
      name: "apacheopenoffice",
      keywords:
         "apache openoffice openoffice office suite apache word processor spreadsheet presentation apache openoffice logo open source apache software foundation",
      icon: "4cd",
      color: "#0e85cd",
   },
   {
      name: "apacherocketmq",
      keywords:
         "apache rocketmq rocketmq message queue messaging apache streaming pubsub apache rocketmq logo apache messaging apache software foundation",
      icon: "4ce",
      color: "#d77310",
   },
   {
      name: "apachespark",
      keywords:
         "apache spark spark big data data processing apache analytics apache spark logo streaming machine learning distributed computing",
      icon: "4cf",
      color: "#e25a1c",
   },
   {
      name: "apple1",
      keywords:
         "apple apple logo technology electronics company fruit mac iphone ipad apple inc.",
      icon: "4d0",
      color: "#999",
   },
   {
      name: "applepodcasts",
      keywords:
         "apple podcasts podcasts audio listening itunes apple apple podcasts logo apple podcasts icon shows episodes",
      icon: "4d3",
      color: "#93c",
   },
   {
      name: "appveyor",
      keywords:
         "appveyor continuous integration development software build testing appveyor logo automation ci/cd cloud",
      icon: "4d4",
      color: "#00b3e0",
   },
   {
      name: "aral",
      keywords:
         "aral aral logo technology company brand blue business aral petrol oil fuel",
      icon: "4d5",
      color: "#0063cb",
   },
   {
      name: "archiveofourown",
      keywords:
         "archive of our own ao3 archive fanfiction fandom writing archiveofourown logo fanfic books library",
      icon: "4d6",
      color: "#900",
   },
   {
      name: "archlinux",
      keywords:
         "arch linux linux operating system distribution arch archlinux logo archlinux icon arch linux logo arch linux icon opensource",
      icon: "4d7",
      color: "#1793d1",
   },
   {
      name: "arduino",
      keywords:
         "arduino electronics microcontroller hardware arduino logo diy arduino uno coding maker robotics",
      icon: "4d8",
      color: "#00979d",
   },
   {
      name: "artstation",
      keywords:
         "artstation art portfolio creative design artstation logo artist illustration digital art gallery",
      icon: "4d9",
      color: "#13aff0",
   },
   {
      name: "arxiv",
      keywords:
         "arxiv research papers academic science mathematics arxiv logo physics math academic publishing",
      icon: "4da",
      color: "#b31b1b",
   },
   {
      name: "asciidoctor",
      keywords:
         "asciidoctor asciidoc documentation markdown text asciidoctor logo writing markup formatting asciidoc documentation",
      icon: "4dc",
      color: "#e40046",
   },
   {
      name: "at and t",
      keywords:
         "at&t at and t logo telecommunications communication phone mobile at&t logo wireless internet provider",
      icon: "4dd",
      color: "#00a8e0",
   },
   {
      name: "atlassian",
      keywords:
         "atlassian software company technology collaboration atlassian logo tools development teamwork jira",
      icon: "4de",
      color: "#0052cc",
   },
   {
      name: "atom",
      keywords:
         "atom atom editor editor code text editor atom logo programming development ide github",
      icon: "4df",
      color: "#66595c",
   },
   {
      name: "audi",
      keywords:
         "audi audi logo automobile cars german automotive vehicle audi icon luxury car brand",
      icon: "4e0",
      color: "#bb0a30",
   },
   {
      name: "audible",
      keywords:
         "audible audible logo audiobooks books listening audio reading audible icon story listen",
      icon: "4e1",
      color: "#f8991c",
   },
   {
      name: "aurelia",
      keywords:
         "aurelia javascript framework web development aurelia logo programming front end typescript aurelia framework spa",
      icon: "4e2",
      color: "#ed2b88",
   },
   {
      name: "auth0",
      keywords:
         "auth0 authentication identity security auth0 logo login identity management authorization authentication service sso",
      icon: "4e3",
      color: "#eb5424",
   },
   {
      name: "automatic",
      keywords:
         "automatic automatic logo vehicle telematics car connected car technology automobile driving car tracking",
      icon: "4e4",
      color: "#7d8084",
   },
   {
      name: "autotask",
      keywords:
         "autotask management service business autotask logo software cloud it services task",
      icon: "4e5",
      color: "#e51937",
   },
   {
      name: "aventrix",
      keywords:
         "aventrix aventrix logo ecommerce games software store aventrix icon digital distribution aventrix.com digital goods",
      icon: "4e6",
      color: "#09d",
   },
   {
      name: "awesomewm",
      keywords:
         "awesome wm awesome window manager linux desktop customization awesome wm logo tiling x11 awesome window manager",
      icon: "4e7",
      color: "#535d6c",
   },
   {
      name: "azureartifacts",
      keywords:
         "azure artifacts azure devops artifacts azureartifacts logo microsoft azure devops build pipeline azure pipelines",
      icon: "4e8",
      color: "#cb2e6d",
   },
   {
      name: "azuredevops",
      keywords:
         "azure devops azure microsoft devops azuredevops logo cloud development pipeline azure pipelines microsoft azure",
      icon: "4e9",
      color: "#0078d7",
   },
   {
      name: "azurepipelines",
      keywords:
         "azure pipelines azure microsoft pipeline ci/cd azurepipelines logo devops azure devops build continuous integration",
      icon: "4ea",
      color: "#2560e0",
   },
   {
      name: "babel",
      keywords:
         "babel javascript compiler es6 babel logo babeljs babeljs logo programming es2015 web",
      icon: "4eb",
      color: "#f9dc3e",
   },
   {
      name: "baidu",
      keywords:
         "baidu baidu logo search china technology chinese baidu.com internet web engine",
      icon: "4ec",
      color: "#2319dc",
   },
   {
      name: "bamboo",
      keywords:
         "bamboo bamboo logo atlassian ci/cd build pipeline bamboo icon continuous integration automation devops",
      icon: "4ed",
      color: "#0052cc",
   },
   {
      name: "bancontact",
      keywords:
         "bancontact payment banking belgium finance bancontact logo online payment debit card transaction payment method",
      icon: "4ee",
      color: "#005498",
   },
   {
      name: "bandcamp1",
      keywords:
         "bandcamp bandcamp logo music band album streaming bandcamp icon bandcamp.com artists songs",
      icon: "4ef",
      color: "#408294",
   },
   {
      name: "bandlab",
      keywords:
         "bandlab bandlab logo music creation studio bandlab icon recording collaboration band audio",
      icon: "4f0",
      color: "#dc3710",
   },
   {
      name: "basecamp2",
      keywords:
         "basecamp basecamp logo project management team communication collaboration basecamp icon basecamp.com productivity tasks",
      icon: "4f1",
      color: "#5ecc62",
   },
   {
      name: "bathasu",
      keywords:
         "bathasu bathasu logo sudoku puzzle game bathasu icon number brain math logic",
      icon: "4f2",
      color: "#00a3e0",
   },
   {
      name: "beats",
      keywords:
         "beats beats logo audio music headphones beats by dre beats headphones beats icon sound beats electronics",
      icon: "4f3",
      color: "#005571",
   },
   {
      name: "beatsbydre",
      keywords:
         "beats by dre beats headphones audio music beats by dre logo sound beats headphones beats icon beats electronics",
      icon: "4f4",
      color: "#e01f3d",
   },
   {
      name: "behance4",
      keywords:
         "behance behance logo portfolio design creative behance icon art artists creative portfolio online portfolio",
      icon: "4f5",
      color: "#1769ff",
   },
   {
      name: "bing",
      keywords:
         "bing bing logo search microsoft engine bing.com web microsoft bing bing search internet",
      icon: "4f7",
      color: "#008373",
   },
   {
      name: "bit",
      keywords:
         "bit bit logo bitcoin cryptocurrency digital currency coin crypto currency bit icon blockchain",
      icon: "4f8",
      color: "#73398d",
   },
   {
      name: "bitbucket1",
      keywords:
         "bitbucket bitbucket logo git repository version control bitbucket icon atlassian source control development code",
      icon: "4f9",
      color: "#0052cc",
   },
   {
      name: "bitcoin1",
      keywords:
         "bitcoin bitcoin logo cryptocurrency digital currency coin crypto currency bitcoin icon blockchain btc",
      icon: "4fa",
      color: "#f7931a",
   },
   {
      name: "bitdefender",
      keywords:
         "bitdefender bitdefender logo antivirus security software bitdefender icon protection cybersecurity bitdefender.com malware",
      icon: "4fb",
      color: "#ed1c24",
   },
   {
      name: "bitly",
      keywords:
         "bitly bitly logo url shortener link shorten bit.ly links bitly icon url short",
      icon: "4fc",
      color: "#ee6123",
   },
   {
      name: "bitrise",
      keywords:
         "bitrise bitrise logo ci/cd automation development bitrise icon continuous integration build pipeline devops",
      icon: "4fd",
      color: "#683d87",
   },
   {
      name: "blender",
      keywords:
         "blender blender logo 3d animation modeling blender icon 3d modeling rendering software graphics",
      icon: "4ff",
      color: "#f5792a",
   },
   {
      name: "blogger1",
      keywords:
         "blogger blogger logo blog google blogspot blogger icon writing blogger.com platform blogger blog",
      icon: "500",
      color: "#ff5722",
   },
   {
      name: "bmcsoftware",
      keywords:
         "bmc software bmc software it bmcsoftware logo management business bmc remedy bmc icon solutions",
      icon: "501",
      color: "#fe5000",
   },
   {
      name: "boeing",
      keywords:
         "boeing boeing logo aerospace aviation company plane boeing icon aircraft boeing.com defense",
      icon: "502",
      color: "#1d439c",
   },
   {
      name: "boost",
      keywords:
         "boost boost logo energy drink boost mobile boost icon boost juice power boost energy performance",
      icon: "503",
      color: "#f69220",
   },
   {
      name: "bootstrap",
      keywords:
         "bootstrap bootstrap logo css framework web development bootstrap icon html frontend responsive design",
      icon: "504",
      color: "#563d7c",
   },
   {
      name: "bower",
      keywords:
         "bower bower logo javascript package manager frontend bower icon web development dependency library bower.io",
      icon: "505",
      color: "#ef5734",
   },
   {
      name: "box1",
      keywords:
         "box storage container packaging parcel crate package box icon storage box shipping",
      icon: "506",
      color: "#0061d5",
   },
   {
      name: "brand dot ai",
      keywords:
         "brand.ai brand ai branding design logo identity branding tool branding platform brand.ai logo",
      icon: "507",
      color: "#0aa0ff",
   },
   {
      name: "brandfolder",
      keywords:
         "brandfolder brand folder storage organization asset management branding brandfolder logo asset organization digital asset management",
      icon: "508",
      color: "#40d1f5",
   },
   {
      name: "brave",
      keywords:
         "brave browser internet web privacy security brave browser shield privacy focused brave logo",
      icon: "509",
      color: "#fb542b",
   },
   {
      name: "breaker",
      keywords:
         "breaker podcast audio media listening radio breaker logo podcast platform audio streaming podcast app",
      icon: "50a",
      color: "#003dad",
   },
   {
      name: "broadcom",
      keywords:
         "broadcom technology electronics semiconductor chip networking broadcom logo semiconductor manufacturer communication broadcom chip",
      icon: "50b",
      color: "#cc092f",
   },
   {
      name: "buddy",
      keywords:
         "buddy friend companion partner mate buddy icon friendship buddy logo friendly buddy system",
      icon: "50c",
      color: "#1a86fd",
   },
   {
      name: "buffer",
      keywords:
         "buffer social media scheduling posts buffering queue buffer logo social media management buffer app content scheduling",
      icon: "50d",
      color: "#168eea",
   },
   {
      name: "buymeacoffee",
      keywords:
         "buymeacoffee support donation coffee appreciation buymeacoffee logo buy me a coffee supporter coffee icon tip",
      icon: "50e",
      color: "#ff813f",
   },
   {
      name: "buzzfeed",
      keywords:
         "buzzfeed media news entertainment content buzz buzzfeed logo news website online media viral",
      icon: "50f",
      color: "#e32",
   },
   {
      name: "c",
      keywords:
         "c programming language coding code c programming development software computer science c language",
      icon: "510",
      color: "#a8b9cc",
   },
   {
      name: "cakephp",
      keywords:
         "cakephp framework php web development coding cake cakephp logo php framework web framework development",
      icon: "511",
      color: "#d33c43",
   },
   {
      name: "campaignmonitor",
      keywords:
         "campaignmonitor marketing email campaign monitoring campaignmonitor logo email marketing campaign management marketing tool email campaign",
      icon: "512",
      color: "#509cf6",
   },
   {
      name: "canva",
      keywords:
         "canva design graphic design tool art canvas canva logo design platform graphic design tool creation",
      icon: "513",
      color: "#00c4cc",
   },
   {
      name: "cashapp",
      keywords:
         "cashapp payment money transaction cash app cash app cashapp logo finance payment app",
      icon: "514",
      color: "#00c244",
   },
   {
      name: "cassandra",
      keywords:
         "cassandra database nosql data storage cassandra logo apache cassandra distributed database big data cassandra database",
      icon: "515",
      color: "#1287b1",
   },
   {
      name: "castorama",
      keywords:
         "castorama home improvement store retail hardware castorama logo diy construction home renovation castorama store",
      icon: "516",
      color: "#0078d7",
   },
   {
      name: "castro",
      keywords:
         "castro podcast audio media listening radio castro logo podcast app audio streaming podcast platform",
      icon: "517",
      color: "#00b265",
   },
   {
      name: "centos",
      keywords:
         "centos linux operating system os centos logo red hat server centos linux open source centos distribution",
      icon: "518",
      color: "#262577",
   },
   {
      name: "cevo",
      keywords:
         "cevo esports gaming competitive tournament cevo logo video games online gaming esports platform gaming community",
      icon: "519",
      color: "#1eabe2",
   },
   {
      name: "chase",
      keywords:
         "chase bank finance financial chase logo banking credit card chase bank financial institution credit",
      icon: "51a",
      color: "#117aca",
   },
   {
      name: "chef",
      keywords:
         "chef cooking food chef hat restaurant chef logo culinary kitchen cook chef icon",
      icon: "51b",
      color: "#f09820",
   },
   {
      name: "circle3",
      keywords:
         "circle3 circle shape round geometry circle icon circumference geometric round icon circular",
      icon: "51c",
      color: "#8669ae",
   },
   {
      name: "cisco",
      keywords:
         "cisco networking technology communication cisco logo router switch internet cisco systems network",
      icon: "51f",
      color: "#1ba0d7",
   },
   {
      name: "civicrm",
      keywords:
         "civicrm crm customer relationship management software civicrm logo nonprofit open source customer management civic engagement civicrm icon",
      icon: "520",
      color: "#81c459",
   },
   {
      name: "clockify",
      keywords:
         "clockify time tracking clock time clockify logo productivity tracking work timer time management",
      icon: "521",
      color: "#03a9f4",
   },
   {
      name: "clojure",
      keywords:
         "clojure programming language coding code clojure logo development software functional programming lisp",
      icon: "522",
      color: "#5881d8",
   },
   {
      name: "cloudbees",
      keywords:
         "cloudbees continuous integration ci cd automation cloudbees logo devops software development cloud cloud computing",
      icon: "523",
      color: "#1997b5",
   },
   {
      name: "cloudflare",
      keywords:
         "cloudflare internet web cloudflare logo network security cdn cloud dns website",
      icon: "524",
      color: "#f38020",
   },
   {
      name: "cmake",
      keywords:
         "cmake build automation software development cmake logo programming compiler cmake tool build system",
      icon: "525",
      color: "#064f8c",
   },
   {
      name: "co op",
      keywords:
         "co op cooperative store retail grocery co op logo community supermarket cooperative icon food",
      icon: "526",
      color: "#00b1e7",
   },
   {
      name: "codecademy",
      keywords:
         "codecademy coding programming education learning codecademy logo code development online learning codecademy icon",
      icon: "528",
      color: "#1f4056",
   },
   {
      name: "codechef",
      keywords:
         "codechef programming coding competitive programming codechef logo development software algorithm code coding competition",
      icon: "529",
      color: "#5b4638",
   },
   {
      name: "codecov",
      keywords:
         "codecov code coverage testing codecov logo development software code coverage testing tool code analysis",
      icon: "52b",
      color: "#f01f7a",
   },
   {
      name: "codefactor",
      keywords:
         "codefactor code quality code review analysis codefactor logo development software code analysis codefactor icon linting",
      icon: "52c",
      color: "#f44a6a",
   },
   {
      name: "codeforces",
      keywords:
         "codeforces programming coding competitive programming codeforces logo development software algorithm code coding competition",
      icon: "52d",
      color: "#1f8acb",
   },
   {
      name: "codeigniter",
      keywords:
         "codeigniter php framework web development coding codeigniter logo php framework web framework development",
      icon: "52e",
      color: "#ee4623",
   },
   {
      name: "coderwall",
      keywords:
         "coderwall profile coding achievements coderwall logo developer community coderwall icon coding profile social network",
      icon: "530",
      color: "#3e8dcc",
   },
   {
      name: "codeship",
      keywords:
         "codeship continuous integration ci cd automation codeship logo devops software development build testing",
      icon: "532",
      color: "#3c4858",
   },
   {
      name: "codewars",
      keywords:
         "codewars programming coding competitive programming codewars logo development software algorithm code coding competition",
      icon: "533",
      color: "#ad2c27",
   },
   {
      name: "codio",
      keywords:
         "codio web development coding ide codio logo development frontend coding environment codio icon coding platform",
      icon: "534",
      color: "#4574e0",
   },
   {
      name: "coinbase",
      keywords:
         "coinbase cryptocurrency bitcoin ethereum coinbase logo wallet crypto blockchain coinbase icon exchange",
      icon: "536",
      color: "#0667d0",
   },
   {
      name: "commonworkflowlanguage",
      keywords:
         "common workflow language common workflow workflow language commonworkflowlanguage logo data pipeline bioinformatics workflow language workflow automation",
      icon: "537",
      color: "#b5314c",
   },
   {
      name: "composer",
      keywords:
         "composer php dependency manager composer logo package manager dependency php composer composer icon php package manager php dependency manager",
      icon: "538",
      color: "#885630",
   },
   {
      name: "compropago",
      keywords:
         "compropago payment ecommerce compropago logo online payment payment gateway payment processing compropago icon ecommerce solution payment platform",
      icon: "539",
      color: "#00aaef",
   },
   {
      name: "conekta",
      keywords:
         "conekta payment ecommerce conekta logo online payment payment gateway payment processing conekta icon ecommerce solution payment platform",
      icon: "53b",
      color: "#414959",
   },
   {
      name: "coronarenderer",
      keywords:
         "corona renderer corona renderer rendering coronarenderer logo 3d visualization cgi architecture render",
      icon: "53d",
      color: "#e6502a",
   },
   {
      name: "coursera",
      keywords:
         "coursera education online learning courses coursera logo elearning mooc learning platform online courses coursera icon",
      icon: "53e",
      color: "#2a73cc",
   },
   {
      name: "coveralls",
      keywords:
         "coveralls code coverage testing coveralls logo development software code coverage testing tool code analysis",
      icon: "53f",
      color: "#3f5767",
   },
   {
      name: "cpanel",
      keywords:
         "cpanel hosting control panel server cpanel logo web hosting website server management cpanel icon web server",
      icon: "540",
      color: "#ff6c2c",
   },
   {
      name: "cplusplus",
      keywords:
         "c++ programming language coding code c++ logo development software computer science c++ language",
      icon: "541",
      color: "#00599c",
   },
   {
      name: "creativecommons",
      keywords:
         "creativecommons license copyright creative commons creativecommons logo public domain cc licensing copyright license",
      icon: "542",
      color: "#ef9421",
   },
   {
      name: "crehana",
      keywords:
         "crehana education online learning courses crehana logo elearning mooc learning platform online courses crehana icon",
      icon: "543",
      color: "#4b22f4",
   },
   {
      name: "crunchbase",
      keywords:
         "crunchbase business startup company crunchbase logo entrepreneurship crunchbase icon startup database venture capital crunchbase profile",
      icon: "544",
      color: "#0288d1",
   },
   {
      name: "crunchyroll",
      keywords:
         "crunchyroll streaming anime media tv crunchyroll logo anime streaming animation crunchyroll icon japanese animation",
      icon: "545",
      color: "#f47521",
   },
   {
      name: "csharp",
      keywords:
         "c# programming language coding code c# logo development software computer science c# language",
      icon: "547",
      color: "#239120",
   },
   {
      name: "css32",
      keywords:
         "css3 css web development coding stylesheet css3 logo frontend development web design css icon",
      icon: "548",
      color: "#1572b6",
   },
   {
      name: "csswizardry",
      keywords:
         "csswizardry web development coding css csswizardry logo frontend development web design css icon web",
      icon: "549",
      color: "#f43059",
   },
   {
      name: "d3 dot js",
      keywords:
         "d3.js d3 javascript library visualization d3.js logo data chart d3.js icon javascript library",
      icon: "54b",
      color: "#f9a03c",
   },
   {
      name: "dailymotion",
      keywords:
         "dailymotion video media streaming dailymotion logo video platform dailymotion icon watch stream video sharing",
      icon: "54c",
      color: "#0066dc",
   },
   {
      name: "dart",
      keywords:
         "dart programming language coding code dart logo development software google dart language",
      icon: "54d",
      color: "#0175c2",
   },
   {
      name: "dashlane",
      keywords:
         "dashlane password manager security dashlane logo privacy password password management dashlane icon login password security",
      icon: "54e",
      color: "#007c97",
   },
   {
      name: "datacamp",
      keywords:
         "datacamp education online learning courses datacamp logo elearning mooc learning platform online courses datacamp icon",
      icon: "54f",
      color: "#3ac",
   },
   {
      name: "dazn",
      keywords:
         "dazn streaming sports media dazn logo sport streaming dazn icon watch stream sports streaming",
      icon: "550",
      color: "#f8f8f5",
   },
   {
      name: "dblp",
      keywords:
         "dblp computer science database academic dblp logo research computer science database bibliography scientific academic database",
      icon: "551",
      color: "#004f9f",
   },
   {
      name: "debian",
      keywords:
         "debian linux operating system os debian logo debian linux debian distribution open source debian icon debian os",
      icon: "552",
      color: "#a81d33",
   },
   {
      name: "deepin",
      keywords:
         "deepin linux operating system os deepin logo deepin linux desktop environment open source deepin distribution deepin icon",
      icon: "553",
      color: "#007cff",
   },
   {
      name: "deezer",
      keywords:
         "deezer streaming music media deezer logo music streaming deezer icon listen stream music player",
      icon: "554",
      color: "#feaa2d",
   },
   {
      name: "delicious2",
      keywords:
         "delicious bookmark bookmarks web delicious logo social bookmarking delicious icon website save favorite",
      icon: "555",
      color: "#39f",
   },
   {
      name: "deliveroo",
      keywords:
         "deliveroo delivery food service deliveroo logo restaurant deliveroo icon order delivery service food delivery",
      icon: "556",
      color: "#00ccbc",
   },
   {
      name: "dell",
      keywords:
         "dell computer technology electronics dell logo laptop pc dell computer dell icon dell laptop",
      icon: "557",
      color: "#007db8",
   },
   {
      name: "dependabot",
      keywords:
         "dependabot dependency management automation dependabot logo development software update github dependency management",
      icon: "559",
      color: "#025e8c",
   },
   {
      name: "designernews",
      keywords:
         "designernews design news community designernews logo designer design news designernews icon web design product design",
      icon: "55a",
      color: "#2d72d9",
   },
   {
      name: "deviantart2",
      keywords:
         "deviantart art design community deviantart logo artist deviantart icon creative deviant art gallery",
      icon: "55c",
      color: "#05cc47",
   },
   {
      name: "devrant",
      keywords:
         "devrant rant community devrant logo development programming devrant icon developer programming community coding",
      icon: "55d",
      color: "#f99a66",
   },
   {
      name: "digitalocean",
      keywords:
         "digitalocean hosting cloud server digitalocean logo web hosting digitalocean icon vps developer web server",
      icon: "560",
      color: "#0080ff",
   },
   {
      name: "discord",
      keywords:
         "discord chat communication discord logo gaming discord icon voice chat community discord server messaging",
      icon: "562",
      color: "#7289da",
   },
   {
      name: "discover",
      keywords:
         "discover credit card payment discover logo finance bank credit discover icon discover card cashback",
      icon: "564",
      color: "#ff6000",
   },
   {
      name: "disqus",
      keywords:
         "disqus comment community disqus logo discussion disqus icon commenting system comments discussion platform conversation",
      icon: "565",
      color: "#2e9fff",
   },
   {
      name: "disroot",
      keywords:
         "disroot cloud hosting email disroot logo disroot icon privacy service cloud computing decentralized",
      icon: "566",
      color: "#50162d",
   },
   {
      name: "dlna",
      keywords:
         "dlna media streaming dlna logo dlna icon dlna certified audio video dlna server media player",
      icon: "568",
      color: "#48a842",
   },
   {
      name: "docker",
      keywords:
         "docker container development docker logo docker icon virtualization containerization devops deployment software",
      icon: "569",
      color: "#1488c6",
   },
   {
      name: "docusign",
      keywords:
         "docusign e signature electronic signature contracts document signing paperless agreements digital signatures business documents e documents",
      icon: "56a",
      color: "#fc2",
   },
   {
      name: "dot net",
      keywords:
         "dot net .NET Microsoft framework software development programming C# ASP.NET development platform Microsoft technology",
      icon: "56c",
      color: "#5c2d91",
   },
   {
      name: "draugiem dot lv",
      keywords:
         "draugiem dot lv draugiem.lv social network Latvia Baltic social media Latvian social network online community Latvian website Draugiem",
      icon: "56d",
      color: "#f60",
   },
   {
      name: "dribbble3",
      keywords:
         "dribbble3 dribbble design creative portfolio inspiration graphics art visual dribbble icon",
      icon: "56e",
      color: "#ea4c89",
   },
   {
      name: "dropbox3",
      keywords:
         "dropbox3 dropbox cloud storage file sharing data synchronization online backup file hosting cloud service dropbox icon dropbox logo",
      icon: "570",
      color: "#0061ff",
   },
   {
      name: "drupal1",
      keywords:
         "drupal1 drupal CMS content management system web development open source Drupal platform website builder Drupal icon Drupal logo",
      icon: "571",
      color: "#0678be",
   },
   {
      name: "dtube",
      keywords:
         "dtube decentralized video platform blockchain crypto video sharing content creation streaming peer to peer cryptocurrency dtube icon",
      icon: "572",
      color: "#f00",
   },
   {
      name: "duckduckgo",
      keywords:
         "duckduckgo search engine privacy anonymous alternative search online privacy search web search private search duckduckgo icon",
      icon: "573",
      color: "#de5833",
   },
   {
      name: "dunked",
      keywords:
         "dunked portfolio design creative showcase online portfolio art gallery dunked icon dunked logo",
      icon: "574",
      color: "#2da9d7",
   },
   {
      name: "duolingo",
      keywords:
         "duolingo language learning education language app foreign languages online courses language practice language skills duolingo icon duolingo logo",
      icon: "575",
      color: "#58cc02",
   },
   {
      name: "dynatrace",
      keywords:
         "dynatrace software intelligence monitoring performance analytics observability cloud APM dynatrace icon dynatrace logo",
      icon: "576",
      color: "#1496ff",
   },
   {
      name: "ebay",
      keywords:
         "ebay online marketplace ecommerce shopping auction buy sell shopping website ebay icon ebay logo",
      icon: "577",
      color: "#e53238",
   },
   {
      name: "eclipseide",
      keywords:
         "eclipseide Eclipse IDE software development programming Java integrated development environment Eclipse platform Java IDE eclipseide icon eclipseide logo",
      icon: "578",
      color: "#2c2255",
   },
   {
      name: "elastic",
      keywords:
         "elastic Elastic search engine Elasticsearch data analysis big data search data visualization elastic icon elastic logo",
      icon: "579",
      color: "#005571",
   },
   {
      name: "elasticcloud",
      keywords:
         "elasticcloud Elastic Cloud cloud service cloud platform Elasticsearch data analysis elasticcloud icon elasticcloud logo elastic cloud",
      icon: "57a",
      color: "#005571",
   },
   {
      name: "elasticsearch",
      keywords:
         "elasticsearch Elasticsearch search engine database data analysis big data elastic search elasticsearch icon elasticsearch logo",
      icon: "57b",
      color: "#005571",
   },
   {
      name: "elasticstack",
      keywords:
         "elasticstack Elastic Stack ELK stack Elasticsearch Logstash Kibana data analysis logging elasticstack icon elasticstack logo",
      icon: "57c",
      color: "#005571",
   },
   {
      name: "electron",
      keywords:
         "electron Electron framework software development desktop applications JavaScript cross platform web technologies electron icon electron logo",
      icon: "57d",
      color: "#47848f",
   },
   {
      name: "elementary",
      keywords:
         "elementary elementary OS operating system Linux open source Linux distribution elementary icon elementary logo elementary OS logo",
      icon: "57e",
      color: "#64baff",
   },
   {
      name: "elsevier",
      keywords:
         "elsevier academic publishing research scientific journal articles scholarly science elsevier icon elsevier logo",
      icon: "581",
      color: "#ff6c00",
   },
   {
      name: "ember dot js",
      keywords:
         "ember dot js ember.js Ember JavaScript framework web development front end framework web applications ember dot js icon ember dot js logo",
      icon: "582",
      color: "#e04e39",
   },
   {
      name: "emlakjet",
      keywords:
         "emlakjet real estate property Turkey Turkish real estate listing housing apartments emlakjet icon emlakjet logo",
      icon: "583",
      color: "#0ae524",
   },
   {
      name: "empirekred",
      keywords:
         "empirekred empire.kred social influence social media online community gamification social network empirekred icon empirekred logo",
      icon: "584",
      color: "#72be50",
   },
   {
      name: "envato",
      keywords:
         "envato Envato marketplace digital assets themes templates graphics web design envato icon envato logo",
      icon: "585",
      color: "#81b441",
   },
   {
      name: "epel",
      keywords:
         "epel EPEL Extra Packages for Enterprise Linux repository Linux software packages Red Hat CentOS Fedora epel icon",
      icon: "586",
      color: "#fc0000",
   },
   {
      name: "epson",
      keywords:
         "epson Epson printer projector electronics technology printing office equipment epson icon epson logo",
      icon: "588",
      color: "#039",
   },
   {
      name: "esea",
      keywords:
         "esea ESEA Esports Entertainment Association gaming esports competitive gaming counter strike gaming platform esea icon esea logo",
      icon: "589",
      color: "#0e9648",
   },
   {
      name: "eslint",
      keywords:
         "eslint ESLint JavaScript linting code quality static analysis development tool eslint icon eslint logo",
      icon: "58a",
      color: "#4b32c3",
   },
   {
      name: "etsy1",
      keywords:
         "etsy1 etsy handmade crafts vintage shopping marketplace handcrafted etsy icon etsy logo",
      icon: "58c",
      color: "#f16521",
   },
   {
      name: "eventbrite",
      keywords:
         "eventbrite Eventbrite events tickets event management ticketing online events event planning eventbrite icon eventbrite logo",
      icon: "58d",
      color: "#f05537",
   },
   {
      name: "eventstore",
      keywords:
         "eventstore EventStore event sourcing database event driven data store eventstore icon eventstore logo event store",
      icon: "58e",
      color: "#5ab552",
   },
   {
      name: "evernote1",
      keywords:
         "evernote1 evernote notes note taking productivity organization note app memo evernote icon evernote logo",
      icon: "58f",
      color: "#00a82d",
   },
   {
      name: "everplaces",
      keywords:
         "everplaces travel places locations exploration maps discovery everplaces icon everplaces logo",
      icon: "590",
      color: "#fa4b32",
   },
   {
      name: "evry",
      keywords:
         "evry Evry IT consulting technology services digital transformation outsourcing software development evry icon evry logo",
      icon: "591",
      color: "#063a54",
   },
   {
      name: "exercism",
      keywords:
         "exercism coding practice programming exercises learn to code coding challenges coding bootcamp exercism icon exercism logo",
      icon: "592",
      color: "#009cab",
   },
   {
      name: "expertsexchange",
      keywords:
         "expertsexchange Experts Exchange technology community Q&A programming help IT solutions expert advice expertsexchange icon expertsexchange logo",
      icon: "593",
      color: "#00aae7",
   },
   {
      name: "f droid",
      keywords:
         "f droid F Droid open source android app store free software mobile apps f droid icon f droid logo",
      icon: "596",
      color: "#1976d2",
   },
   {
      name: "f secure",
      keywords:
         "f secure F Secure cybersecurity antivirus security software privacy internet security f secure icon f secure logo",
      icon: "597",
      color: "#00baff",
   },
   {
      name: "facebook5",
      keywords:
         "facebook5 facebook social media social network facebook icon facebook logo fb facebook app facebook5 icon facebook5 logo",
      icon: "598",
      color: "#1877f2",
   },
   {
      name: "faceit",
      keywords:
         "faceit FACEIT gaming esports competitive gaming gaming platform faceit icon faceit logo",
      icon: "599",
      color: "#f50",
   },
   {
      name: "fandango",
      keywords:
         "fandango Fandango movies movie tickets showtimes theater film fandango icon fandango logo",
      icon: "59a",
      color: "#ff7300",
   },
   {
      name: "favro",
      keywords:
         "favro project management collaboration kanban agile task management favro icon favro logo",
      icon: "59b",
      color: "#512da8",
   },
   {
      name: "feathub",
      keywords:
         "feathub Feather feature voting feature requests community feedback product roadmap feathub icon feathub logo",
      icon: "59c",
      color: "#9b9b9b",
   },
   {
      name: "fedora",
      keywords:
         "fedora Fedora Linux operating system open source Linux distribution fedora icon fedora logo",
      icon: "59d",
      color: "#294172",
   },
   {
      name: "feedly",
      keywords:
         "feedly feed reader RSS news content reading blog feedly icon feedly logo",
      icon: "59e",
      color: "#2bb24c",
   },
   {
      name: "fidoalliance",
      keywords:
         "fidoalliance FIDO Alliance authentication security passwordless 2FA security standards fidoalliance icon fidoalliance logo",
      icon: "59f",
      color: "#ffbf3b",
   },
   {
      name: "figma",
      keywords:
         "figma Figma design prototyping collaboration UI/UX web design figma icon figma logo",
      icon: "5a0",
      color: "#f24e1e",
   },
   {
      name: "filezilla",
      keywords:
         "filezilla FileZilla FTP file transfer FTP client open source file sharing filezilla icon filezilla logo",
      icon: "5a1",
      color: "#bf0000",
   },
   {
      name: "firebase",
      keywords:
         "firebase Firebase Google cloud services app development database authentication firebase icon firebase logo",
      icon: "5a2",
      color: "#ffca28",
   },
   {
      name: "fitbit",
      keywords:
         "fitbit Fitbit fitness wearables health activity tracker fitbit icon fitbit logo",
      icon: "5a3",
      color: "#00b0b9",
   },
   {
      name: "fiverr",
      keywords:
         "fiverr Fiverr freelance services gigs marketplace remote work fiverr icon fiverr logo",
      icon: "5a4",
      color: "#1dbf73",
   },
   {
      name: "flickr6",
      keywords:
         "flickr6 Flickr photography photo sharing image hosting photo community flickr6 icon flickr6 logo",
      icon: "5a7",
      color: "#0063dc",
   },
   {
      name: "flipboard",
      keywords:
         "flipboard Flipboard news content magazines social network flipboard icon flipboard logo",
      icon: "5a8",
      color: "#e12828",
   },
   {
      name: "floatplane",
      keywords:
         "floatplane Floatplane video platform subscription service creator support video content floatplane icon floatplane logo",
      icon: "5a9",
      color: "#00aeef",
   },
   {
      name: "flutter",
      keywords:
         "flutter Flutter Google UI toolkit mobile app development framework dart flutter icon flutter logo",
      icon: "5aa",
      color: "#02569b",
   },
   {
      name: "fnac",
      keywords:
         "fnac Fnac electronics retail store tech consumer electronics fnac icon fnac logo",
      icon: "5ab",
      color: "#e1a925",
   },
   {
      name: "formstack",
      keywords:
         "formstack Formstack forms online forms surveys data collection form builder formstack icon formstack logo",
      icon: "5ac",
      color: "#21b573",
   },
   {
      name: "fossa",
      keywords:
         "fossa FOSSA open source compliance license security FOSSA icon FOSSA logo fossa icon",
      icon: "5ad",
      color: "#90a1b8",
   },
   {
      name: "fossilscm",
      keywords:
         "fossilscm Fossil version control source code management software development VCS fossilscm icon fossilscm logo",
      icon: "5ae",
      color: "#548294",
   },
   {
      name: "foursquare3",
      keywords:
         "foursquare3 foursquare location based check in places local social network foursquare icon foursquare logo",
      icon: "5af",
      color: "#f94877",
   },
   {
      name: "framer",
      keywords:
         "framer Framer prototyping design UI/UX animation interactive framer icon framer logo",
      icon: "5b0",
      color: "#05f",
   },
   {
      name: "freebsd",
      keywords:
         "freebsd FreeBSD operating system Unix open source free freebsd icon freebsd logo",
      icon: "5b1",
      color: "#ab2b28",
   },
   {
      name: "freecodecamp",
      keywords:
         "freecodecamp freeCodeCamp programming coding web development free learning freecodecamp icon freecodecamp logo",
      icon: "5b2",
      color: "#006400",
   },
   {
      name: "fujifilm",
      keywords:
         "fujifilm Fujifilm photography camera film digital imaging fujifilm icon fujifilm logo",
      icon: "5b3",
      color: "#ed1a3a",
   },
   {
      name: "fujitsu",
      keywords:
         "fujitsu Fujitsu technology IT electronics computers fujitsu icon fujitsu logo",
      icon: "5b4",
      color: "#f00",
   },
   {
      name: "furaffinity",
      keywords:
         "furaffinity Fur Affinity furry art community furries furry art furaffinity icon furaffinity logo",
      icon: "5b5",
      color: "#faaf3a",
   },
   {
      name: "furrynetwork",
      keywords:
         "furrynetwork Furry Network furry art community furries furry art furrynetwork icon furrynetwork logo",
      icon: "5b6",
      color: "#2e75b4",
   },
   {
      name: "garmin",
      keywords:
         "garmin Garmin GPS navigation wearables fitness sports garmin icon garmin logo",
      icon: "5b7",
      color: "#007cc3",
   },
   {
      name: "gatsby",
      keywords:
         "gatsby Gatsby React framework web development static site generator javascript gatsby icon gatsby logo",
      icon: "5b8",
      color: "#639",
   },
   {
      name: "gauges",
      keywords:
         "gauges Gauges analytics web analytics website tracking data visualization gauges icon gauges logo",
      icon: "5b9",
      color: "#2fa66a",
   },
   {
      name: "genius",
      keywords:
         "genius Genius lyrics music annotation rap hip hop genius icon genius logo",
      icon: "5ba",
      color: "#ffff64",
   },
   {
      name: "gentoo",
      keywords:
         "gentoo Gentoo Linux operating system source based open source gentoo icon gentoo logo",
      icon: "5bb",
      color: "#54487a",
   },
   {
      name: "geocaching",
      keywords:
         "geocaching Geocaching outdoor GPS game treasure hunt geocaching icon geocaching logo",
      icon: "5bc",
      color: "#00874d",
   },
   {
      name: "gerrit",
      keywords:
         "gerrit Gerrit code review version control software development collaboration gerrit icon gerrit logo",
      icon: "5bd",
      color: "#eee",
   },
   {
      name: "ghost",
      keywords:
         "ghost Ghost blogging CMS publishing content management ghost icon ghost logo",
      icon: "5be",
      color: "#738a94",
   },
   {
      name: "gimp",
      keywords:
         "gimp GIMP image editor photo editing graphics open source image manipulation gimp icon gimp logo",
      icon: "5bf",
      color: "#5c5543",
   },
   {
      name: "git2",
      keywords:
         "git2 Git version control software development code management git icon git logo",
      icon: "5c0",
      color: "#f05032",
   },
   {
      name: "gitea",
      keywords:
         "gitea Gitea self hosted Git service code hosting source control gitea icon gitea logo",
      icon: "5c1",
      color: "#609926",
   },
   {
      name: "gitlab1",
      keywords:
         "gitlab1 GitLab version control code hosting software development collaboration gitlab icon gitlab logo",
      icon: "5c3",
      color: "#fca121",
   },
   {
      name: "gitpod",
      keywords:
         "gitpod Gitpod development environment IDE cloud development github gitpod icon gitpod logo",
      icon: "5c4",
      color: "#1aa6e4",
   },
   {
      name: "gitter",
      keywords:
         "gitter Gitter chat community open source developers gitter icon gitter logo",
      icon: "5c5",
      color: "#ed1965",
   },
   {
      name: "glassdoor",
      keywords:
         "glassdoor Glassdoor jobs career employment company reviews workplace glassdoor icon glassdoor logo",
      icon: "5c6",
      color: "#0caa41",
   },
   {
      name: "glitch",
      keywords:
         "glitch Glitch web development platform coding coding community glitch icon glitch logo",
      icon: "5c7",
      color: "#33f",
   },
   {
      name: "gmail",
      keywords:
         "gmail Gmail email mail Google inbox communication gmail icon gmail logo",
      icon: "5c8",
      color: "#d14836",
   },
   {
      name: "gnome",
      keywords:
         "gnome GNOME desktop environment Linux open source user interface gnome icon gnome logo",
      icon: "5c9",
      color: "#4a86cf",
   },
   {
      name: "gnu",
      keywords:
         "gnu GNU free software open source operating system gnu icon gnu logo",
      icon: "5ca",
      color: "#a42e2b",
   },
   {
      name: "gnuicecat",
      keywords:
         "gnuicecat GNU IceCat browser privacy free software open source gnuicecat icon gnuicecat logo",
      icon: "5cb",
      color: "#002f5b",
   },
   {
      name: "gnuprivacyguard",
      keywords:
         "gnuprivacyguard GNU Privacy Guard encryption privacy security encryption software gnuprivacyguard icon gnuprivacyguard logo",
      icon: "5cc",
      color: "#0093dd",
   },
   {
      name: "gnusocial",
      keywords:
         "gnusocial GNU social social network decentralized federated free software gnusocial icon gnusocial logo",
      icon: "5cd",
      color: "#a22430",
   },
   {
      name: "go",
      keywords:
         "go move proceed journey travel advance navigate progress forward direction",
      icon: "5ce",
      color: "#00add8",
   },
   {
      name: "godotengine",
      keywords:
         "Godot Engine game engine Godot development 2D 3D game development game design software programming",
      icon: "5cf",
      color: "#478cbf",
   },
   {
      name: "gog dot com",
      keywords:
         "GOG.com GOG game store games digital distribution PC games retro games classic games video games platform",
      icon: "5d0",
      color: "#86328a",
   },
   {
      name: "goldenline",
      keywords:
         "GoldenLine professional network social network business connections career employment networking job search professional",
      icon: "5d1",
      color: "#f1b92b",
   },
   {
      name: "goodreads",
      keywords:
         "Goodreads books reading literature book recommendations reviews book club reading list authors book lovers",
      icon: "5d2",
      color: "#630",
   },
   {
      name: "google5",
      keywords:
         "Google search Google search internet web search engine online Google services Google products Google platform",
      icon: "5d3",
      color: "#4285f4",
   },
   {
      name: "googleads",
      keywords:
         "Google Ads advertising Google advertising online ads digital marketing PPC ad campaign advertisements marketing Google advertising platform",
      icon: "5d4",
      color: "#4285f4",
   },
   {
      name: "googleanalytics",
      keywords:
         "Google Analytics analytics web analytics website analysis data analysis traffic analysis user behavior Google tracking website metrics Google analytics tool",
      icon: "5d5",
      color: "#ffc107",
   },
   {
      name: "googlechrome",
      keywords:
         "Google Chrome Chrome web browser browser internet browser Google Google products Google services web surfing Google Chrome browser",
      icon: "5d6",
      color: "#4285f4",
   },
   {
      name: "googlecloud",
      keywords:
         "Google Cloud cloud computing cloud services Google Cloud Platform cloud storage Google infrastructure cloud solutions Google services Google products cloud technology",
      icon: "5d7",
      color: "#4285f4",
   },
   {
      name: "googledrive",
      keywords:
         "Google Drive Drive cloud storage file storage Google file storage Google cloud Google services Google products file sharing Google Drive storage",
      icon: "5d8",
      color: "#4285f4",
   },
   {
      name: "googlehangouts",
      keywords:
         "Google Hangouts Hangouts chat video call messaging communication Google messaging Google chat Google video call Google communication",
      icon: "5d9",
      color: "#0c9d58",
   },
   {
      name: "googlehangoutschat",
      keywords:
         "Google Hangouts Chat Hangouts Chat chat messaging communication team collaboration Google messaging Google chat Google communication Google team collaboration",
      icon: "5da",
      color: "#00897b",
   },
   {
      name: "googlekeep",
      keywords:
         "Google Keep Keep notes note taking task management Google notes Google tasks Google organization Google productivity Google note taking app",
      icon: "5db",
      color: "#fb0",
   },
   {
      name: "googlepay",
      keywords:
         "Google Pay Pay payment online payment digital wallet Google wallet Google payment Google transactions Google financial services Google payment platform",
      icon: "5dc",
      color: "#5f6368",
   },
   {
      name: "googleplay",
      keywords:
         "Google Play Play app store Google app store Android apps Google services Google products app marketplace Google games Google media",
      icon: "5dd",
      color: "#607d8b",
   },
   {
      name: "googlepodcasts",
      keywords:
         "Google Podcasts Podcasts audio podcast platform Google audio Google media Google services Google products podcasting Google podcast app",
      icon: "5de",
      color: "#4285f4",
   },
   {
      name: "googlescholar",
      keywords:
         "Google Scholar Scholar academic research academic papers Google research Google articles Google library scholarly Google academic search",
      icon: "5df",
      color: "#4885ed",
   },
   {
      name: "googlesearchconsole",
      keywords:
         "Google Search Console Search Console search Google search website analytics website management Google SEO webmaster tools Google website tools Google site management",
      icon: "5e0",
      color: "#458cf5",
   },
   {
      name: "gov dot uk",
      keywords:
         "GOV.UK UK government government website UK official government services UK services UK information British government UK online services",
      icon: "5e1",
      color: "#005ea5",
   },
   {
      name: "grafana",
      keywords:
         "Grafana monitoring metrics data visualization dashboard Grafana dashboard observability time series analytics Grafana metrics",
      icon: "5e3",
      color: "#f46800",
   },
   {
      name: "graphcool",
      keywords:
         "Graphcool GraphQL backend database serverless GraphQL backend GraphQL API GraphQL server development Graphcool platform",
      icon: "5e4",
      color: "#27ae60",
   },
   {
      name: "graphql",
      keywords:
         "GraphQL API query language data development GraphQL schema backend GraphQL server web development GraphQL technology",
      icon: "5e5",
      color: "#e10098",
   },
   {
      name: "gravatar",
      keywords:
         "Gravatar avatar profile identity image user icon avatar service user image profile picture Gravatar service",
      icon: "5e7",
      color: "#1e8cbe",
   },
   {
      name: "greenkeeper",
      keywords:
         "Greenkeeper dependency management software development dependency updates JavaScript Node.js dependency monitoring GitHub automated updates dependency alerts",
      icon: "5e8",
      color: "#00c775",
   },
   {
      name: "greensock",
      keywords:
         "GreenSock GSAP animation web animation JavaScript animation animation library web development frontend GreenSock animation animation tool",
      icon: "5e9",
      color: "#88ce02",
   },
   {
      name: "groovy",
      keywords:
         "Groovy programming language Java scripting JVM Groovy language dynamic programming development software Groovy script",
      icon: "5ea",
      color: "#4298b8",
   },
   {
      name: "groupon",
      keywords:
         "Groupon deals discounts coupons shopping online shopping daily deals savings Groupon deals Groupon discounts",
      icon: "5eb",
      color: "#53a318",
   },
   {
      name: "gulp",
      keywords:
         "Gulp task runner build system automation frontend web development workflow JavaScript build tool Gulp task runner",
      icon: "5ec",
      color: "#da4648",
   },
   {
      name: "gumroad",
      keywords:
         "Gumroad sell digital products e commerce creator online store sell online ecommerce platform Gumroad platform digital goods",
      icon: "5ed",
      color: "#36a9ae",
   },
   {
      name: "gumtree",
      keywords:
         "Gumtree classifieds buy sell local community online marketplace ads classified ads Gumtree ads",
      icon: "5ee",
      color: "#72ef36",
   },
   {
      name: "habr",
      keywords:
         "Habr tech technology blog articles IT Russian development Habr.com technology news",
      icon: "5f0",
      color: "#77a2b6",
   },
   {
      name: "hackerearth",
      keywords:
         "HackerEarth programming coding developer hackathons challenges competitive programming technology HackerEarth platform HackerEarth challenges",
      icon: "5f2",
      color: "#323754",
   },
   {
      name: "hackerone",
      keywords:
         "HackerOne bug bounty security cybersecurity hacking vulnerability hacker ethical hacking HackerOne platform HackerOne bug bounty",
      icon: "5f3",
      color: "#494649",
   },
   {
      name: "hackerrank",
      keywords:
         "HackerRank programming coding challenges practice algorithm developer competitive programming HackerRank platform HackerRank challenges",
      icon: "5f4",
      color: "#2ec866",
   },
   {
      name: "hackhands",
      keywords:
         "HackHands programming help coding help development technology expert mentoring programming support HackHands platform coding assistance",
      icon: "5f5",
      color: "#00acbd",
   },
   {
      name: "hackster",
      keywords:
         "Hackster projects hardware IoT DIY maker electronics community Hackster.io maker projects",
      icon: "5f6",
      color: "#1bacf7",
   },
   {
      name: "happycow",
      keywords:
         "HappyCow vegan vegetarian restaurant food plant based veganism travel vegan restaurants HappyCow app",
      icon: "5f7",
      color: "#7c4ec4",
   },
   {
      name: "hashnode",
      keywords:
         "Hashnode blogging developer community technology coding programming Hashnode.com developer blog technical blogging",
      icon: "5f8",
      color: "#2962ff",
   },
   {
      name: "haskell",
      keywords:
         "Haskell programming language functional programming software development Haskell language functional programming development Haskell programming Haskell community",
      icon: "5f9",
      color: "#5d4f85",
   },
   {
      name: "hatenabookmark",
      keywords:
         "Hatena Bookmark bookmarking social bookmarking bookmarks web links Japanese Hatena bookmark manager Hatena Bookmark service",
      icon: "5fa",
      color: "#00a4de",
   },
   {
      name: "haxe",
      keywords:
         "Haxe programming language cross platform development software Haxe language multiplatform open source Haxe programming Haxe community",
      icon: "5fb",
      color: "#ea8220",
   },
   {
      name: "helm",
      keywords:
         "Helm Kubernetes package manager deployment container K8s DevOps Helm charts Helm deployment Kubernetes Helm",
      icon: "5fc",
      color: "#277a9f",
   },
   {
      name: "here",
      keywords:
         "HERE maps navigation location mapping geolocation GPS HERE maps location services navigation system",
      icon: "5fd",
      color: "#48dad0",
   },
   {
      name: "heroku",
      keywords:
         "Heroku PaaS cloud platform deployment web hosting application hosting development software Heroku platform cloud services",
      icon: "5fe",
      color: "#430098",
   },
   {
      name: "hexo",
      keywords:
         "Hexo CMS blogging static site generator website web development open source Hexo framework Hexo blog Hexo platform",
      icon: "5ff",
      color: "#0e83cd",
   },
   {
      name: "highly",
      keywords:
         "Highly reading notes highlighting knowledge article share save web reading content curation",
      icon: "600",
      color: "#ff3c00",
   },
   {
      name: "hipchat",
      keywords:
         "HipChat chat messaging team communication collaboration workplace chat group chat team chat HipChat platform team messaging",
      icon: "601",
      color: "#0052cc",
   },
   {
      name: "hitachi",
      keywords:
         "Hitachi technology electronics engineering industry Japan Hitachi Ltd. corporation manufacturing Hitachi products",
      icon: "602",
      color: "#e60027",
   },
   {
      name: "hockeyapp",
      keywords:
         "HockeyApp app distribution beta testing crash reporting mobile apps Microsoft app development app analytics HockeyApp platform app testing",
      icon: "603",
      color: "#009ee1",
   },
   {
      name: "homeassistant",
      keywords:
         "Home Assistant smarthome home automation IoT smart devices open source home control automation smart home Home Assistant platform",
      icon: "604",
      color: "#41bdf5",
   },
   {
      name: "homify",
      keywords:
         "Homify interior design home improvement architecture decorating house home home design inspiration interior decor",
      icon: "605",
      color: "#7dcda3",
   },
   {
      name: "houzz1",
      keywords:
         "Houzz interior design home improvement decorating architecture house home Houzz.com home design home decor",
      icon: "607",
      color: "#4dbc15",
   },
   {
      name: "hp",
      keywords:
         "HP Hewlett Packard technology electronics computers laptops printers devices hardware HP products",
      icon: "608",
      color: "#0096d6",
   },
   {
      name: "html51",
      keywords:
         "HTML5 HTML web web development programming frontend web design HTML5 specification HTML5 technology HTML5 features",
      icon: "609",
      color: "#e34f26",
   },
   {
      name: "htmlacademy",
      keywords:
         "HTML Academy HTML CSS web development frontend web design HTML Academy courses coding programming web development courses",
      icon: "60a",
      color: "#302683",
   },
   {
      name: "huawei",
      keywords:
         "Huawei technology electronics smartphone telecommunications China Huawei Technologies mobile networking Huawei products",
      icon: "60b",
      color: "#f00",
   },
   {
      name: "hubspot",
      keywords:
         "HubSpot CRM marketing sales inbound marketing software automation HubSpot platform business marketing software",
      icon: "60c",
      color: "#ff7a59",
   },
   {
      name: "hulu",
      keywords:
         "Hulu streaming TV movies entertainment TV shows online streaming Hulu.com Hulu platform streaming service",
      icon: "60d",
      color: "#3dbb3d",
   },
   {
      name: "humblebundle",
      keywords:
         "Humble Bundle games bundles gaming charity indie games video games ebooks Humble Bundle deals digital bundles",
      icon: "60e",
      color: "#cc2929",
   },
   {
      name: "hurriyetemlak",
      keywords:
         "Hurriyet Emlak real estate property Turkey homes apartments real estate listings Turkey real estate Turkish properties Turkish real estate",
      icon: "60f",
      color: "#e02826",
   },
   {
      name: "hypothesis",
      keywords:
         "Hypothesis annotation research collaboration web annotation PDF annotation annotations scholarly Hypothesis tool knowledge sharing",
      icon: "610",
      color: "#bd1c2b",
   },
   {
      name: "iata",
      keywords:
         "IATA aviation airlines airports travel airline industry IATA codes airline association airline regulations IATA organization",
      icon: "611",
      color: "#004e81",
   },
   {
      name: "ibm",
      keywords:
         "IBM technology computers IT software cloud computing data business IBM Corporation IBM products",
      icon: "612",
      color: "#054ada",
   },
   {
      name: "icloud1",
      keywords:
         "iCloud Apple cloud storage Apple services Apple cloud file storage Apple iCloud data backup Apple platform cloud computing",
      icon: "613",
      color: "#3693f3",
   },
   {
      name: "icomoon",
      keywords:
         "IcoMoon icons icon font vector icons web design icon set IcoMoon app IcoMoon icon custom icons IcoMoon font",
      icon: "614",
      color: "#825794",
   },
   {
      name: "icon",
      keywords:
         "icon symbol image representation sign emblem illustration figure graphic design",
      icon: "615",
      color: "#31b8bb",
   },
   {
      name: "iconjar",
      keywords:
         "IconJar icons icon manager organize icons icon library icon storage icon organizer icon software IconJar app icon collection",
      icon: "616",
      color: "#16a5f3",
   },
   {
      name: "icq",
      keywords:
         "ICQ messaging chat instant messaging communication IM ICQ.com ICQ messenger ICQ chat ICQ platform",
      icon: "617",
      color: "#7ebd00",
   },
   {
      name: "ideal",
      keywords:
         "iDEAL online payment payment system Netherlands banking online banking e commerce payment gateway iDEAL payment online transactions",
      icon: "618",
      color: "#c06",
   },
   {
      name: "ifixit",
      keywords:
         "iFixit repair electronics DIY guides teardown tools fix iFixit.com electronics repair",
      icon: "619",
      color: "#0071ce",
   },
   {
      name: "imdb1",
      keywords:
         "IMDb movies film cinema TV entertainment actors actresses movie database IMDb.com",
      icon: "61a",
      color: "#e6b91e",
   },
   {
      name: "imgur",
      keywords:
         "Imgur image hosting photos memes GIFs image sharing photo sharing Imgur.com upload images host images",
      icon: "61b",
      color: "#1bb76e",
   },
   {
      name: "indeed",
      keywords:
         "Indeed jobs job search employment careers job site hiring recruitment Indeed.com work",
      icon: "61c",
      color: "#2164f3",
   },
   {
      name: "influxdb",
      keywords:
         "InfluxDB database time series time series database monitoring metrics data analytics InfluxDB database time series data",
      icon: "61d",
      color: "#22adf6",
   },
   {
      name: "instacart",
      keywords:
         "Instacart groceries delivery shopping food online grocery grocery delivery grocery shopping Instacart app grocery service",
      icon: "61f",
      color: "#43b02a",
   },
   {
      name: "instagram3",
      keywords:
         "Instagram social media photo sharing Instagram app pictures photography Instagram.com Instagram platform Instagram stories Instagram posts",
      icon: "620",
      color: "#e4405f",
   },
   {
      name: "intel",
      keywords:
         "Intel technology computers processors chip semiconductors Intel Corporation IT hardware Intel products",
      icon: "622",
      color: "#0071c5",
   },
   {
      name: "intercom",
      keywords:
         "Intercom customer support messaging communication customer service chat Intercom.io customer engagement customer communication Intercom platform",
      icon: "624",
      color: "#1f8ded",
   },
   {
      name: "internetexplorer",
      keywords:
         "Internet Explorer web browser browser Microsoft Internet Explorer browser IE Microsoft browser Windows web surfing legacy browser",
      icon: "626",
      color: "#0076d6",
   },
   {
      name: "invision",
      keywords:
         "InVision design prototyping collaboration UI UX InVision app design tool InVision Studio InVision platform",
      icon: "627",
      color: "#f36",
   },
   {
      name: "ionic",
      keywords:
         "Ionic framework mobile app development web HTML CSS JavaScript hybrid app Ionic framework",
      icon: "629",
      color: "#3880ff",
   },
   {
      name: "ipfs",
      keywords:
         "IPFS decentralized distributed blockchain peer to peer file system cryptocurrency IPFS protocol IPFS network InterPlanetary File System",
      icon: "62b",
      color: "#65c2cb",
   },
   {
      name: "issuu",
      keywords:
         "Issuu publishing digital publishing magazines books catalogs ebooks publish Issuu.com publishing platform",
      icon: "62c",
      color: "#f36d5d",
   },
   {
      name: "itch dot io",
      keywords:
         "itch.io games indie games game development gaming game marketplace indie game marketplace itch.io platform game creators game distribution",
      icon: "62d",
      color: "#fa5c5c",
   },
   {
      name: "itunes",
      keywords:
         "iTunes Apple music podcasts movies TV shows media player Apple Music iTunes store Apple entertainment",
      icon: "62e",
      color: "#fb5bc5",
   },
   {
      name: "jabber",
      keywords:
         "Jabber XMPP messaging chat instant messaging communication IM Jabber.org Jabber protocol open source messaging",
      icon: "62f",
      color: "#c00",
   },
   {
      name: "java",
      keywords:
         "Java programming language development software Java programming object oriented Java platform Java SE Java EE Java technology",
      icon: "630",
      color: "#007396",
   },
   {
      name: "javascript",
      keywords:
         "javascript js web development programming coding frontend scripting development web programming language",
      icon: "631",
      color: "#f7df1e",
   },
   {
      name: "jekyll",
      keywords:
         "jekyll static site generator web development blogging website ruby markdown static website development programming",
      icon: "632",
      color: "#c00",
   },
   {
      name: "jenkins",
      keywords:
         "jenkins continuous integration automation CI/CD devops builds testing software development deployment pipeline",
      icon: "633",
      color: "#d24939",
   },
   {
      name: "jest",
      keywords:
         "jest testing javascript unit testing framework frontend development testing library javascript testing test runner",
      icon: "634",
      color: "#c21325",
   },
   {
      name: "jet",
      keywords:
         "jet airplane flight travel aviation aircraft jet engine transportation aeroplane speed",
      icon: "635",
      color: "#fbba00",
   },
   {
      name: "jinja",
      keywords:
         "jinja template engine python web development templating flask django html programming rendering",
      icon: "637",
      color: "#b41717",
   },
   {
      name: "joomla2",
      keywords:
         "joomla2 joomla content management system CMS web development website open source php web design platform",
      icon: "639",
      color: "#5091cd",
   },
   {
      name: "jquery",
      keywords:
         "jquery javascript library frontend web development dom manipulation ajax javascript library framework programming",
      icon: "63a",
      color: "#0769ad",
   },
   {
      name: "jsdelivr",
      keywords:
         "jsdelivr CDN content delivery network web development frontend javascript libraries assets resources cdn provider",
      icon: "63b",
      color: "#e84d3d",
   },
   {
      name: "jsfiddle1",
      keywords:
         "jsfiddle1 jsfiddle web development frontend testing javascript code editor sandbox code sharing online tool",
      icon: "63c",
      color: "#4679a4",
   },
   {
      name: "jupyter",
      keywords:
         "jupyter notebook data science python interactive coding development data analysis machine learning research",
      icon: "63e",
      color: "#f37626",
   },
   {
      name: "justgiving",
      keywords:
         "justgiving fundraising charity donation nonprofit crowdfunding giving fundraiser community support",
      icon: "63f",
      color: "#ad29b6",
   },
   {
      name: "kaggle",
      keywords:
         "kaggle data science machine learning competition data analysis dataset community coding development research",
      icon: "640",
      color: "#20beff",
   },
   {
      name: "kaios",
      keywords:
         "kaios mobile operating system OS feature phone smart feature phone mobile development internet smartphone connectivity",
      icon: "641",
      color: "#6f02b5",
   },
   {
      name: "kaspersky",
      keywords:
         "kaspersky antivirus cybersecurity security software protection malware internet security antimalware privacy",
      icon: "642",
      color: "#009982",
   },
   {
      name: "kentico",
      keywords:
         "kentico content management system CMS web development website digital marketing platform ecommerce asp.net marketing",
      icon: "643",
      color: "#f05a22",
   },
   {
      name: "keras",
      keywords:
         "keras deep learning neural networks machine learning python framework tensorflow artificial intelligence development programming",
      icon: "644",
      color: "#d00000",
   },
   {
      name: "keybase",
      keywords:
         "keybase encryption security privacy messaging chat crypto communication identity internet",
      icon: "645",
      color: "#33a0ff",
   },
   {
      name: "keycdn",
      keywords:
         "keycdn CDN content delivery network web development assets speed performance delivery cdn provider network",
      icon: "646",
      color: "#3686be",
   },
   {
      name: "khanacademy",
      keywords:
         "khanacademy education learning online courses videos tutorials math science programming school",
      icon: "647",
      color: "#14bf96",
   },
   {
      name: "kibana",
      keywords:
         "kibana elasticsearch analytics monitoring logging data visualization dashboard elk stack development search",
      icon: "648",
      color: "#005571",
   },
   {
      name: "kickstarter",
      keywords:
         "kickstarter crowdfunding fundraising projects startup community creative backers entrepreneurship support",
      icon: "649",
      color: "#2bde73",
   },
   {
      name: "kik",
      keywords:
         "kik messaging chat communication app messenger social media instant messaging texting internet",
      icon: "64a",
      color: "#82bc23",
   },
   {
      name: "kirby",
      keywords:
         "kirby content management system CMS web development website php platform flat file web design developer friendly",
      icon: "64b",
      color: "#ff0100",
   },
   {
      name: "klout",
      keywords:
         "klout social media influence measurement social media analytics online influence metrics score social network klout score",
      icon: "64c",
      color: "#e44600",
   },
   {
      name: "ko fi",
      keywords:
         "ko fi ko fi coffee support donation creator fundraising artists crowdfunding patreon",
      icon: "64e",
      color: "#f16061",
   },
   {
      name: "kodi",
      keywords:
         "kodi media player streaming entertainment software media center movies tv shows open source streaming media",
      icon: "64f",
      color: "#17b2e7",
   },
   {
      name: "koding",
      keywords:
         "koding development cloud ide coding web development programming web hosting online development ide software development",
      icon: "650",
      color: "#00b057",
   },
   {
      name: "kotlin",
      keywords:
         "kotlin programming language java development android mobile coding software development jetbrains java programming",
      icon: "651",
      color: "#0095d5",
   },
   {
      name: "krita",
      keywords:
         "krita digital painting art illustration drawing software creative painting graphic design open source",
      icon: "652",
      color: "#3babff",
   },
   {
      name: "kubernetes",
      keywords:
         "kubernetes container orchestration docker devops containers deployment cloud containerization microservices google",
      icon: "653",
      color: "#326ce5",
   },
   {
      name: "laravel",
      keywords:
         "laravel php framework web development php framework laravel framework backend development programming php framework",
      icon: "654",
      color: "#ff2d20",
   },
   {
      name: "laravelhorizon",
      keywords:
         "laravelhorizon laravel horizon php monitoring queue worker background job laravel horizon laravel queue",
      icon: "655",
      color: "#405263",
   },
   {
      name: "last dot fm",
      keywords:
         "last dot fm last.fm music scrobbling streaming social radio listen charts lastfm",
      icon: "657",
      color: "#d51007",
   },
   {
      name: "lastpass",
      keywords:
         "lastpass password manager security passwords privacy cybersecurity password management internet security online security authentication",
      icon: "658",
      color: "#d32d27",
   },
   {
      name: "latex",
      keywords:
         "latex typesetting document preparation mathematics science academic math documents writing technical",
      icon: "659",
      color: "#008080",
   },
   {
      name: "launchpad",
      keywords:
         "launchpad software development project management development launch startup software tools product launch launchpad icon",
      icon: "65a",
      color: "#f8c300",
   },
   {
      name: "leetcode",
      keywords:
         "leetcode coding algorithm programming practice interview problems leetcode problems development code",
      icon: "65b",
      color: "#f89f1b",
   },
   {
      name: "lenovo",
      keywords:
         "lenovo technology computers laptops electronics devices hardware pc computing lenovo laptops",
      icon: "65c",
      color: "#e2231a",
   },
   {
      name: "letsencrypt",
      keywords:
         "letsencrypt ssl https encryption security certificate internet security ssl certificate privacy web security",
      icon: "65d",
      color: "#003a70",
   },
   {
      name: "letterboxd",
      keywords:
         "letterboxd movies film reviews cinema social network movie ratings letterboxd app letterboxd icon watchlist",
      icon: "65e",
      color: "#00d735",
   },
   {
      name: "lgtm",
      keywords:
         "lgtm code review approve thumbs up software development programming pull request development approval code quality",
      icon: "65f",
      color: "#fff",
   },
   {
      name: "liberapay",
      keywords:
         "liberapay donation crowdfunding support funding patreon money community donate open source",
      icon: "660",
      color: "#f6c915",
   },
   {
      name: "libreoffice1",
      keywords:
         "libreoffice1 libreoffice office suite open source document spreadsheet presentation word processor software libreoffice icon",
      icon: "662",
      color: "#18a303",
   },
   {
      name: "line",
      keywords:
         "line messaging chat communication app social media instant messaging line app messenger texting",
      icon: "663",
      color: "#00c300",
   },
   {
      name: "linewebtoon",
      keywords:
         "linewebtoon webtoon comics webcomics manga cartoons comic strips illustrations webtoons korean webtoon",
      icon: "664",
      color: "#00d564",
   },
   {
      name: "linkedin4",
      keywords:
         "linkedin4 linkedin professional networking social media business networking linkedin icon career jobs linkedin logo",
      icon: "665",
      color: "#0077b5",
   },
   {
      name: "linode1",
      keywords:
         "linode1 linode cloud hosting cloud hosting vps server virtual server web hosting linode icon",
      icon: "666",
      color: "#00a95c",
   },
   {
      name: "linux1",
      keywords:
         "linux1 linux operating system os opensource ubuntu debian kernel gnu linux icon",
      icon: "667",
      color: "#fcc624",
   },
   {
      name: "linuxfoundation",
      keywords:
         "linuxfoundation linux foundation open source software community technology linux opensource development collaboration",
      icon: "668",
      color: "#009bee",
   },
   {
      name: "linuxmint",
      keywords:
         "linuxmint linux operating system os ubuntu debian mint linux mint desktop linuxmint icon",
      icon: "669",
      color: "#87cf3e",
   },
   {
      name: "livejournal",
      keywords:
         "livejournal blogging social media journal community diary livejournal icon writing blog online journal",
      icon: "66a",
      color: "#00b0ea",
   },
   {
      name: "livestream",
      keywords:
         "livestream livestreaming video streaming live broadcast events livestream icon livestream platform livestream app",
      icon: "66b",
      color: "#cf202e",
   },
   {
      name: "logstash",
      keywords:
         "logstash elasticsearch data processing logging data pipeline log management analytics devops elk stack data collection",
      icon: "66d",
      color: "#005571",
   },
   {
      name: "loop4",
      keywords:
         "loop4 loop infinity cycle repeat endless circular looping infinite loop loop icon",
      icon: "66e",
      color: "#f29400",
   },
   {
      name: "lua",
      keywords:
         "lua programming language scripting development game development lua programming scripting language lua language lua icon embedded",
      icon: "66f",
      color: "#2c2d72",
   },
   {
      name: "lufthansa",
      keywords:
         "lufthansa airline flight travel aviation lufthansa logo air travel airport airline industry airplane",
      icon: "670",
      color: "#05164d",
   },
   {
      name: "lumen",
      keywords:
         "lumen php framework laravel microservices api restful backend development programming",
      icon: "671",
      color: "#e74430",
   },
   {
      name: "lyft",
      keywords:
         "lyft ridesharing transportation taxi ride uber car lyft logo travel app",
      icon: "672",
      color: "#ff00bf",
   },
   {
      name: "macys",
      keywords:
         "macys retail shopping department store fashion clothing macys logo store apparel online shopping",
      icon: "673",
      color: "#e21a2c",
   },
   {
      name: "magento",
      keywords:
         "magento ecommerce platform online store web development website open source magento icon shopping cart online shopping",
      icon: "674",
      color: "#ee672f",
   },
   {
      name: "magisk",
      keywords:
         "magisk root android modding customization android root android modding magisk icon rooting mobile",
      icon: "675",
      color: "#00af9c",
   },
   {
      name: "mail dot ru",
      keywords:
         "mail dot ru mail.ru email mail russian mail service mail.ru icon communication internet mailbox",
      icon: "676",
      color: "#168de2",
   },
   {
      name: "mailchimp",
      keywords:
         "mailchimp email marketing marketing automation email mailchimp logo campaigns newsletter mailchimp icon email campaigns",
      icon: "677",
      color: "#ffe01b",
   },
   {
      name: "makerbot",
      keywords:
         "makerbot 3d printing 3d printer maker technology 3d printing technology makerbot logo manufacturing innovation design",
      icon: "678",
      color: "#ff1e0d",
   },
   {
      name: "manageiq",
      keywords:
         "manageiq cloud management automation cloud devops virtualization it management management it open source",
      icon: "679",
      color: "#ef2929",
   },
   {
      name: "manjaro",
      keywords:
         "manjaro linux operating system os linux distro debian arch linux manjaro linux desktop linuxmint",
      icon: "67a",
      color: "#35bf5c",
   },
   {
      name: "marketo",
      keywords:
         "marketo marketing automation marketing crm sales lead management marketo logo campaigns lead generation business",
      icon: "67d",
      color: "#5c4c9f",
   },
   {
      name: "mastercard",
      keywords:
         "mastercard payment credit card financial mastercard logo debit card payment processing credit transaction money",
      icon: "67e",
      color: "#eb001b",
   },
   {
      name: "mastodon",
      keywords:
         "mastodon social network microblogging community decentralized federated open source mastodon logo social media twitter",
      icon: "67f",
      color: "#3088d4",
   },
   {
      name: "materialdesign",
      keywords:
         "materialdesign material design design system ui ux google design frontend user interface google material design",
      icon: "680",
      color: "#757575",
   },
   {
      name: "mathworks",
      keywords:
         "mathworks mathematica matlab math software engineering education programming technology data analysis",
      icon: "681",
      color: "#0076a8",
   },
   {
      name: "mattermost",
      keywords:
         "mattermost messaging communication chat slack alternative teams team communication mattermost logo team collaboration open source",
      icon: "683",
      color: "#0072c6",
   },
   {
      name: "mcafee",
      keywords:
         "mcafee antivirus security cybersecurity protection software privacy malware mcafee logo internet security",
      icon: "685",
      color: "#c01818",
   },
   {
      name: "mediafire",
      keywords:
         "mediafire file sharing cloud storage cloud storage data sharing mediafire logo online storage internet",
      icon: "687",
      color: "#1299f3",
   },
   {
      name: "meetup1",
      keywords:
         "meetup1 meetup events community networking social meetup logo meet groups local",
      icon: "68a",
      color: "#ed1c40",
   },
   {
      name: "mega",
      keywords:
         "mega cloud storage file sharing encryption privacy security mega logo cloud storage internet",
      icon: "68b",
      color: "#d9272e",
   },
   {
      name: "mendeley",
      keywords:
         "mendeley reference manager research academic papers citations library mendeley logo science writing",
      icon: "68c",
      color: "#9d1620",
   },
   {
      name: "messenger",
      keywords:
         "messenger messaging chat communication app social media instant messaging facebook messenger facebook texting",
      icon: "68e",
      color: "#00b2ff",
   },
   {
      name: "meteor",
      keywords:
         "meteor javascript framework web development full stack reactive meteor framework development programming app",
      icon: "68f",
      color: "#de4f4f",
   },
   {
      name: "micro dot blog",
      keywords:
         "micro dot blog micro.blog blogging microblogging social community writing platform microblog blog",
      icon: "690",
      color: "#fd8308",
   },
   {
      name: "microgenetics",
      keywords:
         "microgenetics genetics biology science research laboratory micro microgenetics icon microscope dna",
      icon: "691",
      color: "#f00",
   },
   {
      name: "microsoft",
      keywords:
         "microsoft technology software windows office azure microsoft logo computers microsoft icon business",
      icon: "692",
      color: "#666",
   },
   {
      name: "microsoftaccess",
      keywords:
         "microsoftaccess access database microsoft microsoft access software database management data ms access microsoft office",
      icon: "693",
      color: "#ba141a",
   },
   {
      name: "microsoftazure",
      keywords:
         "microsoftazure azure cloud microsoft cloud computing microsoft azure cloud services microsoft cloud computing azure icon",
      icon: "694",
      color: "#0089d6",
   },
   {
      name: "microsoftedge",
      keywords:
         "Microsoft Edge Edge browser Microsoft web browser Edge icon Microsoft internet browser Edge logo Microsoft browser Edge symbol Edge search engine Edge internet browser",
      icon: "695",
      color: "#0078d7",
   },
   {
      name: "microsoftexcel",
      keywords:
         "Microsoft Excel Excel Microsoft spreadsheet Excel icon Microsoft spreadsheet software Excel logo Excel application Microsoft data tool Excel program Microsoft Excel sheet",
      icon: "696",
      color: "#217346",
   },
   {
      name: "microsoftoffice",
      keywords:
         "Microsoft Office Office suite Microsoft productivity suite Office software Microsoft Office logo Office tools Microsoft Office programs Office applications Microsoft productivity software Office suite icon",
      icon: "697",
      color: "#e74025",
   },
   {
      name: "microsoftonedrive",
      keywords:
         "Microsoft OneDrive OneDrive Microsoft cloud storage OneDrive icon Microsoft online storage OneDrive logo Microsoft file hosting OneDrive cloud Microsoft cloud service OneDrive storage",
      icon: "698",
      color: "#094ab2",
   },
   {
      name: "microsoftonenote",
      keywords:
         "Microsoft OneNote OneNote Microsoft note taking app OneNote icon Microsoft digital notebook OneNote logo Microsoft notepad OneNote application Microsoft note organizer OneNote software",
      icon: "699",
      color: "#80397b",
   },
   {
      name: "microsoftoutlook",
      keywords:
         "Microsoft Outlook Outlook Microsoft email client Outlook icon Microsoft mail software Outlook logo Microsoft email program Outlook application Microsoft email service Outlook mail client",
      icon: "69a",
      color: "#0072c6",
   },
   {
      name: "microsoftpowerpoint",
      keywords:
         "Microsoft PowerPoint PowerPoint Microsoft presentation software PowerPoint icon Microsoft slide deck PowerPoint logo Microsoft slideshow PowerPoint application Microsoft presentation tool PowerPoint program",
      icon: "69b",
      color: "#d24726",
   },
   {
      name: "microsoftteams",
      keywords:
         "Microsoft Teams Teams Microsoft collaboration tool Teams icon Microsoft communication platform Teams logo Microsoft teamwork app Teams application Microsoft group chat Teams software",
      icon: "69c",
      color: "#6264a7",
   },
   {
      name: "microsoftword",
      keywords:
         "Microsoft Word Word Microsoft word processor Word icon Microsoft text editor Word logo Microsoft document software Word application Microsoft writing tool Word program",
      icon: "69d",
      color: "#2b579a",
   },
   {
      name: "microstrategy",
      keywords:
         "MicroStrategy Business intelligence software MicroStrategy platform Analytics tool MicroStrategy icon Business analytics software MicroStrategy logo Data visualization tool MicroStrategy application BI software",
      icon: "69e",
      color: "#d9232e",
   },
   {
      name: "minds",
      keywords:
         "Minds Social network Minds platform Social media Minds icon Decentralized social network Minds logo Blockchain based social media Minds app Alternative social network",
      icon: "69f",
      color: "#fed12f",
   },
   {
      name: "minetest",
      keywords:
         "Minetest Open source game Minetest game Gaming platform Minetest icon Free game Minetest logo Open world game Minetest application Open source gaming",
      icon: "6a0",
      color: "#53ac56",
   },
   {
      name: "minutemailer",
      keywords:
         "Minute Mailer Email marketing tool Minute Mailer platform Email automation Minute Mailer icon Email campaign software Minute Mailer logo Email marketing platform Minute Mailer app Email management tool",
      icon: "6a1",
      color: "#3abfe6",
   },
   {
      name: "mix",
      keywords:
         "Mix Blend Mixture Mixing Combination Assortment Mix icon Blend symbol Mix logo Mixed content",
      icon: "6a2",
      color: "#ff8126",
   },
   {
      name: "mixcloud1",
      keywords:
         "Mixcloud Music streaming Mixcloud platform Audio platform Mixcloud icon Radio shows Mixcloud logo DJ mixes Mixcloud app Music podcasts",
      icon: "6a3",
      color: "#314359",
   },
   {
      name: "mixer",
      keywords:
         "Mixer Streaming platform Mixer streaming Live streaming Mixer icon Game streaming Mixer logo Livestreaming service Mixer app Video game streaming",
      icon: "6a4",
      color: "#002050",
   },
   {
      name: "mojang",
      keywords:
         "Mojang Game developer Minecraft creator Mojang Studios Mojang icon Gaming company Mojang logo Video game developer Mojang app Minecraft studio",
      icon: "6a5",
      color: "#db1f29",
   },
   {
      name: "monero",
      keywords:
         "Monero Cryptocurrency XMR Privacy coin Monero icon Digital currency Monero logo Blockchain Monero symbol Decentralized currency",
      icon: "6a6",
      color: "#f60",
   },
   {
      name: "mongodb",
      keywords:
         "MongoDB NoSQL database Mongo database Database system MongoDB icon Document database MongoDB logo Database platform MongoDB application Data storage",
      icon: "6a7",
      color: "#47a248",
   },
   {
      name: "monkeytie",
      keywords:
         "MonkeyTie Recruitment platform MonkeyTie platform Job matching MonkeyTie icon Professional networking MonkeyTie logo Career development MonkeyTie app HR software",
      icon: "6a8",
      color: "#ffc619",
   },
   {
      name: "monogram",
      keywords:
         "Monogram Personal logo Monogram design Initials logo Monogram icon Custom logo Monogram logo Personal branding Monogram symbol Monogrammed",
      icon: "6a9",
      color: "#fdb22a",
   },
   {
      name: "monster",
      keywords:
         "Monster Job search Monster job portal Career website Monster icon Employment platform Monster logo Recruitment site Monster job search Job hunting",
      icon: "6aa",
      color: "#6e46ae",
   },
   {
      name: "moo",
      keywords:
         "Moo Printing company Moo.com Business cards Moo icon Print service Moo logo Print products Moo app Print shop",
      icon: "6ac",
      color: "#00945e",
   },
   {
      name: "mozillafirefox",
      keywords:
         "Mozilla Firefox Firefox Firefox browser Mozilla web browser Firefox icon Mozilla internet browser Firefox logo Mozilla browser app Mozilla Firefox symbol Mozilla Firefox logo",
      icon: "6ae",
      color: "#ff7139",
   },
   {
      name: "musescore",
      keywords:
         "MuseScore Sheet music software Music notation MuseScore platform Music composing MuseScore icon Music notation software MuseScore logo Sheet music editor MuseScore app",
      icon: "6af",
      color: "#1a70b8",
   },
   {
      name: "mysql",
      keywords:
         "MySQL Database management system MySQL database SQL database MySQL icon Open source database MySQL logo Database software MySQL server Database tool",
      icon: "6b2",
      color: "#4479a1",
   },
   {
      name: "nativescript",
      keywords:
         "NativeScript Mobile app framework NativeScript framework Cross platform development NativeScript icon App development NativeScript logo Mobile development NativeScript app Mobile framework",
      icon: "6b3",
      color: "#3655ff",
   },
   {
      name: "nec",
      keywords:
         "NEC NEC Corporation Japanese electronics NEC logo NEC icon Tech company NEC electronics NEC Japan NEC brand NEC symbol",
      icon: "6b4",
      color: "#1414a0",
   },
   {
      name: "neo4j",
      keywords:
         "Neo4j Graph database Graph technology Neo4j database Neo4j icon Graph database management Neo4j logo Graph data Neo4j platform Graph visualization",
      icon: "6b5",
      color: "#008cc1",
   },
   {
      name: "netflix",
      keywords:
         "Netflix Streaming service Netflix platform Video streaming Netflix icon Entertainment Netflix logo Movies and TV shows Netflix app Online streaming",
      icon: "6b6",
      color: "#e50914",
   },
   {
      name: "netlify",
      keywords:
         "Netlify Web hosting Netlify platform Static site generator Netlify icon Website deployment Netlify logo Web development Netlify app Hosting service",
      icon: "6b7",
      color: "#00c7b7",
   },
   {
      name: "nextcloud",
      keywords:
         "Nextcloud Self hosted cloud Nextcloud platform File sharing Nextcloud icon Cloud storage Nextcloud logo Data synchronization Nextcloud app Open source cloud",
      icon: "6b9",
      color: "#0082c9",
   },
   {
      name: "nextdoor",
      keywords:
         "Nextdoor Neighborhood app Community network Nextdoor platform Nextdoor icon Local social network Nextdoor logo Neighborhood watch Nextdoor app Community app",
      icon: "6ba",
      color: "#00b246",
   },
   {
      name: "nginx",
      keywords:
         "NGINX Web server NGINX server HTTP server NGINX icon NGINX logo Server software NGINX web server NGINX platform NGINX application",
      icon: "6bb",
      color: "#269539",
   },
   {
      name: "nim",
      keywords:
         "Nim Nim programming language Nim language Nim icon Nim logo Programming language Nim compiler Nim programming Nim app Nim software",
      icon: "6bc",
      color: "#ffe953",
   },
   {
      name: "nintendo",
      keywords:
         "Nintendo Video game company Nintendo icon Nintendo logo Nintendo gaming Nintendo app Nintendo software Nintendo games Nintendo console Nintendo platform",
      icon: "6bd",
      color: "#8f8f8f",
   },
   {
      name: "nintendo3ds",
      keywords:
         "Nintendo 3DS 3DS Nintendo handheld 3DS console Nintendo 3DS icon 3DS logo Nintendo portable console Nintendo gaming device 3DS gaming Nintendo handheld gaming",
      icon: "6be",
      color: "#d12228",
   },
   {
      name: "nintendogamecube",
      keywords:
         "Nintendo GameCube GameCube Nintendo console GameCube console Nintendo GameCube icon GameCube logo Nintendo gaming GameCube gaming Nintendo console gaming GameCube device",
      icon: "6bf",
      color: "#6a5fbb",
   },
   {
      name: "nintendoswitch",
      keywords:
         "Nintendo Switch Switch Nintendo gaming console Switch console Nintendo Switch icon Switch logo Nintendo gaming Switch gaming Nintendo console gaming Switch device",
      icon: "6c0",
      color: "#e60012",
   },
   {
      name: "node dot js",
      keywords:
         "Node.js Node.js framework JavaScript runtime Node.js icon Node.js logo Node.js app Node.js development Node.js web development Node.js tool Node.js application",
      icon: "6c1",
      color: "#393",
   },
   {
      name: "node red",
      keywords:
         "Node RED Flow based programming Node RED platform IoT programming Node RED icon Node RED logo Node RED app Node RED development Node RED tool Node RED application",
      icon: "6c2",
      color: "#8f0000",
   },
   {
      name: "nodemon",
      keywords:
         "Nodemon Node.js tool Nodemon icon Nodemon logo Node.js development Nodemon application Node.js server Nodemon app Node.js monitoring Nodemon utility",
      icon: "6c3",
      color: "#76d04b",
   },
   {
      name: "nokia",
      keywords:
         "Nokia Nokia Corporation Finnish technology company Nokia icon Nokia logo Nokia phones Mobile phones Nokia devices Nokia brand Nokia symbol",
      icon: "6c4",
      color: "#124191",
   },
   {
      name: "npm1",
      keywords:
         "npm Node Package Manager npm icon npm logo npm package manager Node.js package manager npm registry npm modules Node.js modules npm software",
      icon: "6c7",
      color: "#cb3837",
   },
   {
      name: "nucleo",
      keywords:
         "Nucleo Icons Icon library Nucleo icon Nucleo logo Icon pack Icon set Nucleo app Icon collection Icon resource",
      icon: "6c8",
      color: "#766dcc",
   },
   {
      name: "nuget",
      keywords:
         "NuGet Package manager NuGet icon NuGet logo Software package NuGet package NuGet repository NuGet software NuGet tool NuGet application",
      icon: "6c9",
      color: "#004880",
   },
   {
      name: "nutanix",
      keywords:
         "Nutanix Enterprise cloud Nutanix platform Hyperconverged infrastructure Nutanix icon Nutanix logo Nutanix software Nutanix cloud Nutanix HCI Nutanix app",
      icon: "6ca",
      color: "#024da1",
   },
   {
      name: "nuxt dot js",
      keywords:
         "Nuxt.js Nuxt.js framework Vue framework Nuxt.js icon Nuxt.js logo Nuxt.js app Nuxt.js development Nuxt.js web development Nuxt.js tool Nuxt.js application",
      icon: "6cb",
      color: "#00c58e",
   },
   {
      name: "nvidia",
      keywords:
         "NVIDIA Graphics technology NVIDIA Corporation NVIDIA icon NVIDIA logo Graphics cards NVIDIA graphics NVIDIA GPUs NVIDIA software NVIDIA technology",
      icon: "6cc",
      color: "#76b900",
   },
   {
      name: "ocaml",
      keywords:
         "OCaml Programming language OCaml icon OCaml logo Functional programming OCaml language OCaml compiler OCaml software OCaml development OCaml programming",
      icon: "6ce",
      color: "#ec6813",
   },
   {
      name: "octave",
      keywords:
         "Octave Numerical computing Octave icon Octave logo Scientific computing Octave software Mathematics tool Numerical analysis Numerical programming Octave programming",
      icon: "6cf",
      color: "#0790c0",
   },
   {
      name: "octopusdeploy",
      keywords:
         "Octopus Deploy Deployment automation Octopus Deploy icon Octopus Deploy logo Continuous delivery Deployment tool DevOps automation Octopus Deploy software Deployment platform Deployment management",
      icon: "6d0",
      color: "#2f93e0",
   },
   {
      name: "odnoklassniki1",
      keywords:
         "Odnoklassniki Social network Odnoklassniki platform Russian social network Odnoklassniki icon Russian social media Odnoklassniki logo Russian social site Odnoklassniki app Russian networking",
      icon: "6d2",
      color: "#f4731c",
   },
   {
      name: "openaccess",
      keywords:
         "Open Access Academic publishing Open Access icon Open Access logo Open Access journals Open Access research Open Access publications Open Access initiative Free access Open Access articles",
      icon: "6d3",
      color: "#f68212",
   },
   {
      name: "openapiinitiative",
      keywords:
         "OpenAPI Initiative API standard OpenAPI Initiative icon OpenAPI Initiative logo API documentation API development API specification API management OpenAPI Initiative community OpenAPI standard",
      icon: "6d4",
      color: "#6ba539",
   },
   {
      name: "opencollective",
      keywords:
         "Open Collective Funding platform Open source funding Open Collective icon Open Collective logo Crowdfunding Open source finance Open Collective app Open source sponsorship Collective funding",
      icon: "6d5",
      color: "#7fadf2",
   },
   {
      name: "openid1",
      keywords:
         "OpenID OpenID Connect Single sign on OpenID icon OpenID logo Identity provider Authentication protocol OpenID authentication Identity management OpenID system",
      icon: "6d6",
      color: "#f78c40",
   },
   {
      name: "opensourceinitiative",
      keywords:
         "Open Source Initiative Open source advocacy Open Source Initiative icon Open Source Initiative logo Open source community Open source software Open source movement Open Source Initiative website Open source definition Open source licensing",
      icon: "6d7",
      color: "#3da639",
   },
   {
      name: "openssl",
      keywords:
         "OpenSSL Encryption library OpenSSL icon OpenSSL logo Security protocol SSL library TLS encryption OpenSSL software Cryptography library SSL certificate",
      icon: "6d8",
      color: "#721412",
   },
   {
      name: "openstreetmap",
      keywords:
         "OpenStreetMap Mapping service OpenStreetMap icon OpenStreetMap logo Open source mapping GIS data OpenStreetMap platform Mapping tool Mapping application OSM",
      icon: "6d9",
      color: "#7ebc6f",
   },
   {
      name: "opensuse",
      keywords:
         "openSUSE Linux distribution openSUSE icon openSUSE logo openSUSE operating system openSUSE OS openSUSE Linux openSUSE platform openSUSE software openSUSE community",
      icon: "6da",
      color: "#73ba25",
   },
   {
      name: "openvpn",
      keywords:
         "OpenVPN VPN software OpenVPN icon OpenVPN logo Virtual private network OpenVPN client OpenVPN server OpenVPN connection VPN service OpenVPN application",
      icon: "6db",
      color: "#ea7e20",
   },
   {
      name: "opera2",
      keywords:
         "Opera Web browser Opera icon Opera logo Internet browser Opera browser Opera software Opera app Opera browser icon Opera internet browser",
      icon: "6dc",
      color: "#ff1b2d",
   },
   {
      name: "oracle",
      keywords:
         "Oracle Oracle Corporation Oracle database Oracle icon Oracle logo Enterprise software Oracle software Database management Oracle technology Oracle platform",
      icon: "6de",
      color: "#f80000",
   },
   {
      name: "orcid",
      keywords:
         "ORCID Research identifier ORCID icon ORCID logo Researcher identification ORCID number Academic profile Researcher ID ORCID registration ORCID platform",
      icon: "6df",
      color: "#a6ce39",
   },
   {
      name: "origin",
      keywords:
         "Origin Gaming platform Origin by EA Origin icon Origin logo EA Games platform Origin store EA store Origin app Video game platform",
      icon: "6e0",
      color: "#f56c2d",
   },
   {
      name: "overcast",
      keywords:
         "Overcast Podcast app Overcast app Overcast icon Podcast player Overcast logo Podcast listening Podcast management Podcast discovery Podcast streaming",
      icon: "6e2",
      color: "#fc7e0f",
   },
   {
      name: "overleaf",
      keywords:
         "Overleaf LaTeX editor Overleaf icon Overleaf logo Online LaTeX editor Scientific writing Collaborative LaTeX Academic writing Overleaf app Document collaboration",
      icon: "6e3",
      color: "#47a141",
   },
   {
      name: "ovh",
      keywords:
         "OVH Cloud computing OVHcloud OVH icon OVH logo Web hosting VPS hosting OVH platform Hosting provider OVH server",
      icon: "6e4",
      color: "#123f6d",
   },
   {
      name: "paloaltosoftware",
      keywords:
         "Palo Alto Software Business planning Palo Alto Software icon Palo Alto Software logo Business software Business planning software Palo Alto Software platform Business tool Palo Alto Software app Business solutions",
      icon: "6e7",
      color: "#83da77",
   },
   {
      name: "pandora",
      keywords:
         "Pandora Music streaming Pandora Radio Pandora icon Pandora logo Music app Pandora station Pandora music Online radio Pandora streaming",
      icon: "6e8",
      color: "#005483",
   },
   {
      name: "pantheon",
      keywords:
         "Pantheon WebOps platform Pantheon icon Pantheon logo Website management Pantheon platform Web development Pantheon app Hosting platform Website hosting",
      icon: "6e9",
      color: "#efd01b",
   },
   {
      name: "parse dot ly",
      keywords:
         "Parse.ly Analytics platform Parse.ly icon Parse.ly logo Content analytics Parse.ly app Audience insights Parse.ly platform Data analytics Parse.ly software",
      icon: "6ea",
      color: "#5ba745",
   },
   {
      name: "pastebin",
      keywords:
         "Pastebin Text sharing Pastebin icon Pastebin logo Code sharing Pastebin app Text storage Pastebin platform Code hosting Paste tool",
      icon: "6eb",
      color: "#02456c",
   },
   {
      name: "patreon",
      keywords:
         "Patreon Crowdfunding platform Patreon icon Patreon logo Membership platform Patreon creator Patreon app Fan funding Patreon website Crowdfunding site",
      icon: "6ec",
      color: "#f96854",
   },
   {
      name: "paypal3",
      keywords:
         "PayPal Online payments PayPal icon PayPal logo Digital payments PayPal app Payment processing Online money transfer PayPal website Secure payments",
      icon: "6ed",
      color: "#00457c",
   },
   {
      name: "peertube",
      keywords:
         "PeerTube Decentralized video PeerTube icon PeerTube logo Video sharing PeerTube platform Peer to peer video Federated video Open source video PeerTube app",
      icon: "6ee",
      color: "#f1680d",
   },
   {
      name: "periscope",
      keywords:
         "Periscope Live streaming Periscope app Periscope icon Social live streaming Periscope logo Periscope platform Twitter live Mobile live streaming Periscope broadcast",
      icon: "6ef",
      color: "#40a4c4",
   },
   {
      name: "php",
      keywords:
         "PHP Hypertext Preprocessor PHP programming language PHP icon PHP logo Server side scripting Web development PHP software PHP development Dynamic web pages",
      icon: "6f0",
      color: "#777bb4",
   },
   {
      name: "pi hole",
      keywords:
         "Pi hole Network wide ad blocker Pi hole icon Pi hole logo Ad blocking DNS sinkhole Pi hole app Pi hole software Internet privacy Ad blocker",
      icon: "6f1",
      color: "#f60d1a",
   },
   {
      name: "picarto dot tv",
      keywords:
         "Picarto.tv Livestreaming platform Picarto.tv icon Picarto.tv logo Art streaming Creative streaming Picarto.tv app Live art Picarto.tv website Streaming service",
      icon: "6f2",
      color: "#1da456",
   },
   {
      name: "pinboard",
      keywords:
         "Pinboard Bookmarking site Pinboard icon Pinboard logo Social bookmarking Pinboard app Bookmark manager Online bookmarks Bookmark service Bookmarking tool",
      icon: "6f3",
      color: "#00f",
   },
   {
      name: "pingdom",
      keywords:
         "Pingdom Website monitoring Pingdom icon Pingdom logo Uptime monitoring Website performance Pingdom app Pingdom platform Website analytics Pingdom tool",
      icon: "6f4",
      color: "#fff000",
   },
   {
      name: "pingup",
      keywords:
         "Pingup Appointment scheduling Pingup icon Pingup logo Online booking Appointment app Pingup platform Pingup software Service scheduling Scheduling tool",
      icon: "6f5",
      color: "#00b1ab",
   },
   {
      name: "pinterest4",
      keywords:
         "Pinterest Social network Pinterest icon Pinterest logo Image sharing Pinterest app Pinterest platform Social media Pinterest website Pinterest board",
      icon: "6f6",
      color: "#bd081c",
   },
   {
      name: "pivotaltracker",
      keywords:
         "Pivotal Tracker Agile project management Pivotal Tracker icon Pivotal Tracker logo Software development tool Pivotal Tracker app Scrum tool Project management Pivotal Tracker platform Pivotal Tracker software",
      icon: "6f7",
      color: "#517a9e",
   },
   {
      name: "pjsip",
      keywords:
         "PJSIP VoIP library PJSIP icon PJSIP logo SIP library PJSIP software VoIP development VoIP tool PJSIP application SIP client",
      icon: "6f8",
      color: "#f86001",
   },
   {
      name: "plangrid",
      keywords:
         "plangrid construction project building blueprint engineering grid plan architecture development",
      icon: "6f9",
      color: "#0085de",
   },
   {
      name: "player dot me",
      keywords:
         "player.me player me profile gaming music social media avatar community",
      icon: "6fa",
      color: "#c0379a",
   },
   {
      name: "playerfm",
      keywords:
         "playerfm player fm podcast audio listen stream subscribe media radio",
      icon: "6fb",
      color: "#c8122a",
   },
   {
      name: "playstation",
      keywords:
         "playstation ps gaming console video games sony entertainment play games controller",
      icon: "6fc",
      color: "#003791",
   },
   {
      name: "playstation3",
      keywords:
         "playstation3 ps3 gaming console video games sony entertainment play games controller",
      icon: "6fd",
      color: "#003791",
   },
   {
      name: "playstation4",
      keywords:
         "playstation4 ps4 gaming console video games sony entertainment play games controller",
      icon: "6fe",
      color: "#003791",
   },
   {
      name: "plesk",
      keywords:
         "plesk server hosting web administration control panel management website server management plesk control panel",
      icon: "6ff",
      color: "#52bbe6",
   },
   {
      name: "plex",
      keywords:
         "plex media streaming movies tv server entertainment watch play plex media server",
      icon: "700",
      color: "#e5a00d",
   },
   {
      name: "pluralsight",
      keywords:
         "pluralsight education online learning courses training technology skills learning programming development",
      icon: "701",
      color: "#f15b2a",
   },
   {
      name: "plurk",
      keywords:
         "plurk social media microblogging community conversation posts updates status plurk timeline",
      icon: "702",
      color: "#ff574d",
   },
   {
      name: "pocket",
      keywords:
         "pocket save read later articles bookmark discover read offline content pocket app",
      icon: "703",
      color: "#ef3f56",
   },
   {
      name: "pocketcasts",
      keywords:
         "pocketcasts podcasts listen stream audio subscribe episodes media player pocketcasts app",
      icon: "704",
      color: "#f43e37",
   },
   {
      name: "postgresql",
      keywords:
         "postgresql postgres database sql open source server data management query postgresql database",
      icon: "705",
      color: "#336791",
   },
   {
      name: "postman",
      keywords:
         "postman api development testing rest requests http tools integration postman app",
      icon: "706",
      color: "#ff6c37",
   },
   {
      name: "postwoman",
      keywords:
         "postwoman api development testing rest requests http tools integration postwoman app",
      icon: "707",
      color: "#50fa7b",
   },
   {
      name: "powershell",
      keywords:
         "powershell windows shell scripting automation command line microsoft scripts powershell script powershell commands",
      icon: "708",
      color: "#5391fe",
   },
   {
      name: "prestashop",
      keywords:
         "prestashop ecommerce online store shopping website platform webshop prestashop store prestashop theme prestashop modules",
      icon: "709",
      color: "#df0067",
   },
   {
      name: "prettier",
      keywords:
         "prettier code formatting javascript development beautify prettify format syntax prettier plugin",
      icon: "70a",
      color: "#f7b93e",
   },
   {
      name: "prismic",
      keywords:
         "prismic cms content management api web development content website headless cms prismic.io prismic cms",
      icon: "70b",
      color: "#484a7a",
   },
   {
      name: "probot",
      keywords:
         "probot github automation bot apps integration github apps development workflow probot app",
      icon: "70c",
      color: "#00b0d8",
   },
   {
      name: "processwire",
      keywords:
         "processwire cms content management php web development content website processwire cms open source processwire framework",
      icon: "70d",
      color: "#ef145f",
   },
   {
      name: "producthunt",
      keywords:
         "producthunt products startup tech hunt discover community launch startup products producthunt app",
      icon: "70e",
      color: "#da552f",
   },
   {
      name: "prometheus",
      keywords:
         "prometheus monitoring metrics alerting open source time series data system prometheus monitoring prometheus alerts",
      icon: "70f",
      color: "#e6522c",
   },
   {
      name: "proto dot io",
      keywords:
         "proto.io proto io prototyping design app web development mockups wireframes",
      icon: "710",
      color: "#34a7c1",
   },
   {
      name: "protonmail",
      keywords:
         "protonmail email encryption secure privacy mail inbox encrypted secure email protonmail app",
      icon: "711",
      color: "#8b89cc",
   },
   {
      name: "proxmox",
      keywords:
         "proxmox virtualization server vm virtual machine container hypervisor proxmox ve proxmox virtual environment proxmox server",
      icon: "712",
      color: "#e57000",
   },
   {
      name: "publons",
      keywords:
         "publons research academia publications peer review scholarly profile scientists academic publons profile",
      icon: "713",
      color: "#369",
   },
   {
      name: "pypi",
      keywords:
         "pypi python package index pip software repository distribution modules python packages",
      icon: "715",
      color: "#3775a9",
   },
   {
      name: "python",
      keywords:
         "python programming language code development scripting pythonic python programming python interpreter python code",
      icon: "716",
      color: "#3776ab",
   },
   {
      name: "pytorch",
      keywords:
         "pytorch machine learning deep learning framework ai neural networks pytorch framework deep learning library pytorch library pytorch ai",
      icon: "717",
      color: "#ee4c2c",
   },
   {
      name: "pyup",
      keywords:
         "pyup python security dependencies upgrades code development pyup.io dependency checker dependency upgrades",
      icon: "718",
      color: "#9f55ff",
   },
   {
      name: "qemu",
      keywords:
         "qemu virtualization emulation software hardware virtual machine qemu emulator virtualization software qemu vm qemu virtual machine",
      icon: "719",
      color: "#f60",
   },
   {
      name: "qgis",
      keywords:
         "qgis gis mapping geographic geospatial geographical information cartography open source qgis software qgis mapping",
      icon: "71a",
      color: "#589632",
   },
   {
      name: "qiita",
      keywords:
         "qiita development programming tech knowledge sharing community articles programmers qiita app qiita articles",
      icon: "71b",
      color: "#55c500",
   },
   {
      name: "qualcomm",
      keywords:
         "qualcomm technology electronics chip semiconductor mobile wireless processor qualcomm snapdragon qualcomm chipset",
      icon: "71c",
      color: "#3253dc",
   },
   {
      name: "quantopian",
      keywords:
         "quantopian finance trading algorithmic quantitative investment stocks quant quantopian platform trading algorithms",
      icon: "71e",
      color: "#c50000",
   },
   {
      name: "quarkus",
      keywords:
         "quarkus java framework microservices cloud native container development quarkus framework quarkus java quarkus microservices",
      icon: "71f",
      color: "#4695eb",
   },
   {
      name: "quicktime",
      keywords:
         "quicktime media player apple video music player audio quicktime player movie quicktime video",
      icon: "720",
      color: "#1c69f0",
   },
   {
      name: "quip",
      keywords:
         "quip collaboration documents productivity team work communication notes quip app quip documents",
      icon: "721",
      color: "#f27557",
   },
   {
      name: "quora1",
      keywords:
         "quora questions answers knowledge community ask learn discussion quora app quora logo",
      icon: "722",
      color: "#b92b27",
   },
   {
      name: "qwiklabs",
      keywords:
         "qwiklabs google cloud training labs learning certification cloud google qwiklabs courses qwiklabs certification",
      icon: "723",
      color: "#f5cd0e",
   },
   {
      name: "qzone",
      keywords:
         "qzone social network china community sharing friends chat qzone app qzone logo",
      icon: "724",
      color: "#fece00",
   },
   {
      name: "r",
      keywords:
         "r statistics programming language data analysis statistical software data science r programming",
      icon: "725",
      color: "#276dc3",
   },
   {
      name: "rabbitmq",
      keywords:
         "rabbitmq message broker messaging queue amqp rabbitmq server rabbit mq rabbitmq logo rabbitmq messaging",
      icon: "726",
      color: "#f60",
   },
   {
      name: "radiopublic",
      keywords:
         "radiopublic podcasts listen stream audio subscribe episodes media radio radiopublic app",
      icon: "727",
      color: "#ce262f",
   },
   {
      name: "rails",
      keywords:
         "rails ruby on rails web development ruby framework programming ruby on rails framework rails framework rails app ruby programming",
      icon: "728",
      color: "#c00",
   },
   {
      name: "raspberrypi",
      keywords:
         "raspberrypi raspberry pi electronics diy programming hardware raspbian computing raspberrypi logo raspberry pi board",
      icon: "729",
      color: "#c51a4a",
   },
   {
      name: "react",
      keywords:
         "react javascript library frontend ui development react.js user interface web react library",
      icon: "72a",
      color: "#61dafb",
   },
   {
      name: "reactos",
      keywords:
         "reactos windows open source operating system os react reactos logo reactos os windows alternative reactos windows",
      icon: "72b",
      color: "#08c",
   },
   {
      name: "reactrouter",
      keywords:
         "reactrouter react router routing navigation javascript frontend react.js react router reactrouter library",
      icon: "72c",
      color: "#ca4245",
   },
   {
      name: "readthedocs",
      keywords:
         "readthedocs documentation docs open source publishing knowledge read learn readthedocs logo readthedocs documentation",
      icon: "72d",
      color: "#8ca1af",
   },
   {
      name: "realm",
      keywords:
         "realm database mobile nosql sync realm database mobile database realm sync realm mobile realm platform",
      icon: "72e",
      color: "#39477f",
   },
   {
      name: "reason",
      keywords:
         "reason javascript functional programming language programming typescript development ocaml reasonml reason language",
      icon: "72f",
      color: "#dd4b39",
   },
   {
      name: "reasonstudios",
      keywords:
         "reasonstudios music production software studio audio reason reason studios reasonstudios logo music software",
      icon: "730",
      color: "#fff",
   },
   {
      name: "redbubble",
      keywords:
         "redbubble art design products shop artists clothing merchandise redbubble logo redbubble store",
      icon: "731",
      color: "#e41321",
   },
   {
      name: "reddit2",
      keywords:
         "reddit social media community forum discussion news reddit logo reddit app reddit posts",
      icon: "732",
      color: "#ff4500",
   },
   {
      name: "redhat",
      keywords:
         "redhat linux open source enterprise software redhat logo operating system redhat linux linux distribution redhat enterprise linux",
      icon: "733",
      color: "#e00",
   },
   {
      name: "redis",
      keywords:
         "redis database nosql cache key value server data redis server redis cache redis database",
      icon: "734",
      color: "#d82c20",
   },
   {
      name: "redux",
      keywords:
         "redux javascript library state management frontend react development flux redux library redux state management",
      icon: "735",
      color: "#764abc",
   },
   {
      name: "renren3",
      keywords:
         "renren social media china network community friends sharing renren app renren logo",
      icon: "736",
      color: "#217dc6",
   },
   {
      name: "repl dot it",
      keywords:
         "repl.it repl it code development programming run execute repl environment repl.it logo",
      icon: "737",
      color: "#667881",
   },
   {
      name: "researchgate",
      keywords:
         "researchgate research science academia publication network scholarly profile researchgate logo researchgate network",
      icon: "738",
      color: "#0cb",
   },
   {
      name: "reverbnation",
      keywords:
         "reverbnation music artists bands songs promotion community reverbnation logo reverbnation artists reverbnation music",
      icon: "739",
      color: "#e43526",
   },
   {
      name: "riot",
      keywords:
         "riot messaging chat communication app team collaboration riot.im riot app riot chat",
      icon: "73a",
      color: "#368bd6",
   },
   {
      name: "ripple",
      keywords:
         "ripple cryptocurrency blockchain finance xrp payment digital currency ripple logo ripple cryptocurrency ripple network",
      icon: "73b",
      color: "#0085c0",
   },
   {
      name: "riseup",
      keywords:
         "riseup activism secure email communication privacy tools riseup.net riseup logo riseup email",
      icon: "73c",
      color: "#5e9ee3",
   },
   {
      name: "rollup dot js",
      keywords:
         "rollup.js rollup javascript bundler module package library build rollup.js logo rollup module bundler",
      icon: "73d",
      color: "#ec4a3f",
   },
   {
      name: "roots",
      keywords:
         "roots wordpress theme web development build starter sage roots.io roots theme roots wordpress",
      icon: "73e",
      color: "#525ddc",
   },
   {
      name: "roundcube",
      keywords:
         "roundcube email webmail client mail interface roundcube webmail roundcube email roundcube client roundcube logo",
      icon: "73f",
      color: "#37beff",
   },
   {
      name: "rss4",
      keywords:
         "rss feed rss icon subscribe news update content rss feed feed icon rss logo",
      icon: "740",
      color: "#ffa500",
   },
   {
      name: "rstudio",
      keywords:
         "rstudio r data science analysis statistical programming development rstudio ide r programming",
      icon: "741",
      color: "#75aadb",
   },
   {
      name: "ruby",
      keywords:
         "ruby programming language rails development code ruby on rails scripting ruby programming ruby gems",
      icon: "742",
      color: "#cc342d",
   },
   {
      name: "rubygems",
      keywords:
         "rubygems ruby gems package library development dependency install rubygems.org ruby gem",
      icon: "743",
      color: "#e9573f",
   },
   {
      name: "runkeeper",
      keywords:
         "runkeeper fitness running exercise tracker health app run activity runkeeper app",
      icon: "744",
      color: "#2dc9d7",
   },
   {
      name: "sahibinden",
      keywords:
         "sahibinden classifieds turkey buy sell property cars sahibinden.com sahibinden logo sahibinden app",
      icon: "747",
      color: "#ffe800",
   },
   {
      name: "salesforce",
      keywords:
         "salesforce crm cloud sales business customer salesforce.com salesforce logo salesforce crm salesforce cloud",
      icon: "748",
      color: "#00a1e0",
   },
   {
      name: "saltstack",
      keywords:
         "saltstack automation configuration management server tools salt saltstack logo saltstack automation saltstack configuration",
      icon: "749",
      color: "#00eace",
   },
   {
      name: "samsung",
      keywords:
         "samsung electronics technology galaxy smartphone tv samsung logo samsung electronics samsung galaxy samsung mobile",
      icon: "74a",
      color: "#1428a0",
   },
   {
      name: "samsungpay",
      keywords:
         "samsungpay payments wallet mobile samsung nfc payment samsung pay samsung pay app samsung wallet",
      icon: "74b",
      color: "#1428a0",
   },
   {
      name: "sap",
      keywords:
         "sap business software enterprise erp crm sap logo sap software sap system sap business",
      icon: "74c",
      color: "#008fd3",
   },
   {
      name: "sass",
      keywords:
         "sass css scss preprocessor styling web development sass logo sass css sass scss",
      icon: "74d",
      color: "#c69",
   },
   {
      name: "saucelabs",
      keywords:
         "saucelabs testing automation selenium software saas saucelabs logo saucelabs testing saucelabs app saucelabs cloud",
      icon: "74e",
      color: "#e2231a",
   },
   {
      name: "scala",
      keywords:
         "scala programming language functional jvm development scala logo scala programming scala language scala compiler",
      icon: "74f",
      color: "#dc322f",
   },
   {
      name: "scaleway",
      keywords:
         "scaleway cloud server hosting vps scaleway logo scaleway cloud scaleway server scaleway vps scaleway hosting",
      icon: "750",
      color: "#4f0599",
   },
   {
      name: "scribd2",
      keywords:
         "scribd books documents read publishing ebooks scribd logo scribd.com scribd app scribd library",
      icon: "751",
      color: "#1a7bba",
   },
   {
      name: "scrutinizerci",
      keywords:
         "scrutinizer ci code quality continuous integration testing scrutinizer ci code analysis scrutinizer ci code coverage scrutinizer logo",
      icon: "752",
      color: "#8a9296",
   },
   {
      name: "seagate",
      keywords:
         "seagate storage hard drive data backup seagate logo seagate storage seagate hard drive seagate backup seagate drive",
      icon: "753",
      color: "#72be4f",
   },
   {
      name: "sega",
      keywords:
         "sega gaming videogames console games sega logo sega genesis sega master system sega saturn sega dreamcast",
      icon: "754",
      color: "#0089cf",
   },
   {
      name: "sellfy",
      keywords:
         "sellfy ecommerce sell products digital store sellfy logo sellfy store sellfy marketplace sellfy platform",
      icon: "755",
      color: "#21b352",
   },
   {
      name: "semaphoreci",
      keywords:
         "semaphoreci ci continuous integration testing automation deployment semaphoreci logo semaphoreci ci semaphoreci app semaphoreci pipeline",
      icon: "756",
      color: "#19a974",
   },
   {
      name: "sensu",
      keywords:
         "sensu monitoring metrics alerts observability ops sensu logo sensu monitoring sensu metrics sensu alerts",
      icon: "757",
      color: "#89c967",
   },
   {
      name: "sentry",
      keywords:
         "sentry monitoring error tracking debugging log management sentry.io sentry logo sentry errors sentry monitoring sentry debugging",
      icon: "758",
      color: "#fb4226",
   },
   {
      name: "serverfault",
      keywords:
         "serverfault server administration network sysadmin questions answers serverfault logo serverfault community serverfault questions",
      icon: "759",
      color: "#e7282d",
   },
   {
      name: "shazam",
      keywords:
         "shazam music identification song audio listen shazam logo shazam app shazam song shazam music",
      icon: "75a",
      color: "#08f",
   },
   {
      name: "shell",
      keywords:
         "shell command line terminal bash linux unix shell script shell scripting console shell command",
      icon: "75b",
      color: "#ffd500",
   },
   {
      name: "shopify",
      keywords:
         "shopify ecommerce store online business website shopify logo shopify store shopify platform shopify ecommerce",
      icon: "75c",
      color: "#7ab55c",
   },
   {
      name: "showpad",
      keywords:
         "showpad sales enablement marketing presentation platform business sales communication technology showpad icon",
      icon: "75d",
      color: "#2d2e83",
   },
   {
      name: "siemens",
      keywords:
         "siemens technology industry engineering innovation manufacturing electronics energy company siemens logo",
      icon: "75e",
      color: "#099",
   },
   {
      name: "signal2",
      keywords:
         "signal2 signal communication mobile phone network wireless strength icon signal indicator",
      icon: "75f",
      color: "#2592e9",
   },
   {
      name: "sinaweibo",
      keywords:
         "sinaweibo weibo social media china microblogging platform communication network sina weibo icon",
      icon: "761",
      color: "#e6162d",
   },
   {
      name: "sitepoint",
      keywords:
         "sitepoint web development learning resources articles tutorials community website sitepoint logo online education",
      icon: "762",
      color: "#258aaf",
   },
   {
      name: "sketch",
      keywords:
         "sketch design ui/ux software tool digital sketching creative app sketch icon",
      icon: "763",
      color: "#f7b500",
   },
   {
      name: "skillshare",
      keywords:
         "skillshare education online learning courses creative skills classes community platform skillshare icon",
      icon: "764",
      color: "#17c5cb",
   },
   {
      name: "skyliner",
      keywords:
         "skyliner skyliner travel transportation airline airplane airport flight sky skyliner logo",
      icon: "765",
      color: "#2fcea0",
   },
   {
      name: "skype3",
      keywords:
         "skype3 skype communication video call messaging chat voice call app software skype icon",
      icon: "766",
      color: "#00aff0",
   },
   {
      name: "slack1",
      keywords:
         "slack1 slack communication collaboration messaging teamwork workplace software app slack logo",
      icon: "767",
      color: "#4a154b",
   },
   {
      name: "slashdot",
      keywords:
         "slashdot news technology nerd geek forum discussion internet website slashdot logo",
      icon: "768",
      color: "#026664",
   },
   {
      name: "slickpic",
      keywords:
         "slickpic slickpic photo gallery sharing photography image hosting service slickpic logo",
      icon: "769",
      color: "#ff880f",
   },
   {
      name: "slides",
      keywords:
         "slides presentation slides deck powerpoint google slides lecture talk speech slides icon",
      icon: "76a",
      color: "#e4637c",
   },
   {
      name: "smashingmagazine",
      keywords:
         "smashingmagazine smashing magazine design web development articles tutorials inspiration resources blog smashing magazine logo",
      icon: "76b",
      color: "#e85c33",
   },
   {
      name: "smugmug",
      keywords:
         "smugmug smugmug photography photo sharing gallery images albums memories smugmug logo photo storage",
      icon: "76c",
      color: "#6db944",
   },
   {
      name: "snapchat1",
      keywords:
         "snapchat1 snapchat social media messaging photos videos stories app snapchat logo chat",
      icon: "76d",
      color: "#fffc00",
   },
   {
      name: "snapcraft",
      keywords:
         "snapcraft snapcraft linux snap software package manager app snapcraft logo ubuntu",
      icon: "76e",
      color: "#82bea0",
   },
   {
      name: "snyk",
      keywords:
         "snyk snyk security cybersecurity vulnerabilities software code development tool snyk logo",
      icon: "76f",
      color: "#4c4a73",
   },
   {
      name: "sogou",
      keywords:
         "sogou sogou search engine china technology internet browser sogou logo web",
      icon: "772",
      color: "#fb6022",
   },
   {
      name: "solus",
      keywords:
         "solus solus linux operating system software distribution desktop solus logo os",
      icon: "773",
      color: "#5294e2",
   },
   {
      name: "sonarcloud",
      keywords:
         "sonarcloud sonarcloud sonar code quality analysis development software tool sonarcloud logo code",
      icon: "774",
      color: "#f3702a",
   },
   {
      name: "sonarlint",
      keywords:
         "sonarlint sonarlint sonar code quality analysis development software tool sonarlint logo code",
      icon: "775",
      color: "#cc2026",
   },
   {
      name: "sonarqube",
      keywords:
         "sonarqube sonarqube sonar code quality analysis development software tool sonarqube logo code",
      icon: "776",
      color: "#4e9bcd",
   },
   {
      name: "sonarsource",
      keywords:
         "sonarsource sonarsource sonar code quality analysis development software tool sonarsource logo code",
      icon: "777",
      color: "#cb3032",
   },
   {
      name: "songkick",
      keywords:
         "songkick songkick music concerts live events tickets bands gigs songkick logo events",
      icon: "778",
      color: "#f80046",
   },
   {
      name: "sonicwall",
      keywords:
         "sonicwall sonicwall sonic firewall security technology network cybersecurity sonicwall logo network security",
      icon: "779",
      color: "#f60",
   },
   {
      name: "soundcloud4",
      keywords:
         "soundcloud4 soundcloud music audio streaming platform artists sound soundcloud logo music icon",
      icon: "77b",
      color: "#f30",
   },
   {
      name: "sourceengine",
      keywords:
         "sourceengine source engine source game engine valve video games development software sourceengine logo engine",
      icon: "77c",
      color: "#f79a10",
   },
   {
      name: "sourceforge",
      keywords:
         "sourceforge sourceforge open source software development community projects sourceforge logo source",
      icon: "77d",
      color: "#535353",
   },
   {
      name: "sourcegraph",
      keywords:
         "sourcegraph sourcegraph source code development search software tool sourcegraph logo code search",
      icon: "77e",
      color: "#00b4f2",
   },
   {
      name: "spacemacs",
      keywords:
         "spacemacs spacemacs emacs editor text ide software development spacemacs logo text editor",
      icon: "77f",
      color: "#9266cc",
   },
   {
      name: "spacex",
      keywords:
         "spacex spacex space rockets space exploration technology elon musk nasa spacex logo rocket",
      icon: "780",
      color: "#005288",
   },
   {
      name: "sparkfun",
      keywords:
         "sparkfun sparkfun electronics components parts projects diy tinkering sparkfun logo circuit",
      icon: "781",
      color: "#e53525",
   },
   {
      name: "sparkpost",
      keywords:
         "sparkpost sparkpost email delivery service marketing communication sparkpost logo email icon",
      icon: "782",
      color: "#fa6423",
   },
   {
      name: "spdx",
      keywords:
         "spdx spdx license open source software legal standards spdx logo software license",
      icon: "783",
      color: "#4398cc",
   },
   {
      name: "speakerdeck",
      keywords:
         "speakerdeck speakerdeck presentation slides deck talk conference speakerdeck logo presentation platform",
      icon: "784",
      color: "#396",
   },
   {
      name: "spectrum",
      keywords:
         "spectrum spectrum spectrum chat chat community forum communication spectrum logo discussion",
      icon: "785",
      color: "#7b16ff",
   },
   {
      name: "spotify3",
      keywords:
         "spotify3 spotify music streaming audio playlist artist album spotify logo music icon",
      icon: "786",
      color: "#1ed760",
   },
   {
      name: "spotlight",
      keywords:
         "spotlight spotlight search find magnifying glass light icon spotlight icon search icon find icon",
      icon: "787",
      color: "#352a71",
   },
   {
      name: "spreaker",
      keywords:
         "spreaker spreaker podcasts radio audio broadcasting platform spreaker logo podcast icon",
      icon: "788",
      color: "#f5c300",
   },
   {
      name: "spring",
      keywords:
         "spring spring framework java framework development software programming spring logo java framework",
      icon: "789",
      color: "#6db33f",
   },
   {
      name: "sprint",
      keywords:
         "sprint sprint telecommunications mobile carrier wireless network sprint logo mobile carrier",
      icon: "78a",
      color: "#ffce0a",
   },
   {
      name: "stackbit",
      keywords:
         "stackbit stackbit stack web development jamstack website builder stackbit logo web development icon",
      icon: "78d",
      color: "#3eb0fd",
   },
   {
      name: "stackexchange",
      keywords:
         "stackexchange stack exchange stack community forum questions answers knowledge stackexchange logo q&a",
      icon: "78e",
      color: "#1e5397",
   },
   {
      name: "stackoverflow1",
      keywords:
         "stackoverflow1 stackoverflow stack community forum programming development stackoverflow logo coding",
      icon: "78f",
      color: "#fe7a16",
   },
   {
      name: "stackshare",
      keywords:
         "stackshare stackshare stack development technology tools community stackshare logo software",
      icon: "791",
      color: "#0690fa",
   },
   {
      name: "stadia",
      keywords:
         "stadia stadia google stadia gaming cloud gaming google video games stadia logo gaming icon",
      icon: "792",
      color: "#cd2640",
   },
   {
      name: "steem",
      keywords:
         "steem steem steemit cryptocurrency blockchain social media platform steem logo cryptocurrency icon",
      icon: "798",
      color: "#4ba2f2",
   },
   {
      name: "steemit",
      keywords:
         "steemit steemit steem cryptocurrency blockchain social media platform steemit logo cryptocurrency icon",
      icon: "799",
      color: "#06d6a9",
   },
   {
      name: "steinberg",
      keywords:
         "steinberg steinberg steinberg music audio software steinberg logo music production",
      icon: "79a",
      color: "#c90827",
   },
   {
      name: "stencyl",
      keywords:
         "stencyl stencyl stencyl game development software platform stencyl logo game dev",
      icon: "79b",
      color: "#8e1c04",
   },
   {
      name: "storify",
      keywords:
         "storify storify storify storify logo storify icon story content social media curation",
      icon: "79d",
      color: "#3a98d9",
   },
   {
      name: "storybook",
      keywords:
         "storybook storybook storybook storybook logo storybook icon ui development testing storybook ui",
      icon: "79e",
      color: "#ff4785",
   },
   {
      name: "strapi",
      keywords:
         "strapi strapi strapi cms cms content management system web development strapi logo cms icon",
      icon: "79f",
      color: "#2e7eea",
   },
   {
      name: "strava",
      keywords:
         "strava strava strava strava logo strava icon fitness activity tracking running cycling",
      icon: "7a0",
      color: "#fc4c02",
   },
   {
      name: "stripe",
      keywords:
         "stripe stripe stripe stripe logo stripe icon payments payment processing online payments ecommerce",
      icon: "7a1",
      color: "#008cdd",
   },
   {
      name: "strongswan",
      keywords:
         "strongswan strongswan strongswan strongswan logo strongswan icon vpn security encryption network",
      icon: "7a2",
      color: "#e00033",
   },
   {
      name: "stubhub",
      keywords:
         "stubhub stubhub stubhub stubhub logo stubhub icon tickets events buying selling concerts",
      icon: "7a3",
      color: "#003168",
   },
   {
      name: "styled components",
      keywords:
         "styled components styled components styled components react css styling web development styled components logo component styling",
      icon: "7a4",
      color: "#db7093",
   },
   {
      name: "sublimetext",
      keywords:
         "sublimetext sublimetext sublime text text editor code editor development software sublimetext logo text editor icon",
      icon: "7a7",
      color: "#ff9800",
   },
   {
      name: "subversion",
      keywords:
         "subversion subversion svn version control software development subversion logo version control icon",
      icon: "7a8",
      color: "#809cc9",
   },
   {
      name: "superuser",
      keywords:
         "superuser superuser superuser superuser logo superuser icon question answer community knowledge",
      icon: "7a9",
      color: "#2eace3",
   },
   {
      name: "svelte",
      keywords:
         "svelte svelte svelte.js javascript framework development svelte logo framework icon",
      icon: "7aa",
      color: "#ff3e00",
   },
   {
      name: "svg1",
      keywords: "svg1 svg vector graphics format image icon svg icon svg1 logo",
      icon: "7ab",
      color: "#ffb13b",
   },
   {
      name: "svgo",
      keywords: "svgo svgo svg optimization tool development svgo logo svg icon",
      icon: "7ac",
      color: "#14b9ff",
   },
   {
      name: "swagger",
      keywords:
         "swagger swagger api documentation tool development swagger logo api icon",
      icon: "7ad",
      color: "#85ea2d",
   },
   {
      name: "swarm1",
      keywords:
         "swarm1 swarm swarm swarm logo swarm icon checkin location foursquare app",
      icon: "7ae",
      color: "#ffa633",
   },
   {
      name: "swift",
      keywords:
         "swift swift swift swift logo swift icon programming language ios development",
      icon: "7af",
      color: "#fa7343",
   },
   {
      name: "symantec",
      keywords:
         "symantec symantec symantec symantec logo symantec icon security software antivirus symantec endpoint",
      icon: "7b0",
      color: "#fdb511",
   },
   {
      name: "synology",
      keywords:
         "synology synology synology synology logo synology icon nas network attached storage storage server",
      icon: "7b2",
      color: "#b6b5b6",
   },
   {
      name: "t mobile",
      keywords:
         "t mobile t mobile t mobile t mobile logo t mobile icon mobile telecommunications network cellular",
      icon: "7b3",
      color: "#e20074",
   },
   {
      name: "tableau",
      keywords:
         "tableau tableau tableau tableau logo tableau icon data visualization analytics business intelligence",
      icon: "7b4",
      color: "#e97627",
   },
   {
      name: "tails",
      keywords:
         "tails tails tails tails logo tails icon linux os operating system privacy",
      icon: "7b5",
      color: "#56347c",
   },
   {
      name: "tailwindcss",
      keywords:
         "tailwindcss tailwindcss tailwind css css framework development tailwindcss logo css framework",
      icon: "7b6",
      color: "#38b2ac",
   },
   {
      name: "tapas1",
      keywords:
         "tapas1 tapas tapas tapas logo tapas icon webcomic comics reading app",
      icon: "7b7",
      color: "#ffce00",
   },
   {
      name: "teamviewer",
      keywords:
         "teamviewer teamviewer teamviewer teamviewer logo teamviewer icon remote desktop support software",
      icon: "7b8",
      color: "#0e8ee9",
   },
   {
      name: "ted",
      keywords: "ted ted ted ted logo ted icon talks lectures inspiration ideas",
      icon: "7b9",
      color: "#e62b1e",
   },
   {
      name: "teespring",
      keywords:
         "teespring teespring teespring teespring logo teespring icon merchandise clothing printing ecommerce",
      icon: "7ba",
      color: "#39ace6",
   },
   {
      name: "telegram2",
      keywords:
         "telegram2 telegram telegram telegram logo telegram icon messaging chat communication app",
      icon: "7bb",
      color: "#2ca5e0",
   },
   {
      name: "tencentqq",
      keywords:
         "tencentqq tencent qq tencentqq tencent qq logo tencent qq icon messaging chat communication app",
      icon: "7bc",
      color: "#eb1923",
   },
   {
      name: "tencentweibo",
      keywords:
         "tencentweibo tencent weibo tencentweibo tencent weibo logo tencent weibo icon social media china microblogging platform",
      icon: "7bd",
      color: "#20b8e5",
   },
   {
      name: "tensorflow",
      keywords:
         "tensorflow tensorflow tensorflow tensorflow logo tensorflow icon ai machine learning development framework",
      icon: "7be",
      color: "#ff6f00",
   },
   {
      name: "teradata",
      keywords:
         "teradata teradata teradata teradata logo teradata icon database data analytics platform",
      icon: "7bf",
      color: "#f37440",
   },
   {
      name: "terraform",
      keywords:
         "terraform terraform terraform terraform logo terraform icon infrastructure as code development tool",
      icon: "7c0",
      color: "#623ce4",
   },
   {
      name: "tesla",
      keywords:
         "tesla electric car elon musk automobile tesla logo innovation sustainable energy electric vehicle technology automotive",
      icon: "7c1",
      color: "#c00",
   },
   {
      name: "themighty",
      keywords:
         "themighty mental health community support empowerment mental illness strength courage wellness inspiration",
      icon: "7c2",
      color: "#d0072a",
   },
   {
      name: "themoviedatabase",
      keywords:
         "themoviedatabase movie film database cinema entertainment imdb alternative movie ratings movie reviews film information",
      icon: "7c3",
      color: "#01d277",
   },
   {
      name: "timescale",
      keywords:
         "timescale database time series time series database time analytics data scalable performance postgres extension",
      icon: "7c6",
      color: "#fdb515",
   },
   {
      name: "tinder",
      keywords:
         "tinder dating relationships swipe romance matchmaking social app online dating love dating app",
      icon: "7c7",
      color: "#ff6b6b",
   },
   {
      name: "todoist",
      keywords:
         "todoist task management productivity to do list organizer planner tasks project management time management to do app",
      icon: "7c8",
      color: "#e44332",
   },
   {
      name: "toggl",
      keywords:
         "toggl time tracking productivity time management tracker work hours time recorder time logging task timer project management",
      icon: "7c9",
      color: "#e01b22",
   },
   {
      name: "topcoder",
      keywords:
         "topcoder coding programming algorithm software development competitive programming coding challenges hackathons coding community algorithmic competitions",
      icon: "7ca",
      color: "#29a8e0",
   },
   {
      name: "toptal",
      keywords:
         "toptal freelance remote work talent software development freelancer developer designer contract work remote job",
      icon: "7cb",
      color: "#3863a0",
   },
   {
      name: "tor",
      keywords:
         "tor privacy anonymity dark web encryption security anonymous browsing privacy network onion routing online anonymity",
      icon: "7cc",
      color: "#7e4798",
   },
   {
      name: "toshiba",
      keywords:
         "toshiba electronics technology hardware japanese company laptops computers electronics brand television innovation",
      icon: "7cd",
      color: "#f00",
   },
   {
      name: "trainerroad",
      keywords:
         "trainerroad cycling training workout fitness cycling app indoor cycling biking bike training exercise",
      icon: "7ce",
      color: "#e12726",
   },
   {
      name: "trakt",
      keywords:
         "trakt movie tv shows tracking watchlist entertainment media series streaming tracking app",
      icon: "7cf",
      color: "#ed1c24",
   },
   {
      name: "travisci",
      keywords:
         "travisci continuous integration development testing automation ci/cd software development github testing platform build automation",
      icon: "7d0",
      color: "#3eaaaf",
   },
   {
      name: "treehouse",
      keywords:
         "treehouse education online learning programming coding web development technology courses learning platform web design",
      icon: "7d1",
      color: "#5fcf80",
   },
   {
      name: "trello2",
      keywords:
         "trello project management organization productivity tasks kanban boards collaboration workflow task management",
      icon: "7d2",
      color: "#0079bf",
   },
   {
      name: "trendmicro",
      keywords:
         "trendmicro cybersecurity antivirus security malware protection software internet security privacy online safety",
      icon: "7d3",
      color: "#d71921",
   },
   {
      name: "tripadvisor1",
      keywords:
         "tripadvisor travel reviews hotels restaurants vacation destinations tourism travel guide trip planning",
      icon: "7d4",
      color: "#00af87",
   },
   {
      name: "trulia",
      keywords:
         "trulia real estate homes for sale property housing market listings homes rentals apartments real estate app",
      icon: "7d5",
      color: "#53b50a",
   },
   {
      name: "trustpilot",
      keywords:
         "trustpilot reviews customer feedback ratings trust consumer reviews trustworthy customer service online reputation business reviews",
      icon: "7d6",
      color: "#00b67a",
   },
   {
      name: "tumblr4",
      keywords:
         "tumblr blogging social media microblogging community creative art photography writing tumblr logo",
      icon: "7d7",
      color: "#36465d",
   },
   {
      name: "turkishairlines",
      keywords:
         "turkishairlines airline travel flight turkey air travel aviation turkish airline istanbul airways",
      icon: "7d8",
      color: "#c70a0c",
   },
   {
      name: "twilio",
      keywords:
         "twilio communications api messaging sms voice developers telecommunications phone communication platform",
      icon: "7d9",
      color: "#f22f46",
   },
   {
      name: "twitch2",
      keywords:
         "twitch livestreaming gaming streaming live esports video games twitch logo twitch.tv broadcasting",
      icon: "7da",
      color: "#6441a4",
   },
   {
      name: "twitter3",
      keywords:
         "twitter social media microblogging tweets follow news social network twitter logo tweets twitter app",
      icon: "7db",
      color: "#1da1f2",
   },
   {
      name: "twoo",
      keywords:
         "twoo dating social network meet new people chat flirt online dating friends twoo logo meet people",
      icon: "7dc",
      color: "#ff7102",
   },
   {
      name: "typescript",
      keywords:
         "typescript javascript programming language web development typescript logo typescript programming typescript icon typescript language front end back end",
      icon: "7dd",
      color: "#007acc",
   },
   {
      name: "typo3",
      keywords:
         "typo3 content management system cms web development typo3 logo open source website web design typo3 icon typo3 cms",
      icon: "7de",
      color: "#ff8700",
   },
   {
      name: "ubereats",
      keywords:
         "ubereats food delivery delivery uber takeout restaurant delivery food ubereats logo food ordering meal delivery",
      icon: "7e0",
      color: "#5fb709",
   },
   {
      name: "ublockorigin",
      keywords:
         "ublockorigin ad blocker browser extension privacy security ublock origin ublock origin logo internet block ads online privacy",
      icon: "7e2",
      color: "#800000",
   },
   {
      name: "ubuntu",
      keywords:
         "ubuntu linux operating system open source ubuntu logo ubuntu desktop ubuntu os ubuntu linux ubuntu distribution linux distribution",
      icon: "7e3",
      color: "#e95420",
   },
   {
      name: "udacity",
      keywords:
         "udacity online learning education programming courses web development nanodegree technology udacity logo coding",
      icon: "7e4",
      color: "#01b3e3",
   },
   {
      name: "udemy",
      keywords:
         "udemy online courses education learning courses udemy logo online learning programming web development udemy courses",
      icon: "7e5",
      color: "#ec5252",
   },
   {
      name: "uikit",
      keywords:
         "uikit frontend framework web development ui user interface css framework uikit logo frontend development responsive design web design",
      icon: "7e6",
      color: "#2396f3",
   },
   {
      name: "umbraco",
      keywords:
         "umbraco content management system cms web development umbraco logo open source website web design umbraco cms umbraco icon",
      icon: "7e7",
      color: "#00bec1",
   },
   {
      name: "untappd",
      keywords:
         "untappd beer social network craft beer drinks brewery untappd logo beer ratings beer reviews untappd app",
      icon: "7eb",
      color: "#ffc000",
   },
   {
      name: "upwork",
      keywords:
         "upwork freelance remote work upwork logo freelancer gig economy contract work remote job upwork icon job platform",
      icon: "7ec",
      color: "#6fda44",
   },
   {
      name: "v",
      keywords:
         "v video video platform streaming entertainment vimeo alternative vimeo alternative vimeo competitor vimeo icon vimeo logo",
      icon: "7ed",
      color: "#5d87bf",
   },
   {
      name: "v8",
      keywords:
         "v8 javascript engine programming v8 engine javascript chrome google node.js v8 logo web development",
      icon: "7ee",
      color: "#4b8bf5",
   },
   {
      name: "vagrant",
      keywords:
         "vagrant development virtualization developer tool vagrant logo software devops virtual machine vm web development",
      icon: "7ef",
      color: "#1563ff",
   },
   {
      name: "valve",
      keywords:
         "valve gaming video games valve corporation steam valve logo halflife counter strike portal team fortress",
      icon: "7f0",
      color: "#f74843",
   },
   {
      name: "veeam",
      keywords:
         "veeam backup data protection veeam logo disaster recovery virtualization cloud backup solutions veeam software veeam icon",
      icon: "7f1",
      color: "#00b336",
   },
   {
      name: "venmo",
      keywords:
         "venmo payment money transfer mobile payment venmo logo venmo app finance paypal alternative transactions peer to peer",
      icon: "7f2",
      color: "#3d95ce",
   },
   {
      name: "verizon",
      keywords:
         "verizon telecommunications wireless mobile internet verizon logo communications service provider cellular network",
      icon: "7f3",
      color: "#cd040b",
   },
   {
      name: "viadeo1",
      keywords:
         "viadeo social network professional business career linkedin alternative viadeo logo networking viadeo icon professional network",
      icon: "7f4",
      color: "#f88d2d",
   },
   {
      name: "viber",
      keywords:
         "viber messaging communication voip viber logo chat calls app video call free calls",
      icon: "7f5",
      color: "#665cac",
   },
   {
      name: "vim",
      keywords:
         "vim text editor programming vim editor developer tool command line vim logo linux code terminal",
      icon: "7f6",
      color: "#019733",
   },
   {
      name: "vimeo4",
      keywords:
         "vimeo video streaming vimeo logo vimeo player vimeo alternative vimeo competitor entertainment vimeo app vimeo icon",
      icon: "7f7",
      color: "#1ab7ea",
   },
   {
      name: "vine3",
      keywords:
         "vine social media video sharing looping videos vine logo short videos entertainment app twitter vine icon",
      icon: "7f8",
      color: "#11b48a",
   },
   {
      name: "virb",
      keywords:
         "virb website builder web development virb logo web design portfolio virb website virb icon web builder website",
      icon: "7f9",
      color: "#0093da",
   },
   {
      name: "visa",
      keywords:
         "visa payment credit card finance visa logo debit card visa card payment method visa icon visa credit card",
      icon: "7fa",
      color: "#142787",
   },
   {
      name: "visualstudio",
      keywords:
         "visualstudio development ide microsoft programming visual studio logo visual studio code visualstudio icon microsoft visual studio code editor",
      icon: "7fb",
      color: "#5c2d91",
   },
   {
      name: "visualstudiocode",
      keywords:
         "visualstudiocode development ide microsoft programming visual studio code vscode visualstudiocode icon microsoft visual studio code editor",
      icon: "7fc",
      color: "#007acc",
   },
   {
      name: "vk3",
      keywords:
         "vk social network russia vkontakte vk logo vkontakte community vk icon russian social network vk app",
      icon: "7fd",
      color: "#4680c2",
   },
   {
      name: "vlcmediaplayer",
      keywords:
         "vlcmediaplayer media player video player vlc vlc player audio player vlc logo multimedia open source vlc media player",
      icon: "7fe",
      color: "#f80",
   },
   {
      name: "vodafone",
      keywords:
         "vodafone telecommunications wireless mobile internet vodafone logo communications service provider cellular network",
      icon: "7ff",
      color: "#e60000",
   },
   {
      name: "volkswagen",
      keywords:
         "volkswagen automobile cars vw german car volkswagen logo vw logo car manufacturer volkswagen group auto",
      icon: "800",
      color: "#151f5d",
   },
   {
      name: "vue dot js",
      keywords:
         "vue.js javascript framework web development vue frontend vue.js logo vue framework vue icon vue.js framework vue.js library",
      icon: "802",
      color: "#4fc08d",
   },
   {
      name: "w3c",
      keywords:
         "w3c world wide web web standards internet w3c logo web development web design w3c icon web consortium w3c organization",
      icon: "803",
      color: "#005a9c",
   },
   {
      name: "wattpad",
      keywords:
         "wattpad writing stories books reading fanfiction literature wattpad logo fiction writing community",
      icon: "804",
      color: "#f68d12",
   },
   {
      name: "waze",
      keywords:
         "waze navigation maps gps traffic waze app driving waze logo travel navigation app",
      icon: "805",
      color: "#333665",
   },
   {
      name: "weasyl",
      keywords:
         "weasyl art community furry illustration artist weasyl logo creative design weasyl icon",
      icon: "806",
      color: "#900",
   },
   {
      name: "webauthn",
      keywords:
         "webauthn authentication security web webauthn logo passwordless password login fido webauthn icon",
      icon: "807",
      color: "#3423a6",
   },
   {
      name: "webcomponents dot org",
      keywords:
         "webcomponents.org web development web components javascript frontend web design webcomponents.org logo web components api webcomponents.org icon custom elements",
      icon: "808",
      color: "#29abe2",
   },
   {
      name: "webmin",
      keywords:
         "webmin server management web hosting webmin logo linux administration webmin icon server system administration webmin panel",
      icon: "809",
      color: "#7da0d0",
   },
   {
      name: "webpack",
      keywords:
         "webpack javascript web development build tool webpack logo frontend module bundler javascript framework webpack icon javascript bundler",
      icon: "80a",
      color: "#8dd6f9",
   },
   {
      name: "wechat1",
      keywords:
         "wechat messaging social media china wechat logo wechat app wechat icon china social media wechat pay chinese social media",
      icon: "80c",
      color: "#7bb32e",
   },
   {
      name: "whatsapp2",
      keywords:
         "whatsapp messaging communication whatsapp logo chat whatsapp icon whatsapp messenger whatsapp app messenger whatsapp chat",
      icon: "80d",
      color: "#25d366",
   },
   {
      name: "wheniwork",
      keywords:
         "wheniwork scheduling shift planning workforce management wheniwork logo employee scheduling work schedule staff scheduling time clock wheniwork app",
      icon: "80e",
      color: "#51a33d",
   },
   {
      name: "whitesource",
      keywords:
         "whitesource software security development whitesource logo open source whitesource icon coding code security whitesource app",
      icon: "80f",
      color: "#161d4e",
   },
   {
      name: "wii",
      keywords:
         "wii nintendo gaming wii console videogames nintendo wii wii remote wii logo console video game console",
      icon: "810",
      color: "#8b8b8b",
   },
   {
      name: "wiiu",
      keywords:
         "wiiu nintendo gaming wii u wii u console videogames nintendo wii u wii u gamepad wiiu logo console",
      icon: "811",
      color: "#8b8b8b",
   },
   {
      name: "windows2",
      keywords:
         "windows operating system microsoft windows logo microsoft windows pc os computer microsoft windows logo windows icon",
      icon: "813",
      color: "#0078d6",
   },
   {
      name: "wireguard",
      keywords:
         "wireguard vpn privacy security encryption wireguard vpn wireguard logo network internet wireguard icon",
      icon: "815",
      color: "#88171a",
   },
   {
      name: "wish",
      keywords:
         "wish shopping ecommerce wish app deals discounts cheap online shopping wish logo shopping app",
      icon: "816",
      color: "#2fb7ec",
   },
   {
      name: "wix",
      keywords:
         "wix website builder web development wix logo web design wix.com wix icon website website creation web builder",
      icon: "817",
      color: "#faad4d",
   },
   {
      name: "wolfram",
      keywords:
         "wolfram mathematics computational science wolfram alpha wolfram logo math wolfram mathematica wolfram research computation",
      icon: "818",
      color: "#d10",
   },
   {
      name: "wolframlanguage",
      keywords:
         "wolframlanguage programming language mathematics wolfram computation wolfram language logo coding math wolfram programming symbolic computation",
      icon: "819",
      color: "#d10",
   },
   {
      name: "wolframmathematica",
      keywords:
         "wolframmathematica mathematics software wolfram computation mathematica wolfram mathematica logo science wolfram alpha programming",
      icon: "81a",
      color: "#d10",
   },
   {
      name: "wordpress2",
      keywords:
         "wordpress cms blogging web development wordpress logo wordpress.com wordpress.org wordpress themes wordpress plugin wordpress icon",
      icon: "81b",
      color: "#21759b",
   },
   {
      name: "wpengine",
      keywords:
         "wpengine web hosting wordpress hosting wpengine logo wordpress wordpress hosting provider website hosting managed wordpress hosting hosting wordpress platform",
      icon: "81d",
      color: "#40bac8",
   },
   {
      name: "write dot as",
      keywords:
         "write.as blogging writing write.as logo publishing medium alternative content creation write as write.as icon write.as platform",
      icon: "81e",
      color: "#5bc4ee",
   },
   {
      name: "x dot org",
      keywords:
         "x.org x11 x window system x server x.org logo linux graphics xorg display server x window",
      icon: "81f",
      color: "#f28834",
   },
   {
      name: "x pack",
      keywords:
         "xpack elasticsearch security monitoring machine learning elasticsearch plugin xpack logo xpack icon observability analytics",
      icon: "820",
      color: "#005571",
   },
   {
      name: "xamarin",
      keywords:
         "xamarin cross platform app development xamarin logo mobile microsoft xamarin forms mobile app xamarin studio visual studio",
      icon: "821",
      color: "#4393d4",
   },
   {
      name: "xbox",
      keywords:
         "xbox gaming microsoft xbox logo video games console xbox series x xbox one xbox live microsoft xbox",
      icon: "822",
      color: "#107c10",
   },
   {
      name: "xcode",
      keywords:
         "xcode development ide apple programming xcode logo macos ios app development xcode ide",
      icon: "823",
      color: "#1575f9",
   },
   {
      name: "xdadevelopers",
      keywords:
         "xdadevelopers android development xda smartphones xda developers android development xda developers xda forum android forum",
      icon: "824",
      color: "#f59812",
   },
   {
      name: "xero",
      keywords:
         "xero accounting finance software business cloud management online accounting software xero logo",
      icon: "825",
      color: "#13b5ea",
   },
   {
      name: "xfce",
      keywords:
         "xfce desktop environment linux unix gui x window system open source xfce logo xfce desktop xfce icon",
      icon: "826",
      color: "#2284f2",
   },
   {
      name: "xiaomi",
      keywords:
         "xiaomi smartphone electronics china technology xiaomi logo mi mobile xiaomi icon device",
      icon: "827",
      color: "#fa6709",
   },
   {
      name: "xing4",
      keywords:
         "xing xing networking business germany professional social xing logo xing icon networking platform",
      icon: "828",
      color: "#006567",
   },
   {
      name: "xmpp",
      keywords:
         "xmpp extensible messaging and presence protocol instant messaging communication chat open standards xmpp protocol protocol xmpp logo xmpp icon",
      icon: "829",
      color: "#002b5c",
   },
   {
      name: "xrp",
      keywords:
         "xrp ripple cryptocurrency digital asset blockchain finance payment xrp logo xrp icon cryptocurrency logo",
      icon: "82a",
      color: "#25a768",
   },
   {
      name: "xsplit",
      keywords:
         "xsplit xsplit broadcaster livestreaming broadcasting gaming software streaming xsplit logo xsplit icon livestreaming software",
      icon: "82b",
      color: "#0095de",
   },
   {
      name: "yahoo3",
      keywords:
         "yahoo yahoo search engine email portal internet yahoo logo yahoo icon yahoo services tech",
      icon: "82c",
      color: "#6001d2",
   },
   {
      name: "yamahacorporation",
      keywords:
         "yamaha corporation yamaha music audio instruments electronics yamaha logo corporation yamaha icon company",
      icon: "82d",
      color: "#4b1e78",
   },
   {
      name: "yamahamotorcorporation",
      keywords:
         "yamaha motor corporation yamaha motorcycle vehicle company yamaha logo corporation yamaha icon company",
      icon: "82e",
      color: "#e60012",
   },
   {
      name: "yammer",
      keywords:
         "yammer yammer communication collaboration business microsoft enterprise yammer logo yammer icon social network",
      icon: "82f",
      color: "#0072c6",
   },
   {
      name: "yandex",
      keywords:
         "yandex yandex search engine russia internet technology yandex logo yandex icon yandex services tech",
      icon: "830",
      color: "#f00",
   },
   {
      name: "yarn",
      keywords:
         "yarn yarn package manager javascript node.js npm development yarn logo yarn icon javascript tool",
      icon: "831",
      color: "#2c8ebb",
   },
   {
      name: "ycombinator",
      keywords:
         "y combinator y combinator accelerator startup investment entrepreneurship y combinator logo y combinator icon tech incubator",
      icon: "832",
      color: "#f0652f",
   },
   {
      name: "yelp3",
      keywords:
         "yelp yelp reviews ratings restaurant business yelp logo yelp icon local service",
      icon: "833",
      color: "#d32323",
   },
   {
      name: "youtube4",
      keywords:
         "youtube youtube video streaming google platform entertainment youtube logo youtube icon youtube services",
      icon: "834",
      color: "#f00",
   },
   {
      name: "zalando",
      keywords:
         "zalando zalando fashion ecommerce germany clothing online shopping zalando logo zalando icon retail",
      icon: "835",
      color: "#ff6900",
   },
   {
      name: "zapier",
      keywords:
         "zapier zapier automation integration workflow productivity software zapier logo zapier icon api",
      icon: "836",
      color: "#ff4a00",
   },
   {
      name: "zend",
      keywords:
         "zend zend php development framework programming software zend logo zend icon php framework",
      icon: "838",
      color: "#0679ea",
   },
   {
      name: "zendframework",
      keywords:
         "zend framework zend framework php development framework programming software zend framework logo zend framework icon php framework",
      icon: "83a",
      color: "#68b604",
   },
   {
      name: "zeromq",
      keywords:
         "zeromq zeromq messaging communication software library zeromq logo zeromq icon message queue",
      icon: "83b",
      color: "#df0000",
   },
   {
      name: "zerply",
      keywords:
         "zerply zerply portfolio professional networking freelance zerply logo zerply icon profile",
      icon: "83c",
      color: "#9dbc7a",
   },
   {
      name: "zhihu",
      keywords:
         "zhihu zhihu question and answer knowledge china platform community zhihu logo zhihu icon social network",
      icon: "83d",
      color: "#0084ff",
   },
   {
      name: "zillow",
      keywords:
         "zillow zillow real estate property housing listings zillow logo zillow icon homes",
      icon: "83e",
      color: "#0074e4",
   },
   {
      name: "zingat",
      keywords:
         "zingat zingat real estate property housing turkey listings zingat logo zingat icon homes",
      icon: "83f",
      color: "#009cfb",
   },
   {
      name: "zoom",
      keywords:
         "zoom zoom video conferencing communication meetings remote zoom logo zoom icon video call",
      icon: "840",
      color: "#2d8cff",
   },
   {
      name: "zorin",
      keywords:
         "zorin zorin os operating system linux desktop software zorin logo zorin icon linux os",
      icon: "841",
      color: "#0cc1f3",
   },
   {
      name: "zulip",
      keywords:
         "zulip zulip messaging communication software chat zulip logo zulip icon team communication",
      icon: "842",
      color: "#52c2af",
   },
];
