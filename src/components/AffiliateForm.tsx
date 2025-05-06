import React from 'react';
import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useForm } from 'react-hook-form';
import { Affiliate } from '../types/affiliate';
import { useAffiliates } from '../context/AffiliateContext';

interface AffiliateFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingAffiliate: Affiliate | null;
}

const AffiliateForm = ({
  isOpen,
  onClose,
  editingAffiliate,
}: AffiliateFormProps) => {
  const { addAffiliate, updateAffiliate } = useAffiliates();
  const isEditing = !!editingAffiliate;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<Omit<Affiliate, 'id'>>({
    defaultValues: editingAffiliate
      ? {
          name: editingAffiliate.name,
          company: editingAffiliate.company,
          website: editingAffiliate.website,
          affiliateLink: editingAffiliate.affiliateLink,
          dueDate: editingAffiliate.dueDate,
        }
      : {
          name: '',
          company: '',
          website: '',
          affiliateLink: '',
          dueDate: '',
        },
  });

  const onSubmit = (data: Omit<Affiliate, 'id'>) => {
    if (isEditing && editingAffiliate) {
      updateAffiliate({
        ...data,
        id: editingAffiliate.id,
      });
    } else {
      addAffiliate(data);
    }
    handleClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  React.useEffect(() => {
    if (isOpen && editingAffiliate) {
      reset({
        name: editingAffiliate.name,
        company: editingAffiliate.company,
        website: editingAffiliate.website,
        affiliateLink: editingAffiliate.affiliateLink,
        dueDate: editingAffiliate.dueDate,
      });
    } else {
      reset({
        name: '',
        company: '',
        website: '',
        affiliateLink: '',
        dueDate: '',
      });
    }
  }, [isOpen, editingAffiliate, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6" aria-describedby="affiliate-form-description">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Affiliate' : 'Add New Affiliate'}</DialogTitle>
        </DialogHeader>
        <p id="affiliate-form-description" className="sr-only">
          Fill out the form to add or edit an affiliate link.
        </p>
        <DialogDescription>
          Fill out the form to add or edit an affiliate link.
        </DialogDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name of Affiliate</Label>
            <Input
              id="name"
              {...register('name', { required: 'Name of Affiliate is required' })}
              placeholder="Affiliate Program"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              {...register('company', { required: 'Company is required' })}
              placeholder="Amazon"
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              {...register('website', {
                required: 'Website URL is required',
                pattern: {
                  value: /^https?:\/\/\S+/,
                  message: 'Must be a valid URL (start with http:// or https://)',
                },
              })}
              placeholder="https://example.com"
            />
            {errors.website && (
              <p className="text-sm text-destructive">{errors.website.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="affiliateLink">Affiliate Link</Label>
            <Input
              id="affiliateLink"
              {...register('affiliateLink', {
                required: 'Affiliate link is required',
                pattern: {
                  value: /^https?:\/\/\S+/,
                  message: 'Must be a valid URL (start with http:// or https://)',
                },
              })}
              placeholder="https://example.com/ref=yourcode"
            />
            {errors.affiliateLink && (
              <p className="text-sm text-destructive">
                {errors.affiliateLink.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              {...register('dueDate', { required: 'Due date is required' })}
            />
            {errors.dueDate && (
              <p className="text-sm text-destructive">{errors.dueDate.message}</p>
            )}
          </div>
          <DialogFooter className="pt-4">
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">{isEditing ? 'Update' : 'Add'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AffiliateForm;