export type ActionResponse<T = undefined> = { 
  success: boolean; 
  data?: T; 
  error?: string;
};

/**
 * Wraps a successful response for a Server Action.
 */
export function actionSuccess<T>(data?: T): ActionResponse<T> {
  return { success: true, data };
}

/**
 * Handles errors gracefully for Server Actions, returning a standardized response.
 * Parses unknown errors, standard Errors, and string messages.
 */
export function actionError(error: unknown): ActionResponse<never> {
  let message = "An unexpected error occurred.";
  
  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }
  
  return { success: false, error: message };
}
