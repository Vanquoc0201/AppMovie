import { Mail, Phone } from "lucide-react";

const ContactInfo = ({ email, soDt }: { email: string; soDt: string }) => (
  <div className="border-t border-gray-200 px-6 py-4">
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-gray-700">
        <Mail className="w-5 h-5 text-red-500" />
        <span className="text-sm">{email}</span>
      </div>
      <div className="flex items-center gap-3 text-gray-700">
        <Phone className="w-5 h-5 text-red-500" />
        <span className="text-sm">{soDt}</span>
      </div>
    </div>
  </div>
);

export default ContactInfo;
