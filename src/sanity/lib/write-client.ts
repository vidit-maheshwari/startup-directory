import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, 
  token
})


if(!writeClient) {
  throw new Error('Failed to create write client')
}