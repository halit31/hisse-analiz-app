// lib/gemini.ts

import { Gemini } from 'gemini-1.5-flash';

// Initialize Gemini AI model
const gemini = new Gemini();

interface InvestmentRecommendation {
    recommendation: string;
    riskAssessment: string;
    targetPrice: number;
}

/**
 * Generate investment recommendations based on stock data.
 *
 * @param stockData - data of the stock to analyze
 * @returns InvestmentRecommendation
 */
async function generateInvestmentRecommendation(stockData: any): Promise<InvestmentRecommendation> {
    const result = await gemini.analyze(stockData);
    return {
        recommendation: result.recommendation,
        riskAssessment: result.riskAssessment,
        targetPrice: result.targetPrice,
    };
}

export default generateInvestmentRecommendation;
