// Ready for the Extraction? 🎣
// Now that you know Utility Types are just "Pre-made Generics," let's use the ones that Extract types from code. This is super useful when using libraries where you don't have the source code.

// The Challenge: The Library Wrapper

// The "Library" Function (Copy this):

// TypeScript

// function saveWidget(config: { width: number, height: number, color: string }) {
//     return true;
// }
// The Extraction (Your Job):

// Create a type WidgetConfig. Use Parameters<typeof saveWidget> to get the input type. 
// (Note: Parameters gives you an array [...], so you need to access the first item using [0]).

// Create a type SaveResult. Use ReturnType<typeof saveWidget> to get the output type.

// The Wrapper:

// Write a function safeSave(args: WidgetConfig): SaveResult.

// It just calls saveWidget(args).

function saveWidget(config: { width: number, height: number, color: string }) {
    return true;
}

type WidgetConfig = Parameters<typeof saveWidget>

type SaveResult = ReturnType<typeof saveWidget>

function safeSave(args: WidgetConfig[0]): SaveResult {
    return true
}