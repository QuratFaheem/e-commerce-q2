
import { createClient, type ClientConfig } from "next-sanity";

const SanityClient:ClientConfig={
    projectId: "z17jp108",
    dataset: "production",
    apiVersion:"2025-01-09",
    useCdn: false
}

export default createClient(SanityClient);
