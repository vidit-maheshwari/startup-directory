export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-15';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_WRITE_TOKEN'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  return v;
}

// console.log('Environment Variables:');
// console.log('apiVersion:', apiVersion);
// console.log('dataset:', dataset);
// console.log('projectId:', projectId);
// console.log('token:', token);