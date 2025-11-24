-- Create skydivers table to store basic skydiver information
CREATE TABLE public.skydivers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text NOT NULL,
  full_name text NOT NULL,
  email text,
  weight numeric,
  date_of_birth date,
  emergency_contact_name text,
  emergency_contact_phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table to sync with CRM
CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text NOT NULL,
  order_date timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  crm_order_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create waiver_submissions table for storing waiver and medical questionnaire data
CREATE TABLE public.waiver_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  skydiver_id uuid REFERENCES public.skydivers(id) ON DELETE CASCADE NOT NULL,
  order_id uuid REFERENCES public.orders(id) ON DELETE CASCADE,
  waiver_signature text NOT NULL,
  weight_confirmed numeric NOT NULL,
  weight_confirmed_at timestamptz DEFAULT now(),
  medical_questions jsonb NOT NULL DEFAULT '[]',
  medical_signature text NOT NULL,
  requires_medical_review boolean DEFAULT false,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create medical_notes table for staff to add medical notes
CREATE TABLE public.medical_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  waiver_submission_id uuid REFERENCES public.waiver_submissions(id) ON DELETE CASCADE NOT NULL,
  staff_notes text NOT NULL,
  customer_signature text,
  customer_signed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.skydivers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.waiver_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_notes ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow public access for now (we'll refine this based on your authentication needs)
CREATE POLICY "Allow public read access to skydivers" ON public.skydivers FOR SELECT USING (true);
CREATE POLICY "Allow public insert to skydivers" ON public.skydivers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to skydivers" ON public.skydivers FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Allow public insert to orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to orders" ON public.orders FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to waiver_submissions" ON public.waiver_submissions FOR SELECT USING (true);
CREATE POLICY "Allow public insert to waiver_submissions" ON public.waiver_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to waiver_submissions" ON public.waiver_submissions FOR UPDATE USING (true);

CREATE POLICY "Allow public read access to medical_notes" ON public.medical_notes FOR SELECT USING (true);
CREATE POLICY "Allow public insert to medical_notes" ON public.medical_notes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to medical_notes" ON public.medical_notes FOR UPDATE USING (true);

-- Create indexes for better performance
CREATE INDEX idx_skydivers_phone ON public.skydivers(phone_number);
CREATE INDEX idx_orders_phone ON public.orders(phone_number);
CREATE INDEX idx_waiver_submissions_skydiver ON public.waiver_submissions(skydiver_id);
CREATE INDEX idx_medical_notes_waiver ON public.medical_notes(waiver_submission_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_skydivers_updated_at BEFORE UPDATE ON public.skydivers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_waiver_submissions_updated_at BEFORE UPDATE ON public.waiver_submissions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_medical_notes_updated_at BEFORE UPDATE ON public.medical_notes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();