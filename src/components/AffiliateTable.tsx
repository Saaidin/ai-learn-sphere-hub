import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Edit, Trash2, Link as LinkIcon, Search } from 'lucide-react';
import { Affiliate } from '../types/affiliate';
import { useAffiliates } from '../context/AffiliateContext';
import { toast } from 'sonner';

interface AffiliateTableProps {
  onEditAffiliate: (affiliate: Affiliate) => void;
}

const AffiliateTable = ({ onEditAffiliate }: AffiliateTableProps) => {
  const { affiliates, deleteAffiliate, searchAffiliates } = useAffiliates();
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const filteredAffiliates = searchAffiliates(searchQuery);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Link copied to clipboard');
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 300);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search affiliates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 max-w-md"
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name of Affiliate</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="hidden md:table-cell">Website</TableHead>
              <TableHead>Affiliate Link</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAffiliates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No affiliates found.
                </TableCell>
              </TableRow>
            ) : (
              filteredAffiliates.map((affiliate) => (
                <TableRow key={affiliate.id}>
                  <TableCell className="font-medium">{affiliate.name}</TableCell>
                  <TableCell>{affiliate.company}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <a
                      href={affiliate.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {affiliate.website}
                    </a>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="max-w-[200px] truncate">{affiliate.affiliateLink}</div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(affiliate.affiliateLink, affiliate.id)}
                      >
                        <LinkIcon className={`h-4 w-4 transition-transform duration-300 ${copiedId === affiliate.id ? 'scale-125 text-green-500' : ''}`} />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(affiliate.dueDate).toLocaleDateString('en-GB')}
                    {new Date(affiliate.dueDate) < new Date() && (
                      <span className="text-red-500 ml-2">Expired</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEditAffiliate(affiliate)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteAffiliate(affiliate.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="text-sm text-muted-foreground">
        Total affiliates: {filteredAffiliates.length}
      </div>
    </div>
  );
};

export default AffiliateTable;