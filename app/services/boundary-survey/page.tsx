import type { Metadata } from "next"
import { ServiceDetailPage } from "@/components/service-detail-page"
import { servicesBySlug } from "@/lib/services"

const service = servicesBySlug["boundary-survey"]

export const metadata: Metadata = {
  title: `${service.title} Service`,
  description: service.shortDescription,
}

export default function Page() {
  return <ServiceDetailPage service={service} />
}

