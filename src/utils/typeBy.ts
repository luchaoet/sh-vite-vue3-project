
enum Class2type {
  '[object Array]' = "array",
  '[object Boolean]' = "boolean",
  '[object Date]' = "date",
  '[object Error]' = "error",
  '[object Function]' = "function",
  '[object Number]' = "number",
  '[object Object]' = "object",
  '[object RegExp]' = "regexp",
  '[object String]' = "string"
}

export default function typeBy<T>(obj: T): string {
  return obj == null ? String(obj) : Class2type[toString.call(obj)] || 'object'
}