//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class units
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public units()
        {
            this.comments = new HashSet<comments>();
            this.history = new HashSet<history>();
            this.orders = new HashSet<orders>();
        }
    
        public int id { get; set; }
        public int id_renter { get; set; }
        public string city { get; set; }
        public string address { get; set; }
        public int mr { get; set; }
        public string main_img { get; set; }
        public string extra_img1 { get; set; }
        public string extra_img2 { get; set; }
        public string extra_img3 { get; set; }
        public string extra_img4 { get; set; }
        public string extra_img5 { get; set; }
        public string extra_img6 { get; set; }
        public string extra_img7 { get; set; }
        public int price { get; set; }
        public string remarks { get; set; }
    
        public virtual renter renter { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<comments> comments { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<history> history { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<orders> orders { get; set; }
    }
}