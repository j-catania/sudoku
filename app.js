const FULL_MASK = 0b1111111110;
const STORAGE_KEY = "sudoku-game-v1";
const TRANSLATIONS = {
  fr: {
    title: "Sudoku — une pause qui fait du bien",
    brandLabel: "Sudoku, accueil",
    topbarNote: "Votre petit moment à vous",
    helpLabel: "Afficher les règles",
    helpTitle: "Comment jouer",
    languageLabel: "Langue",
    themeToDark: "Activer le mode sombre",
    themeToLight: "Activer le mode clair",
    eyebrow: "LE JEU DU JOUR",
    headlineFirst: "Un peu de calme,",
    headlineSecond: "une grille à la fois.",
    introCopy: "Choisissez votre niveau et laissez les chiffres faire leur magie.",
    gameLabel: "Jeu de Sudoku",
    mistakesLabel: "Erreurs",
    boardLabel: "Grille de Sudoku",
    numberPadLabel: "Choisir un chiffre",
    erase: "Effacer",
    notes: "Notes",
    hint: "Indice",
    check: "Vérifier",
    difficultyEyebrow: "À VOTRE RYTHME",
    difficultyTitle: "Choisissez votre défi",
    difficultyLabel: "Niveau de difficulté",
    easyName: "Tout doux",
    easyDescription: "Pour se mettre en train",
    mediumName: "Équilibré",
    mediumDescription: "Un joli petit défi",
    hardName: "Corsé",
    hardDescription: "Pour les esprits affûtés",
    expertName: "Expert",
    expertDescription: "Le grand frisson",
    newGame: "Nouvelle partie",
    tipTitle: "Un petit rappel",
    tipCopy: "Chaque chiffre de 1 à 9 apparaît une seule fois par ligne, colonne et carré.",
    keyboardHintPrefix: "ASTUCE : utilisez les touches",
    keyboardHintSuffix: "de votre clavier.",
    footerMadeWith: "Fait avec",
    heart: "amour",
    footerBy: "par",
    footerTagline: "Pas de pression. Juste vous et la grille.",
    aiCredit: "Réalisé avec GPT-6 Luna",
    privacyNote: "Ce site existe pour vous offrir un Sudoku gratuit, sans publicité. Votre partie est sauvegardée uniquement dans le stockage local de ce navigateur ; rien n'est envoyé ni conservé sur un serveur.",
    close: "Fermer",
    helpEyebrow: "COMMENT JOUER",
    helpHeading: "Les règles sont simples.",
    helpCopy: "Remplissez la grille pour que chaque ligne, chaque colonne et chacun des neuf carrés contienne les chiffres de 1 à 9, sans répétition.",
    helpStepOne: "Sélectionnez une case puis un chiffre, ou tapez directement au clavier.",
    helpStepTwo: "Activez Notes pour garder vos hypothèses dans une case.",
    helpStepThree: "Les cases colorées en rouge signalent un chiffre incorrect. Besoin d'aide ? Utilisez Indice.",
    gotIt: "C'est parti !",
    numberLabel: "Chiffre {number}",
    numberRemaining: "{remaining} restant(s)",
    cellLabel: "Ligne {row}, colonne {column}{value}",
    cellValue: ", {value}",
    emptyCell: ", vide",
    statusPlaying: "À vous de jouer",
    statusCompleted: "Grille terminée !",
    checkClear: "Tout est juste jusqu'ici. Continuez comme ça !",
    checkWrongOne: "{count} chiffre à revoir, en rouge sur la grille.",
    checkWrongMany: "{count} chiffres à revoir, en rouge sur la grille.",
    alreadyCompleted: "Cette grille est déjà terminée. À la suivante ?",
    hintSelect: "Sélectionnez une case vide pour recevoir un indice.",
    hintSuccess: "Un petit coup de pouce, et c'est reparti ✨",
    hintCompleted: "Bien joué ! Grille terminée en {time} 🎉",
    gameCompleted: "Bravo ! Vous avez terminé en {time} 🎉",
    newGameToast: "Nouvelle grille « {level} » prête !",
    notesOn: "Mode notes activé",
    notesOff: "Mode notes désactivé",
    restoreError: "La sauvegarde locale est invalide. Une nouvelle grille a été créée.",
    storageLoadError: "Impossible de lire la sauvegarde locale de cette partie.",
    storageSaveError: "Impossible de sauvegarder ici. Votre partie reste disponible jusqu'à la fermeture de cette page.",
  },
  en: {
    title: "Sudoku — a little pause for yourself",
    brandLabel: "Sudoku home",
    topbarNote: "A little moment for yourself",
    helpLabel: "Show the rules",
    helpTitle: "How to play",
    languageLabel: "Language",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    eyebrow: "TODAY'S PUZZLE",
    headlineFirst: "A little calm,",
    headlineSecond: "one grid at a time.",
    introCopy: "Choose your level and let the numbers work their magic.",
    gameLabel: "Sudoku game",
    mistakesLabel: "Mistakes",
    boardLabel: "Sudoku grid",
    numberPadLabel: "Choose a number",
    erase: "Erase",
    notes: "Notes",
    hint: "Hint",
    check: "Check",
    difficultyEyebrow: "AT YOUR OWN PACE",
    difficultyTitle: "Choose your challenge",
    difficultyLabel: "Difficulty level",
    easyName: "Gentle",
    easyDescription: "A nice warm-up",
    mediumName: "Balanced",
    mediumDescription: "A little challenge",
    hardName: "Tricky",
    hardDescription: "For sharp minds",
    expertName: "Expert",
    expertDescription: "The ultimate challenge",
    newGame: "New game",
    tipTitle: "A little reminder",
    tipCopy: "Each number from 1 to 9 appears only once in every row, column, and box.",
    keyboardHintPrefix: "TIP: use the",
    keyboardHintSuffix: "keys on your keyboard.",
    footerMadeWith: "Made with",
    heart: "love",
    footerBy: "by",
    footerTagline: "No pressure. Just you and the grid.",
    aiCredit: "Made with GPT-6 Luna",
    privacyNote: "This site exists to give you free, ad-free Sudoku. Your game is saved only in this browser's local storage; nothing is sent to or stored on a server.",
    close: "Close",
    helpEyebrow: "HOW TO PLAY",
    helpHeading: "The rules are simple.",
    helpCopy: "Fill the grid so every row, column, and 3×3 box contains the numbers 1 to 9, with no repeats.",
    helpStepOne: "Select a cell and a number, or type a number on your keyboard.",
    helpStepTwo: "Turn on Notes to keep your possibilities in a cell.",
    helpStepThree: "Red cells mark an incorrect number. Need a hand? Use Hint.",
    gotIt: "Let's play!",
    numberLabel: "Number {number}",
    numberRemaining: "{remaining} left",
    cellLabel: "Row {row}, column {column}{value}",
    cellValue: ", {value}",
    emptyCell: ", empty",
    statusPlaying: "Your move",
    statusCompleted: "Puzzle complete!",
    checkClear: "Everything is correct so far. Keep it up!",
    checkWrongOne: "{count} number to review, highlighted in red.",
    checkWrongMany: "{count} numbers to review, highlighted in red.",
    alreadyCompleted: "This puzzle is already complete. Ready for another?",
    hintSelect: "Select an empty cell to get a hint.",
    hintSuccess: "A little help, and you're back in the game ✨",
    hintCompleted: "Well done! Puzzle complete in {time} 🎉",
    gameCompleted: "Congratulations! You finished in {time} 🎉",
    newGameToast: "Your new {level} puzzle is ready!",
    notesOn: "Notes mode on",
    notesOff: "Notes mode off",
    restoreError: "The local save is invalid. A new puzzle has been created.",
    storageLoadError: "This game could not be read from local storage.",
    storageSaveError: "This game could not be saved here. It will remain available until you close this page.",
  },
};
const LEVELS = {
  easy: { blanks: 38, name: "easyName" },
  medium: { blanks: 46, name: "mediumName" },
  hard: { blanks: 52, name: "hardName" },
  expert: { blanks: 57, name: "expertName" },
};

const boardElement = document.querySelector("#board");
const numberPad = document.querySelector("#number-pad");
const timerElement = document.querySelector("#timer");
const mistakesElement = document.querySelector("#mistakes");
const statusElement = document.querySelector("#game-status");
const toastElement = document.querySelector("#toast");
const notesButton = document.querySelector("#notes-button");
const dialogElement = document.querySelector("#help-dialog");
const themeButton = document.querySelector("#theme-button");
const themeIcon = document.querySelector("#theme-icon");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

let puzzle = [];
let solution = [];
let values = [];
let notes = [];
let selectedCell = null;
let activeLevel = "easy";
let notesMode = false;
let mistakes = 0;
let elapsedSeconds = 0;
let completed = false;
let currentLanguage = "fr";
let currentTheme = "light";
let storageWarningShown = false;
let toastTimeout;

function t(key, values = {}) {
  const template = TRANSLATIONS[currentLanguage][key];
  if (!template) throw new Error(`Missing ${currentLanguage} translation: ${key}`);
  return template.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
}

function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function makeSolution() {
  const bands = shuffled([0, 1, 2]);
  const stacks = shuffled([0, 1, 2]);
  const rows = bands.flatMap((band) => shuffled([0, 1, 2]).map((row) => band * 3 + row));
  const columns = stacks.flatMap((stack) => shuffled([0, 1, 2]).map((column) => stack * 3 + column));
  const digits = shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const pattern = (row, column) => (row * 3 + Math.floor(row / 3) + column) % 9;
  return rows.flatMap((row) => columns.map((column) => digits[pattern(row, column)]));
}

function countSolutions(source, limit = 2) {
  const cells = [...source];
  const rowMasks = Array(9).fill(0);
  const columnMasks = Array(9).fill(0);
  const boxMasks = Array(9).fill(0);

  for (let index = 0; index < 81; index += 1) {
    const value = cells[index];
    if (!value) continue;
    const row = Math.floor(index / 9);
    const column = index % 9;
    const box = Math.floor(row / 3) * 3 + Math.floor(column / 3);
    const bit = 1 << value;
    if ((rowMasks[row] | columnMasks[column] | boxMasks[box]) & bit) return 0;
    rowMasks[row] |= bit;
    columnMasks[column] |= bit;
    boxMasks[box] |= bit;
  }

  let solutions = 0;
  function search() {
    if (solutions >= limit) return;
    let bestIndex = -1;
    let bestCandidates = 0;
    let fewest = 10;

    for (let index = 0; index < 81; index += 1) {
      if (cells[index]) continue;
      const row = Math.floor(index / 9);
      const column = index % 9;
      const box = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      const candidates = FULL_MASK & ~(rowMasks[row] | columnMasks[column] | boxMasks[box]);
      const count = candidates.toString(2).replaceAll("0", "").length;
      if (count === 0) return;
      if (count < fewest) {
        bestIndex = index;
        bestCandidates = candidates;
        fewest = count;
        if (count === 1) break;
      }
    }

    if (bestIndex === -1) {
      solutions += 1;
      return;
    }

    const row = Math.floor(bestIndex / 9);
    const column = bestIndex % 9;
    const box = Math.floor(row / 3) * 3 + Math.floor(column / 3);
    for (let digit = 1; digit <= 9; digit += 1) {
      const bit = 1 << digit;
      if (!(bestCandidates & bit)) continue;
      cells[bestIndex] = digit;
      rowMasks[row] |= bit;
      columnMasks[column] |= bit;
      boxMasks[box] |= bit;
      search();
      cells[bestIndex] = 0;
      rowMasks[row] ^= bit;
      columnMasks[column] ^= bit;
      boxMasks[box] ^= bit;
      if (solutions >= limit) return;
    }
  }

  search();
  return solutions;
}

function makePuzzle(level) {
  const answer = makeSolution();
  const grid = [...answer];
  const positions = shuffled(Array.from({ length: 81 }, (_, index) => index));
  let removed = 0;

  for (const position of positions) {
    if (removed >= LEVELS[level].blanks) break;
    const value = grid[position];
    grid[position] = 0;
    if (countSolutions(grid) === 1) {
      removed += 1;
    } else {
      grid[position] = value;
    }
  }

  return { grid, answer };
}

function isDigitGrid(grid) {
  return Array.isArray(grid) && grid.length === 81 &&
    grid.every((value) => Number.isInteger(value) && value >= 0 && value <= 9);
}

function isValidSave(save) {
  if (!save || typeof save !== "object" ||
      !["easy", "medium", "hard", "expert"].includes(save.level) ||
      !["fr", "en"].includes(save.language) ||
      !(save.theme === undefined || ["light", "dark"].includes(save.theme)) ||
      typeof save.notesMode !== "boolean" ||
      typeof save.completed !== "boolean" ||
      !Number.isInteger(save.mistakes) || save.mistakes < 0 ||
      !Number.isInteger(save.elapsedSeconds) || save.elapsedSeconds < 0 ||
      !(save.selectedCell === null || (Number.isInteger(save.selectedCell) && save.selectedCell >= 0 && save.selectedCell < 81)) ||
      !isDigitGrid(save.puzzle) || !isDigitGrid(save.solution) || !isDigitGrid(save.values) ||
      !Array.isArray(save.notes) || save.notes.length !== 81) return false;

  if (!save.solution.every((value) => value >= 1 && value <= 9) ||
      countSolutions(save.solution) !== 1 ||
      countSolutions(save.puzzle) !== 1) return false;

  for (let index = 0; index < 81; index += 1) {
    if (save.puzzle[index] && (save.puzzle[index] !== save.solution[index] || save.values[index] !== save.puzzle[index])) return false;
    if (!Array.isArray(save.notes[index]) ||
        save.notes[index].some((note) => !Number.isInteger(note) || note < 1 || note > 9) ||
        new Set(save.notes[index]).size !== save.notes[index].length ||
        (save.values[index] !== 0 && save.notes[index].length > 0)) return false;
  }

  return save.completed === save.values.every((value, index) => value === save.solution[index]);
}

function saveGame() {
  if (!puzzle.length) return;
  const save = {
    level: activeLevel,
    language: currentLanguage,
    theme: currentTheme,
    puzzle,
    solution,
    values,
    notes: notes.map((cellNotes) => [...cellNotes]),
    selectedCell,
    notesMode,
    mistakes,
    elapsedSeconds,
    completed,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
    storageWarningShown = false;
  } catch (error) {
    console.error("Unable to save the current Sudoku game locally.", error);
    if (!storageWarningShown) {
      storageWarningShown = true;
      showToast(t("storageSaveError"));
    }
  }
}

function restoreGame() {
  let serialized;
  try {
    serialized = localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error("Unable to read the saved Sudoku game from local storage.", error);
    showToast(t("storageLoadError"));
    return false;
  }
  if (!serialized) return false;

  let save;
  try {
    save = JSON.parse(serialized);
  } catch (error) {
    console.error("The saved Sudoku game is not valid JSON.", error);
    showToast(t("restoreError"));
    return false;
  }
  if (!isValidSave(save)) {
    showToast(t("restoreError"));
    return false;
  }

  activeLevel = save.level;
  currentLanguage = save.language;
  currentTheme = save.theme ?? "light";
  puzzle = save.puzzle;
  solution = save.solution;
  values = save.values;
  notes = save.notes.map((cellNotes) => new Set(cellNotes));
  selectedCell = save.selectedCell;
  notesMode = save.notesMode;
  mistakes = save.mistakes;
  elapsedSeconds = save.elapsedSeconds;
  completed = save.completed;
  return true;
}

function updateDifficultyButtons() {
  document.querySelectorAll(".difficulty-option").forEach((button) => {
    const active = button.dataset.level === activeLevel;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function applyTheme() {
  const darkMode = currentTheme === "dark";
  document.documentElement.dataset.theme = currentTheme;
  themeIcon.textContent = darkMode ? "☀" : "☾";
  themeButton.setAttribute("aria-label", t(darkMode ? "themeToLight" : "themeToDark"));
  themeButton.title = t(darkMode ? "themeToLight" : "themeToDark");
  themeButton.setAttribute("aria-pressed", String(darkMode));
  themeColorMeta.content = darkMode ? "#18231d" : "#f5f6f2";
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  for (const button of numberPad.querySelectorAll("[data-number]")) {
    button.setAttribute("aria-label", t("numberLabel", { number: button.dataset.number }));
  }
  statusElement.textContent = t(completed ? "statusCompleted" : "statusPlaying");
  mistakesElement.textContent = String(mistakes);
  timerElement.textContent = formatTime(elapsedSeconds);
  notesButton.setAttribute("aria-pressed", String(notesMode));
  notesButton.classList.toggle("active", notesMode);
  applyTheme();
  updateDifficultyButtons();
  renderBoard();
}

function renderBoard() {
  const fragment = document.createDocumentFragment();
  boardElement.replaceChildren();

  for (let index = 0; index < 81; index += 1) {
    const cell = document.createElement("button");
    const row = Math.floor(index / 9);
    const column = index % 9;
    const value = values[index];
    cell.type = "button";
    cell.className = "cell";
    cell.dataset.index = String(index);
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("aria-label", t("cellLabel", {
      row: row + 1,
      column: column + 1,
      value: value ? t("cellValue", { value }) : t("emptyCell"),
    }));
    if (puzzle[index]) cell.classList.add("given");
    if (value) cell.textContent = String(value);
    else if (notes[index].size) {
      const noteGrid = document.createElement("span");
      noteGrid.className = "notes-grid";
      noteGrid.setAttribute("aria-hidden", "true");
      for (let digit = 1; digit <= 9; digit += 1) {
        const note = document.createElement("span");
        note.textContent = notes[index].has(digit) ? String(digit) : "";
        noteGrid.append(note);
      }
      cell.append(noteGrid);
    }
    if (values[index] && values[index] !== solution[index]) cell.classList.add("error");
    if (selectedCell === index) cell.classList.add("selected");
    if (selectedCell !== null) {
      const selectedRow = Math.floor(selectedCell / 9);
      const selectedColumn = selectedCell % 9;
      if (row === selectedRow || column === selectedColumn ||
          (Math.floor(row / 3) === Math.floor(selectedRow / 3) && Math.floor(column / 3) === Math.floor(selectedColumn / 3))) {
        cell.classList.add("related");
      }
      if (values[selectedCell] && value === values[selectedCell]) cell.classList.add("same-number");
    }
    fragment.append(cell);
  }
  boardElement.append(fragment);
  updateNumberPad();
  saveGame();
}

function updateNumberPad() {
  for (const button of numberPad.querySelectorAll("button")) {
    const number = Number(button.dataset.number);
    const remaining = 9 - values.filter((value) => value === number).length;
    button.disabled = remaining === 0;
    button.title = t("numberRemaining", { remaining });
  }
}

function selectCell(index) {
  selectedCell = index;
  renderBoard();
}

function enterDigit(digit) {
  if (selectedCell === null || puzzle[selectedCell] || completed) return;
  if (notesMode) {
    if (values[selectedCell]) return;
    if (notes[selectedCell].has(digit)) notes[selectedCell].delete(digit);
    else notes[selectedCell].add(digit);
  } else {
    values[selectedCell] = digit;
    notes[selectedCell].clear();
    if (digit !== solution[selectedCell]) {
      mistakes += 1;
      mistakesElement.textContent = String(mistakes);
    }
    if (values.every((value, index) => value === solution[index])) {
      completed = true;
      statusElement.textContent = t("statusCompleted");
      renderBoard();
      showToast(t("gameCompleted", { time: formatTime(elapsedSeconds) }));
      return;
    }
  }
  renderBoard();
}

function eraseSelected() {
  if (selectedCell === null || puzzle[selectedCell] || completed) return;
  values[selectedCell] = 0;
  notes[selectedCell].clear();
  renderBoard();
}

function checkBoard() {
  if (completed) {
    showToast(t("alreadyCompleted"));
    return;
  }
  const wrongCells = values.reduce((total, value, index) => total + Number(value !== 0 && value !== solution[index]), 0);
  if (wrongCells === 0) {
    showToast(t("checkClear"));
    return;
  }
  showToast(t(wrongCells === 1 ? "checkWrongOne" : "checkWrongMany", { count: wrongCells }));
  renderBoard();
}

function hint() {
  if (completed) return;
  const target = selectedCell !== null && !puzzle[selectedCell] && values[selectedCell] !== solution[selectedCell]
    ? selectedCell
    : values.findIndex((value, index) => !puzzle[index] && value !== solution[index]);
  if (target === -1) {
    showToast(t("hintSelect"));
    return;
  }
  selectedCell = target;
  values[target] = solution[target];
  notes[target].clear();
  renderBoard();
  if (values.every((value, index) => value === solution[index])) {
    completed = true;
    statusElement.textContent = t("statusCompleted");
    renderBoard();
    showToast(t("hintCompleted", { time: formatTime(elapsedSeconds) }));
  } else {
    showToast(t("hintSuccess"));
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function showToast(message) {
  toastElement.textContent = message;
  toastElement.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toastElement.classList.remove("visible"), 3000);
}

function startGame(level = activeLevel) {
  activeLevel = level;
  const generated = makePuzzle(level);
  puzzle = generated.grid;
  solution = generated.answer;
  values = [...puzzle];
  notes = Array.from({ length: 81 }, () => new Set());
  selectedCell = null;
  mistakes = 0;
  elapsedSeconds = 0;
  completed = false;
  notesMode = false;
  notesButton.setAttribute("aria-pressed", "false");
  notesButton.classList.remove("active");
  mistakesElement.textContent = "0";
  timerElement.textContent = "00:00";
  statusElement.textContent = t("statusPlaying");
  updateDifficultyButtons();
  renderBoard();
}

boardElement.addEventListener("click", (event) => {
  const cell = event.target.closest(".cell");
  if (cell) selectCell(Number(cell.dataset.index));
});

numberPad.addEventListener("click", (event) => {
  const button = event.target.closest("[data-number]");
  if (button) enterDigit(Number(button.dataset.number));
});

document.querySelector("#difficulty-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-level]");
  if (button) startGame(button.dataset.level);
});

document.querySelector("#new-game-button").addEventListener("click", () => {
  startGame();
  showToast(t("newGameToast", { level: t(LEVELS[activeLevel].name) }));
});
document.querySelector("#erase-button").addEventListener("click", eraseSelected);
document.querySelector("#check-button").addEventListener("click", checkBoard);
document.querySelector("#hint-button").addEventListener("click", hint);
document.querySelector("#notes-button").addEventListener("click", () => {
  notesMode = !notesMode;
  notesButton.setAttribute("aria-pressed", String(notesMode));
  notesButton.classList.toggle("active", notesMode);
  saveGame();
  showToast(t(notesMode ? "notesOn" : "notesOff"));
});
document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    applyLanguage();
  });
});
document.querySelector("#help-button").addEventListener("click", () => dialogElement.showModal());
themeButton.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme();
  saveGame();
});
document.querySelector("#close-help").addEventListener("click", () => dialogElement.close());
document.querySelector("#got-it-button").addEventListener("click", () => dialogElement.close());

document.addEventListener("keydown", (event) => {
  if (dialogElement.open) return;
  if (/^[1-9]$/.test(event.key)) {
    enterDigit(Number(event.key));
    return;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    eraseSelected();
    return;
  }
  if (event.key.toLowerCase() === "n") {
    notesButton.click();
    return;
  }
  if (event.key.toLowerCase() === "h") {
    hint();
    return;
  }
  if (selectedCell === null || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
  event.preventDefault();
  const row = Math.floor(selectedCell / 9);
  const column = selectedCell % 9;
  if (event.key === "ArrowUp") selectCell(((row + 8) % 9) * 9 + column);
  if (event.key === "ArrowDown") selectCell(((row + 1) % 9) * 9 + column);
  if (event.key === "ArrowLeft") selectCell(row * 9 + (column + 8) % 9);
  if (event.key === "ArrowRight") selectCell(row * 9 + (column + 1) % 9);
});

setInterval(() => {
  if (puzzle.length && !completed) {
    elapsedSeconds += 1;
    timerElement.textContent = formatTime(elapsedSeconds);
    saveGame();
  }
}, 1000);

if (restoreGame()) applyLanguage();
else {
  startGame();
  applyLanguage();
}
