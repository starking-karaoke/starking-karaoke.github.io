import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Calendar, MapPin, Users, CheckCircle } from "lucide-react";
const Booking = () => {
  const [step, setStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    guests: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const sendVerificationCode = () => {
    if (!formData.phone) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number to continue.",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending verification code
    toast({
      title: "Verification code sent! 📱",
      description: `We've sent a 6-digit code to ${formData.phone}`
    });
    setStep(2);
  };
  const verifyPhone = () => {
    if (verificationCode.length !== 6) {
      toast({
        title: "Invalid code",
        description: "Please enter the 6-digit verification code.",
        variant: "destructive"
      });
      return;
    }

    // Simulate verification (in real app, this would verify against sent code)
    if (verificationCode === "123456") {
      setIsVerified(true);
      setStep(3);
      toast({
        title: "Phone verified!  ✅",
        description: "Your phone number has been successfully verified."
      });
    } else {
      toast({
        title: "Incorrect code",
        description: "Please check the code and try again.",
        variant: "destructive"
      });
    }
  };
  const submitBooking = () => {
    // Validate required fields
    const requiredFields = ['name', 'email', 'eventType', 'eventDate', 'location'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking request sent! 🎉",
      description: "We'll contact you within 24 hours to confirm your event details."
    });

    // Reset form
    setStep(1);
    setIsVerified(false);
    setVerificationCode("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventTime: "",
      location: "",
      guests: "",
      message: ""
    });
  };
  return;
};
export default Booking;