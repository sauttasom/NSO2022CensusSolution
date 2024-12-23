using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EnumerationRegisterWebAPI.Models;

public partial class Agrc66Context : DbContext
{
    public Agrc66Context()
    {
    }

    public Agrc66Context(DbContextOptions<Agrc66Context> options)
        : base(options)
    {
    }

    public virtual DbSet<BankNameMaster> BankNameMasters { get; set; }

    public virtual DbSet<EducationLevel> EducationLevels { get; set; }

    public virtual DbSet<EnumerateRegister> EnumerateRegisters { get; set; }

    public virtual DbSet<MapUserControl> MapUserControls { get; set; }

    public virtual DbSet<Position> Positions { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Name=ConnectionStrings:Agrc66");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BankNameMaster>(entity =>
        {
            entity.HasKey(e => e.BanknameId).HasName("PK__BankName__4FFD6DDDE6ECD638");

            entity.ToTable("BankNameMaster");

            entity.Property(e => e.BanknameId).HasColumnName("banknameId");
            entity.Property(e => e.BankName)
                .HasMaxLength(500)
                .IsUnicode(false)
                .HasColumnName("bankName");
        });

        modelBuilder.Entity<EducationLevel>(entity =>
        {
            entity.HasKey(e => e.EducationId).HasName("PK__Educatio__4BBE38E5F1285B5D");

            entity.ToTable("EducationLevel");

            entity.Property(e => e.EducationId).HasColumnName("EducationID");
            entity.Property(e => e.EducationName)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<EnumerateRegister>(entity =>
        {
            entity.HasKey(e => e.EnumerateId).HasName("pkEnumerateID");

            entity.ToTable("EnumerateRegister");

            entity.HasIndex(e => e.Pid, "unique_ID_Card_Number").IsUnique();

            entity.HasIndex(e => e.UserName, "unique_UserName").IsUnique();

            entity.Property(e => e.EnumerateId).HasColumnName("EnumerateID");
            entity.Property(e => e.BankAccount)
                .HasMaxLength(15)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.BankAccountName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.BankAccountNo)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.BirthDate).HasColumnType("date");
            entity.Property(e => e.CreateDate).HasColumnType("datetime");
            entity.Property(e => e.DistrictId)
                .HasMaxLength(4)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.DistrictName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.EducationId).HasColumnName("EducationID");
            entity.Property(e => e.EducationName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.FullName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.LastName)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.LineId)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("LineID");
            entity.Property(e => e.ModifiedBy)
                .HasMaxLength(10)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.MunicipalityId)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.MunicipalityName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.OtherVolunteer)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PassWord)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Perfix)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.PhoneBrand)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNetWork)
                .HasMaxLength(255)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNetWorkid)
                .HasMaxLength(255)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.PhoneNummber)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.PhoneOs)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("PhoneOS");
            entity.Property(e => e.PhoneOsid)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("PhoneOSid");
            entity.Property(e => e.Pid)
                .HasMaxLength(13)
                .IsUnicode(false)
                .HasColumnName("PID");
            entity.Property(e => e.PositionId)
                .HasMaxLength(5)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.ProvinceId)
                .HasMaxLength(2)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.ProvinceName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.SubDistrictId)
                .HasMaxLength(6)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.SubDistrictName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.TypeMunicipalityId)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.TypeMunicipalityName)
                .HasMaxLength(500)
                .IsUnicode(false);
            entity.Property(e => e.UserName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.VillageId)
                .HasMaxLength(8)
                .IsUnicode(false)
                .IsFixedLength();
            entity.Property(e => e.VillageName)
                .HasMaxLength(500)
                .IsUnicode(false);

            entity.HasOne(d => d.Education).WithMany(p => p.EnumerateRegisters)
                .HasForeignKey(d => d.EducationId)
                .HasConstraintName("FK_Education");
        });

        modelBuilder.Entity<MapUserControl>(entity =>
        {
            entity.ToTable("MapUserControl");

            entity.Property(e => e.Amp)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.AmpN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Cwt)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.CwtN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Mun)
                .HasMaxLength(6)
                .IsUnicode(false);
            entity.Property(e => e.MunN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Reg)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.RegN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Tam)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.TamN)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Type)
                .HasMaxLength(1)
                .IsUnicode(false);
            entity.Property(e => e.TypeN).HasMaxLength(50);
            entity.Property(e => e.Vil)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.VilN)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithMany(p => p.MapUserControls)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("MapUserControl_Users_UserId_fk");
        });

        modelBuilder.Entity<Position>(entity =>
        {
            entity.ToTable("Position");

            entity.Property(e => e.PositionId).ValueGeneratedNever();
            entity.Property(e => e.PositionName).HasMaxLength(500);
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("Role");

            entity.Property(e => e.RoleId).ValueGeneratedNever();
            entity.Property(e => e.RoleName).HasMaxLength(500);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Username, "UQ__Users__536C85E4152FE862").IsUnique();

            entity.Property(e => e.UserId).ValueGeneratedNever();
            entity.Property(e => e.AhCode)
                .HasMaxLength(22)
                .IsUnicode(false)
                .HasColumnName("AH_CODE");
            entity.Property(e => e.AmpCode).HasMaxLength(2);
            entity.Property(e => e.AmpName).HasMaxLength(500);
            entity.Property(e => e.Area).HasMaxLength(1);
            entity.Property(e => e.AreaCode)
                .HasMaxLength(18)
                .IsUnicode(false)
                .HasColumnName("AREA_CODE");
            entity.Property(e => e.Assign).HasColumnName("assign");
            entity.Property(e => e.CreatedByName).HasMaxLength(500);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.CwtCode).HasMaxLength(2);
            entity.Property(e => e.CwtName).HasMaxLength(500);
            entity.Property(e => e.Email).HasMaxLength(500);
            entity.Property(e => e.IsTained).HasComment("{null or 0 =>  is not trained, 1 =>  is trained}");
            entity.Property(e => e.ModifiedByName).HasMaxLength(500);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.MunCode)
                .HasMaxLength(18)
                .IsUnicode(false);
            entity.Property(e => e.MunName).HasMaxLength(50);
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.OfficerId).HasMaxLength(11);
            entity.Property(e => e.Password).HasMaxLength(200);
            entity.Property(e => e.Phone).HasMaxLength(500);
            entity.Property(e => e.Pid)
                .HasMaxLength(50)
                .HasColumnName("PID");
            entity.Property(e => e.PositionName).HasMaxLength(500);
            entity.Property(e => e.Reg)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasColumnName("REG");
            entity.Property(e => e.Regn)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("REGN");
            entity.Property(e => e.RoleName).HasMaxLength(500);
            entity.Property(e => e.TamCode).HasMaxLength(2);
            entity.Property(e => e.TamName).HasMaxLength(500);
            entity.Property(e => e.TypeCode)
                .HasMaxLength(20)
                .HasColumnName("typeCode");
            entity.Property(e => e.TypeName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("type_name");
            entity.Property(e => e.Username).HasMaxLength(50);
            entity.Property(e => e.VilCode).HasMaxLength(2);
            entity.Property(e => e.VilName).HasMaxLength(500);
            entity.Property(e => e.Vilt)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasColumnName("VILT");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
