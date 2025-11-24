-- Fix search path for update_updated_at_column function
DROP FUNCTION IF EXISTS public.update_updated_at_column CASCADE;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Re-create triggers
CREATE TRIGGER update_skydivers_updated_at BEFORE UPDATE ON public.skydivers
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_waiver_submissions_updated_at BEFORE UPDATE ON public.waiver_submissions
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_medical_notes_updated_at BEFORE UPDATE ON public.medical_notes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();