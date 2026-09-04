const body = document.body
const translations = {
    pl: {
        panelTitle: "Panel Sterowania",
        systemStatusTitle: "Status systemu",
        systemReady: "SYSTEM GOTOWY",
        noErrors: "Brak błędów",
        workModeTitle: "Tryb pracy",
        manualMode: "Tryb Manualny",
        batteryTitle: "Stan baterii",
        batteryState: "NAŁADOWANA",
        batteryInfo: "Bateria gotowa do pracy",
        startProgramTitle: "Start Programu",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Kontrola operacji",
        stopBtn: "STOP",
        pauseBtn: "PAUZA",
        resetBtn: "RESET",
        waterBtn: "SPUST WODY",
        settingsTitle: "Ustawienia parametrów",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Zaawansowane",
        workTime: "Czas pracy robota: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot przemysłowy",
        program1Title: "Zmiana parametrów programu N1",
        program2Title: "Zmiana parametrów programu N2",
        program3Title: "Zmiana parametrów programu N3",
        advancedTitle: "Zaawansowane parametry robota",
        programFieldRobotPosition: "Pozycja robota [mm]:",
        programFieldRobotVelocity: "Prędkość robota:",
        programFieldArmVelocity: "Prędkość ramienia:",
        programFieldArmRightPosition: "Prawa pozycja ramienia [mm]:",
        programFieldArmLeftPosition: "Lewa pozycja ramienia [mm]:",
        saveSettings: "Zapisz ustawienia",
        advancedManualVelocityLabel: "Prędkość robota w trybie ręcznym:",
        advancedFrontLimitLabel: "Minimalna odległość z przodu:",
        advancedAlignmentDifferenceLabel: "Dopuszczalna różnica wyrównania się:",
        advancedMinFullWashAngleLabel: "Minimalny dystans do pełnego obrotu ramienia:",
        advancedSensorArmDistanceLabel: "Dystans między prawym czujnikiem a ramieniem:",
        advancedFrontCorrectionLabel: "Korekta dystansu z przodu:",
        advancedStepsLabel: "Ilość kroków:",
        advancedWashCountTitle: "Ilość mycia",
        advancedWashStartLabel: "start:",
        advancedWashStopLabel: "stop:",
        advancedArmDetectionTitle: "Pozycja ramienia podczas wykrywania obiektu",
        advancedArmLeftLabel: "lewa:",
        advancedArmRightLabel: "prawa:",
        advancedRobotSpeedTitle: "Prędkość robota przy",
        advancedPositioningLabel: "pozycjonowaniu:",
        advancedAlignmentLabel: "wyrównaniu:",
        advancedTurningLabel: "skręcaniu:",
        advancedDriveHysteresisTitle: "Histereza jazdy robota",
        advancedPlusLabel: "plus:",
        advancedMinusLabel: "minus:"
    },
    en: {
        panelTitle: "Control Panel",
        systemStatusTitle: "System Status",
        systemReady: "SYSTEM READY",
        noErrors: "No errors",
        workModeTitle: "Operating Mode",
        manualMode: "Manual Mode",
        batteryTitle: "Battery Status",
        batteryState: "CHARGED",
        batteryInfo: "Battery ready for operation",
        startProgramTitle: "Program Start",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Operation Control",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "WATER DRAIN",
        settingsTitle: "Parameter Settings",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Advanced",
        workTime: "Robot work time: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Industrial robot",
        program1Title: "Program 1 parameter change",
        program2Title: "Program 2 parameter change",
        program3Title: "Program 3 parameter change",
        advancedTitle: "Advanced robot parameters",
        programFieldRobotPosition: "Robot position [mm]:",
        programFieldRobotVelocity: "Robot speed:",
        programFieldArmVelocity: "Arm speed:",
        programFieldArmRightPosition: "Right arm position [mm]:",
        programFieldArmLeftPosition: "Left arm position [mm]:",
        saveSettings: "Save settings",
        advancedManualVelocityLabel: "Robot speed in manual mode:",
        advancedFrontLimitLabel: "Minimum distance from the front:",
        advancedAlignmentDifferenceLabel: "Allowed alignment difference:",
        advancedMinFullWashAngleLabel: "Minimum distance to full arm rotation:",
        advancedSensorArmDistanceLabel: "Distance between the right sensor and the arm:",
        advancedFrontCorrectionLabel: "Front distance correction:",
        advancedStepsLabel: "Number of steps:",
        advancedWashCountTitle: "Washing count",
        advancedWashStartLabel: "start:",
        advancedWashStopLabel: "stop:",
        advancedArmDetectionTitle: "Arm position during object detection",
        advancedArmLeftLabel: "left:",
        advancedArmRightLabel: "right:",
        advancedRobotSpeedTitle: "Robot speed when",
        advancedPositioningLabel: "positioning:",
        advancedAlignmentLabel: "aligning:",
        advancedTurningLabel: "turning:",
        advancedDriveHysteresisTitle: "Robot drive hysteresis",
        advancedPlusLabel: "plus:",
        advancedMinusLabel: "minus:"
    },
    de: {
        panelTitle: "Steuerpanel",
        systemStatusTitle: "Systemstatus",
        systemReady: "SYSTEM BEREIT",
        noErrors: "Keine Fehler",
        workModeTitle: "Betriebsmodus",
        manualMode: "Manueller Modus",
        batteryTitle: "Batteriestatus",
        batteryState: "GELADEN",
        batteryInfo: "Batterie betriebsbereit",
        startProgramTitle: "Programmstart",
        btnProgram1: "Programm 1",
        btnProgram2: "Programm 2",
        btnProgram3: "Programm 3",
        operationControlTitle: "Betriebssteuerung",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "WASSER ABLASS",
        settingsTitle: "Parametereinstellungen",
        settingsProgram1: "Prg 1",
        settingsProgram2: "Prg 2",
        settingsProgram3: "Prg 3",
        advancedBtn: "Erweitert",
        workTime: "Roboterlaufzeit: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Industrieroboter",
        program1Title: "Parameteränderung von Programm 1",
        program2Title: "Parameteränderung von Programm 2",
        program3Title: "Parameteränderung von Programm 3",
        advancedTitle: "Erweiterte Roboterparameter",
        programFieldRobotPosition: "Roboterposition [mm]:",
        programFieldRobotVelocity: "Robotergeschwindigkeit:",
        programFieldArmVelocity: "Armgeschwindigkeit:",
        programFieldArmRightPosition: "Rechte Armposition [mm]:",
        programFieldArmLeftPosition: "Linke Armposition [mm]:",
        saveSettings: "Einstellungen speichern",
        advancedManualVelocityLabel: "Robotergeschwindigkeit im Handmodus:",
        advancedFrontLimitLabel: "Minimaler Abstand von vorne:",
        advancedAlignmentDifferenceLabel: "Zulässige Ausrichtungsdifferenz:",
        advancedMinFullWashAngleLabel: "Minimaler Abstand zur vollständigen Armrotation:",
        advancedSensorArmDistanceLabel: "Abstand zwischen dem rechten Sensor und dem Arm:",
        advancedFrontCorrectionLabel: "Korrektur des Abstands von vorne:",
        advancedStepsLabel: "Schrittanzahl:",
        advancedWashCountTitle: "Waschanzahl",
        advancedWashStartLabel: "start:",
        advancedWashStopLabel: "stopp:",
        advancedArmDetectionTitle: "Armposition bei Objekterkennung",
        advancedArmLeftLabel: "links:",
        advancedArmRightLabel: "rechts:",
        advancedRobotSpeedTitle: "Robotergeschwindigkeit bei",
        advancedPositioningLabel: "Positionierung:",
        advancedAlignmentLabel: "Ausrichtung:",
        advancedTurningLabel: "Drehen:",
        advancedDriveHysteresisTitle: "Roboterfahr-Hysterese",
        advancedPlusLabel: "plus:",
        advancedMinusLabel: "minus:"
    },
    fr: {
        panelTitle: "Panneau de contrôle",
        systemStatusTitle: "État du système",
        systemReady: "SYSTÈME PRÊT",
        noErrors: "Aucune erreur",
        workModeTitle: "Mode de travail",
        manualMode: "Mode manuel",
        batteryTitle: "État de la batterie",
        batteryState: "CHARGÉE",
        batteryInfo: "Batterie prête au travail",
        startProgramTitle: "Démarrage du programme",
        btnProgram1: "Programme 1",
        btnProgram2: "Programme 2",
        btnProgram3: "Programme 3",
        operationControlTitle: "Contrôle des opérations",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "VIDANGE D'EAU",
        settingsTitle: "Réglages des paramètres",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avancé",
        workTime: "Temps de travail du robot : 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industriel",
        program1Title: "Modification des paramètres du programme 1",
        program2Title: "Modification des paramètres du programme 2",
        program3Title: "Modification des paramètres du programme 3",
        advancedTitle: "Paramètres avancés du robot",
        programFieldRobotPosition: "Position du robot [mm] :",
        programFieldRobotVelocity: "Vitesse du robot :",
        programFieldArmVelocity: "Vitesse du bras :",
        programFieldArmRightPosition: "Position droite du bras [mm] :",
        programFieldArmLeftPosition: "Position gauche du bras [mm] :",
        saveSettings: "Enregistrer les réglages",
        advancedManualVelocityLabel: "Vitesse du robot en mode manuel :",
        advancedFrontLimitLabel: "Distance minimale depuis l'avant :",
        advancedAlignmentDifferenceLabel: "Différence d'alignement autorisée :",
        advancedMinFullWashAngleLabel: "Distance minimale jusqu'à la rotation complète du bras :",
        advancedSensorArmDistanceLabel: "Distance entre le capteur droit et le bras :",
        advancedFrontCorrectionLabel: "Correction de la distance depuis l'avant :",
        advancedStepsLabel: "Nombre de pas :",
        advancedWashCountTitle: "Nombre de lavages",
        advancedWashStartLabel: "début :",
        advancedWashStopLabel: "fin :",
        advancedArmDetectionTitle: "Position du bras lors de la détection d'objet",
        advancedArmLeftLabel: "gauche :",
        advancedArmRightLabel: "droite :",
        advancedRobotSpeedTitle: "Vitesse du robot lors de",
        advancedPositioningLabel: "positionnement :",
        advancedAlignmentLabel: "alignement :",
        advancedTurningLabel: "virage :",
        advancedDriveHysteresisTitle: "Hystérésis de conduite du robot",
        advancedPlusLabel: "plus :",
        advancedMinusLabel: "moins :"
    },
    es: {
        panelTitle: "Panel de control",
        systemStatusTitle: "Estado del sistema",
        systemReady: "SISTEMA LISTO",
        noErrors: "Sin errores",
        workModeTitle: "Modo de trabajo",
        manualMode: "Modo manual",
        batteryTitle: "Estado de la batería",
        batteryState: "CARGADA",
        batteryInfo: "Batería lista para trabajar",
        startProgramTitle: "Inicio del programa",
        btnProgram1: "Programa 1",
        btnProgram2: "Programa 2",
        btnProgram3: "Programa 3",
        operationControlTitle: "Control de operaciones",
        stopBtn: "STOP",
        pauseBtn: "PAUSA",
        resetBtn: "RESET",
        waterBtn: "DRENAJE DE AGUA",
        settingsTitle: "Configuración de parámetros",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avanzado",
        workTime: "Tiempo de trabajo del robot: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industrial",
        program1Title: "Cambio de parámetros del programa 1",
        program2Title: "Cambio de parámetros del programa 2",
        program3Title: "Cambio de parámetros del programa 3",
        advancedTitle: "Parámetros avanzados del robot",
        programFieldRobotPosition: "Posición del robot [mm]:",
        programFieldRobotVelocity: "Velocidad del robot:",
        programFieldArmVelocity: "Velocidad del brazo:",
        programFieldArmRightPosition: "Posición derecha del brazo [mm]:",
        programFieldArmLeftPosition: "Posición izquierda del brazo [mm]:",
        saveSettings: "Guardar configuración",
        advancedManualVelocityLabel: "Velocidad del robot en modo manual:",
        advancedFrontLimitLabel: "Distancia mínima desde el frente:",
        advancedAlignmentDifferenceLabel: "Diferencia de alineación permitida:",
        advancedMinFullWashAngleLabel: "Distancia mínima hasta la rotación completa del brazo:",
        advancedSensorArmDistanceLabel: "Distancia entre el sensor derecho y el brazo:",
        advancedFrontCorrectionLabel: "Corrección de distancia desde el frente:",
        advancedStepsLabel: "Número de pasos:",
        advancedWashCountTitle: "Cantidad de lavado",
        advancedWashStartLabel: "inicio:",
        advancedWashStopLabel: "fin:",
        advancedArmDetectionTitle: "Posición del brazo durante la detección de objetos",
        advancedArmLeftLabel: "izquierda:",
        advancedArmRightLabel: "derecha:",
        advancedRobotSpeedTitle: "Velocidad del robot al",
        advancedPositioningLabel: "posicionamiento:",
        advancedAlignmentLabel: "alineación:",
        advancedTurningLabel: "giro:",
        advancedDriveHysteresisTitle: "Histéresis de conducción del robot",
        advancedPlusLabel: "más:",
        advancedMinusLabel: "menos:"
    },
    ro: {
        panelTitle: "Panou de control",
        systemStatusTitle: "Starea sistemului",
        systemReady: "SISTEM GATA",
        noErrors: "Fără erori",
        workModeTitle: "Mod de operare",
        manualMode: "Mod manual",
        batteryTitle: "Starea bateriei",
        batteryState: "ÎNCĂRCATĂ",
        batteryInfo: "Bateria este gata de lucru",
        startProgramTitle: "Pornire program",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Control operațiuni",
        stopBtn: "STOP",
        pauseBtn: "PAUZĂ",
        resetBtn: "RESET",
        waterBtn: "EVACUARE APĂ",
        settingsTitle: "Setări parametri",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avansat",
        workTime: "Timp de lucru robot: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industrial",
        program1Title: "Schimbarea parametrilor programului 1",
        program2Title: "Schimbarea parametrilor programului 2",
        program3Title: "Schimbarea parametrilor programului 3",
        advancedTitle: "Parametri avansați ai robotului",
        programFieldRobotPosition: "Poziția robotului [mm]:",
        programFieldRobotVelocity: "Viteza robotului:",
        programFieldArmVelocity: "Viteza brațului:",
        programFieldArmRightPosition: "Poziția dreaptă a brațului [mm]:",
        programFieldArmLeftPosition: "Poziția stângă a brațului [mm]:",
        saveSettings: "Salvează setările",
        advancedManualVelocityLabel: "Viteza robotului în modul manual:",
        advancedFrontLimitLabel: "Distanța minimă din față:",
        advancedAlignmentDifferenceLabel: "Diferența permisă de aliniere:",
        advancedMinFullWashAngleLabel: "Distanța minimă până la rotația completă a brațului:",
        advancedSensorArmDistanceLabel: "Distanța dintre senzorul drept și braț:",
        advancedFrontCorrectionLabel: "Corecția distanței din față:",
        advancedStepsLabel: "Număr de pași:",
        advancedWashCountTitle: "Număr de spălări",
        advancedWashStartLabel: "start:",
        advancedWashStopLabel: "stop:",
        advancedArmDetectionTitle: "Poziția brațului în timpul detectării obiectelor",
        advancedArmLeftLabel: "stânga:",
        advancedArmRightLabel: "dreapta:",
        advancedRobotSpeedTitle: "Viteza robotului la",
        advancedPositioningLabel: "poziționare:",
        advancedAlignmentLabel: "aliniere:",
        advancedTurningLabel: "viraj:",
        advancedDriveHysteresisTitle: "Histereză de conducere a robotului",
        advancedPlusLabel: "plus:",
        advancedMinusLabel: "minus:"
    },
    bg: {
        panelTitle: "Контролен панел",
        systemStatusTitle: "Състояние на системата",
        systemReady: "СИСТЕМАТА Е ГОТОВА",
        noErrors: "Няма грешки",
        workModeTitle: "Режим на работа",
        manualMode: "Ръчен режим",
        batteryTitle: "Състояние на батерията",
        batteryState: "ЗАРЕДЕНА",
        batteryInfo: "Батерията е готова за работа",
        startProgramTitle: "Стартиране на програма",
        btnProgram1: "Програма 1",
        btnProgram2: "Програма 2",
        btnProgram3: "Програма 3",
        operationControlTitle: "Контрол на операциите",
        stopBtn: "СТОП",
        pauseBtn: "ПАУЗА",
        resetBtn: "НУЛИРАНЕ",
        waterBtn: "ИЗТОЧВАНЕ НА ВОДА",
        settingsTitle: "Настройки на параметри",
        settingsProgram1: "Прог 1",
        settingsProgram2: "Прог 2",
        settingsProgram3: "Прог 3",
        advancedBtn: "Разширени",
        workTime: "Работно време на робота: 2H : 1M",
        unitMm: "мм",
        robotAlt: "Индустриален робот",
        program1Title: "Промяна на параметрите на програма 1",
        program2Title: "Промяна на параметрите на програма 2",
        program3Title: "Промяна на параметрите на програма 3",
        advancedTitle: "Разширени параметри на робота",
        programFieldRobotPosition: "Позиция на робота [mm]:",
        programFieldRobotVelocity: "Скорост на робота:",
        programFieldArmVelocity: "Скорост на ръката:",
        programFieldArmRightPosition: "Дясна позиция на ръката [mm]:",
        programFieldArmLeftPosition: "Лява позиция на ръката [mm]:",
        saveSettings: "Запазване на настройките",
        advancedManualVelocityLabel: "Скорост на робота в ръчен режим:",
        advancedFrontLimitLabel: "Минимално разстояние отпред:",
        advancedAlignmentDifferenceLabel: "Допустима разлика при подравняване:",
        advancedMinFullWashAngleLabel: "Минимално разстояние до пълния завой на ръката:",
        advancedSensorArmDistanceLabel: "Разстояние между десния сензор и ръката:",
        advancedFrontCorrectionLabel: "Корекция на разстоянието отпред:",
        advancedStepsLabel: "Брой стъпки:",
        advancedWashCountTitle: "Брой измивания",
        advancedWashStartLabel: "начало:",
        advancedWashStopLabel: "край:",
        advancedArmDetectionTitle: "Позиция на ръката при откриване на обект",
        advancedArmLeftLabel: "ляво:",
        advancedArmRightLabel: "дясно:",
        advancedRobotSpeedTitle: "Скорост на робота при",
        advancedPositioningLabel: "позициониране:",
        advancedAlignmentLabel: "подравняване:",
        advancedTurningLabel: "скръчване:",
        advancedDriveHysteresisTitle: "Хистерезис на движение на робота",
        advancedPlusLabel: "плюс:",
        advancedMinusLabel: "минус:"
    },
    hu: {
        panelTitle: "Vezérlőpult",
        systemStatusTitle: "Rendszerállapot",
        systemReady: "RENDSZER KÉSZ",
        noErrors: "Nincsenek hibák",
        workModeTitle: "Üzemmód",
        manualMode: "Kézi mód",
        batteryTitle: "Akkumulátor állapota",
        batteryState: "FELTÖLTVE",
        batteryInfo: "Az akkumulátor munkára kész",
        startProgramTitle: "Program indítása",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Műveletvezérlés",
        stopBtn: "STOP",
        pauseBtn: "SZÜNET",
        resetBtn: "RESET",
        waterBtn: "VÍZLEERESZTÉS",
        settingsTitle: "Paraméterbeállítások",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Haladó",
        workTime: "Robot munkaidő: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Ipari robot",
        program1Title: "Program 1 paraméterváltoztatása",
        program2Title: "Program 2 paraméterváltoztatása",
        program3Title: "Program 3 paraméterváltoztatása",
        advancedTitle: "Robot speciális paraméterei",
        programFieldRobotPosition: "Robot helyzete [mm]:",
        programFieldRobotVelocity: "Robot sebessége:",
        programFieldArmVelocity: "Kar sebessége:",
        programFieldArmRightPosition: "Jobb kar pozíciója [mm]:",
        programFieldArmLeftPosition: "Bal kar pozíciója [mm]:",
        saveSettings: "Beállítások mentése",
        advancedManualVelocityLabel: "Robot sebessége kézi üzemmódban:",
        advancedFrontLimitLabel: "Minimális távolság elöl:",
        advancedAlignmentDifferenceLabel: "Engedélyezett igazítási eltérés:",
        advancedMinFullWashAngleLabel: "Minimális távolság a kar teljes forgatásáig:",
        advancedSensorArmDistanceLabel: "Távolság a jobb érzékelő és a kar között:",
        advancedFrontCorrectionLabel: "Elülső távolság korrekciója:",
        advancedStepsLabel: "Lépések száma:",
        advancedWashCountTitle: "Mosások száma",
        advancedWashStartLabel: "start:",
        advancedWashStopLabel: "stop:",
        advancedArmDetectionTitle: "A kar pozíciója tárgyfelismerés közben",
        advancedArmLeftLabel: "bal:",
        advancedArmRightLabel: "jobb:",
        advancedRobotSpeedTitle: "Robot sebessége",
        advancedPositioningLabel: "pozicionálás:",
        advancedAlignmentLabel: "igazítás:",
        advancedTurningLabel: "fordulás:",
        advancedDriveHysteresisTitle: "Robot meghajtás hiszterézis",
        advancedPlusLabel: "plusz:",
        advancedMinusLabel: "mínusz:"
    }
};
const redDot = document.querySelector('#redDot')
const yellowDot = document.querySelector('#yellowDot')
const greenDot = document.querySelector('#greenDot')
const errorDescription = document.querySelector('#error-description')
const noErrors = document.querySelector('#noErrors')
const manualMode = document.querySelector('#manualMode')
const autoBtns = document.querySelector('#auto-btns')
const autoBtn1 = document.querySelector('#auto-btn-1')
const autoBtn2 = document.querySelector('#auto-btn-2')
const autoBtn3 = document.querySelector('#auto-btn-3')
const configButtons = document.querySelectorAll(".config-btn");
const settingsPrograms = document.querySelectorAll(".settings-programs");
const closeButtons = document.querySelectorAll(".btn-popup");
const leftDistance = document.querySelector('#left-distance')
const frontDistance = document.querySelector('#front-distance')
const rightTopDistance = document.querySelector('#right-top-distance')
const rightBottomDistance = document.querySelector('#right-bottom-distance')

//connection with PLC //
$(document).ready(function(){
    $.ajaxSetup({ cache: false });

    setInterval(updateData, 500)

    $('#stopBtn').click(function() {
        stopRobot()
    })
    $('#pauseBtn').click(function() {
        updateData().then(vars=> {
            pauseRobot(vars)
        })
    })
    $('#resetBtn').click(function() {
        resetRobot()
    })
    $('#drainBtn').on('mousedown', function() {
        drainWater();
    });
    $('#drainBtn').on('touchstart', function() {
        drainWater();
    });
    $('#drainBtn').on('mouseup', function() {
        stopDrainWater();
    });
    $('#drainBtn').on('touchend', function() {
        stopDrainWater();
    });
    $('#auto-btns').click(function(e) {
        autoPrograms(e)
    })
    $("#settings-program-form1").submit(function(event) {
        event.preventDefault()
        submitForm(1)
    });
    $("#settings-program-form2").submit(function(event) {
        event.preventDefault()
        submitForm(2)
    });
    $("#settings-program-form3").submit(function(event) {
        event.preventDefault()
        submitForm(3)
    });
    $("#settings-program-form4").submit(function(event) {
        event.preventDefault()
        submitRobotForm()
    });
})

function updateData() {
    return $.get("IOVariablesUpdate.htm").then(result => {
        const variables = parsePLCVariables(result)
        error(variables)
        lights(variables)
        positionRobot(variables)
        stateBtns(variables)
        return variables;
    })
}
function parsePLCVariables(result) {
    return result.split('\n').filter(line => line.trim() !== '')
}

// function for change lights on the panel based on PLC variables
function lights(variables) {    
    if(variables[0] == 1) {
        redDot.classList.add('active')
    } else {
        redDot.classList.remove('active')
    }
    if(variables[1] == 1) {
        yellowDot.classList.add('active')
    } else {
        yellowDot.classList.remove('active')
    }
    if(variables[2] == 1) {
        greenDot.classList.add('active')
    } else {
        greenDot.classList.remove('active')
    }
}
// parth of code for change language on the panel
function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}
function changeLanguage(lang) {
    const dictionary = translations[lang] || translations.pl;

    Object.entries(dictionary).forEach(([key, value]) => {
        if (key === "unitMm") {
            document.querySelectorAll(".unitMm").forEach((element) => {
                element.textContent = value;
            });
            return;
        }
        if (key === "robotAlt") {
            const robotImage = document.getElementById("robotImage");
            if (robotImage) {
                robotImage.alt = value;
            }
            return;
        }
        setText(key, value);
    });

    document.querySelectorAll("[data-translate-key]").forEach((element) => {
        const key = element.dataset.translateKey;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.documentElement.lang = lang;
}

function initLanguageSwitcher() {
    const languageSelect = document.getElementById("languageSelect");
    const languageSwitcher = document.querySelector(".language-switcher");
    const languageButton = document.getElementById("languageButton");
    const selectedLanguageLabel = document.getElementById("selectedLanguageLabel");
    const selectedLanguageShort = document.getElementById("selectedLanguageShort");
    const languageOptions = document.querySelectorAll(".language-option");

    if (!languageSelect || !languageSwitcher || !languageButton) {
        return;
    }

    const closeMenu = () => {
        languageSwitcher.classList.remove("is-open");
        languageButton.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        languageSwitcher.classList.add("is-open");
        languageButton.setAttribute("aria-expanded", "true");
    };

    const toggleMenu = () => {
        if (languageSwitcher.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    languageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    languageOptions.forEach((option) => {
        option.addEventListener("click", (event) => {
            event.stopPropagation();

            const lang = option.dataset.lang;

            languageSelect.value = lang;
            changeLanguage(lang);

            if (selectedLanguageLabel) {
                selectedLanguageLabel.textContent = option.textContent;
            }

            if (selectedLanguageShort) {
                selectedLanguageShort.textContent = option.dataset.short;
            }

            languageOptions.forEach((languageOption) => {
                languageOption.classList.remove("active");
            });

            option.classList.add("active");
            closeMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (!languageSwitcher.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
function initProgramButtons() {
    const programButtons = document.querySelectorAll(".btn-prog");

    programButtons.forEach((button) => {
        button.addEventListener("click", () => {
            programButtons.forEach((programButton) => {
                programButton.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initProgramButtons();
});
// function for change error description on the panel based on PLC variables
const errorDescriptionArray_pl = ['Awaryjne zatrzymanie',
                                'Niskie napięcie akumulatora',
                                'Przedni prawy czujnik poza zakresem',
                                'Zbyt mały dystans przed robotem',
                                'Zbyt mały dystans po prawej stronie robota',
                                'Błąd silnika prawego koła',
                                'Błąd silnika lewego koła',
                                'Błąd silnika ramienia'
]

const errorDescriptionArray_en = ['Emergency stop',
                                'Low battery voltage',
                                'Front right sensor out of range',
                                'Too small distance in front of the robot',
                                'Too small distance on the right side of the robot',
                                'Right wheel motor error',
                                'Left wheel motor error',
                                'Arm motor error'
]

const errorDescriptionArray_de = ['Not-Aus',
                                'Niedrige Batteriespannung',
                                'Front rechter Sensor ausserhalb des Bereichs',
                                'Zu geringer Abstand vor dem Roboter',
                                'Zu geringer Abstand auf der rechten Seite des Roboters',
                                'Fehler des rechten Radmotors',
                                'Fehler des linken Radmotors',
                                'Fehler des Arm-Motors'
]

const errorDescriptionArray_fr = ['Arrêt d\'urgence',
                                'Basse tension de batterie',
                                'Capteur avant droit hors de portée',
                                'Distance trop courte devant le robot',
                                'Distance trop courte à droite du robot',
                                'Défaillance du moteur de la roue droite',
                                'Défaillance du moteur de la roue gauche',
                                'Défaillance du moteur du bras'
]

const errorDescriptionArray_es = ['Parada de emergencia',
                                'Bajo voltaje de la batería',
                                'Sensor delantero derecho fuera de rango',
                                'Distancia demasiado corta delante del robot',
                                'Distancia demasiado corta a la derecha del robot',
                                'Error del motor de la rueda derecha',
                                'Error del motor de la rueda izquierda',
                                'Error del motor del brazo'
]

const errorDescriptionArray_ro = ['Oprire de urgență',
                                'Tensiune scăzută a bateriei',
                                'Senzor frontal drept în afara domeniului',
                                'Distanță prea mică în fața robotului',
                                'Distanță prea mică în partea dreaptă a robotului',
                                'Eroare a motorului roții drepte',
                                'Eroare a motorului roții stângi',
                                'Eroare a motorului brațului'
]

const errorDescriptionArray_bg = ['Аварийно спиране',
                                'Ниско напрежение на батерията',
                                'Преден десен сензор извън обхвата',
                                'Твърде малко разстояние пред робота',
                                'Твърде малко разстояние вдясно от робота',
                                'Грешка на двигателя на дясното колело',
                                'Грешка на двигателя на лявото колело',
                                'Грешка на двигателя на ръката'
]

const errorDescriptionArray_hu = ['Vészleállítás',
                                'Alacsony akkumulátorfeszültség',
                                'A jobb elülső érzékelő a tartományon kívül van',
                                'Túl kicsi távolság a robot előtt',
                                'Túl kicsi távolság a robot jobb oldalán',
                                'A jobb kerékmotor hiba',
                                'A bal kerékmotor hiba',
                                'A kar motorjának hibája'
]

function error(variables) {
    if (variables[7] == 100) {
        errorDescription.textContent = 'SYSTEM GOTOWY'
        noErrors.textContent = 'Brak błędów'
    } else {
        errorDescription.classList.add('Błąd')
        let item = parseInt(variables[8])
        let array =  errorDescriptionArray_pl
        if (document.documentElement.lang === 'en') {
            array = errorDescriptionArray_en
        } else if (document.documentElement.lang === 'de') {
            array = errorDescriptionArray_de
        } else if (document.documentElement.lang === 'fr') {
            array = errorDescriptionArray_fr
        } else if (document.documentElement.lang === 'es') {
            array = errorDescriptionArray_es
        } else if (document.documentElement.lang === 'ro') {
            array = errorDescriptionArray_ro
        } else if (document.documentElement.lang === 'bg') {
            array = errorDescriptionArray_bg
        } else if (document.documentElement.lang === 'hu') {
            array = errorDescriptionArray_hu
        }
        errorDescription.textContent = array[item]
    
    }
}
// function for send PLC variable to start auto program based on button click
function autoPrograms(e) {
    if (e.target == autoBtn1) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram1' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
    if (e.target == autoBtn2) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram2' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
    if (e.target == autoBtn3) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram3' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
} 
// functions STOP, PAUSE, RESET, DRAIN WATER for send PLC variable based on button click
function stopRobot() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swEStop') + '=' + 1)
    // postData.push(escape('"DB_MAIN".START') + '=' + 0)
    const sdata = postData.join('&');
    $.post(url,sdata);
    autoBtns.style.pointerEvents = 'auto'
    let postDataAuto = [];
    postDataAuto.push(escape('"virtualPilot".swProgram1') + '=' + 0)
    postDataAuto.push(escape('"virtualPilot".swProgram2') + '=' + 0)
    postDataAuto.push(escape('"virtualPilot".swProgram3') + '=' + 0)
    const sdataAuto = postDataAuto.join('&');
    $.post(url,sdataAuto);
}
function pauseRobot(vars) {
    const url = 'IOVariables.htm'; 
    let postData = [];
    if (vars[9] == 1) {
        // update style for pauze 
        pauseBtn.classList.add('pause')
        pauseBtn.classList.remove('wait') 
        pauseBtn.classList.remove('continue') 
        pauseBtn.textContent = 'Pauza'
        postData.push(escape('"virtualPilot".swStop') + '=' + 0)
        clickedPauseBtn = 0
    } else {
        // update style for wait 
        pauseBtn.classList.add('wait') 
        pauseBtn.classList.remove('continue') 
        pauseBtn.classList.remove('pause')
        pauseBtn.textContent = 'Czekaj'
        clickedPauseBtn = 1
        postData.push(escape('"virtualPilot".swStop') + '=' + 1)
    }
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function resetRobot() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swInit') + '=' + 1)
    // TODO: set to 0 after response
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function drainWater() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swDrainWater') + '=' + 1)
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function stopDrainWater() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swDrainWater') + '=' + 0)
    const sdata = postData.join('&');
    $.post(url,sdata);
}

// functions for open and close settings windows based on button click
function closeAllWindows() {
    settingsPrograms.forEach(window => {
        window.classList.remove("active-program");
    });
    configButtons.forEach(btn => {
        btn.classList.remove("active");
    });
}

function centerWindow(windowBox) {
    windowBox.style.left = "50%";
    windowBox.style.top = "50%";
    windowBox.style.transform = "translate(-50%, -50%) scale(1)";
}

configButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        const popup = settingsPrograms[index];
        if(popup.classList.contains("active-program")){
            closeAllWindows();
        }else{
            closeAllWindows();
            popup.classList.add("active-program");
            button.classList.add("active");
            centerWindow(popup);
        }
    });
});

closeButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        closeAllWindows();
    });
});

settingsPrograms.forEach(windowBox=>{
    const header = windowBox.querySelector(".title-popup");
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.style.cursor = "grab";

    header.addEventListener("mousedown",(e)=>{
        e.preventDefault();
        const rect = windowBox.getBoundingClientRect();
        const currentLeft = rect.left;
        const currentTop = rect.top;

        windowBox.style.left = `${currentLeft}px`;
        windowBox.style.top = `${currentTop}px`;
        windowBox.style.transform = "none";

        offsetX = e.clientX - currentLeft;
        offsetY = e.clientY - currentTop;
        isDragging = true;
        header.style.cursor = "grabbing";
        windowBox.style.transition = "none";
    });

    document.addEventListener("mouseup",()=>{
        isDragging = false;
        header.style.cursor = "grab";
        windowBox.style.transition = "opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease";
    });

    document.addEventListener("mousemove",(e)=>{
        if(!isDragging) return;
        e.preventDefault();

        const nextLeft = e.clientX - offsetX;
        const nextTop = e.clientY - offsetY;
        const maxLeft = window.innerWidth - windowBox.offsetWidth - 12;
        const maxTop = window.innerHeight - windowBox.offsetHeight - 12;

        windowBox.style.left = `${Math.max(12, Math.min(maxLeft, nextLeft))}px`;
        windowBox.style.top = `${Math.max(12, Math.min(maxTop, nextTop))}px`;
    });
});

window.addEventListener("resize", () => {
    settingsPrograms.forEach(windowBox => {
        if (windowBox.classList.contains("active-program")) {
            centerWindow(windowBox);
        }
    });
});

// functions for send PLC variables based on settings form submit
function submitForm(numOfProgram) {
    let paramString = '#param' + numOfProgram
    const param1Val = $(paramString +'-1').val();
    const param2Val = $(paramString +'-2').val();
    const param3Val = $(paramString +'-3').val();
    const param4Val = $(paramString +'-4').val();
    const param5Val = $(paramString +'-5').val();

    let postData = [];
    let settingsName = '"dbSettings".settingProgam' + numOfProgram
    postData.push(escape(settingsName + '.setRightDistance') + '=' + param1Val);
    postData.push(escape(settingsName + '.setVelocity') + '=' + param2Val);
    postData.push(escape(settingsName + '.setWashVelocity') + '=' + param3Val);
    postData.push(escape(settingsName + '.setWashRightPosition') + '=' + param4Val);
    postData.push(escape(settingsName + '.setWashLeftPosition') + '=' + param5Val); 

    const url = 'IOVariables.htm'; 
    const sdata = postData.join('&');
    $.post(url,sdata);
    resetSettingsStyle()
}
function submitRobotForm() {
    let paramString = '#param-robot-'
    const param1Val = $(paramString +'1').val();
    const param2Val = $(paramString +'2').val();
    const param3Val = $(paramString +'3').val();
    const param4Val = $(paramString +'4').val();
    const param5Val = $(paramString +'5').val();
    const param6Val = $(paramString +'6').val();
    const param7Val = $(paramString +'7').val();
    const param8Val = $(paramString +'8').val();
    const param9Val = $(paramString +'9').val();
    const param10Val = $(paramString +'10').val();
    const param11Val = $(paramString +'11').val();
    const param12Val = $(paramString +'12').val();
    const param13Val = $(paramString +'13').val();
    const param14Val = $(paramString +'14').val();
    const param15Val = $(paramString +'15').val();
    const param16Val = $(paramString +'16').val();
    const param17Val = $(paramString +'17').val();

    let postData = [];
    let settingsName = '"dbSettings"'
    postData.push(escape(settingsName + '.setManualVelocity') + '=' + param1Val);
    postData.push(escape(settingsName + '.frontLimitToSetRobot') + '=' + param2Val);
    postData.push(escape(settingsName + '.numWashesBeforeStart') + '=' + param3Val);
    postData.push(escape(settingsName + '.numWashesAtTheEnd') + '=' + param4Val);
    postData.push(escape(settingsName + '.leftSWLimit') + '=' + param5Val); 
    postData.push(escape(settingsName + '.rightSWLimit') + '=' + param6Val); 
    postData.push(escape(settingsName + '.setRobotVelocity') + '=' + param7Val); 
    postData.push(escape(settingsName + '.allignVelocity') + '=' + param8Val); 
    postData.push(escape(settingsName + '.maxRightDistanceToCorrecRobotDriving') + '=' + param9Val); 
    postData.push(escape(settingsName + '.minRightDistanceToCorrecRobotDriving') + '=' + param10Val); 
    postData.push(escape(settingsName + '.diffDistanceToAllign') + '=' + param11Val); 
    postData.push(escape(settingsName + '.minDistanceToFullWashAngle') + '=' + param12Val); 
    postData.push(escape(settingsName + '.distanceToResetSWLimitOfWM') + '=' + param13Val); 
    postData.push(escape(settingsName + '.correctFrontDistance') + '=' + param14Val); 
    postData.push(escape(settingsName + '.maxRobotSteps') + '=' + param15Val); 
    postData.push(escape(settingsName + '.setManualVelocity') + '=' + param16Val); 
    postData.push(escape(settingsName + '.turningVelocity') + '=' + param17Val); 

    const url = 'IOVariables.htm'; 
    const sdata = postData.join('&');
    $.post(url,sdata);
    closeSettingsRobot()
}

// function for change distance values on the panel based on PLC variables  
function positionRobot(variables) {
    leftDistance.textContent = variables[3]
    frontDistance.textContent = variables[4]
    rightTopDistance.textContent = variables[5]
    rightBottomDistance.textContent = variables[6]
}