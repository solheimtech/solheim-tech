/**
 * The following code declares a module for 'maath/random/dist/maath-random.esm'.
 * It exports two functions: inSphere and ensureNoNaN.
 * The ensureNoNaN function has been removed as it is causing a TypeError.
 */

// Start of Selection
declare module 'maath/random/dist/maath-random.esm' {
    export function inSphere(array: Float32Array, options: { radius: number, position?: [number, number, number] }): Float32Array;
}
