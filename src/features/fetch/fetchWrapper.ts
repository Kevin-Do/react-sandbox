// Define a generic type for the fetch options
interface FetchOptions<T> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: BodyInit | T;
}

// Create a type-safe and easy-to-use wrapper around fetch
async function fetchWrapper<T>(
  url: string,
  options?: FetchOptions<T>
): Promise<T> {
  // Set default options if not provided
  const requestOptions: FetchOptions<T> = {
    method: options?.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    body: options?.body ? JSON.stringify(options.body) : undefined,
  };

  // Perform the fetch request
  const response = await fetch(url, requestOptions as RequestInit);

  // Check if the response is ok
  if (!response.ok) {
    throw new Error(`Fetch request failed: ${response.statusText}`);
  }

  // Parse the response as JSON and return the result
  const data: T = await response.json();
  return data;
}

// Example usage:

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<Todo[]> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return fetchWrapper<Todo[]>(url);
}

async function createTodo(newTodo: Todo): Promise<Todo> {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return fetchWrapper<Todo>(url, {
    method: "POST",
    body: newTodo,
  });
}
