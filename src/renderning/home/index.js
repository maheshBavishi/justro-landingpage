import React from 'react'
import Herobanner from './herobanner'
import TrustedAnimation from './trustedAnimation'
import NeedsToWin from './needsToWin'
import LegalIntelligence from './legalIntelligence'
import AreaofLaw from './areaofLaw'
import Themselves from './themselves'
import LawyersAcross from './lawyersAcross'
import FaqSection from './faqSection'

export default function HomePage() {
    return (
        <div>
            <Herobanner />
            <TrustedAnimation />
            <NeedsToWin />
            <LegalIntelligence />
            <AreaofLaw />
            <Themselves />
            <LawyersAcross />
            <FaqSection />
        </div>
    )
}
