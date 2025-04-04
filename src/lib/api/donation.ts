import { getDonationsCollection, Donation } from '../models';

interface ApiResponse {
  status: number;
  data?: unknown;
  error?: string;
}

export async function getDonations(): Promise<ApiResponse> {
  try {
    const collection = await getDonationsCollection();
    const donations = await collection.find().sort({ createdAt: -1 }).toArray();
    return { status: 200, data: donations };
  } catch (error) {
    console.error('Failed to fetch donations:', error);
    return { status: 500, error: 'Failed to fetch donations' };
  }
}

export async function createDonation(donationData: Donation): Promise<ApiResponse> {
  try {
    const collection = await getDonationsCollection();
    const result = await collection.insertOne(donationData);
    return { status: 201, data: result };
  } catch (error) {
    console.error('Failed to create donation:', error);
    return { status: 500, error: 'Failed to create donation' };
  }
}

export async function getDonationById(id: string): Promise<ApiResponse> {
  try {
    const collection = await getDonationsCollection();
    const donation = await collection.findOne({ _id: id });
    
    if (!donation) {
      return { status: 404, error: 'Donation not found' };
    }
    
    return { status: 200, data: donation };
  } catch (error) {
    console.error('Failed to fetch donation:', error);
    return { status: 500, error: 'Failed to fetch donation' };
  }
}