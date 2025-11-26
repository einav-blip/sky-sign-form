/**
 * API Service Layer - Abstract interface for data operations
 * 
 * TO INTEGRATE WITH YOUR CRM WEBSERVICE:
 * 1. Replace the Supabase implementation below with your webservice calls
 * 2. Keep the same function signatures and return types
 * 3. The rest of the application will work without changes
 */

import { supabase } from "@/integrations/supabase/client";

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Skydiver {
  id: string;
  full_name: string;
  phone_number: string;
  email: string | null;
  id_number: string | null;
  date_of_birth: string | null;
  weight: number | null;
  emergency_contact_name: string | null;
  emergency_contact_phone: string | null;
}

export interface MedicalQuestion {
  id: string;
  question: string;
  answer: "yes" | "no" | "";
  details: string;
  date: string;
}

export interface WaiverSubmission {
  id: string;
  skydiver_id: string;
  waiver_signature: string;
  medical_signature: string;
  medical_questions: MedicalQuestion[];
  weight_confirmed: number;
  requires_medical_review: boolean;
  status: string;
  created_at: string;
  order_id?: string | null;
}

export interface MedicalNotes {
  id: string;
  waiver_submission_id: string;
  staff_notes: string;
  customer_signature: string | null;
  customer_signed_at: string | null;
}

// ============================================
// API IMPLEMENTATION
// Replace this section with your webservice calls
// ============================================

/**
 * Get skydivers by phone number
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/skydivers?phone=${phoneNumber}`).then(r => r.json());
 */
export async function getSkydiversByPhone(phoneNumber: string): Promise<Skydiver[]> {
  const { data, error } = await supabase
    .from("skydivers")
    .select("*")
    .eq("phone_number", phoneNumber);

  if (error) throw error;
  return data || [];
}

/**
 * Get skydiver by ID
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/skydivers/${id}`).then(r => r.json());
 */
export async function getSkydiverById(id: string): Promise<Skydiver | null> {
  const { data, error } = await supabase
    .from("skydivers")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

/**
 * Update skydiver details
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/skydivers/${id}`, {
 *   method: 'PUT',
 *   body: JSON.stringify(updates)
 * }).then(r => r.json());
 */
export async function updateSkydiver(id: string, updates: Partial<Skydiver>): Promise<Skydiver | null> {
  const { data, error } = await supabase
    .from("skydivers")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Create waiver submission
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/waiver-submissions`, {
 *   method: 'POST',
 *   body: JSON.stringify(submission)
 * }).then(r => r.json());
 */
export async function createWaiverSubmission(submission: {
  skydiver_id: string;
  waiver_signature: string;
  medical_signature: string;
  medical_questions: MedicalQuestion[];
  weight_confirmed: number;
  requires_medical_review: boolean;
  status: string;
  order_id?: string;
}): Promise<WaiverSubmission | null> {
  const { data, error } = await supabase
    .from("waiver_submissions")
    .insert([submission as any])
    .select()
    .single();

  if (error) throw error;
  if (!data) return null;
  return {
    ...data,
    medical_questions: (data.medical_questions as unknown) as MedicalQuestion[]
  } as WaiverSubmission;
}

/**
 * Get latest waiver submission for skydiver
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/waiver-submissions?skydiver_id=${skydiverId}&latest=true`).then(r => r.json());
 */
export async function getLatestWaiverSubmission(skydiverId: string): Promise<WaiverSubmission | null> {
  const { data, error } = await supabase
    .from("waiver_submissions")
    .select("*")
    .eq("skydiver_id", skydiverId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return {
    ...data,
    medical_questions: (data.medical_questions as unknown) as MedicalQuestion[]
  } as WaiverSubmission;
}

/**
 * Get waiver submission with skydiver details
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/waiver-submissions/${id}?include=skydiver`).then(r => r.json());
 */
export async function getWaiverSubmissionWithSkydiver(id: string): Promise<(WaiverSubmission & { skydiver: Skydiver }) | null> {
  const { data, error } = await supabase
    .from("waiver_submissions")
    .select(`
      *,
      skydiver:skydivers(*)
    `)
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  
  if (!data) return null;
  
  return {
    ...data,
    skydiver: data.skydiver as Skydiver,
    medical_questions: (data.medical_questions as unknown) as MedicalQuestion[]
  } as WaiverSubmission & { skydiver: Skydiver };
}

/**
 * Update waiver submission status
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/waiver-submissions/${id}`, {
 *   method: 'PATCH',
 *   body: JSON.stringify({ status })
 * }).then(r => r.json());
 */
export async function updateWaiverSubmissionStatus(id: string, status: string): Promise<void> {
  const { error } = await supabase
    .from("waiver_submissions")
    .update({ status })
    .eq("id", id);

  if (error) throw error;
}

/**
 * Get pending medical review submission
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/waiver-submissions?skydiver_id=${skydiverId}&requires_medical_review=true&latest=true`).then(r => r.json());
 */
export async function getPendingMedicalReviewSubmission(skydiverId: string): Promise<WaiverSubmission | null> {
  const { data, error } = await supabase
    .from("waiver_submissions")
    .select("*")
    .eq("skydiver_id", skydiverId)
    .eq("requires_medical_review", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;
  return {
    ...data,
    medical_questions: (data.medical_questions as unknown) as MedicalQuestion[]
  } as WaiverSubmission;
}

// ============================================
// MEDICAL NOTES OPERATIONS
// ============================================

/**
 * Get medical notes by waiver submission ID
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/medical-notes?waiver_submission_id=${submissionId}`).then(r => r.json());
 */
export async function getMedicalNotes(submissionId: string): Promise<MedicalNotes | null> {
  const { data, error } = await supabase
    .from("medical_notes")
    .select("*")
    .eq("waiver_submission_id", submissionId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

/**
 * Create medical notes
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/medical-notes`, {
 *   method: 'POST',
 *   body: JSON.stringify(notes)
 * }).then(r => r.json());
 */
export async function createMedicalNotes(notes: {
  waiver_submission_id: string;
  staff_notes: string;
}): Promise<MedicalNotes | null> {
  const { data, error } = await supabase
    .from("medical_notes")
    .insert([notes])
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Update medical notes (staff notes)
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/medical-notes/${submissionId}`, {
 *   method: 'PATCH',
 *   body: JSON.stringify({ staff_notes })
 * }).then(r => r.json());
 */
export async function updateMedicalNotesStaff(submissionId: string, staffNotes: string): Promise<void> {
  const { error } = await supabase
    .from("medical_notes")
    .update({ staff_notes: staffNotes })
    .eq("waiver_submission_id", submissionId);

  if (error) throw error;
}

/**
 * Sign medical notes (customer signature)
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/medical-notes/${id}/sign`, {
 *   method: 'POST',
 *   body: JSON.stringify({ signature })
 * }).then(r => r.json());
 */
export async function signMedicalNotes(id: string, signature: string): Promise<void> {
  const { error } = await supabase
    .from("medical_notes")
    .update({
      customer_signature: signature,
      customer_signed_at: new Date().toISOString()
    })
    .eq("id", id);

  if (error) throw error;
}

/**
 * Check if there are pending medical notes awaiting customer signature
 * 
 * WEBSERVICE REPLACEMENT:
 * return await fetch(`${YOUR_CRM_URL}/medical-notes/pending?skydiver_id=${skydiverId}`).then(r => r.json());
 */
export async function hasPendingMedicalNotes(skydiverId: string): Promise<{ hasPending: boolean; notes?: MedicalNotes }> {
  const submission = await getPendingMedicalReviewSubmission(skydiverId);
  if (!submission) return { hasPending: false };

  const notes = await getMedicalNotes(submission.id);
  if (!notes) return { hasPending: false };

  // Has notes but not yet signed by customer
  if (notes.customer_signature === null) {
    return { hasPending: true, notes };
  }

  return { hasPending: false };
}
