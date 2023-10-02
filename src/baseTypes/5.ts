/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = "cat";
union = 5;

type EnableOrDisable = "enable" | "disable";
let literal: EnableOrDisable;
literal = "enable";
literal = "disable";
